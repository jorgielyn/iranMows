// basic functionalities
var client;

var btnConnect = document.getElementById('btn-connect')
var btnPublish = document.getElementById("publish-btn")


// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo")




// client.publish("mqtt/demo", "hello world!")
btnConnect.addEventListener('click', function (e) {
e.preventDefault();
console.log("connect button clicked..")
client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")

client.subscribe("mqtt/demo")

client.on("connect", function () {
console.log("Successfully connected");
})
})
btnPublish.addEventListener('click', function (e) {
e.preventDefault();
console.log("publish button clicked..")
client.publish("mqtt/demo","hi I'm Renzy good Morning")
client.on("message", function (topic, payload) {
console.log([topic, payload].join(": "));
// client.end();

})
client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")

})

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
// if (err){
// console.log(err);
// } else {
// console.log("subscribed")
// }
// })

// client.on("connect", function(){
// console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
// console.log([topic, payload].join(": "));
// client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
// if (err){
// console.log(err)
// } else {
// console.log("published")
// }
// })