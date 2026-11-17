---
layout: page
title: Running with the Wind
description: A low-fidelity cheatsheet for soaring pilots who fly in the lee.
img: assets/img/Rotor_project/collapse.webp
importance: 2
category: Personal
---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Rotor_Cheatsheet_vids/collapse.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Inducing a collapse on a paraglider in a controlled environment
</div>

## Introduction 

--- 

Paragliding is an interesting sport for a variety of reasons, however, much to the chagrin of a loving parent, one of those reasons is a certain _flexibility_ of the flying surface. 

Yes, paragliders deform. They deform a lot. In fact, manufacturers generally designate paragliders to reside in four performance and "collapsibility" categories: A, B, C, and D wings. Paragliders are a ram-air flying apparatus, which means that their aerodynamic structure is maintained by the force of the air entering the canopy through small cell openings. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/cell_openings.webp" class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ram-air cell openings on a paraglider provide aerodynamic shaping
</div>


Air that enters the cell openings expands within the sewn fabric---the internal pressure ultimately forcing the fabric to take the shape of a conventional wing with airfoil shaping, taper ratio, and lift-distribution optimization. As you can imagine, maintaining internal pressure is necessary for both the performance of the paraglider and the safety of the pilot (non-lifting fabric is just something cool to look at while you plummet). 

Paragliders strike a balance between securing internal pressure with efficient cell openings and minimizing the drag penalty of the ram air system (the cell openings are effectively an air-scooper). In essence, higher performing wings (C's and D's), have smaller openings to minimize drag, while sacrificing the "inflatability" or internal pressure consistency. 

Alternatively, higher performing wings enact another tradeoff: aspect ratio. The drag of a lifting surface is given as: 

$$ D = q S \left( \underbrace{C_{D,0}}_{\text{Parasitic Drag}} + \underbrace{\frac{C_L^2}{\pi e AR}}_{\text{Induced Drag}} \right) $$

where $q$ is the dynamic pressure, $S$ is the wing surface area, $C_L$ is the wing's lift coefficient, and $e$ is the wing's [Oswald efficiency](https://en.wikipedia.org/wiki/Oswald_efficiency_number). For a paragliding wing, the parasitic drag is effectively the drag penalty of the wing flying unloaded in the air ($C_{D,0}$, which is largely governed by the size of the cell-openings). However, the induced drag is the drag penalty associated with generating lift. When a person loads a glider with their weight, the air will have a tendency to wrap around the tips of the glider itself, causing low pressure vorticies behind the wing---being the physical manifestation of the induced drag. This was a pretty basic explanation, feel free to learn more [here (click me).](https://en.wikipedia.org/wiki/Lift-induced_drag)

Paraglider manufacturers increase the aspect ratio $AR$ to decrease the wing's induced drag by making it more difficult for the air to wrap around the glider tips. In practice, this results in wings that are long and skinny---resembling a snake more than a block. Increasing the aspect ratio vastly improves wing performance. However, it also (you guessed it) makes the wing more susceptable to collapses, as the wing behavior is more dynamic. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/aspect ratio.webp" class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" zoomable=true %}
    </div>
</div>
<div class="caption">
    A comparison of aspect ratio for airplanes (the same principle is true for paragliders)
</div>

Thus, as you can see, there is a pretty direct tradeoff between paraglider performance and passive (no pilot input) safety. As paragliding pilots chase larger objectives, they gravitate towards wings that have better glide and top speed performance. In practice, this results in pilots flying wings that have small cell openings and high aspect ratios. 

"Ok cool, but what actually causes collapses?!"

"The atmosphere is hella active yo!" 

Nonsense aside, the atmosphere _is_ incredibly dynamic, largely driven by changes in pressure and temperature. To avoid drifting out of scope for this little project, I'll quickly touch on two primary phenomona: 

1. Lapse rates
2. Object based turbulence

A lapse rate refers to the temperature change of the air as a function of altitude (usually around $9.8 ^\circ C$ per kilometer of altitude). The lapse rate is what drives thermals, which are parcel-columns of rising air, and are ultimatley what paragliders, sailplanes, and birds use to gain altitude. I could talk about thermals all day, but for now, [read this article if interested](https://en.wikipedia.org/wiki/Thermal).

Object based turbulence on the other hand is quite simple: when the wind encounters an obstacle or terrain, it gets turbulent, as the air mass behind the feature has a lower pressure than the windward side. We all can intuit this: if it's windy out, try hiding behind a building. The wind will feel as though it's blocked, but some still gets around! You're feeling the turbulence in the lee-side of the building ([click here to learn more](https://en.wikipedia.org/wiki/Turbulence)). 

Both thermic and terrain-based turbulence can (and often does) cause paraglider collapses. As such, whenever pilots elect to fly in the `lee-side`, they are taking on the most `risk of collapse`. Pilots fly in the lee-side of the wind to chase sun-exposure or stronger triggers for thermals. In fact, most pilots seeking to fly far rely on lee-side flying ([see here](https://xcmag.com/fly-better/paragliding-techniques-paramotoring-skills/flying-in-the-lee/)). As such, I thought it would be cool to study the limits of this to try and quantify the risk margins. 

---

## Methodology

--- 

To do so, I went back to my old friend `Waterlily.jl` which was used over in the [cylinder project](/projects/CylinderProject.md). The end goal is to perform a two dimensional study to determine how high and how close to a ridgeline pilots should operate to remain safe for a range of wind speeds and terrain angles. 

The first step was to paramaterize a hill such that `Waterlily.jl` can interperet the geometry. To do so, I used a cosine-squared representation of a hill, being: 

$$ 
h(x)=H\cos^2\left(\frac{\pi(x-x_0)}{2W}\right),
\qquad |x-x_0|\le W
$$ 

where $H$ is hill height, $x_0$ is the hill center, and $W$ is the hill half width. This parameterization was motivated by a paper conducting a similar study, but experimentally ([click here for the link!](https://www.sciencedirect.com/science/article/pii/S2352340925009813#bib0011)).

From the hill parameterization, we can note that the parameter of "steepness" can be given by

$$ s=\frac{H}{W} $$

where a large $s$ implies that the hill is tall relative to its width. As mentioned in the [cylinder project](/_projects/CylinderProject.md), `Waterlily.jl` requires a Reynolds number for computation. The Reynolds number changes as the characteristic size of the hill and velocity changes. For reference: 

$$ Re=\frac{UH}{\nu} $$

I used the hill height to be the characteristic length parameter for conceptual simplicity. One could use the hill width as well, and both would scale appropriately if used consistently because they are coupled through the "steepness" parameter. 

<div class="card my-3 border-0 shadow-sm" style="background-color: #ffeef4; color: #1a1a1a; border-left: 5px solid #e83e8c !important; border-radius: 8px;">
  <div class="card-body py-3 px-4">
    <p class="card-text mb-0">
      <strong>Note:</strong> Waterlily.jl realistically cannot solve actual mountain-scale flow because of the inherent turbulence resolution. I want to run this on my laptop! Because mountains can yield $Re$ values in the $1 \times 10^8$ magnitude range, I simplify the problem with a normalized effective velocity defined below.
    </p>
  </div>
</div>


The kinematic viscosity of air is normally around $\nu \approx 1.5\times10^{-5}\\mathrm{m^2/s}$. I made a decision to define an effective kinematic viscosity at $\nu=0.25\mathrm{m^2/s}\$. In practice, this is representing the unresolved turbulent mixing in the atmosphere as a larger momentum diffusion. Realistically, the air is not this viscous, but I'm really looking at a terrain and wind speed sweep, so I don't mind forcing the air to take on more viscosity as long as it remains constant.

One challenge is defining what "collapse-inducing turbulence" is in a paragliding context. I decided to examine vorticity, which is defined as the curl of the velocity vector: 

$$ \omega = \nabla \times \vec{U} =\frac{\partial u_y}{\partial x}-\frac{\partial u_x}{\partial y} $$ 

which has units of $s^{-1}$. To non-dimensionalze, the velocity and characteristic length were used: 

$$ \omega^*=\frac{\omega H}{U} $$

For simplicity's sake, $\omega^*$ governs the localized "rotationality" of the air. If the airmass has a large normalized vorticity at a point, then that point features significant air circulation and turbulence---the kind of thing that might collapse a paraglider. For a range of wind velocities $U$ and hill heights $H$, I screened "safe" zones using the following:

$$
\begin{gathered}
z \geq h(x) \\
u_x \geq 0.9U \\
|\omega^*| \leq 0.15
\end{gathered}
$$

The first restriction is logical: in order to fly you must be above the ground. The second restriction is a judgement regarding the classification of the region directly behind the hill as being unsafe (flow is severely circulating, such that the direction is significantly altered). Pilots generally stay away from the deep lee-side, and I want to focus on the liminal boundary between safe and unsafe. For the third, I elected to consider vorticity values above $\lvert\omega^{*}\rvert=0.15$ as too turbulent for flight. After a sensitivity sweep, it appeared to be a value that provided sufficient resolution for my purposes and doesn't have physical meaning!

--- 

## Results and Discussion

--- 

The test matrix analyzed two wind speeds and four hill steepnesses: 

$$
\begin{gathered}
\lvert \vec{U} \rvert = [2, 5] \\
H / W = [0.5, 1, 2, 3]
\end{gathered}
$$

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Rotor_Cheatsheet_vids/flow.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    5 m/s flow moving over a hill with 0.5 steepness as a function of convective time
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/vorticity_snapshot_matrix1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Normalized vorticity plots
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/feasible_region_matrix1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Identifying a "safe" region derived from the vorticity concentration
</div>

div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/vorticity_snapshot_matrix2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Normalized vorticity plots
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/feasible_region_matrix2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Identifying a "safe" region derived from the vorticity concentration
</div>


`Discussion coming soon`






---

## Limitations and Potential Next Steps 

---

There are some clear faults in the work done so far. Of course, the glaring limitation is `Waterlily.jl` itself, which is marketed as a lightweight low-Reynold solver...most definitely not an atmospheric workhorse 😅. Nonetheless, it's fun and easy to customize, which is why I used it in the first place. To get the solver to provide some useful results, I had to clamp the Reynolds number order of magnitude ($Re \leq 1 \times 10^6$). As previously mentioned, this involved simulating the air at a higher-than-realistic viscosity. Moreover, this analysis is two-dimensional! The reason for this was computational expense---extending to three-dimensions could take a day or two to resolve, only for me to spot an error---too tedious! The goal here was to provide some useful results quickly, not to dive deep into computational efficiency and complexity. However, in the real world, turbulent flow around ridges and mountains is incredibly unsteady and gusty, meaning that three-dimensional effects are very much relevant. To that end, in the introduction I mentioned lapse rates! In the real world, temperature gradients drive dynamic changes to the hydrostatic equilibrium of the atmosphere. Sometimes, these thermic updrafts can be strong enough to block strong wind gusts. Pilots can predict the strength of these "blocks" with forecasting tools that have a layer for a [bouyancy to shear ratio](https://www.cfinotebook.net/notebook/aircraft-operations/gliding/thermal-soaring). 

To summarize, I would say the analysis done here has four primary shortcomings: 
1. 2D Approximation of 3D effects
2. Doesn't take into account bouyant/thermic forces
3. Resolution fails to capture eddies that are present in realistic, extremely turbulent air
4. "Safe zone" logic is subjective 

Nonetheless, this was a cool project that enabled me to grapple with some common paragliding concepts, and I think there could be some interesting future work in this area that address some of the stated inaccuracies. I think a higher-fidelity CFD study on a real world `.stl` topographic file could be compelling. For example, pilots living on the Colorado Front Range (Boulder, Golden, etc.) constantly fly in thermically driven easterly wind that fights against prevailing westerly winds. In other words, pilots in that region constantly fly in the lee-side. It would be interesting (and helpful!?) to run a study taking into account the thermic bouyancy effectiveness in "blocking" the west wind, or modeling the conditions that produce higher-risk situations. It would be computationally expensive, which makes me quite hesitant to pursue such a project, especially given my distrust in myself to get things working the first time around. 

Alternatively, it would be interesting to get some flight test data...but hey I'd rather just `fly` for `fun` 🤘
