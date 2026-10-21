# Unit 5: Object Detection and Semantic Segmentation

**Duration:** 5 hours

**Lecture schedule:**

- 8 Apr: Introduction to Recognition

This unit covers tasks that find and label the objects in an image.

## Object Detection

Object detection finds the objects and gives a box for each object.

### Output Format

A detector returns a list of boxes, a class label, and a score for each box.

### Bounding Box Encoding

A box is usually stored by its corner points or by its centre, width, and height.

- **IoU** measures how much two boxes overlap.
- **Anchor boxes** are preset box sizes and ratios.
- **IoU thresholds** set the match rule for ground truth.

### Two-Stage Detectors

A two-stage detector first finds regions and then classifies each region.

- **R-CNN** uses selective search for regions.
- **Fast R-CNN** shares features across all regions.
- **Faster R-CNN** learns the region proposal network (RPN).
- **Mask R-CNN** adds a mask branch for segmentation.

### One-Stage Detectors

A one-stage detector predicts all boxes in one step.

- **YOLO** divides the image into a grid.
- **SSD** uses multiscale feature maps.

### Non-Maximum Suppression

Non-maximum suppression (NMS) removes boxes that overlap too much.

Keep the box with the highest score and drop the others.

## Semantic Segmentation

Semantic segmentation gives a class label to every pixel.

It does not separate objects of the same class.

### Encoder-Decoder Architectures

- **Fully convolutional network (FCN):** uses 1x1 convolutions for dense prediction.
- **SegNet:** uses an encoder-decoder with pooling and unpooling.
- **U-Net:** uses skip connections between encoder and decoder.

Skip connections keep sharp edges because they pass high resolution features.

### Loss Functions

- **Cross entropy loss:** compares each pixel class.
- **Dice loss:** measures overlap. It helps with class imbalance.

## Deep Learning Frameworks for Object Detection and Segmentation

This section covers the common tools and design choices.

### Frameworks

- **TensorFlow, Keras, and TensorFlow Detection API**
- **PyTorch, Torchvision, and Detectron2**
- **ONNX Runtime:** runs a trained model in other languages.
- **MMDetection and OpenMMLab:** many detection and segmentation models.

### Transfer Learning and Backbones

Pretrained backbones give strong features for small datasets.

Common backbones are ResNet, EfficientNet, and Vision Transformer.

### Data Augmentation

Use flips, crops, colour changes, and scaling.

Augmentation raises the model tolerance to unseen images.

### Practical Notes

- Check the data format and the annotation format first.
- Use the same preprocessing at training and at inference time.

## Panoptic Segmentation and Video

This section covers methods that join detection and segmentation over time.

### Panoptic Segmentation

Panoptic segmentation gives every pixel a label and an instance id.

- **Thing classes** count objects, such as a car or a person.
- **Stuff classes** count background areas, such as sky or grass.

This combines semantic segmentation and instance segmentation in one output.

### Video Segmentation

Video adds a time axis to segmentation.

- Track the same object across frames.
- Use optical flow to move masks between frames.
- Smooth masks over time to avoid flicker.

### Common Architectures

Panoptic FPN and Mask R-CNN are common panoptic models.

Video mask propagation and memory networks handle the time axis.

## Summary

This unit gives dense prediction tasks. Unit 6 covers local features such as edges and keypoints.
