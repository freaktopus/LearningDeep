# Unit 4: Learning Paradigm for Computer Vision

**Duration:** 8 hours

**Lecture schedule:**

- 18 Mar: Neural Networks
- 10 Apr: Convolutional Neural Networks

This unit covers how models learn features from data.

## Machine Learning

This section covers the classical supervised and unsupervised methods.

### Supervised Learning

Supervised learning uses data with known labels.

- **Regression:** predicts a continuous value.
- **Classification:** predicts a category.

### Unsupervised Learning

Unsupervised learning uses data without labels.

- **Clustering:** groups similar samples, such as k-means.
- **Dimensionality reduction:** makes data easier to handle, such as PCA.

### Overfitting and Generalisation

A model overfits when it memorises the training data.

Use a validation set, cross validation, and regularisation to control it.

### Evaluation Metrics

- Classification accuracy, precision, recall, and the F1 score.
- Mean average precision for detection tasks.
- Intersection over union (IoU) for segmentation tasks.

## Neural Networks

This section covers multi-layer models of connected units.

### The Perceptron

A perceptron computes a weighted sum and applies a step function.

### Activation Functions

An activation function adds non-linearity.

- **Sigmoid:** outputs a value from 0 to 1.
- **ReLU:** outputs `max(0, x)`. It is the most common function.
- **Tanh:** outputs a value from -1 to 1.
- **Softmax:** gives a probability for each class.

### Forward and Backward Pass

The forward pass computes the output. The backward pass computes the gradients.

Gradient descent then updates the weights.

### Optimization

- **Gradient descent** uses the full gradient.
- **Stochastic gradient descent (SGD)** uses a minibatch.
- **Momentum** smooths the update direction.
- **Adam** adapts the step size per parameter.

### Overfitting Control

Dropout, weight decay, and data augmentation reduce overfitting.

## Convolutional Neural Networks and Other Network Architectures

This section covers networks that use spatial structure.

### Why Convolutions

Convolutions use shared weights. This cuts the parameter count.

### CNN Layers

- **Convolution layer:** computes feature maps.
- **Pooling layer:** cuts the spatial size.
- **Fully connected layer:** gives class scores.

### Famous Architectures

- **LeNet-5:** an early CNN for digits.
- **AlexNet:** won ImageNet in 2012.
- **VGG-16:** uses small 3x3 kernels.
- **GoogLeNet:** uses inception modules.
- **ResNet:** uses skip connections. It solves the vanishing gradient problem.

### Skip Connections

A skip connection adds the input of a layer to its output.

Residual learning makes very deep networks easy to train.

## Transfer Learning

This section covers reusing trained weights on a new task.

### Why Transfer Learning

Large models need much data. Small datasets cannot train them from zero.

### Feature Extraction

Freeze the early layers and train only the last layers.

Use the model as a fixed feature extractor on new data.

### Fine-Tuning

Unfreeze some layers and train them with a low learning rate.

Fine-tune more layers when the new data is large and similar.

## Autoencoder

This section covers networks that learn to compress and rebuild data.

### Architecture

An encoder compresses the input into a low dimension code.

A decoder rebuilds the input from that code.

```
x -> Encoder -> code -> Decoder -> rebuilt x
```

### Training

The autoencoder learns by making the rebuilt input close to the original input.

The loss is often the mean squared error or binary cross entropy.

### Variants

- **Denoising autoencoder:** learns from noisy input.
- **Variational autoencoder (VAE):** makes the code a smooth distribution.
- **Sparse autoencoder:** keeps only few active code units.

## Summary

This unit gives the learning methods. Unit 5 applies them to detection and segmentation.
