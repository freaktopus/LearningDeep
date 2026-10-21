# Unit 3: Interpolation and Optimization

**Duration:** 5 hours

**Lecture schedule:**

- No direct lecture match. This unit supports mathematical foundations for Units 2 and 6.

This unit covers how we estimate unknown values from known data.

## Scattered Data Interpolation

This section covers interpolation when the data points have no grid.

### The Problem

Scattered data gives values at unordered points `(x, y, z)`. We must estimate the surface between them.

### Methods

- **Nearest neighbour:** use the value of the closest point.
- **Inverse distance weighting (IDW):** weight each point by the inverse of its distance.
- **Radial basis function (RBF):** use a function of distance from a center point.
- **Shepard interpolation:** a smooth form of IDW.

Common radial basis functions are linear, cubic, thin plate spline, and Gaussian.

### RBF Interpolation Formula

```
f(x) = sum(w(i) * phi(||x - c(i)||))
```

The weights come from a linear system. The system uses the values at the data points.

## Variational Methods and Regularization

This section covers problems that need an optimization step to solve.

### Least Squares Problems

A least squares problem finds the parameters that reduce the sum of squared errors.

```
E = sum((f(x, i) - y(i))^2)
```

The normal equations solve this problem for linear models.

### Regularization

Regularization stops the model from fitting noise.

```
E = sum((f(x, i) - y(i))^2) + lambda * R(f)
```

- **L1 regularization (Lasso):** gives sparse solutions.
- **L2 regularization (Ridge):** shrinks coefficients smoothly.
- **Tikhonov regularization:** a general form of the same idea.

### Total Variation

Total variation (TV) keeps an image sharp while it removes noise.

TV penalizes large changes between neighbor pixels.

### Calculus of Variations

This field finds a whole function that reduces a cost.

- The Euler-Lagrange equation gives the first order condition.
- Gradient descent solves the problem with steps.

## Markov Random Fields

This section covers how we model relations between neighbor pixels.

### Markov Property

A pixel depends only on its neighbor pixels. It does not depend on far pixels.

A Markov random field (MRF) defines this rule on an image grid.

### Energy Formulation

An MRF becomes a cost function over the whole image.

```
E = sum(data cost) + sum(smoothness cost)
```

The smoothness cost is low when neighbor labels are the same.

### Inference

Inference finds the labelling with the lowest cost.

- Iterated Conditional Modes (ICM) changes labels one pixel at a time.
- Belief propagation and graph cuts work on larger regions.

## Summary

This unit gives estimation and energy models. Unit 4 uses them to learn models from data.
