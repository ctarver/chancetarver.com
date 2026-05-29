---
title: 'Upper Mid-Band (FR3) Massive MIMO'
summary: 'Leading the platform-side effort on a next-gen 256-TRX massive MIMO platform for the upper mid-band (FR3), where 6G is most likely to live.'
period: '2023–Present'
role: 'Lead, systems & architecture'
tech:
  - 'FR3 / Upper Mid-band'
  - '256-TRX'
  - 'eXtreme-MIMO'
  - 'Reciprocity Calibration'
featured: true
order: 1
---

The upper mid-band — **FR3**, roughly 7–24 GHz — is the spectrum the 6G research
community keeps pointing at: enough bandwidth to matter, propagation that
isn't terrible, and a regulatory window that is opening. Building a massive
MIMO platform that exploits it is largely a systems-design exercise. How do
you split beamforming, digital processing, linearization, and cancellation
across a real RFIC + ASIC + SoC stack without paying for everything twice, and
how do you do it at the array sizes FR3 demands?

This is the spine of what I work on at Samsung today, leading the platform-side
effort across a global, cross-functional team from architecture through lab
validation. The work spans hierarchical beamforming and reciprocity calibration
for large arrays, AI-RAN testbed integration on a cuBB-based DU (see
[GPU-Based AI-RAN](/projects/gpu-ai-ran/)), and AI-based digital predistortion for the
high-efficiency PAs we want to use in commercial radio units (see
[AI DPD for High-Efficiency PAs](/projects/ai-dpd-he-pa/)). The self-interference
cancellation R&D that makes a lot of this practical lives in
[MIMO Self-Interference Cancellation](/projects/mimo-sic/).

## Selected publications

- **[Upper Mid-Band Spectrum for 6G: Opportunities and Key Enablers](/publications/xu-2026-upper-mid-band/)** — Samsung Research Blog (2026). Position piece on FR3 as the 6G band of choice, eXtreme-MIMO as the headline enabler, and the energy-efficient hardware innovations needed to make it real.
- **[Hierarchical Beamforming and Reciprocity Calibration for Hybrid MIMO Systems](/publications/tarver-2025-hierarchical/)** — U.S. Patent 12,401,405 (2025). Granted patent on a hierarchical beamforming + reciprocity-calibration approach for FR3-scale arrays.
- **[Reducing FDD MMU Form Factor With Active Cancellation](/publications/muhammad-2022-reducing/)** — IEEE IMS 2022. Shrinking massive-MIMO unit form factor using active cancellation in FDD operation.
- **[5G New Radio and Non-Terrestrial Networks: Reaching New Heights](/publications/ye-20225-g/)** — IEEE ICC Workshops 2022. NTN-enhanced cellular and what it means for the underlying radio platform.
- **[Power Reduction for Massive MIMO Radios](/publications/sahin-2025-mimo-power/)** — U.S. Patent Application (2025). Power-efficiency techniques for massive-MIMO RUs.
