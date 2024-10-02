# Personal-AI-Assistant
A small application where I integrated a LLM into the application by fine-tuning it. My goal was to learn LLM fine-tuning with Python and React for frontend development.

# How To Start The Program

Before anything, you'll need to generate a DialoGPT API for yourself and put that API in an .env file with key 'HUGGINGFACE_TOKEN'

```bash
https://huggingface.co/
```

Then you'll need to run the backend and the frontend separately

cd .\frontend\

npm start

---------------------
cd .\backend\

py app.py

# Frontend Package Requirements

cd .\frontend\ 

```bash
npm install react-router-dom styled-components axios formik eslint prettier eslint-plugin-react eslint-config-prettier react-icons
```

# Backend Package Requirements

cd .\backend\

```bash
pip install transformers torch flask pandas requests python-dotenv flask-cors
```
