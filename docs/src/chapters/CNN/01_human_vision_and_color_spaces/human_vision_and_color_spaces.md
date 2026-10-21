- 21 Jan: Introduction and Overview
- 22 Apr: Computer Vision, Ethics, and Society

This unit covers the biology of vision and the ways we encode images as numbers.

### What can be done using Computer Vision?
- 3D reconstruction; eg: using 3DGS - Gausian Splatting
- 3D scenes dynamic reconstruction - capturing moving object in 3D; object moves in 3D
- Visualizing from photos - similar to 3DGS
- 

## Human Vision

This section explains how cameras and the human eye capture light.

### The Eye2

The eye focuses light on the retina. The retina holds rod and cone cells.

- **Rods:** work in dim light, give no color information.
- **Cones:** work in bright light, give color information.

### From Light to an Image

A digital sensor measures light at many points. Each point gives a pixel value.

- Exposure time and aperture control image brightness.
- Sensor noise and focus reduce image quality.

### Limitations of the Eye

The brain completes missing information. This causes illusions.

## Color Spaces and Transformations

This section covers how we represent color in numbers.

### RGB

RGB stores three values for red, green, and blue light.

Each value is usually an 8-bit number from 0 to 255.

A single RGB image is a 3D array with shape `H x W x 3`.

### HSV and HSL

HSV uses hue, saturation, and value. HSL uses hue, saturation, and lightness.

These spaces separate color from brightness. They make color thresholds easy to set.

### Color Transformations

Common operations convert an image between color spaces.

- Channel swap or channel extraction.
- Histogram equalization on the value channel.
- Grayscale conversion with the luminance formula.

```
gray = 0.299 * R + 0.587 * G + 0.114 * B
```

### Color Spaces in Practice

Deep learning models usually read RGB images directly. Classical methods use HSV and Lab more often.

## Summary

This unit gives the base ideas of vision and color. Unit 2 uses them for image processing.
