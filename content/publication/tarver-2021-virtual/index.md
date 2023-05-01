---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Virtual DPD Neural Network Predistortion for OFDM-based MU-massive MIMO
subtitle: ''
summary: ''
authors:
- admin
- Alexios Balalsoukas-Slimining
- Christoph Studer
- Joseph R Cavallaro
tags: ["MachineLearning", "DPD"]
categories: []
date: '2021-01-01'
lastmod: 2023-04-27T20:53:22-05:00
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
projects: ["vDPD"]
publishDate: '2023-04-28T01:53:21.999383Z'
publication_types:
- '1'
abstract: 'The nonlinearities of power amplifiers in massive MIMO arrays introduce unwanted spectral regrowth, which is typically avoided via digital predistortion at each amplifier. However, as the number of base station antennas scales up, so does the computational burden of per-antenna linearization. This work introduces a neural-network virtual digital predistortion (vDPD) scheme that operates before the linear precoder for OFDM-based massive MU-MIMO systems. By applying predistortion before the precoder, complexity scales primarily with the number of users. We can achieve comparable linearization along the user beams by training our neural network based on the memory polynomial, predistortion-per-antenna approach. We verify our algorithm through an exhaustive simulator that includes high-order amplifier nonlinearities, memory effects, and variance across the amplifier models.'
publication: '*2021 55th Asilomar Conference on Signals, Systems, and Computers*'
publication_short: 'Asilomar'
doi: 10.1109/IEEECONF53345.2021.9723343
---
