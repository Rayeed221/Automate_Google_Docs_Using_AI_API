# RayeedAI: Google Docs Integration with OpenAI API

## Overview
RayeedAI is a Google Apps Script that integrates OpenAI's API into Google Docs, allowing users to interact with AI for various applications, such as content generation, summarization, and assistance within documents. This script enhances productivity by leveraging AI capabilities directly within the Google Docs environment. I will be showing you how you can also make a pesonalized Bot for youself or others.

## Features
- **Chat AI:** Interact with the AI to generate responses based on selected text within your Google Document.
- **Conversation History:** Maintains a history of interactions for context-aware responses.
- **Customizable:** Easily modify the model type and parameters to suit your needs.

## Requirements
- A Google account with access to Google Docs.
- An OpenAI API key. Obtain your API key from [OpenAI](https://openai.com/index/openai-api/) (a nominal fee may apply).
- Basic knowledge of JavaScript and Google Apps Script for customization.

## Setup Instructions

Follow these steps to set up RayeedAI and integrate OpenAI's API with Google Docs:

### 1. Get an OpenAI API Key
- Sign up at [OpenAI](https://openai.com/index/openai-api/) if you don't already have an account.
- After logging in, navigate to the API section and create a new API key.
- Save this API key for later use.

### 2. Open Google Docs and Launch Apps Script
- Open a new or existing Google Document.
- Go to the menu and click on `Extensions` -> `Apps Script` to open the Google Apps Script editor.

### 3. Add the Script
- In the Apps Script editor, delete any code that appears by default.
- Copy the code from the `AI_API_into_Google_Docs.js` file in this repository.
- Paste the copied code into the Apps Script editor.

### 4. Configure the API Key
- In the pasted code, locate the line:
  ```javascript
  const apiKey = "YOUR API KEY";  // Replace this placeholder
- Input your Open AI API key into "YOUR API KEY"
### 5. Enjoy using AI into your specific document
- Save the js file and run the file.
- Do not worry if it shows error into the code after running.
- Go to the document, refesh the site and you should be able to find the AI named anything you want.
