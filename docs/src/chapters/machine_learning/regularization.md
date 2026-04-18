# Regularization

It is the technique in ML, where penalty is added to keep the model simple and avoid overfitting.

## Types of Regularization

### Ridge (L2) Regression

The main idea behind the ridge regression is to find a new line that doesn't fit perfectly to the training data (done using bias).

In return, the variance is reduced and also avoid overfitting.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/regularization/ridge1.png",
    alt:     "Ridge Regression",
    caption: "Ridge Regression",
    width:   "75%"
  }));
</script>

It basically not only minimize the sum of the squared residuals (like Least Sqaure) but also minimize (Lambda \* Slope^2)

When sample size (training size) are relatively small, Ridge Regression (L2 regularization) can improve predictions made form new data (i.e. reduce variance) by making predicitons les sensitive to the training data by introducing penalty.

This is done by adding the ridge regression penalty((Lambda \* Slope^2)) to the thing that must be minimized. i.e. th
e sum of squared residuals (Least Sqaure) + (Lambda \* Slope^2)

Lambda is determined using cross validation method. (test with the test data). Greater lambda results asymtotically zero.

Main effect is that it makes the prediction size less sensitive to the tiny training dataset.

### Lasso (L1) Regression

The main idea behind the lasso regression similar to the ridge regression but here there is absolute value of slope in the penalty not square.

Similar to the Ridge regression, In return, the variance is reduced and also avoid overfitting. And main effect is that it makes the prediction size less sensitive to the tiny training dataset.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/regularization/lasso.png",
    alt:     "Ridge Regression",
    caption: "Ridge Regression",
    width:   "75%"
  }));
</script>

Lasso Regression can exclude useless varibles from equation due to the absolute value, it is little better than ridge regression at reducing teh variance in models that contains a lot of useless variables.

This is done by adding the lasso regression penalty((Lambda \* |Slope|)) to the thing that must be minimized. i.e. th
e sum of squared residuals (Least Sqaure) + (Lambda \* |Slope|)
