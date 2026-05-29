---
title: 'Sub-band DPD'
summary: "Rice-era research on low-complexity, sub-band digital predistortion for noncontiguous transmissions. When the spectrum is fragmented, don't linearize the whole band."
period: '2014–2018'
role: 'Lead / co-author'
tech:
  - 'Digital Predistortion'
  - 'GNU Radio'
  - 'WARP'
  - 'SDR'
featured: false
order: 9
links:
  - label: 'Matlab library (GitHub)'
    url: 'https://github.com/ctarver'
---

When 5G/CBRS pushed transmissions onto noncontiguous spectrum, the cost of
linearizing the whole composite band stopped making sense. The nonlinearity
that mattered was at specific guard bands and component carriers, not
everywhere.

The sub-band DPD line of work, which started as my M.S. thesis at Rice and
continued through my Ph.D. years with Joe Cavallaro, attacked the problem with
targeted predistorters and SDR-based real-time verification on the WARP
platform. It produced a multi-year run of conference and journal papers, the
master's thesis, and a small Matlab library that other researchers picked up
and built on. It's the work that got me into industry.

## Selected publications

- **[Low-Complexity, Multi Sub-Band Digital Predistortion: Novel Algorithms and SDR Verification](/publications/tarver-2018-low)** — Journal of Signal Processing Systems (2018). The journal-length wrap-up of the multi-sub-band DPD work, including SDR verification.
- **[Low-Complexity Subband Digital Predistortion for Spurious Emission Suppression in Noncontiguous Spectrum Access](/publications/abdelaziz-2016-low)** — IEEE Transactions on Microwave Theory and Techniques (2016). The TMTT-level treatment of the sub-band DPD algorithm.
- **[Sub-Band Digital Predistortion for Noncontiguous Carriers: Implementation and Testing](/publications/tarver-2016-sub)** — M.S. Thesis, Rice University (2016). The thesis itself.
- **[Sub-Band Digital Predistortion for Noncontiguous Transmissions: Algorithm Development and Real-Time Prototype Implementation](/publications/abdelaziz-2015-sub)** — 49th Asilomar Conference (2015). The foundational paper introducing the block-adaptive, reduced-complexity sub-band DPD algorithm with WARP FPGA real-time implementation.
- **[Low-Complexity, Sub-Band DPD with Sequential Learning: Novel Algorithms and WARPLab Implementation](/publications/tarver-2016-low)** — IEEE SiPS 2016. Sequential-learning variant of the algorithm with WARPLab prototype.
- **[Multi Component Carrier, Sub-Band DPD and GNURadio Implementation](/publications/tarver-2017-multi)** — IEEE ISCAS 2017. Multi-CC variant with a GNU Radio implementation.
- **[Parallel Digital Predistortion Design on Mobile GPU and Embedded Multicore CPU for Mobile Transmitters](/publications/li-2017-parallel)** — Journal of Signal Processing Systems (2017). Mobile-GPU and multicore-CPU implementations of DPD.
- **[Digital Predistortion with Low-Precision ADCs](/publications/tarver-2017-digital)** — 51st Asilomar Conference (2017). Side investigation of how low you can drop ADC precision before DPD breaks.
