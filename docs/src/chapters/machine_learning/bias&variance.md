# Bias and Variance

Bias and Variance two words are basic concept of ML. If you don't know about them then malai baal.

## Model Types

### 1. Overfit Model

When your model (say machine learning method/ algorithm or say curve) perform very well (imagine curve covering all the training points) in training dataset then there is high chance of model overfiting.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/overfit.png",
    alt:     "Overfit Model",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "100%"
  }));
</script>

> [!NOTE]  
> **Predicted value:** Points of green curve  
> **Actual value:** Data points in red color

Let's understand above figure.

There, (High) Variance is introduced. Variance can simply be understood as difference in fit of the model (how close the predicted value is from expected value between fits in 2 different test dataset) in different test dataset (or in outside ML context it is how much the predicted value is scattered).

If you have an model ( ML model/equation/ML algorithm … all similar), and you try to fit it in 2 different dataset. If there is high difference in error between there test error then it is called high variance. Here, test error varies greatly based on the selection of the training dataset.

### 2. Underfit Model

When your model (say machine learning method/ algorithm or say curve) perform little well only (imagine curve not covering must training points) then there is chance of model underfiting.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/underfit.png",
    alt:     "Underfit Model",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "100%"
  }));
</script>

Let's understand above figure.

There, (High) Bias is introduced. Bias can simply understood as how far the predicted value (curve) is from expected value(red dots).

If you have an model ( ML model/equation/ML algorithm … all similar), and you try to fit it in 2 different dataset. If there is high error in train error then it is called high bias. Here, train error is still high though different train dataset is taken.

### 3. Balanced Model

When your model (say machine learning method/ algorithm or say curve) perform well (imagine curve covering good number training points with less distance gap between curve and points) then there is chance of model being balanced. When it happens then in new test dataset there is possibility of less error (good prediction).

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/perfetfit.png",
    alt:     "Bestfit Model",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "100%"
  }));
</script>

Low variance and low bias can result in creating a good model.

## Remembering Tips 💡

### a. Bias

How much the model fails to capture a true pattern in a training dataset. Resulting an underfit model (consistently wrong prediction in new dataset).

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/bias.png",
    alt:     "Bias",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "75%"
  }));
</script>

### b. Variance

It is the amount by which the prediction would change if we fit the model to a different training data set (Bad prediction in new dataset).

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/machine_learning/variance.png",
    alt:     "Variance",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "100%"
  }));
</script>

Overfitting is shown. Variance is sensitivity to training data.

> [!NOTE]  
> **Blue Dots:** Training points   
> **Green Dots:** Testing points


## References

1. **Codebasics**. _Machine Learning Tutorial Python – 20: Bias vs Variance In Machine Learning_. YouTube. [Watch here](https://www.youtube.com/watch?v=B01qMFMAgUQ&t=477s)

2. **Josh Starmer (StatQuest)**. _Machine Learning Fundamentals: Bias and Variance_. YouTube. [Watch here](https://www.youtube.com/watch?v=EuBBz3bI-aA&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=7)
