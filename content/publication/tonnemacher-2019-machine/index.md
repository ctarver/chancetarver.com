---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Machine Learning Enhanced Channel Selection for Unlicensed LTE
subtitle: ''
summary: ''
authors:
- Matthew Tonnemacher
- admin
- Joseph Cavallar
- Joseph Camp
tags: ["MachineLearning"]
categories: []
date: '2019-01-01'
lastmod: 2023-04-27T20:53:13-05:00
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
projects: ["CBRS"]
publishDate: '2023-04-28T01:53:12.552646Z'
publication_types:
- '1'
abstract: 'We propose a mechanism for unlicensed LTE channel selection that not only takes into account interference to and from Wi-Fi access points but also considers other LTE operators in the unlicensed band. By collecting channel utilization statistics and sharing this information periodically with other unlicensed LTE eNBs, each eNB can improve their channel selection given their limited knowledge of the full topology. While comparing our algorithm to existing solutions, we find that the similarity between sensed Wi-Fi occupation at neighboring eNBs greatly impacts the performance of channel selection algorithms. To achieve better performance across diverse scenarios, we expand on our statistical channel selection formulation to include reinforcement learning, thereby balancing the shared contextual information with historical performance. We simulate operation in the unlicensed band using our channel selection algorithm and show how Wi-Fi load and inter-cell interference estimation can jointly be used to select transmission channels for all small cells in the network. Our approaches lead to an increase in user-perceived throughput and spectral efficiency across the entire band when compared to the greedy channel selection.'
publication: '*2019 IEEE International Symposium on Dynamic Spectrum Access Networks*'
publication_short: 'DYSPAN'
doi: 10.1109/DySPAN.2019.8935859

---
