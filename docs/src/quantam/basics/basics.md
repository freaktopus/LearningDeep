# Basics of Quantum Computing

In Quantum Computing, some of the basic terms that needs to be understood are:

- Qbits
- Superposition
- Entanglement
- Decoherence
- Interference
- Measurement
- Gates

## Qbits

They are similar to the bits in classical computing, but is in quantum computing. It is the superposition of 1 and 0 but not literally 1 and 0 both (also represented as linear combination of 1 and 0 possibility).

It has amplitude and phase. But when measured, it's value is colapsed at 1 or 0.

Qbits have possibility of having 1 or 0 based on the probabilty compution using ∣α∣^2 and ∣β∣^2

## Superpostion

It is linear combination of basis state(1 and 0),output being 1 and 0 after measuring a qbit.

<script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:      '../../assets/quantam/basics/linearcombination.png',
    alt:     "Linear Combination",
    caption: "Equation: State of Qbit",
    width:   "20%"
  }));
</script>

Here, the RHS is called as ket psi which tells the state of the Qbit. This is a wave-like state, not a classical value. And LHS is the linear combination of amplitudes corresponding to basis states to become the 0 or 1 bit after measurement.

Qbit can be in 1,0 or superpostion of 1 and 0. If there are 4 Qbits then 2^4 basic state which is 16 in this case, 0000,0001,0010,...,1111.

Before measurement, there above equation of state of Qbit is what represent the state of the Qbit. But, after measurement you get only one result (either 0000,0001,...., 1111). The state collapse to classical bits. It doesn;t mean giving all 16 outputs at the same time.

Measurement is like forcing quantum system to produce a classical outcome rather seeing the outcome as the wave.

Superpostion can't be observed directly since any measurement destroys it which called decoherence.

Amplitude is α and β but not 1 and 0. They are complex numbers which represents wave strength and phase but not probabilities.

> [!NOTE]
> amplitude (α and β)-> “how much wave exists” , They are also called probability weight
> probability (|α|^2 and |β|^2)-> “chance of outcome”

There above in note, we see absolute sign with square. That absolute is taking about the magnitude of that complex number (α and β) and squaring to get real value as probability.

Phase of state of Qbit is there in before measurement but after measurement, phase information is lost, rather it only reveals one classical outcome.

Manipulating amplitude means changing the value of α and β which is done using "quantum Gates" like hadamard, CNOT. Either increase some amplitudes, decrease others or change phase.

The idea of storing classical values is, that eg. 4 bits quantum system don't store 16 classical values, but it stores 16 amplitudes.

## Interference

Think it as waves, that can be added.

++ = biggerwave -> Constructive interference
++(-) = 0 (cancel the waves) -> Destructive interference

Wrong answers are cancel out while correct answers gets amplified.

_If so than how to identify the wrong answer and write answer?_

It is mentioned that algorithms are there to do so. Also, phase are not assigned rather they are controlled by quantum gate.  
e.g.

- Hadamard gate → creates + and − superpositions
- Phase gate → adds phase shift e^iθ
- Oracle (in Grover’s algorithm) → flips phase of “marked” state

**Example idea (Grover-style intuition)**

Suppose correct answer = 1010

Oracle does:  
∣1010⟩→−∣1010⟩  
flips sign (phase = π)

In quantum computing, correct/wrong answers are not labeled. Instead, algorithm manupulate phases so that interfernce patterns amplify desired states (correct answer) and surppress other (wrong answer).

We only have a function which is reflected by the correct state. And this helps in amplifying the correct state.

**Simple analogy**

Imagine:

16 people in a dark room (states) and you cannot see them directly, but you have a rule:

“only correct person responds to a signal”

And you sen wave resulting correct person reflects differently (phase flip) and waves interfere which makes correct one becomes strongest echo

## Entanglement

This is the ability of qubits to correlate their state with other Qbits. When an entangled Qbit is measured, its state become strongly correlated to other entangled Qbits which advantages on determining information immediately.

## Decoherence

It is the process in which the quantum state collapse into a non-quantum state. This happens when quantum system is measured or makes a system behave as if measured (loses quantum behaviour(superposition + phase relations) when intereact with the environment). It then behaves like a classical object.

Decoherence affects quantum behavior, not the rule of measurement itself.

**Quantam measurement problem**

We can't measure the full quantum state. The fundamental rule of nature is quantum state evolves smoothtly (wave-like) and measurement force a single outcome

Think of a spinning coin:

quantum state = coin spinning in air (mixture of heads & tails behavior)  
measurement = catching it → only heads OR tails

# Related Concepts on Quantum Mechanics & Computing

## Heisenberg's Uncertainity

It is represented by this formula:

 <script image_tool>
  window.addEventListener("load", () => ZoomImg({
    src:      '../../assets/quantam/basics/heisen.png',
    caption: "Fig: Heisenberg's Uncertainity Principle Equation",
    width:   "20%"
  }));
</script>

Things to note that momentum is the inertia of motion. Simply think of it as p = m \* v

Example to understand it's affect are

- Bullet with less mass but larger velocity giving high momentum (damage to second object in contact)
- Larger ship with small velocity also giving high momentum (damage to second object in contact)

Interesting to know that, electron mass is extremely small so it can't damage the second object in contact.

And also electron mass is constant, which mean only velocity is the variable that can be manipulated. Energey is the thing that cause the damage. Energy jumps from eV → MeV during the acceleration of electron (in nuclear plant). That’s a million times increase in energy.

Photon has speed of light then why it doesn't damage.

It is because you are dump. See the defination of the both photon and electron.

electron: mass + velocity → kinetic energy (E = 1/2 (m\* v^2))
photon: no mass → energy from frequency (E = hf)

Here, comes to a concept of quantum state. It can be imagined as a wave in water, where position is sharp bump and momentum is hidden mixture of wave components.

Fuccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

Need to understand the Infamous Double Slit Experiment. Where tiny electrons acts like a wave. Crazy part is that a single atom acts like a wave, and get an interference pattern (many bright and dark stripes).