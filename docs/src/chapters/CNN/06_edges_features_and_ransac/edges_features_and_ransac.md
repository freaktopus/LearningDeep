# Unit 6: Edges, Features, and Processing

**Duration:** 6 hours

**Lecture schedule:**

- 4 Feb: Feature Detection
- 6 Feb: Feature Invariance
- 11 Feb: Feature Descriptors and Feature Matching
- 25 Feb: RANSAC

This unit covers local image features that describe image structure.

## Edges and Its Features

This section covers where object boundaries appear in an image.

### Why Edges Matter

An edge marks a strong change of intensity.

Edges are stable under noise, scale, and small illumination change.

### Gradient

The gradient gives the direction and size of the change.

- Use a Sobel, Scharr, or Prewitt kernel to compute the gradient.
- The gradient magnitude gives edge strength.
- The gradient angle gives the edge direction.

### Edge Detection Operators

- **Sobel operator:** smooths noise and finds edges in one step.
- **Canny detector:** a complete multi-stage edge detector.
- **Laplacian of Gaussian:** finds edges with a second order operator.

### Canny Detector Stages

1. Smooth the image with a Gaussian filter.
2. Compute the gradient magnitude and direction.
3. Apply non-maximum suppression to thin the edges.
4. Use two thresholds with hysteresis to keep strong edges.

## Edge Matching and RANSAC Phenomenon

This section covers how to fit models to noisy feature sets.

### The RANSAC Algorithm

Random sample consensus (RANSAC) fits a model to data with outliers.

1. Select a small random sample from the data.
2. Fit the model to that sample.
3. Count how many points fit the model. This is the inlier count.
4. Keep the model with the largest inlier count.
5. Refit the model on all inliers.

### Why RANSAC Works

Only the inliers define the true model.

Random sampling increases the chance of picking an all-inlier sample.

### Edge Matching

Edge matching joins edge segments between two images.

- Use a cost that measures shape and orientation similarity.
- Solve the assignment with the Hungarian algorithm.

### Applications

RANSAC gives camera pose, fundamental matrix, and homography estimation.

It removes the effect of moving objects and mismatched points.

## Edge Processing Algorithms

This section covers methods that describe local shape.

### Histogram of Oriented Gradients (HoG)

HoG describes a shape by the direction of its gradients.

1. Compute gradients on the image.
2. Divide the image into small cells.
3. Build a histogram of gradient directions in each cell.
4. Normalise each block of cells.
5. Concatenate the blocks into one feature vector.

HoG works well for human detection.

### Scale Invariant Feature Transform (SIFT)

SIFT finds keypoints that stay the same under scale and rotation change.

1. Build a scale space with a Gaussian pyramid.
2. Find keypoints as scale space local maxima of a difference of Gaussians.
3. Assign each keypoint an orientation from the gradient histogram.
4. Describe each keypoint with a 128-value gradient histogram.
5. Match keypoints with the nearest neighbour ratio test.

SIFT gives a local descriptor that is stable across viewpoints.

### Optical Flow

Optical flow measures the motion of pixels between two frames.

- **Brightness constancy:** a pixel keeps its value after it moves.
- **Small motion:** the movement between nearby frames is small.
- **Spatial coherence:** neighbour pixels move in a similar way.

Common methods are the Lucas-Kanade method and the Horn-Schunck method.

Optical flow serves optical flow estimation, video compression, and motion segmentation.

## Summary

This unit gives local features. Unit 7 uses them to find depth and build 3D scenes.
