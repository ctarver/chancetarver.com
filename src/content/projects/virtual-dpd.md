---
title: 'AI-based Virtual DPD for MIMO'
summary: 'Neural-network digital predistorters trained against a model of the power amplifier instead of the real thing, so DPD becomes a software problem that scales to massive MIMO.'
period: '2019–2022'
role: 'Lead author'
tech:
  - 'Digital Predistortion'
  - 'Neural Networks'
  - 'Massive MIMO'
  - 'GPU'
featured: false
order: 6
---

Per-antenna DPD on a massive MIMO array is intractable if you need real
training data from every PA. **Virtual DPD** sidesteps the problem: model the
PA once, then train the predistorter end-to-end against the model, so each new
antenna becomes a software adapt instead of a feedback-loop hardware
deployment. The technique also moves the DPD block before the precoder, where
dimensionality is lower and the linearity that matters is per-beam, not
per-antenna.

This line of work was the focus of my Ph.D. dissertation and produced a
multi-year run of conference and journal papers leading up to it. It is one of
the lines I'm proudest of: it took a problem the field thought needed more
hardware and turned it into a model-and-train problem. The current
[AI DPD for High-Efficiency PAs](/projects/ai-dpd-he-pa) work picks up the
same thread for envelope-tracked PA architectures.

## Selected publications

- **[Nonlinearity Correction in Massive MIMO Systems via Virtual DPD](/publications/tarver-2022-nonlinearity)** — Ph.D. Dissertation, Rice University (2022). The full story: PA measurements from a 16T MIMO array, mathematical models, the vDPD architecture using a NN to learn per-beam linearization.
- **[Virtual DPD Neural Network Predistortion for OFDM-Based MU-Massive MIMO](/publications/tarver-2021-virtual)** — 55th Asilomar Conference (2021). The peer-reviewed framing: backpropagation through a NN model of the PA to train the predistorter without per-antenna training data.
- **[OFDM-Based Beam-Oriented Digital Predistortion for Massive MIMO](/publications/tarver-2021-ofdm)** — IEEE ISCAS 2021. Beam-oriented DPD applied in the OFDM guard-band subcarriers, before the precoder.
- **[Predistortion of OFDM Waveforms Using Guard-Band Subcarriers](/publications/tarver-2020-predistortion)** — 54th Asilomar Conference (2020). The guard-band DPD primitive that the beam-oriented and vDPD work builds on.
- **[Neural Network DPD via Backpropagation Through a Neural Network Model of the PA](/publications/tarver-2019-neural)** — 53rd Asilomar Conference (2019). The original NN-DPD-against-NN-PA-model paper that started the line.
- **[Design and Implementation of a Neural Network Based Predistorter for Enhanced Mobile Broadband](/publications/tarver-2019-design)** — IEEE SiPS 2019. Implementation-side companion to the NN DPD work.
- **[GPU-Based Linearization of MIMO Arrays](/publications/tarver-2020-gpu)** — IEEE SiPS 2020. GPU implementation of MIMO-array DPD, the platform-side counterpart to the Virtual DPD algorithm work. (Also appears under [GPU-Based AI-RAN](/projects/gpu-ai-ran).)
