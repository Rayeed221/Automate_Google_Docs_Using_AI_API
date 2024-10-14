const apiKey = "YOUR API KEY";  // Make an API Key with 5 USD from here -> https://openai.com/index/openai-api/
const ModelType = "gpt-3.5-turbo"; // You can change the model type. Check here -> https://platform.openai.com/docs/models

// Making another button of options by which the API will work
function onOpen() {
  DocumentApp.getUi().createMenu("RayeedAI")
      .addItem("Chat AI", "call_the_func")
      .addToUi();
}

// Function to save the conversation history to the properties service
function saveConversationHistory(history) {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('conversationHistory', JSON.stringify(history));
}

// Function to load the conversation history from the properties service
function loadConversationHistory() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const history = scriptProperties.getProperty('conversationHistory');
  return history ? JSON.parse(history) : [];
}

function call_the_func() {

  // Load the conversation history from the properties service
  let conversationHistory = loadConversationHistory();

  // Activing the doc and Selecting the selectect element ans get the Text as a string
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  
  // body is the part where the response of the API has to be paste
  const body = doc.getBody();

  // Change promp according to your interest
  const prompt = "This are the conversation history " + conversationHistory + ". Now, only say about " + selectedText + "within 30 words";
  
  // Update the prompt directly to the conversation history
  conversationHistory.push({ role: "system", content: prompt });

  const temperature = 0.2; // Measure the Randomness of the response
  const maxTokens = 100;  // Maximum token will be use to generate response 

  // Make Resquest to the API
  const requestBody = {
    model: ModelType,
    messages: conversationHistory,
    temperature,
    max_tokens: maxTokens,
  };

  // Initializing request option
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    payload: JSON.stringify(requestBody),
  };
  
  // Getting response and convering it using JSON parse.
  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = "\n " + json['choices'][0]['message']['content']; // Fetching only the generated Text

  // Add the generated response to the conversation history as the role of assistant
  conversationHistory.push({ role: "assistant", content: generatedText });

  // Save the updated conversation history back to the properties service
  saveConversationHistory(conversationHistory);

  Logger.log(generatedText);
  body.appendParagraph(generatedText.toString());
}
