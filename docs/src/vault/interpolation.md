# Interpolation Techniques

Interpolation is an estimation. It's just about estimating the unknown value that comes either inside or outside the interval.

## 1. Linear Interpolation

If the point are estimated such that between two end point there form a line then we called it Linear Interpoation

Remember there is another word **extrapolation** which means the estimation of the values beyond the range of the data.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/linear_interpolation1.png",
    alt:     "Linear Interpolation",
    caption: "Fig: Linear Interpolation (lines formation between intervals)",
    width:   "75%"
  }));
</script>

## 2. Cubic Spline interpolation. 

In short points, things to note in order to understand Cubic Spline Interpolation :

* Each interval have cubic polynomial function mapping.
* Cubic polynomial : ax³+bx²+cx+d
* For two sequential interval functions: Funcitons are equal for a interior points, it's first derivative is also equal and it's second derivative is also equal. [ Means Continuity]
* Extreme first and last points have second derivative zero.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/cubic_spline.jpg",
    alt:     "Cublic Spline Interpolation",
    caption: "Fig: Cubic Spline Interpolation",
    width:   "40%"
  }));
</script>

### Benefits of Cubic Spline and Bird Eye view

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/cs1.png",
    alt:     "Cublic Spline Interpolation",
    caption: "Ref: Cubic Spline Interpolation Theory | Numerical Methods  by StudySession",
    width:   "100%"
  }));
</script>

### Derivation of Cubic Interpolation

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/cs3.png",
    alt:     "Cublic Spline Interpolation",
    caption: "Ref: Cubic Spline Interpolation Theory | Numerical Methods by StudySession",
    width:   "100%"
  }));
</script>

Things to note from the above screenshot:

* 4 unknown coefficient need to be solved
* x0,……xn, for each point x-axis values
* n+1 points, then n polynomial function 
eg: above 3 point and 2 polynomial function for intervals 
So, 4 unknown coefficeint to be solved, we need n*4 equation ~ **4n**
* Interior points: (n+1)-2 (need to exclude extreme points)= **n-1**
Each interior points have 2 polynomial equation and there are n polynomial from point 3 **-- So, 2*n equations from known points**

To solve we use cubic polynomial in this format:

Si​(x)=ai​+bi​(x−xi​)+ci​(x−xi​)²+di​(x−xi​)³

Above points in below 2 screenshot which include same as above 4 points

Constraints:

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/csconstraints.png",
    alt:     "Cublic Spline Interpolation",
    caption: "Ref: LLM",
    width:   "60%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/cs4.png",
    alt:     "Cublic Spline Interpolation",
    caption: "Ref: Cubic Spline Interpolation Theory | Numerical Methods by StudySession",
    width:   "100%"
  }));
</script>

Total equation that we can form are :

2n+(n-1)+(n-1)+2  
= 4n-2+2  
= 4n  

Hence we can now plug all calculated known data 4n equations to get 4n equation for 4 unknown variables. And we solve it.

### Application - Dengue Outbreak Interploation

**Given:**

Nepal's District 2023 year dengue outbreak data for each month 

*i.e 
Jan - 1234 case
Feb - 453 case
……………… Dec - 213 case*

I want to interpolate in such way that I need to find out weekly interpolated data (i.e weekly estimation case from month data)

**Solution:** 

Using Cubic Spline, 

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/cscode.png",
    alt:     "Python Code for CS Implementation",
    caption: "Python Code for CS Implementation",
    width:   "70%"
  }));
</script>

Here, 

*week_positions* -- created evenly spaced 52 points somthing look like [1.00, 1.21, 1.42, 1.63, …, 11.58, 11.79, 12.00]  
*bc_type* = "natural" - second derivative of jan and dec is 0  
*cs* -- is the function for polynonimal (to estimate the case for given point which is x) 

cs behaves like a mathematical function: cs(x)

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/csImplement.png",
    alt:     "Python Code for CS Implementation",
    caption: "Screenshot of the Linear and Cubic Spline Interpolation Graph of Tanahu District Dengue case 2023",
    width:   "100%"
  }));
</script>

### Benefits of using cubic spline in this application: (LLM)

**a. Smooth and Natural Curve**  
Produces a smooth trend without sharp corners between data points.

**b. Realistic Disease Pattern Modeling**   
Captures gradual rise and fall of outbreaks better than straight-line interpolation.

**c. Continuity of Growth Rate**   
Maintains continuous first and second derivatives (smooth change in infection rate).

**d. Accurate Within Data Range**   
Provides reliable estimates inside the observed time period (Jan–Dec).

**e. Converts Monthly to Weekly Easily**   
Transforms discrete monthly data into a continuous function for weekly estimation.

**f. Avoids High-Degree Polynomial Oscillation**   
Prevents extreme fluctuations seen in single high-order polynomial interpolation.

### Rough Notes: 

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/csnote1.jpeg",
    alt:     "Cubic Spline Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/csnote2.jpeg",
    alt:     "Cubic Spline Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/csnote3.jpeg",
    alt:     "Cubic Spline Note",
    width:   "75%"
  }));
</script>

## Chebyshev Interpolation

Basic idea of Chebyshev Interpolation:

* Uses nodes with unequal distance to each other known to be chebyshev nodes.
* Node is decided from the unit circle with equally angled division to the semi circle 
* Nodes are taken from cosine formula
* Chebyshev polynomial is used to form a approx function

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev1.png",
    alt:     "Chebyshev",
    caption: "Ref: LLM",
    width:   "75%"
  }));
</script>

* Approx function is linear combination of C.polynomial

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev2.png",
    alt:     "Chebyshev",
    caption: "Ref: LLM",
    width:   "75%"
  }));
</script>

* C.polynomial is bounded on [-1,1]

Take a look into the consise note below for basics.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote1.jpeg",
    alt:     "Chebyshev Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote2.jpeg",
    alt:     "Chebyshev Note",
    width:   "75%"
  }));
</script>

## How to interpolate using Chebyshev Polynomial?

Let's do it step by step:

**Given** -> f(x) function where x on bound [-1,1]   
**To find** -> An approximate polynomial function to approx original function f(x)

**Step 1:**

Finding chebyshev nodes using chebyshev polynomial

i.e   
from Tn+1​(x)=cos((n+1)arccosx) with roots when Tn+1(x)=0

Solving we get 

Chebyshev nodes are calculated using the formula :

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote3.png",
    alt:     "Chebyshev Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev3.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "100%"
  }));
</script>

**Step 2:**

Find all yk value for all C.nodes (ie x value got from step 1)

**Step 3:**

(Method 1): Using Lagrange interpolation to guarantee that all the found nodes passes through the approx polynomial function Pn(xk)

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev4.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "70%"
  }));
</script>

(Method  2): Using Chebyshev series representation

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev5.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "90%"
  }));
</script>

**Step 4:**

Coefficients are computed using following formulas and condition:

( I have not understood the math so understand yourself, I will do later)

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev6.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "75%"
  }));
</script>

**Step 5:**

Interpolation polynomial ( approx function) will be 

(I have not understood the math so understand yourself, I will do later)

But need to understand that after getting general form of the polynomial in step 2; it is futher calculated to get evaluating formula that is in below llm reference

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev7.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "100%"
  }));
</script>

**Step 6 (optional):**

Calculating error using following formula

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev8.png",
    alt:     "Chebyshev Note",
    caption: "Source: LLM",
    width:   "100%"
  }));
</script>

In short: 

* Choose degree n -> n means n+1 coefficients & n+1 nodes
* Compute Chebyshev nodes i.e xk
* find yk
* Find chebyshev coefficients cj and construct polynomial ie Pn(x)
* Approx function: f(x) ~ Pn(x) using explicit chebyshev series form formula which is used to calculate yk for any xk

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote3.jpeg",
    alt:     "Chebyshev Note",
    width:   "100%"
  }));
</script>


<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev4.jpeg",
    alt:     "Chebyshev Note",
    width:   "100%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev55.jpeg",
    alt:     "Chebyshev Note",
    width:   "100%"
  }));
</script>

## In code form

Both in Recursive way. Take reference from the hand written note

### a. Polynomial Form

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote4.png",
    alt:     "Chebyshev Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev9.png",
    alt:     "Chebyshev Note",
    caption: "Chebyshev Polynomials | Theory & Practice by Laplace Academy",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev10.png",
    alt:     "Chebyshev Note",
    caption: "Chebyshev Polynomials | Theory & Practice by Laplace Academy",
    width:   "75%"
  }));
</script>

### b. Consine Form

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote6.png",
    alt:     "Chebyshev Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev11.png",
    alt:     "Chebyshev Note",
    caption: "Chebyshev Polynomials | Theory & Practice by Laplace Academy",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevnote6.jpeg",
    alt:     "Chebyshev Note",
    caption: "Chebyshev Polynomials | Theory & Practice by Laplace Academy",
    width:   "75%"
  }));
</script>

## Application of Chebyshev Interpolation in the Dengue Case Interpolation

**Given:**

Nepal's District 2023 year dengue outbreak data for each month 

*i.e 
Jan - 1234 case
Feb - 453 case
……………… Dec - 213 case*

And things to note:

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chev12.png",
    alt:     "Chebyshev Note",
    caption: "Chebyshev",
    width:   "80%"
  }));
</script>

F**k this can't be applicable dude. I myself is getting confuse.

And reason is below

> [!NOTE]
> *Chebyshev interpolation = method to construct a polynomial that approximates the original function well, especially at edges, without wild oscillations.
 The original function graph is "approximated" by this polynomial, not exactly reconstructed.*

Not applicable for our senario dude.

Hold on guys, though Chebyshev node can't be generated in our senario, using Chebyshev polynomials as a basis in our senerio can reduces round-off errors and instability in computation only which means using existing 12 months case data and using chebyshev polynomial instead of powers of x

What the F**k again. Dude my LLM is hallucinating yaar and forcing me too to hallucinate.

Ok, Lets do one thing, plot graph for normal polynomial built(power of x), linear interpolation, chebyshev interpolation and cublic spline too at once. 

Before that basic things need we, actually I am confused.

**a. Linear Interpolation**

As discussed above, straigth line joining two points is linear interpolation.

**b. Polynomial Interpolation**

A single polynomial function that passes a set of points (to each points). Lagrange Polynomial is one of the example of it. It introduce Runge oscillation

So, in our case with fixed monthy cases means equally spaced nodes, so no chebyshev nodes can be created so not applicable, even if we find chebyshev polynomial and plot, it is more like polynomial interpolation. That's why there plot are overlapping with clear runge osscilation at both edge.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevgraphimplement.png",
    alt:     "Chebyshev Note",
    caption: "Fig: Graph Plot of all interpolation",
    width:   "100%"
  }));
</script>


<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevcode1.png",
    alt:     "Chebyshev Note",
    caption: "Chebyshev Interpolation",
    width:   "90%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevcode2.png",
    alt:     "Chebyshev Note",
    caption: "Cubic Spline",
    width:   "90%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevcode3.png",
    alt:     "Chebyshev Note",
    caption: "Linear Interpolation",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevcode44.png",
    alt:     "Chebyshev Note",
    caption: "Polynomial Interpolation",
    width:   "90%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/chevcode5.png",
    alt:     "Chebyshev Note",
    caption: "Data Needed for Interpolation",
    width:   "90%"
  }));
</script>

## 3. Rational Spline

It is foundational concept in the computer graphics. The standard parametric splines use standard polynomial to define their shape and doesn't prefectly represent the conic sections like circle, ellipses, parabolas and hyperbola. 

Simply, rational function is the ratio of two polynomial.

Before diving into the rational spline, let's have a look into the Bezier curves and B-spline.

### Bezier Curves

 It is used in the computer graphics. The pen tool in the figma uses it.

For n+1 control points, Bezier curve is defined as 

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/rational.png",
    alt:     "Bezier Curve Note",
    caption: "Ref: LLM",
    width:   "75%"
  }));
</script>

This curve depends upon the control points. One point change can change whole structure of the curve.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/beziercurve.jpeg",
    alt:     "Bezier Curves",
    caption: "Bezier Curve",
    width:   "75%"
  }));
</script>

In points:
* Global control with single control point change 
* Curve passes through first and last points
* Entire curve lies within convex hull of control points
* degree is n, and control points are n+1

### B-spline

B-spline is also called basis spline which is combination of the piecewise polynomial (all with same degree )segments joined smoothly. It is controlled by control points and a knot vector. 

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/rational2.png",
    alt:     "B-spline Note",
    caption: "Ref: LLM",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/rationalnote1.jpeg",
    alt:     "B-spline Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/rationalnote2.jpeg",
    alt:     "B-spline Note",
    width:   "75%"
  }));
</script>

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../assets/interpolation/rationalnote3.jpeg",
    alt:     "B-spline Note",
    width:   "75%"
  }));
</script>
