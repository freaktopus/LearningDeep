# Convolution Neural Network

CNN is the basis of computer vision and image processing.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/conv.png",
    caption: "Fig: VGG-16 CNN Architecture",
    width:   "75%"
  }));
</script>

There is cross-correlation operation between matrices but not convolution operation. For, convolution operation, the kernal should be 180 degree rotated.

The simple architecture division looks like:

Input Image -> Convolution Layer 1 (Cross-Correlation, Pooling, ReLU) -> Activation Map -> Flattened the Activation Map -> Dense Layer -> Output

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/flowcnn.png",
    caption: "Fig: Flow in CNN Architecture",
    width:   "75%"
  }));
</script>

## Layers:

### Convolution Layers

It can thought as "eyes" of a CNN. Input image (244 x 224 x 3), get computed using filters of same channel size (i.e. 3).

Once cross-correlation opetation is done to get single output (one pixel output), then it is send thorugh an activation funciton, and that output from the activation function is save in the activation map (224 x 224 x 1), since single filter was used so only one map.

Note that since 3 channel was there, so for each channel each filter (3 channel filter with different value than each other) does the operation and summed to get a single matrix, and of elements of those get pass to the activation function to get an activation map.

**Some Terminalolgy:**

**1. Padding:**

It is inclusion of outer pixels or not.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/padding.png",
    caption: "Fig: Padding",
    width:   "75%"
  }));
</script>

**2. Stride:**

It is the step the kernal takes while doing operation.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/stride.gif",
    caption: "Fig: Stride with padding 1 and stride 2",
    width:   "50%"
  }));
</script>

**Convolution Output Spatial Size Calcualtion**

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/cal.png",
    caption: "Fig: Calculation",
    width:   "70%"
  }));
</script>

Sobel Kernel is one of the kernel example that is used to detect vertical edges.

[1,0,-1
2,0,-2
1,0,-1]

At the last stage of the convolution layer, all the activation maps (channel say) are flattened and then connected to the dense layer.

**3. Max Pooling Layers**

Extract the max value from the kernal size matrix from the activation maps. Pooling can be max(), avg() etc.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/tillpool.png",
    caption: "Fig: Detail Steps till Max Pooling",
    width:   "70%"
  }));
</script>

### Fully Connected Classifier Layer

Here, dense layer is present.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/cnn/fc_layer.png",
    caption: "Fig: Integration of Conv Layer Output with Dense Layer",
    width:   "70%"
  }));
</script>
