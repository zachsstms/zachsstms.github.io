---
layout: page
title: The Usual(ish) Cylinder Project
description: Unsteady Flow around an Infinite Cylinder...with a bit of extra effort 🤷
img: assets/img/cylinderpicture.png
importance: 1
category: Academic/Work
---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cylinder_simulation_dashboard.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Flow around an infinite cylinder at $Re=1000$
</div>
For a Fluid Dynamics course, I looked a bit into the [Von-Kármán Vortex Street](https://en.wikipedia.org/wiki/Vortex_shedding) characteristics as a function of the Reynolds number ($Re$), which is defined by: 

$$ Re=\frac{UL}{\nu} $$

where $U$ and $L$ are respectively the flow velocity and geometric characteristic length and $\nu$ is the kinematic viscosity of the fluid. 

The Reynolds number effectively governs the proportion of a fluid's internal forces being driven by inertia compared to viscosity. The classic example comparison is between water and honey, with water having a much larger Reynolds number. Lower reynolds number fluids are dictated by viscous force interactions, which work to dissipate turbulence in the fluid---restricting vorticity, which is defined by: 

$$ \omega=\vec{\nabla} \times \vec{U} $$

Where $\omega$ corresponds to a fluid's capacity to rotate (swirl). 

The vortex street behind a bluff body like an infinite aspect-ratio cylinder (circle in two dimensions) is created when small perturbations to the flow manifest themselves and compound. The mathematical basis for this is given in the incompressible [Navier-Stokes](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations) equation (neglecting gravity and buoyancy and body forces):

$$ \begin{equation}
\underbrace{\frac{\partial \mathbf{u}}{\partial t}}_{\text{Unsteady / Local Acceleration}} + \underbrace{(\mathbf{u} \cdot \nabla)\mathbf{u}}_{\text{Convective / Advection Term}} = \underbrace{-\frac{1}{\rho}\nabla p}_{\text{Pressure Gradient}} + \underbrace{\nu \nabla^2 \mathbf{u}}_{\text{Viscous Diffusion}}
\end{equation}
 $$


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
