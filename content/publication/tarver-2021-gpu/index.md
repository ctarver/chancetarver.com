---
# Documentation: https://wowchemy.com/docs/managing-content/

title: GPU-based, LDPC decoding for 5G and beyond
subtitle: ''
summary: ''
authors:
- admin
- Matthew Tonnemacher
- Hao Chen
- Jianzhong Zhang
- Joseph R Cavallaro
tags: ["GPU", "LDPC"]
categories: []
date: '2021-01-01'
lastmod: 2023-04-27T20:53:17-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: ["ldpc"]
publishDate: '2023-04-28T01:53:16.303610Z'
publication_types:
- '2'
abstract: 'In 5G New Radio (NR), low-density parity-check (LDPC) codes are included as the error correction codes (ECC) for the data channel. While LDPC codes enable a low, near Shannon capacity, bit error rate (BER), they also become a computational bottleneck in the physical layer processing. Moreover, 5G LDPC has new challenges not seen in previous LDPC implementations, such as Wi-Fi. The LDPC specification in 5G includes many reconfigurations to support a variety of rates, block sizes, and use cases. 5G also creates targets for supporting high-throughput and low-latency applications. For this new, flexible standard, traditional hardware-based solutions in FGPA and ASIC may struggle to support all cases and may be cost-prohibitive at scale. Software solutions can trivially support all possible reconfigurations but struggle with performance. This article demonstrates the high-throughput and low-latency capabilities of graphics processing units (GPUs) for LDPC decoding as an alternative to FPGA and ASIC decoders, effectively providing the high performance needed while maintaining the benefits of a software-based solution. In particular, we highlight how by varying the parallelization strategy for mapping GPU kernels to blocks, we can use the many GPU cores to compute one codeword quickly to target low-latency, or we can use the cores to work on many codewords simultaneously to target high throughput applications. This flexibility is particularly useful for virtualized radio access networks (vRAN), a next-generation technology that is expected to become more prominent in the coming years. In vRAN, the hardware computational resources will become decoupled from the specific computational functions in the RAN through virtualization, allowing for benefits such as load-balancing, improved scalability, and reduced costs. To highlight and investigate how the GPU can accelerate tasks such as LDPC decoding when containerizing vRAN functionality, we integrate our decoder into the Open Air Interface (OAI) NR software stack. With our GPU-based decoder, we measure a best case-latency of $87~\mu \text{s}$ and a best-case throughput of nearly 4 Gbps using the Titan RTX GPU.'
publication: '*IEEE Open Journal of Circuits and Systems*'
---
