---
title: 'MIMO Self-Interference Cancellation'
summary: 'Equalizer-based digital self-interference cancellation for MIMO and hybrid MIMO transmitters. The technical body that makes XDD and hybrid-array linearity practical.'
period: '2022–Present'
role: 'Lead / co-author'
tech:
  - 'SIC'
  - 'MIMO'
  - 'Equalizer DSIC'
  - 'Hybrid MIMO'
featured: false
order: 5
---

When you push MIMO transmitters into sub-band-full-duplex operation (XDD) or
deploy hybrid arrays at scale, "self-interference" shows up in two coupled
forms: the BS's own DL signal leaking into its UL receiver, and the PA
nonlinearity generating intermodulation across the array. Equalizer-based
digital cancellation handles both — the same architecture pattern, applied at
different layers of the stack.

This is a body of work I led or co-authored at Samsung from 2022 onward,
documented across journal/conference papers and a series of patents. It is
the technical underpinning that makes [XDD](/projects/xdd/) work in the field
and that supports [Upper Mid-Band (FR3) Massive MIMO](/projects/fr3-massive-mimo/)
linearity.

## Selected publications

- **[Global Equalizer Self-Interference Cancelation for Hybrid MIMO Systems](/publications/tarver-2023-global/)** — U.S. Patent (2023). Global (vs. per-antenna) equalizer SIC architecture for hybrid MIMO.
- **[Equalizer Digital Self-Interference Cancelation for MIMO Transmitters](/publications/tarver-2022-equalizer/)** — U.S. Patent (2022). The original equalizer DSIC formulation for MIMO TX.
- **[Equalizer Digital Self-Interference Cancelation for Hybrid MIMO Transmitters](/publications/tarver-2023-equalizer/)** — U.S. Patent Application (2023). The hybrid-MIMO extension of the 2022 patent.
- **[Hybrid GMP/Equalizer Digital Self-Interference Cancelation for MIMO Transmitters](/publications/tonnemacher-2022-hybrid/)** — U.S. Patent (2022). Hybrid GMP + equalizer architecture combining classical memory-polynomial DPD with equalizer-based SIC.
- **[Equalizer Assisted Polynomial Based Linearity Enhancement and Self-Interference Canceler](/publications/muhammad-2022-equalizer/)** — U.S. Patent Application (2022). Polynomial linearity enhancement paired with the equalizer canceler.
- **[Reducing FDD MMU Form Factor With Active Cancellation](/publications/muhammad-2022-reducing/)** — IEEE IMS 2022. Conference paper showing the form-factor savings active cancellation gets you in an FDD MMU.
