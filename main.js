// Import the package
const WebhookManager = require("webhook-manager");
 
// Create a new instance of the Webhook-Manager with a specific port to listen on
const manager = new WebhookManager(4848);
 
// Just a listener for the "ready"-event
// It get's fired, when the manager is setup properly
manager.on("ready", () => {
    console.log(`WebhookManager started on port :${manager.PORT}`);
});
 
// Register a new Webhook-Listener
// It listens for everything, that goes directly to 'http://YOUR_SERVER:PORT/webhook
// The callback gets fired, when a webhook is received
//      'data' is the request, received by the listener
manager.on("/webhook", data => {
    // console.log("-----------------------------------------------------------------------")
    // console.log("Received webhook with following data:", data);
    console.log("-----------------------------------------------------------------------")
    console.log(data.body.event.activity)
    console.log("-----------------------------------------------------------------------")
});