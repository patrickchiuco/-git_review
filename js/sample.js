var inputField;
var messageContainer;
var messageBody;
var showMessageButton;

function init(){
  inputField = document.getElementById("user-input");
  messageContainer = document.getElementById("message-container");
  messageBody = document.getElementById("message");
  showMessageButton = document.getElementById("show-message");

  showMessageButton.onclick = showUserMessage;
}

function showUserMessage(){
  var userMessage = inputField.value;
  var containerContents = messageContainer.innerHTML;
  if(containerContents != ""){
    messageBody.innerHTML = "";
  }
  if(userMessage == ""){
    alert("Enter a message");
  }else{
    messageContainer.className = "alert-success alert alert-dismissable";
    messageBody.innerHTML = userMessage;
  }
}
