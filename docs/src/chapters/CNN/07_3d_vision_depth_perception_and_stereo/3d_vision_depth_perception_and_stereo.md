# Unit 7: 3-D Vision

**Duration:** 5 hours

**Lecture schedule:**

- 11 Mar: Stereo
- 13 Mar: Multiview Stereo
- 13 Mar: Light and Perception
- 27 Mar: Light & Photometric Stereo

This unit covers how a machine understands the depth of a scene.

## Introduction

This section covers the difference between 2D images and 3D scenes.

### The Problem

A camera gives a 2D image. The world has 3D shape and depth.

Depth estimation recovers the missing dimension.

### Sources of Depth Cues

- **Occlusion:** a near object hides a far object.
- **Relative size:** a known object looks smaller when it is far.
- **Perspective:** parallel lines meet at a vanishing point.
- **Shading:** light and shadow give the surface direction.
- **Focus and motion blur:** change with distance.
- **Stereopsis:** each eye sees a slightly different view.

### Coordinate Systems

- **Camera coordinate system:** the origin sits at the camera centre.
- **World coordinate system:** a fixed frame for the whole scene.
- A transformation matrix moves points between these frames.

## Depth Perception

This section covers how depth changes with viewing angle and distance.

### Pinhole Camera Model

A pinhole camera maps 3D points to 2D pixels through projection.

```
u = f * X / Z
v = f * Y / Z
```

Here `f` is the focal length, and `Z` is the depth.

This model loses the depth value. Many 3D points map to one pixel.

### Stereo Disparity

A stereo pair has two cameras. They have a small horizontal shift.

A point near the camera shifts more between the two images.

The shift is the **disparity**.

```
disparity = f * B / Z
```

Here `B` is the distance between the two cameras.

Depth falls when disparity grows.

### Metric Depth from Disparity

The formula gives depth only for points that match well.

Occlusion and textureless areas make matching fail.

### Monocular Depth Cues

One camera has no direct depth measure.

Learning based methods guess depth from cues such as size and shading.

## Stereo Vision

This section covers how two images give a 3D reconstruction.

### Correspondence Search

Stereo vision must match the same point in both images.

Search each pixel along an epipolar line. This cuts the search to one dimension.

### Epipolar Geometry

- **Epipolar line:** the possible match positions in the second image.
- **Fundamental matrix (F):** defines the epipolar geometry of two views.
- **Essential matrix (E):** defines the same geometry for calibrated cameras.
- **Epipole:** the projection of one camera centre into the other image.

### Stereo Matching Algorithms

- **Block matching:** compares small image patches.
- **SAD and SSD:** sum of absolute or squared differences of patches.
- **Census transform:** compares local bit patterns. It is robust to light change.
- **Semi-global matching (SGM):** adds a smoothness cost along paths.

### Rectification

Rectification makes the epipolar lines horizontal.

Rectification makes matching faster and simpler.

### Cost Volume and Deep Stereo

Learning based methods build a cost volume.

A 3D CNN then turns the cost volume into a disparity map.

Deep methods reach higher accuracy than hand made methods.

## Summary

This unit gives depth from cameras. Unit 8 covers advanced topics such as SLAM and 3D models.
