// Importing necessary libraries
const brain = require('brain.js');

// Creating a simple neural network
const net = new brain.NeuralNetwork();

// Training data
const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

// Training the network
net.train(trainingData);

// Testing the network
const output1 = net.run([0, 0]); // Expected output: close to 0
const output2 = net.run([1, 1]); // Expected output: close to 0
const output3 = net.run([0, 1]); // Expected output: close to 1
const output4 = net.run([1, 0]); // Expected output: close to 1

console.log(`Output for [0, 0]: ${output1}`);
console.log(`Output for [1, 1]: ${output2}`);
console.log(`Output for [0, 1]: ${output3}`);
console.log(`Output for [1, 0]: ${output4}`);