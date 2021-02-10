---
title: GPU-Based Linearization of MIMO Arrays
publication_types:
  - "1"
authors:
  - Chance-Tarver
  - Arav Singhal
  - Joseph R. Cavallaro
doi: 10.1109/SiPS50750.2020.9195239
publication: 2020 IEEE Workshop on Signal Processing Systems
publication_short: SiPS
abstract: In this paper, we present a graphics processing unit (GPU)-based
  implementation for linearizing the power amplifiers (PAs) in massive
  multiple-input multiple-output (MIMO) arrays leading to lower error vector
  magnitude for the users and lower adjacent channel leakage ratio at the output
  of each antenna. In wireless transmitters, the nonlinearities of PAs can cause
  undesired spectral regrowth into the adjacent channels. For single antenna
  communications, this is corrected by digitally predistorting the transmit
  signal with the inverse nonlinearities of the power amplifier. However, in 5G
  and beyond, MIMO systems may have over one-hundred antennas and PAs that need
  to be linearized. Scaling up digital predistortion so that it can be performed
  on every transmit chain in large antenna arrays creates a significant
  computational burden for the base station. The parallel processing structure
  of GPUs provides a commercially available off-the-shelf solution that can be
  used to efficiently implement digital predistortion across many PAs in a
  massive MIMO basestation. Such a software-based solution is particularly
  attractive in virtual radio access networks or other software-defined radio
  scenarios. In this paper, we examine how the widely used memory polynomial
  scales on a GPU as the number of antennas scales up to 128, the number of
  memory taps scales up to four, and the polynomial degree scales up to nine. We
  find that a mid-range GPU can support predistortion for a sample rate of 100
  MSps for up to thirty-two antennas while using a seventh-order polynomial with
  two memory taps.
draft: false
featured: false
tags:
  - GPU
  - MIMO
  - DPD
image:
  filename: featured
  focal_point: Smart
  preview_only: false
date: 2020-10-20T23:43:19.508Z
---
