var inputField;
var messageContainer;
var showMessageButton;

function init(){
  inputField = document.getElementById("user-input");
  messageContainer = document.getElementById("message");
  showMessageButton = document.getElementById("show-message");

  showMessageButton.onclick = showUserMessage();
}

function showUserMessage(){
  var message = inputField.value;
  var containterContents = messageContainer.innerHTML;
  if(containterContents != ""){
    messageContainer.innerHTML = "";
  }
  if(message == ""){
    alert("Enter a message");
  }else{
    messageContainer.innerHTML = message;
  }
}
