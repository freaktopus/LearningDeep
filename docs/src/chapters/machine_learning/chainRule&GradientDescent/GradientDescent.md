# Gradient Descent

> [!TIP]
> Get familiar with the concept of [Regression & Curve Fitting](../regression/reg&curveFit.md)

It is about optimizing the model eg: Linear Regression (optimize the Intercept and Slope), Logistic Regression (optimize a squiggle), t-SNE (optimize the clusters) etc

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/Linear.png",
    alt:     "Linear Regression",
    caption: "Linear Regression",
    width:   "40%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/Squiggle.png",
    alt:     "Logistic Regression",
    caption: "Logistic Regression",
    width:   "40%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/t-SNE.png",
    alt:     "t-SNE",
    caption: "t-SNE",
    width:   "40%"
  }));
</script>

Gradient means derivatives of the loss function with respect to the parameters whereas descent refers to descending the derivatives(slope) to near zero.

## Loss Functions

Loss function are those type of functions that are used to measure how wrong the model's prediction is (measure the difference between the actual value and the predicted value of a model)

Some type of loss functions are: Sum of Squared Residuals, Mean Absolute Error, Huber Loss, Mean Squared Log Error etc.

## Working of Gradient Descent

Gradient Descent finds the optimal value (e.g. of value can be derivative of sum of square residuals curve plot with intercept on x-axis to get near zero) by taking big steps when it is far way and taking baby steps when near the optimal value.

> [!NOTE]
> Using Least Sqaure method, we just find the slope of the curve (Sum of squared residuals vs Intercept) where it is zero. In contrast, Gradient Descent finds the minimum value by taking steps from a initial guess unit it reaches the best values.
> Gradient Descent is very useful when it is not possible to solve for where the derivative=0

**Learning Rate**

The is the rate that determines the step size of the parameter (which influence the finding of the optimal solution) like intercept.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/learningCurve.png",
    alt:     "Learning Curve",
    caption: "Learning Curve",
    width:   "75%"
  }));
</script>

Gradient Descent stops when the step size is very close to 0. And it happens when the slope is near to 0.

**Formula:**

Step Size = Slope \* Learning Rate

**Estimating Intercept and Slope using Gradient Descent**

First, derivating the loss function (SSR) with respect to intercept and slope. Then, using learning rate increasing both two parameters Intercept and Slope. Once the step size starts getting near to 0 then it is suppose to getting near the optimal solution of both parameters.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/gradientDescent.png",
    alt:     "Gradient Descent",
    caption: "Gradient Descent",
    width:   "75%"
  }));
</script>

## Bird's Eye View

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/steps1.png",
    alt:     "Steps in Gradient Descent",
    caption: "Steps in Gradient Descent",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/steps2.png",
    alt:     "Steps in Gradient Descent",
    caption: "Steps in Gradient Descent",
    width:   "75%"
  }));
</script>
