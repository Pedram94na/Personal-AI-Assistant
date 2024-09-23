from transformers import AutoModelForCausalLM, AutoTokenizer

from utils.env import getEnVariable

model_name = "microsoft/dialoGPT-small"
tokenizer = AutoTokenizer.from_pretrained(model_name, token=getEnVariable("HUGGINGFACE_TOKEN"))
model = AutoModelForCausalLM.from_pretrained(model_name, token=getEnVariable("HUGGINGFACE_TOKEN"))

def generateResponse(userMssg):
    """
        Generates a response based on user's message.

        :param userMssg: User's message.
        :returns: A generated response.
    """
    
    inputIds = tokenizer.encode(userMssg, return_tensors='pt')
    output = model.generate(inputIds, max_length=100, num_return_sequences=1)

    return tokenizer.decode(output[0], skip_special_tokens=True)