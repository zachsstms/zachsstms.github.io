---
layout: page
title: Survivable or Nah?!
description: A low-fidelity cheetsheet for soaring pilots electing to fly in rotor.
img: assets/img/Rotor_project/collapse.webp
importance: 1
category: Personal
---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/collapse.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Inducing a collapse on a paraglider
</div>

Paragliding is an interesting sport for a variety of reasons, however, much to the chagrin of a loving parent, one of those reasons is a certain _flexibility_ of the flying surface. 

Yes, paragliders deform. They deform a lot. In fact, manufacturers of paragliders generally designate paragliders to reside in four performance categories: A, B, C, and D wings. Paragliders are a ram-air flying apparatus, which means that their aerodynamic structure is maintained by the force of the air entering the canopy through small cell openings. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/cell_openings.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ram-air cell openings on a paraglider provide aerodynamic shaping
</div>

Air that enters the cell openings expands within the sewn fabric---the internal pressure ultimately forcing the fabric to take the shape of a conventional wing with airfoil shaping, taper ratio, and lift-distribution optimization. As you can imagine, maintaining internal pressure is necessary for both the performance of the paraglider and the safety of the pilot (non-lifting fabric is just something cool to look at while you plummet). 

Paragliders strike a balance between securing internal pressure with efficient cell openings and minimizing the drag penalty of the ram air system (the cell openings are effectively an air-scooper). In essence, higher performing wings (C's and D's), have smaller openings to minimize drag, while sacrificing the "inflatability" or internal pressure consistency. 

Alternatively, higher performing wings enact another tradeoff: aspect ratio. The drag of a lifting surface is given as: 

$$ D = q S \left[ \underbrace{C_{D,0}}_{\text{Parasitic Drag}} + \underbrace{\frac{C_L^2}{\pi e AR}}_{\text{Induced Drag}} \right] $$

For a paragliding wing, the parasitic drag is effectively the drag penalty of the wing flying unloaded in the air (largely governed by the size of the cell-openings). However, the induced drag is the drag penalty associated with generating lift. When a person loads a glider with their weight, the air will have a tendency to wrap around the glider itself, causing low pressure vorticies behind the wing---being the physical manifestation of the induced drag. This was a pretty basic explanation, feel free to learn more [here (click me).](https://en.wikipedia.org/wiki/Lift-induced_drag)

Paraglider manufacturers increase the aspect ratio ($AR$) to decrease the wing's induced drag. In practice, this results in wings that are long and skinny---resembling a snake more than a block. Increasing the aspect ratio vastly improves wing performance. However, it also (you guessed it) makes the wing more susceptable to collapses, as the wing behavior is more dynamic. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Rotor_project/aspect ratio.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A comparison of aspect ratio for airplanes (the same principle is true for paragliders)
</div>

Thus, as you can see, there is a pretty direct tradeoff between paraglider performance and passive (no pilot input) safety. As paragliding pilots chase larger objectives, they gravitate towards wings that have better glide and top speed performance. In practice, this results in pilots flying wings that have small cell openings and high aspect ratios. 

"Ok cool, but what actually causes collapses?!"

"The atmosphere is hella active yo!" 

Gen Z nonsense aside, the atmosphere _is_ incredibly dynamic, largely driven by changes in pressure and temperature. To avoid drifting out of scope for this little project, I'll quickly touch on two primary phenomona: 

1. Lapse rates
2. Object based turbulence

A lapse rate refers to the temperature change of the air as a function of altitude (usually around $9.8 \degrees C$ per kilometer of altitude). The lapse rate is what drives thermals, which are parcel-columns of rising air, and are ultimatley what paragliders, sailplanes, and birds use to gain altitude. I could talk about thermals all day, but for now, [read this article if interested](https://en.wikipedia.org/wiki/Thermal).

Object based turbulence on the other hand is quite simple: when the wind encounters an obstacle or terrain, it gets turbulent, as the air mass behind the feature has a lower pressure than the windward side. We all can intuit this: if it's windy out, try hiding behind a building. The wind will feel as though it blocked, but some still gets through! You're feeling the turbulence in the lee-side of the building ([click here to learn more)](https://en.wikipedia.org/wiki/Turbulence)).

Both thermic and terrain-based turbulence can (and often does) cause paraglider collapses. As such, whenever pilots elect to fly in the `lee-side`, they are taking on the most `risk of collapse`. Pilots fly in the lee-side of the wind to chase sun-exposure or stronger triggers for thermals. In fact, most pilots seeking to fly far rely on lee-side flying ([see here](https://xcmag.com/fly-better/paragliding-techniques-paramotoring-skills/flying-in-the-lee/)). As such, I thought it would be cool to study the limits of this to try and quantify the risk margins. 

--- 






<div class="card my-3">
  <div class="card-body">
    <p class="card-text">
      
    </p>
  </div>
</div>







