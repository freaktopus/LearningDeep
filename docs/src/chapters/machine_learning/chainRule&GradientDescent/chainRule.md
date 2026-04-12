# Chain Rule

Chain rule can be simply compared with the chain where say small objects are chained together.

Mathematically, one property relating to a secondary property and that another seconday property also relating with another third property implies new relation between first and the third one.

The below images can clear the concept of chain rule easily:

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/chainrule1.png",
    alt:     "Chain Rule",
    caption: "Fig: Chain Rule",
    width:   "30%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/chainrule.png",
    alt:     "Chain Rule",
    caption: "Ref: Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning | codebasics",
    width:   "100%"
  }));
</script>

Things to know for the concpet of the chain rule in maths are:  
a. Derivative  
b. Slope

## Finding best fit model

**Step 1:**  
For each residual (x-axis is weight and y-axis is height) for a particular model(linear regression in this case), plot residuals and intercepts.

**Step 2:**  
Plot residuals and squares of residual

**Step 3:**  
Find the relation. Relation we got is  
Weight -> Height -> Intercept (y-axis intercept/Height itself) -> Residuals -> Residual squares

**Step 4:**  
Derivative of residual square with respect to intercept(Height) being zero means minimizing the squared residual (meaning less error)

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../../assets/machine_learning/chain&gradient/chainrule2.png",
    alt:     "Chain Rule in Minimizng Residual",
    caption: "Chain Rule for Finding a Best Fit Model",
    width:   "100%"
  }));
</script>

## References

1. https://www.youtube.com/watch?v=wl1myxrtQHQ&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=55 | The Chain Rule, Clearly Explained!!! | StatQuest with Josh Starmer
