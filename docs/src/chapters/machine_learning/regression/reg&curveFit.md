# Regression &amp; Curve Fitting

Curve fitting refers to drawing a curve within a given dataset to capture a true pattern of the dataset. It is done using regression.

## Types of Regression

It is about learning a general pattern and predict unseen data.

> [!NOTE]
> Interpolation is not same as Regression. Interpolation is about drawing a curve passing exactly through all data points whereas Regression is about finding a best-fit trend in a given dataset.

### 1. Linear Regression Aka Least Squares

It is based on the line forming method. For a set of data in a graph, a line is drawn there and distance from that line (estimation line for output prediction of an unknown input) are sqaured and summed which is called as least squares.

And minimum least square is what we want to achive, i.e. Best Fit Model.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/regression/Linearreg.png",
    alt:     "Linear Regression",
    caption: "Fig: Optimize for the best fit curve (here line)",
    width:   "60%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/regression/linearreg2.png",
    alt:     "Linear Regression",
    caption: "Fig: Sum of squared residuals (aka Least Squares)",
    width:   "60%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/regression/linearreg3.png",
    alt:     "Linear Regression",
    caption: "Fig: Finding Minimium Least Squares using Derivative",
    width:   "60%"
  }));
</script>

The final line (best fit model) minimizes the sums of squares (also known as least squares) between it and the real data.

In this situation, we optimize the value of slope(weight) and intercept(bias) for best fit.


### 2. 
