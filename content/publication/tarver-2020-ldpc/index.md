---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "GPU-Based LDPC Decoding for vRAN Systems in 5G and Beyond"
authors: 
- admin
- Matthew Tonnemacher
- Hao Chen
- Jianzhong Zhang
- Joseph R Cavallaro
date: 2020-10-12
doi: "10.1109/ISCAS45731.2020.9181064"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-08T15:43:20-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: "ISCAS"

abstract: "Next-generation virtual radio access networks (vRAN) will benefit from the flexibility provided by virtualization in proposed Cloud-RAN configurations. These systems for 5G and beyond may consist of commodity hardware such as GPUs in data centers with multiple connected base stations (gNBs) flexibly receiving allocated resources depending on time-varying, real-time demands. In this paper, parallel reconfigurable algorithms and architectures for channel decoding are proposed. In particular, flexible rate and block length LDPC decoders for the new radio (NR) physical layer on GPU are characterized. We implement these GPU decoders using reduced word lengths of 8-bits to represent the log-likelihood ratios during decoding, and we utilize multiple GPU streams to process multiple blocks of codewords in parallel. These techniques allow our implementation to reduce the device transfer overhead and achieve the low-latency or high-throughput targets for 5G and beyond. Moreover, we integrate our decoder into the Open Air Interface (OAI) NR software stack to investigate virtualization capabilities when containerizing vRAN functionality such as the LDPC decoder."

# Summary. An optional shortened abstract.
summary: ""

tags: ["GPU", "LDPC"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video: https://ieeexplore.ieee.org/document/9181064

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: ["ldpc"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
