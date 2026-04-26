# Basics of Neural Network

Why is it called Neural Network? Because two fundamental components in the neural network nodes and connection are like brain neurons and synapses respectively.

## Components of Neural Network

Fundamental components of NN are:

#### Nodes

It can be input node, output node and hidden nodes.

Hidden nodes have activation function. They are the curve from which y-axis value of the calculated x-axis from the layers (including bias and weight) is picked and plug into the dataset graph to fit the dataset.

#### Layers

Layers are like spider web, i.e. connections between nodes. It consist of bias and weights. 

Bias is addition (+). In ML context, bias is how much the model fails to capture a true pattern in a training dataset. Resulting an underfit model (consistently wrong prediction in new dataset).

For deeper understanding, check the blog mentioned just below.

Weight is multiplication part. It adds the importance for a particular factor.

Bias is addition part. It is like a threshold adjuster. Or think of this as shifter/base score/adjustment.

Weights and Biases helps for fitting (capture the pattern of the dataset) a model (curve) in the dataset to predict for a new case result.

> [!TIP]
> Get familar with the concept of [Bias and Variance](../../chapters/machine_learning/bias&variance.md)

## Math Behind Neural Network

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/dosage.png",
    alt:     "Dosage Graph",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "30%"
  }));
</script>

Here, y-axis is for how effective the Dosage is. X-axis is the level of dosage (low,medium,high).

### Stepwise Maths

It's a septwise mathematics behind predicting if 0.5 dosage (medium) is effective or not.\*\*

**Step 1**

By putting input value 0.5 (Dosage) and doing all the calculation (weights is \*-34.4 and bias is +2.14), the result is corresponded to x-axis coordinate of activation funciton.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/math1.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "75%"
  }));
</script>

**Step 2**

For x-axis value (-15.06)of activation function got from step 1, y-axis value of the activation function is used to plot points in the actual data set to form a curve.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/math2.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "75%"
  }));
</script>

Y-axis value of activation function is calculated using equation of activation function. Used activation function is softmax [ f(x)=log(1+e^-15.06) ].

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/math3.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "75%"
  }));
</script>

**Step 3**

Doing same for yellow layer till that hidden node

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/math4down.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "75%"
  }));
</script>

**Step 4**

Now the y-axis value from two hidden nodes (blue and orange), they both are summed and then again that value is summed with some value [ (some small number * -1.30) + (0.71 * 2.28) + (-0.58)].

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/mathfinal.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "75%"
  }));
</script>

This results 1.03 which is close to 1. So, which means 0.5 dosage is effective.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/mathconclusion.png",
    alt:     "Math Behind NN",
    caption: "Ref: The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer",
    width:   "30%"
  }));
</script>

> [!NOTE]
> Bias & Activation function are inside the neuron (nodes) and Weights are on connection (lines)  
> Still the connection is the part of the neuron

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/perceptron.png",
    alt:     "Perceptron",
    caption: "Fig: Perceptron",
    width:   "100%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/neural_network/basics/Inner workings of an artificial neuron.png",
    alt:     "Working of Neuron",
    caption: "Fig: Working of Neuron",
    width:   "100%"
  }));
</script>

> [!TIP]
> Now, get familiar with the concept of [Regression & Curve Fitting](../../chapters/machine_learning/regression/reg&curveFit.md)

## Single Perceptron

Single perceptron can't solve non linear problem. Meaning single line can't able to seperate classes (imagine impossible to draw a line to seperate multiple classes). e.g. XOR truth table output can't be sepearable from a single line (meaning need multiple percentrons(and, !and, or)) to solve for the output.

** Flow of the FeedForward Network**

Input -> Weight _ Input + Bias -> Activation Function -> H (output of hidden layer) -> Weight _ H + Bias -> Activation Function -> Final Output

Training is done to adjust the weight and without training that network is nothing.

## Hand Written Notes

Pahari's Notes :)

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/notes/note1.jpg",
    alt:     "Note",
    width:   "50%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/notes/note2.jpg",
    alt:     "Note",
    width:   "50%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/notes/note3.jpg",
    alt:     "Note",
    width:   "50%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../assets/notes/note4.jpg",
    alt:     "Note",
    width:   "60%"
  }));
</script>

## References:

1. _The Essential Main Ideas of Neural Networks | By StatQuest with Josh Starmer | https://www.youtube.com/watch?v=CqOfi41LfDw&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=74_
2. https://www.youtube.com/watch?v=i1G7PXZMnSc | The Perceptron Explained | Alice Heiman
3. The Main Ideas of Fitting a Line to Data (The Main Ideas of Least Squares and Linear Regression.) | https://www.youtube.com/watch?v=PaFPbb66DxQ&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=9 | By StatQuest with Josh Starmer
