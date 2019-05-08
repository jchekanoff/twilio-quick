// Twilio Authentication
const accountSid = 'AC-publiclyvisable'; // Account Key from Twilio Dashboard
const authToken = 'AS-supersecret'; // Secret Key from Twilio Dashboard

const client = require('twilio')(accountSid, authToken);

var numbers = [
    // Phone Numbers Go Here
];

var message = "A message goes here."

numbers.forEach(number => {
    client.messages
        .create({from: '+15555555555', body: message, to: number}) // Phone # from Twilio Dashboard
        .then(message => console.log(message.sid)) // log message confirmation
        .catch(e => console.log(JSON.stringify(e))); // log any errors
});