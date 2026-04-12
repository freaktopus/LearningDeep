# Backpropagation in Neural Network

> [!TIP]
> Before diving into Backpropagation, get familar with the concept of [Chain rule and Gradient Descent](../machine_learning/chainRule&GradientDescent/main.md)

The core concepts behind the backpropagation is using gradient descent to the find the optimal value of the bias(b3) using learning rate, chain rule, derivate and loss function.

You will understand it better if you have gone through Chain Rule & Gradient Descent properly.

The screenshot below can illustrate the basic concept behind backpropagtion.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/backpropagation/backpropagation1.png",
    alt:     "Basic Calculation of Backpropagation",
    caption: "Basic Calculation of Backpropagation",
    width:   "75%"
  }));
</script>

**Basic understanding of Backpropagation**

Assume optimal value of b3 in that figure is unknown. What we do next is, we assume 0 as initial value of b3 and find the SSR(Sum of Squared Residual) for the curve obtain from that particular bias value.

Then plot that SSR(y-axis) and Bias(x-axis) in a graph. Then take derivative of SSR with respect to the bias to find optimal value of bias.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/backpropagation/backpropagation2.png",
    alt:     "Basic Calculation of Backpropagation",
    caption: "Basic Calculation of Backpropagation",
    width:   "75%"
  }));
</script>

Using Gradient Descent, we calcaulte optimal value for bias, which is obtain when step size (here it is for calculaitng the new bias value) is near 0.



