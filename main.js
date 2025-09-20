// Import TensorFlow.js (in Node, run: npm install @tensorflow/tfjs)
const tf = require('@tensorflow/tfjs');

// Training data: x values and corresponding y values (y = 2x + 1)
const xs = tf.tensor1d([0, 1, 2, 3, 4]);
const ys = tf.tensor1d([1, 3, 5, 7, 9]);

// Build a simple sequential model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Compile the model with optimizer and loss function
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// Train the model
async function trainModel() {
  await model.fit(xs, ys, {epochs: 250});
  // Predict values for new data
  const output = model.predict(tf.tensor1d([5, 6, 7])).arraySync();
  console.log('Predictions for x = 5, 6, 7:', output);
}

trainModel();