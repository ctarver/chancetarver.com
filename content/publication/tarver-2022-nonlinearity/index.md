---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Nonlinearity Correction in Massive MIMO Systems via Virtual DPD
subtitle: ''
summary: ''
authors:
- admin
tags: ["vDPD"]
categories: []
date: '2022-01-01'
lastmod: 2023-04-27T20:53:26-05:00
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
publishDate: '2023-04-28T01:53:25.782670Z'
publication_types:
- '7'
abstract: 'Many antenna massive multiple-input, multiple-output (MIMO) arrays are a key technology in 5G and beyond. Practical deployments include nonlinear power amplifiers (PAs) to amplify the transmitted signals and overcome path loss in the channel. However, these nonlinearities degrade the user error vector magnitude (EVM) and cause out-of-band (OOB) emissions that harm the signal-to-noise ratio (SNR) of users of adjacent channels. In legacy single antenna and MIMO systems with a low number of antennas, this is solved by learning an inverse model of the PAs and performing digital predistortion (DPD) before each PA. As the number of antennas in the array grows, the computational burden of the DPD grows significantly. Moreover, the exact nature of the nonlinearities is not straightforward in massive MIMO scenarios that involve beamforming, potentially with multiple users. In this work, we seek to answer many fundamental questions about the effects of nonlinear PAs in massive MIMO. We collect and present measurements from Doherty PAs in a 16T MIMO array with 491.52 MHz of capture bandwidth at 3.5 GHz and 100 MHz 5G new radio (NR) signals as well as beamformed results from the Reconfigurable Eco-system for Next-generation End-to-end Wireless (Renew) basestation. We use the measurements to assist in developing mathematical models and simulators. We explore the behavior under various PA models, including wideband memory effects and non-line-of-sight (nLoS) channel conditions. We find that for a single-user system, the OOB energy is dominant in the direction of the main beam. Moreover, in multi-user scenarios, distinct spatial intermodulation beams of OOB energy appear in unique directions distinct from the intended users. These spurious beams may potentially desensitize victim users of adjacent channels. We create a virtual DPD (vDPD) solution that moves the DPD block to predistort before the massive MIMO precoder where the dimensionality is lower, reducing complexity in some scenarios. Our novel vDPD scheme uses a neural network (NN) to learn the function to linearize the effective nonlinearity in each beam.'
publication: ''
---
