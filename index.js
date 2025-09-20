const brain = require("brain.js");

// Create a neural network
const net = new brain.NeuralNetwork();

// Training data: [isClean, isBottle, isBag]
// Output: [1] = Reuse, [0] = Waste
const trainingData = [
  { input: [1, 1, 0], output: [1] }, // Clean bottle: reuse
  { input: [1, 0, 1], output: [1] }, // Clean bag: reuse
  { input: [0, 1, 0], output: [0] }, // Dirty bottle: waste
  { input: [0, 0, 1], output: [0] }, // Dirty bag: waste
  { input: [1, 0, 0], output: [0] }, // Clean, not bottle/bag: waste
];

// Train the network
net.train(trainingData);

// Test predictions
const test1 = net.run([1, 1, 0]); // Clean bottle
const test2 = net.run([0, 1, 0]); // Dirty bottle
const test3 = net.run([1, 0, 1]); // Clean bag
const test4 = net.run([0, 0, 1]); // Dirty bag

console.log(`Clean bottle: ${test1 > 0.5 ? "Reuse" : "Waste"}`);
console.log(`Dirty bottle: ${test2 > 0.5 ? "Reuse" : "Waste"}`);
console.log(`Clean bag: ${test3 > 0.5 ? "Reuse" : "Waste"}`);
console.log(`Dirty bag: ${test4 > 0.5 ? "Reuse" : "Waste"}`);
