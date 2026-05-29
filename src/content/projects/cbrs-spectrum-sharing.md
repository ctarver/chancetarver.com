---
title: 'CBRS & Dynamic Spectrum Sharing'
summary: 'Reinforcement-learning-aided spectrum sharing in the CBRS band. Use-or-share frameworks, channel selection for unlicensed LTE, and the measurement scaffolding behind them.'
period: '2017–2021'
role: 'Co-author / RL & systems'
tech:
  - 'CBRS'
  - 'Reinforcement Learning'
  - 'Unlicensed LTE'
  - 'Spectrum Access'
featured: false
order: 8
---

The 3.5 GHz CBRS band introduced a three-tier spectrum-sharing regime
(incumbents, PAL licensees, GAA users) and immediately raised practical
questions: how do PAL holders and GAA users actually coexist without throwing
away spectrum? How do unlicensed LTE eNBs pick channels well when they share
the band with Wi-Fi and other LTE operators?

This line of work, done across my Samsung internship years and into early
full-time, used reinforcement learning to attack both questions. The
"use-or-share" policy work showed RL-aided listen-before-talk can increase
spatial reuse at lower-tier nodes while keeping interference at higher tiers
bounded.

## Selected publications

- **[Enabling a "Use-or-Share" Framework for PAL–GAA Sharing in CBRS Networks via Reinforcement Learning](/publications/tarver-2019-enabling)** — IEEE Transactions on Cognitive Communications and Networking (2019). Journal paper formalizing the RL-aided LBT policy and showing the resulting spatial-reuse / interference trade-off.
- **[Opportunistic Channel Access Using Reinforcement Learning in Tiered CBRS Networks](/publications/tonnemacher-2018-opportunistic)** — IEEE DySPAN 2018. The original RL-for-CBRS paper that the journal work extended.
- **[Machine Learning Enhanced Channel Selection for Unlicensed LTE](/publications/tonnemacher-2019-machine)** — IEEE DySPAN 2019. Channel selection for unlicensed LTE eNBs that takes into account Wi-Fi APs and other LTE operators by sharing channel-utilization statistics.
- **[Method and Apparatus for Improving Coexistence Performance by Measurements in Wireless Communication Systems](/publications/huang-2021-method)** — U.S. Patent 11,032,717 (2021). Granted patent on the measurement scaffolding behind coexistence policies.
