---
title: Digital predistortion with low-precision ADCs
publication_types:
  - "1"
authors:
  - Chance Tarver
  - Joseph R. Cavallaro
doi: 10.1109/ACSSC.2017.8335381
publication: 2017 51st Asilomar Conference on Signals, Systems, and Computers
abstract: Digital Predistortion (DPD) is a popular technique for linearizing a
  power amplifier (PA) to help reduce the spurious emissions and spectral
  regrowth. DPD requires the learning of the inverse PA nonlinearities by
  training on the output of the PA. In practical systems, the analog output of
  the PA will have to go through an analog-to-digital converter (ADC) so that
  training can be done on a digital processor. The quantization degrades signal
  quality and may limit the performance of a DPD learning algorithm. However, a
  lower resolution ADC may cost less and allow for less computational complexity
  in the digital processing. We study this trade-off to try to find how much
  precision is needed in DPD systems and discover that for a full-band DPD as
  few as 6 bits can reliably be used. For sub-band DPD, a single bit ADC can be
  used.
draft: false
featured: false
tags:
  - DPD
image:
  filename: featured
  focal_point: Smart
  preview_only: false
date: 2017-02-09T22:25:38.814Z
---
