var inputField;
var messageContainer;
var showMessageButton;

function init(){
  inputField = document.getElementById("user-input");
  messageContainer = document.getElementById("message");
  showMessageButton = document.getElementById("show-message");

  showMessageButton.onclick = showUserMessage;
}

function showUserMessage(){
  var userMessage = inputField.value;
  var containerContents = messageContainer.innerHTML;
  if(containerContents != ""){
    messageContainer.innerHTML = "";
  }
  if(message == ""){
    alert("Enter a message");
  }else{
    messageContainer.innerHTML = userMessage;
  }
}
