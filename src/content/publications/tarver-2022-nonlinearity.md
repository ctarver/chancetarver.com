---
title: 'Nonlinearity Correction in Massive MIMO Systems via Virtual DPD'
authors:
  - 'Chance Tarver'
venue: 'Rice University'
type: thesis
year: 2022
date: 2022-01-01
abstract: 'Many antenna massive multiple-input, multiple-output (MIMO) arrays are a key technology in 5G and beyond. Practical deployments include nonlinear power amplifiers (PAs) to amplify the transmitted signals and overcome path loss in the channel. However, these nonlinearities degrade the user error vector magnitude (EVM) and cause out-of-band (OOB) emissions that harm the signal-to-noise ratio (SNR) of users of adjacent channels. In legacy single antenna and MIMO systems with a low number of antennas, this is solved by learning an inverse model of the PAs and performing digital predistortion (DPD) before each PA. As the number of antennas in the array grows, the computational burden of the DPD grows significantly. Moreover, the exact nature of the nonlinearities is not straightforward in massive MIMO scenarios that involve beamforming, potentially with multiple users. In this work, we seek to answer many fundamental questions about the effects of nonlinear PAs in massive MIMO. We collect and present measurements from Doherty PAs in a 16T MIMO array with 491.52 MHz of capture bandwidth at 3.5 GHz and 100 MHz 5G new radio (NR) signals as well as beamformed results from the Reconfigurable Eco-system for Next-generation End-to-end Wireless (Renew) basestation. We use the measurements to assist in developing mathematical models and simulators. We explore the behavior under various PA models, including wideband memory effects and non-line-of-sight (nLoS) channel conditions. We find that for a single-user system, the OOB energy is dominant in the direction of the main beam. Moreover, in multi-user scenarios, distinct spatial intermodulation beams of OOB energy appear in unique directions distinct from the intended users. These spurious beams may potentially desensitize victim users of adjacent channels. We create a virtual DPD (vDPD) solution that moves the DPD block to predistort before the massive MIMO precoder where the dimensionality is lower, reducing complexity in some scenarios. Our novel vDPD scheme uses a neural network (NN) to learn the function to linearize the effective nonlinearity in each beam.'
bibtex: |
  @phdthesis{tarver2022nonlinearity,
   author = {Tarver, Chance Anthony},
   school = {Rice University},
   title = {Nonlinearity Correction in Massive MIMO Systems via Virtual DPD},
   year = {2022}
  }
featured: true
tags:
  - 'vDPD'
---
