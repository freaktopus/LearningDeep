# Interpolation Techniques

Interpolation is an estimation. It's just about estimating the unknown value that comes either inside or outside the interval.

** Linear Interpolation? **

If the point are estimated such that between two end point there form a line then we called it Linear Interpoation

Remember there is another word extrapolation which means the estimation of the values beyond the range of the data.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:     "../../",
    alt:     "Linear Interpolation",
    caption: "Fig: Linear Interpolation (lines formation between intervals)",
    width:   "75%"
  }));
</script>



## Cubic Spline interpolation. 

In short points, things to note in order to understand Cubic Spline Interpolation :

1. Each interval have cubic polynomial function mapping.
1. Cubic polynomial : ax³+bx²+cx+d
1. For two sequential interval functions: Funcitons are equal for a interior points, it's first derivative is also equal and it's second derivative is also equal. [ Means Continuity]
1. Extreme first and last points have second derivative zero.
Cubic Spline Interpolation

**Benefits of Cubic Spline and Bird Eye view**

Ref: Cubic Spline Interpolation Theory | Numerical Methods {YT: StudySession}

### Derivation of Cubic Interpolation

Ref: Cubic Spline Interpolation Theory | Numerical Methods {YT: StudySession}

Things to note from the above screenshot:
1. 4 unknown coefficient need to be solved
1. x0,……xn, for each point x-axis values
1. n+1 points, then n polynomial function 
eg: above 3 point and 2 polynomial function for intervals 
So, 4 unknown coefficeint to be solved, we need n*4 equation ~ 4n
1. Interior points: (n+1)-2 (need to exclude extreme points)= n-1
Each interior points have 2 polynomial equation and there are n polynomial from point 3 - So, 2*n equations from known points

To solve we use cubic polynomial in this format:

Si​(x)=ai​+bi​(x−xi​)+ci​(x−xi​)²+di​(x−xi​)³

Above points in below 2 screenshot which include same as above 4 points

Constraints:

Ref: LLM

Ref: Cubic Spline Interpolation Theory | Numerical Methods {YT: StudySession}

Total equation that we can form are :

2n+(n-1)+(n-1)+2
= 4n-2+2
= 4n

Hence we can now plug all calculated known data 4n equations to get 4n equation for 4 unknown variables. And we solve it.

### Application - Dengue Outbreak Interploation

Given:
Nepal's District 2023 year dengue outbreak data for each month 
i.e 
Jan - 1234 case
Feb - 453 case
……………… Dec - 213 case
I want to interpolate in such way that I need to find out weekly interpolated data (i.e weekly estimation case from month data)
Solution: Using Cubic Spline, 
Python Code for CS ImplementationHere, 
week_positions - created evenly spaced 52 points somthing look like [1.00, 1.21, 1.42, 1.63, …, 11.58, 11.79, 12.00]
bc_type="natural" - second derivative of jan and dec is 0
cs - is the function for polynonimal (to estimate the case for given point which is x) 
cs behaves like a mathematical function: cs(x)
Screenshot of the Linear and Cubic Spline Interpolation Graph of Tanahu District Dengue case 2023Benefits of using cubic spline in this application: (LLM)
Smooth and Natural Curve
Produces a smooth trend without sharp corners between data points.
Realistic Disease Pattern Modeling
Captures gradual rise and fall of outbreaks better than straight-line interpolation.
Continuity of Growth Rate
Maintains continuous first and second derivatives (smooth change in infection rate).
Accurate Within Data Range
Provides reliable estimates inside the observed time period (Jan–Dec).
Converts Monthly to Weekly Easily
Transforms discrete monthly data into a continuous function for weekly estimation.
Avoids High-Degree Polynomial Oscillation
Prevents extreme fluctuations seen in single high-order polynomial interpolation.

Rough Notes: 

---

Chebyshev Interpolation
Basic idea of Chebyshev Interpolation:
Uses nodes with unequal distance to each other known to be chebyshev nodes.
Node is decided from the unit circle with equally angled division to the semi circle 
Nodes are taken from cosine formula
Chebyshev polynomial is used to form a approx function

Ref: LLM5. Approx function is linear combination of C.polynomial
Ref: LLM6. C.polynomial is bounded on [-1,1]
Take a look into the consise note below for basics.
How to interpolate using Chebyshev Polynomial?

Let's do it step by step:
Given -> f(x) function where x on bound [-1,1]
To find -> An approximate polynomial function to approx original function f(x)
Step 1:
Finding chebyshev nodes using chebyshev polynomial
i.e from Tn+1​(x)=cos((n+1)arccosx)
with roots when Tn+1(x)=0
Solving we get 
Chebyshev nodes are calculated using the formula :
Source: LLMNote: Nodes means x-axis value
Step 2:
Find all yk value for all C.nodes (ie x value got from step 1)
Step 3:
(Method 1): Using Lagrange interpolation to guarantee that all the found nodes passes through the approx polynomial function Pn(xk)
Ref: LLM(Method  2): Using Chebyshev series representation
Ref: LLMStep 3:
Coefficients are computed using following formulas and condition:
( I have not understood the math so understand yourself, I will do later)
Ref: LLMStep 4: 
Interpolation polynomial ( approx function) will be 
(I have not understood the math so understand yourself, I will do later)
But need to understand that after getting general form of the polynomial in step 2; it is futher calculated to get evaluating formula that is in below llm reference
Ref: LLMStep 5 (optional):
Calculating error using following formula
Ref: LLMIn short:
Choose degree n -> n means n+1 coefficients & n+1 nodes
Compute Chebyshev nodes i.e xk
find yk
Find chebyshev coefficients cj and construct polynomial ie Pn(x)
Approx function: f(x) ~ Pn(x) using explicit chebyshev series form formula which is used to calculate yk for any xk

In code form:
Both in Recursive way. Take reference from the hand written note
a. Polynomial Form
Chebyshev Polynomials | Theory & Practice | YT: Laplace AcademyChebyshev Polynomials | Theory & Practice | YT: Laplace Academyb. Cosine Form
Chebyshev Polynomials | Theory & Practice | YT: Laplace Academy

Application of Chebyshev Interpolation in the Dengue Case Interpolation
Given:
Nepal's District 2023 year dengue outbreak data for each month 
i.e 
Jan - 1234 case
Feb - 453 case
……………… Dec - 213 case
And things to note:
Ref: LLMF**k this can't be applicable dude. I myself is getting confuse.
And reason is below
Chebyshev interpolation = method to construct a polynomial that approximates the original function well, especially at edges, without wild oscillations.
 The original function graph is "approximated" by this polynomial, not exactly reconstructed.
Not applicable for our senario dude.
Hold on guys, though Chebyshev node can't be generated in our senario, using Chebyshev polynomials as a basis in our senerio can reduces round-off errors and instability in computation only which means using existing 12 months case data and using chebyshev polynomial instead of powers of x
What the F**k again. Dude my LLM is hallucinating yaar and forcing me too to hallucinate.
Ok, Lets do one thing, plot graph for normal polynomial built(power of x), linear interpolation, chebyshev interpolation and cublic spline too at once. 
Before that basic things need we, actually I am confused.
a. Linear Interpolation
As discussed above, straigth line joining two points is linear interpolation.
b. Polynomial Interpolation
A single polynomial function that passes a set of points (to each points). Lagrange Polynomial is one of the example of it. It introduce Runge oscillation
So, in our case with fixed monthy cases means equally spaced nodes, so no chebyshev nodes can be created so not applicable, even if we find chebyshev polynomial and plot, it is more like polynomial interpolation. That's why there plot are overlapping with clear runge osscilation at both edge.
Chebyshev InterpolationCubic SplineLinear InterpolationPolynomial InterpolationData Needed for Interpolation

---

Rational Spline
It is foundational concept in the computer graphics. The standard parametric splines use standard polynomial to define their shape and doesn't prefectly represent the conic sections like circle, ellipses, parabolas and hyperbola. 
Simply, rational function is the ratio of two polynomial.
Before diving into the rational spline, let's have a look into the Bezier curves and B-spline.
Bezier Curves
 It is used in the computer graphics. The pen tool in the figma uses it.
For n+1 control points, Bezier curve is defined as 
ref: LLMThis curve depends upon the control points. One point change can change whole structure of the curve. 
In points:
Global control with single control point change 
Curve passes through first and last points
Entire curve lies within convex hull of control points
degree is n, and control points are n+1

B-spline
B-spline is also called basis spline which is combination of the piecewise polynomial (all with same degree )segments joined smoothly. It is controlled by control points and a knot vector. 
ref: LLM
