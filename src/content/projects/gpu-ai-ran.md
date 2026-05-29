---
title: 'GPU-Based AI-RAN'
summary: 'A through-line in my work since 2017: running RAN workloads on commodity GPUs. Started with LDPC decoding for vRAN, now driving AI-RAN testbed development on a cuBB DU with a proprietary MIMO RU.'
period: '2017–Present'
role: 'Lead, platform & testbed'
tech:
  - 'GPU / CUDA'
  - 'AI-RAN'
  - 'O-RAN'
  - 'cuBB'
  - 'LDPC'
  - 'vRAN'
featured: true
order: 2
---

The disaggregated-RAN bet has always been that you can run a base station's L1
on a general-purpose accelerator and still hit the timing budget. The work has
moved with the question: in 2017–2021 the binding workloads were **LDPC
decoding for vRAN** (high-throughput, low-latency, codec-rate flexibility) and
**massive-MIMO array linearization** (per-antenna DPD that scales). The
contribution on the LDPC side was a GPU decoder integrated into the
OpenAirInterface NR stack; on the linearization side, a GPU implementation
that made per-antenna DPD across a MIMO array tractable. Today the binding
question is **how do you bring AI features into the RAN end-to-end** — develop
in simulation, train against representative data, drop into a real DU/RU stack
OTA, validate in the field. That is what the current Samsung AI-RAN testbed
work is about: GPU-based AI-RAN on a cuBB-based DU with a proprietary MIMO RU
and an end-to-end "sim-to-field" workflow.

Same fundamental bet (GPU-on-RAN), seven years apart, different binding
constraints.

## Selected publications

### AI-RAN (2024–Present)

- **[Sim2Field: End-to-End Development of AI RANs for 6G](/publications/ford-2025-sim2field)** — 2nd ACM Workshop on Open and AI RAN (2025). End-to-end methodology for developing AI features for 6G RANs: simulation, training, and field validation as one pipeline.

### GPU-Accelerated RAN Workloads (2017–2021)

- **[GPU-Based, LDPC Decoding for 5G and Beyond](/publications/tarver-2021-gpu)** — IEEE Open Journal of Circuits and Systems (2021). Journal-length treatment with the full set of techniques: reduced-precision LLRs, multi-stream parallelization, and OpenAirInterface integration.
- **[GPU-Based LDPC Decoding for vRAN Systems in 5G and Beyond](/publications/tarver-2020-ldpc)** — IEEE ISCAS 2020. The conference introduction of the decoder, including 8-bit LLR representation and multi-stream parallelism to hit 5G latency targets.
- **[GPU-Based Linearization of MIMO Arrays](/publications/tarver-2020-gpu)** — IEEE SiPS 2020. GPU implementation of per-antenna DPD across a MIMO array — the linearization-side counterpart to the LDPC work in the same era. (Also appears under [AI-based Virtual DPD for MIMO](/projects/virtual-dpd) where it supports the NN DPD line.)
- **[Application-Specific Accelerators for Communications](/publications/tarver-2019-application)** — Handbook of Signal Processing Systems (book chapter). Broader chapter on accelerator design for communications workloads, with vRAN LDPC as one of the case studies.
