var inputField;
var messageContainer;
var showMessageButton;

function init(){
  inputField = document.getElementById("user-input");
  messageContainer = document.getElementById("message");
  showMessageButton = document.getElementById("show-message");

  showMessageButton.onclick = showUserMessage();
}
