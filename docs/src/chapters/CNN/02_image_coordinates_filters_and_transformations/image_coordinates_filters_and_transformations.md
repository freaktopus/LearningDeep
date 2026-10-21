# Unit 2: Image Processing

**Duration:** 6 hours

**Lecture schedule:**

- 23 Jan: Image filtering
- 28 Jan: Image filtering and edge detection
- 30 Jan: Image resampling
- 13 Feb: Image Transformations
- 20 Feb: Image Alignment
- 27 Feb: Cameras

This unit covers the core operations that change image pixels.

## Image Coordinates and Resizing

This section explains how a computer stores and moves pixels.

### Image Coordinates

An image is a matrix of values. The origin sits at the top left corner.

- The x-axis points right and the y-axis points down.
- A pixel has an integer position `(x, y)` and a value.

### Interpolation

Interpolation estimates a new value from known neighbor values.

Common methods are nearest neighbor, bilinear, and bicubic.

### Resizing

Resizing changes the image size. It needs an interpolation method.

- Downscaling often uses area averaging. It removes aliasing.
- Upscaling needs interpolation because the new pixels have no data.
- Resizing always changes the image aspect ratio or crop.

## Filters and Convolutions

This section covers operations that compute a new pixel from a neighborhood.

### Point Operators

A point operator changes each pixel on its own. It uses a function.

```
g(x, y) = T(f(x, y))
```

Examples are identity, inversion, gamma correction, and histogram equalization.

### Linear Filtering

A linear filter multiplies neighbors with weights and sums the result.

```
g(x, y) = sum(w(i, j) * f(x + i, y + j))
```

Convolution flips the kernel before it slides. Cross-correlation does not flip it.

- Kernel size controls the neighborhood size.
- Padding keeps the output size equal to the input size.
- Stride controls the step size of the kernel.
- Blur, sharpen, and edge kernels are all linear filters.
- Separable kernels cut the compute cost for large kernels.

### Non-Linear Filtering

A non-linear filter uses a function that is not a plain sum.

- Median filter removes salt and pepper noise.
- Bilateral filter smooths edges and keeps them sharp.
- Bilateral filter uses a spatial weight and a range weight.

### Fourier Transforms

The Fourier transform changes an image from space to frequency.

- Low frequencies hold brightness and slow changes.
- High frequencies hold edges and fine noise.

Convolution in space equals multiplication in frequency.

A low pass filter blurs. A high pass filter finds edges.

### Pyramids and Wavelets

A pyramid stores an image at many scales.

- Gaussian pyramid smooths and downsamples.
- Laplacian pyramid stores the detail between two levels.

A wavelet gives a local frequency representation. It gives a better time-frequency trade-off than Fourier.

### Geometric Transformations

Geometric transformations change the pixel positions.

- Scaling, rotation, translation, and shear are affine transforms.
- A homography also changes perspective.
- A homography uses a 3x3 matrix and needs four point pairs.

Interpolation quality decides the output smoothness.

## Summary

This unit gives the pixel operations. Unit 3 uses them for interpolation and optimization.
