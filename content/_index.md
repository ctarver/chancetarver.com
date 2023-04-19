---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text:
  - block: features
    content:
      title: Skills
      items:
        - name: DSP
          description: Able to implement custom, complex signal processing tasks such as predistorters.
          icon: wave-square
          icon_pack: fas
        - name: Code
          description: Codes daily in Matlab, Python, C++, or CUDA with a belief in well documented and version controlled code.
          icon: code
          icon_pack: fas
        - name: Wireless Systems
          description: Background in PHY and MAC systems for 4G, 5G, Wi-Fi, etc.
          icon: wifi
          icon_pack: fas
        - name: Open Education
          description: Believes in sharing knowledge openly for the good of everyone. 
          icon: chalkboard-teacher
          icon_pack: fas
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Staff Systems Design/Architecture Engineer
          company: Samsung Research America
          company_url: 'https://www.sra.samsung.com/'
          company_logo: sra
          location: Plano, Texas
          date_start: '2023-03-01'
          date_end: ''
          description: |2-
             Project 1: Upper Mid-band Hybrid Massive MIMO Platform:

                * Leading development of RF PoC.
                * Developed link-level simulator for rapid prototyping of related activities.
        - title: Senior Systems Design/Architecture Engineer
          company: Samsung Research America
          company_url: 'https://www.sra.samsung.com/'
          company_logo: sra
          location: Plano, Texas
          date_start: '2020-01-01'
          date_end: '2023-03-01'
          description: |2-
            Project 1. Sub-band Full Duplex: 

                * Developed digital self-interference suppression algorithm to reduce self-interference in massive MIMO.
                * Developed massive MIMO digital predistortion system to further reduce self-interference and meet emission requirements in 5G systems.
                * Implemented the above in a modular software platform to allow for agile development and rapid prototyping and integrated into real-time, FPGA, RF platform for field evaluation of performance.
            Project 2. Satellite Communications System: 

                * Developed modifications to RACH/HARQ procedures and implemented changes in srsLTE C++ to support long latency satellite links.
                * Created a chat client demo suite for the project using React JS consisting of push-to-talk, instant messaging, and image transfer.
                * Completed a real-time demo of the above using USRPs and satellite channel emulator.
            Project 3. Distributed MIMO: 

                * Developed software systems to interface with custom FPGA SDR platform.
                * Led field testing of the platform to study distributed MIMO channels and reciprocity calibration concerns.
    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: tarver.chance@gmail.com
      appointment_url: 'https://calendly.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '2'
---
