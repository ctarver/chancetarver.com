---
title: 'GPU-Based LDPC Decoding for vRAN Systems in 5G and Beyond'
authors:
  - 'Chance Tarver'
  - 'Matthew Tonnemacher'
  - 'Hao Chen'
  - 'Jianzhong Zhang'
  - 'Joseph R Cavallaro'
venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)'
type: conference
year: 2020
date: 2020-10-12
doi: '10.1109/ISCAS45731.2020.9181064'
youtube: 'https://www.youtube.com/watch?v=JRx7CBb30mc'
abstract: 'Next-generation virtual radio access networks (vRAN) will benefit from the flexibility provided by virtualization in proposed Cloud-RAN configurations. These systems for 5G and beyond may consist of commodity hardware such as GPUs in data centers with multiple connected base stations (gNBs) flexibly receiving allocated resources depending on time-varying, real-time demands. In this paper, parallel reconfigurable algorithms and architectures for channel decoding are proposed. In particular, flexible rate and block length LDPC decoders for the new radio (NR) physical layer on GPU are characterized. We implement these GPU decoders using reduced word lengths of 8-bits to represent the log-likelihood ratios during decoding, and we utilize multiple GPU streams to process multiple blocks of codewords in parallel. These techniques allow our implementation to reduce the device transfer overhead and achieve the low-latency or high-throughput targets for 5G and beyond. Moreover, we integrate our decoder into the Open Air Interface (OAI) NR software stack to investigate virtualization capabilities when containerizing vRAN functionality such as the LDPC decoder.'
bibtex: |
  @INPROCEEDINGS{tarver2020ldpc,
    author={Tarver, Chance and Tonnemacher, Matthew and Chen, Hao and Zhang, Jianzhong Charlie and Cavallaro, Joseph R.},
    booktitle={2020 IEEE International Symposium on Circuits and Systems (ISCAS)}, 
    title={{GPU-Based LDPC Decoding for vRAN Systems in 5G and Beyond}}, 
    year={2020},
    volume={},
    number={},
    pages={1-5},
    doi={10.1109/ISCAS45731.2020.9181064}}
featured: false
tags:
  - 'GPU'
  - 'LDPC'
---
