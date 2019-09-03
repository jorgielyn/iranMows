// Create a client instance
var client = new Paho.Client("broker.hivemq.com", 8000, "clientId");
var buttonConnect = document.getElementById('button-Connect');
var buttonPublish = document.getElementById('buttonPublish');
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Connected Successfully!");
  client.subscribe("World");
  message = new Paho.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

buttonConnect.addEventListener('click',function(e){
  e.preventDefault();
  console.log('connectButton..');
  client.connect({onSuccess:onConnect});
})

buttonPublish.addEventListener('click',function(e){
  e.preventDefault();
  console.log('publishButton')
})