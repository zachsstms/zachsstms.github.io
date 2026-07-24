---
layout: page
title: The Usual(ish) Cylinder Project
description: Unsteady Flow around an Infinite Cylinder...with a bit of extra effort 🤷
img: assets/img/cylinder_project/cylinderpicture.png
importance: 1
category: Personal
---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cylinder_simulation_dashboard.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Flow around an infinite cylinder at $Re=1000$
</div>
In my Junior year of college for a Fluid Dynamics class, I looked a bit into the [Von-Kármán Vortex Street](https://en.wikipedia.org/wiki/Vortex_shedding) characteristics about an infinite aspect-ratio cylinder as a function of the Reynolds number $Re$, which is defined by: 

$$ Re=\frac{UL}{\nu} $$

where $U$ and $L$ are respectively the flow velocity and geometric characteristic length and $\nu$ is the kinematic viscosity of the fluid. 

The Reynolds number effectively governs the proportion of a fluid's internal forces being driven by inertia compared to viscosity. The classic example comparison is between water and honey, with water having a much larger Reynolds number. Lower reynolds number fluids are dictated by viscous force interactions, which work to dissipate turbulence in the fluid---restricting vorticity, which is defined by: 

$$ \omega=\vec{\nabla} \times \vec{U} $$

Where $\omega$ corresponds to a fluid's capacity to rotate (swirl). 

The vortex street behind a bluff body like an infinite aspect-ratio cylinder (circle in two dimensions) is created when small perturbations to the flow manifest themselves and compound. The mathematical basis for this is given in the incompressible [Navier-Stokes](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations) equation (neglecting gravity, buoyancy, and body forces):

$$ 
\underbrace{\frac{\partial \mathbf{U}}{\partial t}}_{\text{Unsteady Acceleration}} + \underbrace{(\mathbf{U} \cdot \nabla)\mathbf{U}}_{\text{Convective Term}} = \underbrace{-\frac{1}{\rho}\nabla p}_{\text{Pressure Gradient}} + \underbrace{\nu \nabla^2 \mathbf{U}}_{\text{Viscous Diffusion}}
 $$

In other words, when flow moves past a non-streamlined shape such as a circle, small disturbances from the non-linear $(\mathbf{U} \cdot \nabla)\mathbf{U}$ term leades to small changes in pressure which drive changes in velocity. This makes the pressure on one side of the circle slightly different from the other---driving accelerations to the fluid. For low Reynold flows, the $\nu \nabla^2 \mathbf{U}$ term works as a viscous dampener, wanting to prevent flow disturbances (which is why honey can't be stirred). However, if the Reynolds number increases, the dampening is overcome by the flow's inertia, in which the non-linear terms function as what we refer to as [turbulence](https://en.wikipedia.org/wiki/Turbulence). 

It is in this regime that the flow begins to show periodic oscillations, as the flow chases low pressure regions, and where the ensuing motion leads to new ones forming. This pattern leads to lower and lower pressure regions and more rapid accelerations to account for the gradients. Yet, the high pressure from the incoming flow clamps the sinusoidal pattern from getting more chaotic, limiting the low pressure regions (center of shed vortices) to be mostly behind the circle, which works to dampen the range of the lift coefficient $C_l$.

<div class="card my-3">
  <div class="card-body">
    <p class="card-text">
      The takeaway? Flow behind a bluff body like a circle sheds vortices periodically. The pattern gets larger until it encounters resistance by the freestream flow coming in. 
    </p>
  </div>
</div>

Any change in flow turbulence thus changes the characteristics of the vortex street, namely the amplitude and frequency of the vortex shedding. To quantitatively analyze the behavior of the vortex street the non-dimensional [Strouhal number](https://en.wikipedia.org/wiki/Strouhal_number)is used, denoted as

$$ St = \frac{fL}{U} $$

where $f$ is the vortex shedding frequency. The Strouhal number is implemented to standardize the shedding frequency for a range of flow speeds and cylinder sizes. The aim of this project is to take a quantitative look into the relationship between the Strouhal number and the Reynolds number. 
___

This was the focus of the `report below`, which delves more into `waterlily.jl` and the relationship between shedding behavior and Reynolds number. For this report, I used `waterlily.jl` to take snapshots of the vorticity field at a steady state, while logging a time series of the lift coefficient $C_l$. The results captured the key relationships, and are discussed in the document. It is worth noting that the $C_l$ results are slightly inaccurate. In the Appendix, you'll note that I used: 
```Julia
function get_forces!(sim,t)
    sim_step!(sim,t,remeasure=false)
    force = WaterLily.pressure_force(sim)
    force./(0.5*sim.L*sim.U^2) # normalize for coefficients
end
```
This is slightly inaccurate, as `last.(forces)` later on only pulls the normalized lift coefficient as a result of pressure forces, which neglect viscous forces on the cylinder. This is relatively minor, as the circle's bluff (non-streamlined) geometry imply that pressure forces dominate. To qualitatively show this, consider a simulation at $Re=120$:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cylinder_project/Comparison_pressure_vs_total.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Considering the importance of the viscous forces on the cylinder at $Re=20$
</div>


Ok. So from the perhaps confusing and brief background above, the expectation is subsequently that the vortex shedding frequency must change with respect to changes in turbulence. Let's prove it with some visuals that should make everything understandable.










`This one is in progress`

_Note: If you're checking this out on mobile, the embedded `pdf` gets a little sluggish. I suggest just clicking the `Download Report PDF` button._
<!-- Download Button Container -->
<div class="text-center mt-3 mb-4">
    <a href="{{ 'assets/pdf/cylinderstudy.pdf' | relative_url }}" class="btn btn-sm z-depth-1" download="cylinderstudy.pdf">
        <i class="fas fa-file-download"></i> Download Report PDF
    </a>
</div>
<iframe src="{{ 'assets/pdf/cylinderstudy.pdf' | relative_url }}" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: 
    <a href="{{ 'assets/pdf/cylinderstudy.pdf' | relative_url }}">Download PDF</a>.
</iframe>
