# Unit 8: Advanced Topics in Computer Vision

**Duration:** 6 hours

**Lecture schedule:**

- 4 Mar: Panoramas
- 6 Mar: Single-view Modeling
- 20 Mar: Inverse Graphics and Neural Radiance Fields
- 25 Mar: Structure from Motion
- 15 Apr: Image Generation
- 17 Apr: Image Diffusion
- 24 Apr: Transformers
- 29 Apr: View Synthesis

This unit covers current research directions in computer vision.

## Simultaneous Localization and Mapping (SLAM / SfM)

This section covers how a system maps a place and finds its own position.

### Structure from Motion (SfM)

Structure from motion estimates camera poses and 3D points from many images.

1. Detect and match features across images.
2. Remove mismatches with RANSAC and geometric checks.
3. Recover camera poses with bundle adjustment.
4. Triangulate 3D points from known poses.

Bundle adjustment refines poses and points together. It reduces the reprojection error.

### SLAM

Simultaneous localization and mapping (SLAM) works in real time.

The system builds a map and tracks its own position in that map.

SLAM pipelines:

- **Front end:** reads sensor data and extracts features.
- **Back end:** optimises the map with bundle adjustment.
- **Loop closure:** detects a visited place and corrects drift.

### Loop Closure and Place Recognition

Loop closure reduces long term drift.

- **BoW (Bag of Words):** uses a histogram of local features.
- **DBNet and learned descriptors:** give better place features.

### Modern Methods

Visual SLAM uses cameras only. LiDAR SLAM uses laser range data.

Learning based methods learn features and depth from data.

## 3D Shape and Appearance Models

This section covers methods that store and match 3D objects.

### Point Clouds and Meshes

- **Point cloud:** an unordered set of 3D points.
- **Mesh:** vertices and faces that form a surface.

### Shape Descriptors

- **Signed distance function (SDF):** the distance to the nearest surface.
- **Occupancy grid:** a voxel grid that stores empty and full cells.
- **DeepSDF:** a network that learns a continuous SDF.
- **PointNet and PointNet++:** networks that read point clouds directly.

### Surface and Texture Mapping

Texture mapping puts a 2D image onto a 3D surface.

Unwrap the surface into a 2D plane, then sample the texture image.

### Appearance Models

An appearance model stores the look of an object under many conditions.

Render many views and store them. Then match a new view to the set.

Deep learning methods use latent codes. One code gives many views of one subject.

## Computational Photography

This section covers the mathematics behind camera image formation.

### The Camera Model

A camera image depends on the scene, the lens, the sensor, and the exposure.

A blur kernel models the lens aperture.

### Image Formation Pipeline

Scene radiance -> lens blur -> sensor noise -> quantisation -> display response.

- **Demosaicing:** one sensor gets only one colour per pixel.
- **Colour correction:** white balance and a camera matrix.
- **Tone mapping:** high dynamic range to displayable range.

### HDR Imaging

Take several pictures at different exposures. Then combine them into one image.

This keeps detail in bright and dark areas of the scene.

### Rolling Shutter and Super Resolution

- **Rolling shutter** gives each row a different capture time.
- **Super resolution** makes a higher resolution image from a low resolution one.
- **Burst photography** uses many photos of the same static scene.

## Generative Adversarial Networks (GANs)

This section covers networks that learn to create new data.

### Architecture

A GAN has two networks that compete.

- **Generator (G):** turns random noise into a fake sample.
- **Discriminator (D):** tells real samples from fake samples.

Training is a minimax game.

```
min_G max_D  E[log D(real)] + E[log(1 - D(G(noise)))]
```

The two networks improve each other during training.

### Training Problems

- **Mode collapse:** the generator makes only a few samples.
- **Unstable training:** the loss value does not show real quality.
- **Vanishing gradients:** the gradient signal is too weak.

### Improved GANs

- **DCGAN:** uses deep convolutional layers.
- **WGAN:** uses the Wasserstein loss. It gives a stable gradient signal.
- **StyleGAN:** gives control over the style of each generated image.

### Applications

Image generation, image to image translation, super resolution, and inpainting.

## Vision Transformers

This section covers transformer models for images.

### Why Transformers

Transformers model relations between tokens. CNNs model local neighbours.

Transformers can use a global self-attention layer from the start.

### Vision Transformer (ViT)

1. Cut the image into fixed size patches.
2. Flatten each patch into a vector.
3. Add a position embedding.
4. Add a class token for the whole image.
5. Pass the sequence through transformer encoder blocks.

A final layer head gives the class label.

### Self-Attention

Each token builds a query, a key, and a value.

Attention weights show which tokens each token must read.

```
Attention(Q, K, V) = softmax(Q K^T / sqrt(d)) V
```

### Improvements and Limits

- **Swin Transformer:** uses shifted window attention. It lowers the compute cost.
- **Hybrid models:** combine CNN and transformer blocks.

ViTs need large datasets or strong pretraining. CNNs often win with less data.

## Summary

This unit gives advanced topics. Unit 8 closes the course.
