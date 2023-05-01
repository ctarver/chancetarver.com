---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Sub-band digital predistortion for noncontiguous transmissions: Algorithm
  development and real-time prototype implementation'
subtitle: ''
summary: ''
authors:
- Mahmoud Abdelaziz
- admin
- Kaipeng Li
- Lauri Anttila
- Raul Martinez
- Mikko Valkama
- Joseph R Cavallaro
tags: []
categories: []
date: '2015-01-01'
lastmod: 2023-04-27T20:53:00-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: ["sub-band_DPD"]
publishDate: '2023-04-28T01:52:59.425904Z'
publication_types:
- '1'
abstract: 'This article proposes a novel, reduced complexity, block-adaptive digital predistortion (DPD) technique for mitigating the spurious emissions that occur when amplifying spectrally noncontiguous signals with a nonlinear power amplifier (PA). The introduced DPD solution is designed for real-time scenarios where a loop delay exists in the DPD system. By a proper choice of the DPD parameters, the technique is shown to be robust against arbitrarily long loop delays while not sacrificing DPD linearization performance and convergence speed. Moreover, the proposed DPD solution has lower complexity compared to previously proposed solutions in the literature while giving excellent linearization performance in terms of mitigating the spurious emissions. Real-time implementations of the algorithm on the WARP platform are developed, including considerations for several key trade-offs in the hardware design to balance the robustness, performance and complexity. The simulations and real-time FPGA experiments evidence excellent and robust performance in real-life situations with highly nonlinear PAs and arbitrary loop delays.'
publication: '*2015 49th Asilomar conference on signals, systems and computers*'
publication_short: 'Asilomar'
doi: 10.1109/ACSSC.2015.7421326
---
