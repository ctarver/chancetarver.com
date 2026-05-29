---
title: 'XDD: Cross Division Duplex'
summary: 'Sub-band full duplex for 5G-Advanced and 6G. Extend uplink coverage in TDD by squeezing UL onto a sub-band of the DL slot, and cancel the self-interference that creates.'
period: '2020–Present'
role: 'Systems lead'
tech:
  - 'Sub-band Full Duplex'
  - '5G-Advanced'
  - 'SIC'
  - 'TDD'
featured: false
order: 4
---

TDD coverage is uplink-limited at mid-band. The uplink slot is small, the UE is
power-constrained, and the path loss doesn't care. **XDD (Cross Division
Duplex)** is the answer Samsung has been pushing: keep TDD's spectrum
flexibility, but borrow a sub-band of the downlink slot for UL when the base
station's TX would otherwise be deafening it.

That sub-band coexistence only works if you can cancel the BS's own DL leakage
into its UL receiver. The receiver-side cancellation R&D that makes XDD
practical is documented across a separate body of equalizer-based work — see
[MIMO Self-Interference Cancellation](/projects/mimo-sic/).

## Selected publications

- **[Extending 5G TDD Coverage with XDD: Cross Division Duplex](/publications/ji-2021-extending/)** — IEEE Access (2021). Journal paper showing XDD can improve UL coverage up to 2.37× over TDD, with a PoC validating the SIC techniques.
- **[XDD: Cross Division Duplex in 5G-Advanced](/publications/ji-2021-xdd/)** — IEEE VTC2021-Fall. Conference introduction of the 5G-Advanced XDD scheme.
- **[Enabling Advanced Duplex in 6G](/publications/ji-2021-enabling/)** — IEEE ICC Workshops 2021. The 6G-facing framing of advanced duplexing techniques.
- **[5G-Advanced Duplex Evolution for Massive MIMO and Multi-Beam Operations](/publications/ji-2023-duplex/)** — IEEE WCNC 2023. Bringing XDD into massive-MIMO and multi-beam operation regimes.
