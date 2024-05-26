
const mqttBrokerUrl = 'ws://broker.emqx.io';
const clientId = 'passwordClient';
const topic = '/tuitenthai/conmeo/data';
const submitButton = document.querySelector('button');

function submitPassword() {
    var password = document.getElementById('passwordInput').value;

    
// Create an MQTT client instance
const client = new Paho.MQTT.Client(mqttBrokerUrl, clientId);



// Connect to the MQTT broker
client.onConnectionLost = () => {
    console.error('Connection lost to MQTT broker');
};

client.connect({
    onSuccess: () => {
        console.log('Connected to MQTT broker');

        // Publish the password to the topic
        client.publish(topic, password);
        console.log('Password published to topic:', topic);

        // Disconnect from the broker after publishing
        client.disconnect();
    },
    onFailure: (error) => {
        console.error('Failed to connect to MQTT broker:', error);
    }
});
}


