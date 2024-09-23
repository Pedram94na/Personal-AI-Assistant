from transformers import AutoModelForCausalLM, AutoTokenizer, AdamW, get_linear_schedule_with_warmup

import torch

from utils.env import getEnVariable, pathExists

saveDir = "./trainedModel"

modelName = "microsoft/dialoGPT-small" #"microsoft/dialoGPT-large"
tokenizer = AutoTokenizer.from_pretrained(modelName, token=getEnVariable("HUGGINGFACE_TOKEN"))

model = (
    AutoModelForCausalLM.from_pretrained(saveDir)
    if pathExists(saveDir)

    else AutoModelForCausalLM.from_pretrained(
        modelName, token=getEnVariable("HUGGINGFACE_TOKEN")
    )
)


def generateResponse(userMssg):
    """
        Generates a response based on user's message.

        :param userMssg: User's message.
        :returns: A generated response.
    """
    
    inputIds = tokenizer.encode(userMssg, return_tensors='pt')
    output = model.generate(inputIds, max_length=100, num_return_sequences=1)

    return tokenizer.decode(output[0], skip_special_tokens=True)

def train(file, epochs=5):
    """
        Trains the model with the data from the provided text file.

        :param file: The text file containing training data.
        :param epochs: The number of training epochs.
    """
    # Read file content
    text_data = file.read().decode('utf-8')  # Ensure the file content is in string format

    # Set pad token if not already set
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # Tokenize the text data
    inputs = tokenizer(text_data, return_tensors="pt", truncation=True, padding=True)

    # Define the model to be in training mode
    model.train()

    # Define optimizer and learning rate scheduler
    optimizer = AdamW(model.parameters(), lr=5e-5)
    num_training_steps = epochs
    scheduler = get_linear_schedule_with_warmup(
        optimizer,
        num_warmup_steps=0,  # You can adjust this if you want to have warmup steps
        num_training_steps=num_training_steps
    )

    for epoch in range(epochs):
        print(f"Epoch {epoch + 1}/{epochs}")

        # Forward pass to compute loss
        outputs = model(**inputs, labels=inputs["input_ids"])
        loss = outputs.loss

        print(f"Training Loss before backward: {loss.item()}")

        # Backpropagate and update model weights
        optimizer.zero_grad()  # Clear previous gradients
        loss.backward()  # Backpropagate the loss

        # Implement gradient clipping
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

        optimizer.step()  # Update model weights
        scheduler.step()  # Update the learning rate

        print(f"Training Loss after backward: {loss.item()}")

    model.eval()  # Set the model to evaluation mode after training

    model.save_pretrained(saveDir)
    tokenizer.save_pretrained(saveDir)