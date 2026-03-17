---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: experience
  #   content:
  #     title: Experience
  #     # Date format for experience
  #     #   Refer to https://docs.hugoblox.com/customization/#date-format
  #     date_format: Jan 2006
  #     # Experiences.
  #     #   Add/remove as many `experience` items below as you like.
  #     #   Required fields are `title`, `company`, and `date_start`.
  #     #   Leave `date_end` empty if it's your current employer.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - title: CEO
  #         company: GenCoin
  #         company_url: ''
  #         company_logo: org-gc
  #         location: California
  #         date_start: '2021-01-01'
  #         date_end: ''
  #         description: |2-
  #             Responsibilities include:

  #             * Analysing
  #             * Modelling
  #             * Deploying
  #       - title: Professor of Semiconductor Physics
  #         company: University X
  #         company_url: ''
  #         company_logo: org-x
  #         location: California
  #         date_start: '2016-01-01'
  #         date_end: '2020-12-31'
  #         description: Taught electronic engineering and researched semiconductor physics.
  #   design:
  #     columns: '2'
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: Selected updates from talks, papers, and research milestones.
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
    id: featured
    content:
      title: Selected Publication
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: |-
  #       {{% callout note %}}
  #       Quickly discover relevant content by [filtering publications](./publication/).
  #       {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: true
  #   design:
  #     columns: '2'
  #     view: citation
  - block: collection
    id: talks
    content:
      title: Talks and Posters
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: portfolio
    id: projects
    content:
      title: Other Projects
      filters:
        folders:
          - project
      sort_by: weight
      sort_ascending: true
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: accomplishments
    id: honors
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: Honors and Awards
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        -
          date_end: ''
          date_start: '2023-06-30'
          description: About 12% of Tsinghua University graduates receive this honor each year.
          # icon: cousera
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Excellent Graduate (优良毕业生)
          url: ''
        - date_end: ''
          date_start: '2022-12-01'
          description: About top 12% at Tsinghua University.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Comprehensive Excellence Award
          url: ''
        - date_end: ''
          date_start: '2022-07-01'
          description: Top 3 out of 53 teams nationwide, ahead of many graduate student teams.
          organization: Mao-YiSheng Charity Bridge Innovation Design Competition
          organization_url: ''
          title: Outstanding Winner, 4th Mao-YiSheng Charity Bridge Innovation Design Competition
          url: ''
        - date_end: ''
          date_start: '2022-05-01'
          description: Awarded in the 2022 Mathematical Contest in Modeling (MCM).
          organization: COMAP
          organization_url: https://www.comap.com/contests/mcm-icm
          title: Honorable Mention, 2022 Mathematical Contest in Modeling
          url: ''
        - date_end: ''
          date_start: '2022-04-01'
          description: Ranked 1st out of 8 teams in the finals.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: First Prize, 6th Tsinghua University Future City and Infrastructure Innovation Competition
          url: ''
        - date_end: ''
          date_start: '2021-12-01'
          description: About top 12% at Tsinghua University.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Comprehensive Excellence Award
          url: ''
        - date_end: ''
          date_start: '2021-12-01'
          description: Recognizing performance in science and technology innovation.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Excellence Award in Science and Technology Innovation
          url: ''
        - date_end: ''
          date_start: '2021-12-01'
          description: Outstanding Project in the 2021 Student Research Training (SRT) Program.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Second Prize for Outstanding Project, 2021 Student Research Training (SRT) Program
          url: ''
        - date_end: ''
          date_start: '2021-05-01'
          description: Won first prize, the most valuable award, and the best creative award; ranked 1st out of 4 teams in the finals.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: First Prize, Most Valuable Award, and Best Creative Award, 15th Tsinghua University Traffic Science and Technology Competition
          url: ''
        - date_end: ''
          date_start: '2020-12-01'
          description: Recognizing outstanding contributions in student social work.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Excellence Award in Social Work
          url: ''
        - date_end: ''
          date_start: '2020-12-01'
          description: Recognizing contributions in volunteer and public service.
          organization: Tsinghua University
          organization_url: https://www.tsinghua.edu.cn
          title: Excellence Award in Volunteer and Public Service
          url: ''
    design:
      columns: '2'
  - block: markdown
    id: service
    content:
      title: Teaching, Leadership, and Service
      subtitle: ''
      text: |-
        ### Teaching

        | Role | Date |
        | --- | --- |
        | Teaching Assistant, *BN5211 Medical Robotic Intelligence*, National University of Singapore | Fall 2025 |
        | Teaching Assistant, *Mathematical Modeling and Data Analysis*, Tsinghua University | Jul 2023 |
        | Teaching Assistant, *Engineering and Computer Graphics*, Tsinghua University | Jul 2023 |
        | Teaching Assistant, *Mathematical Modeling and Data Analysis*, Tsinghua University | Jul 2022 |
        | Teaching Assistant, *Engineering and Computer Graphics*, Tsinghua University | Jul 2022 |

        ### Leadership at Tsinghua University

        | Role | Date |
        | --- | --- |
        | Vice President, Student Association of Science and Technology, Department of Civil Engineering, Tsinghua University | Jan 2022-Dec 2022 |
        | Head, Science and Innovation Center, Student Association of Science and Technology, Department of Civil Engineering, Tsinghua University | Jan 2021-Dec 2021 |
        | Member, Science and Innovation Center, Student Association of Science and Technology, Department of Civil Engineering, Tsinghua University | Jan 2021-Dec 2021 |
        | Member, Challenge Cup Department, Student Association of Science and Technology, Tsinghua University | Aug 2021-Jul 2022 |
        | Captain, Soccer Team, Department of Civil Engineering, Tsinghua University | Jun 2022-May 2023 |

        ### Volunteer Work

        Accumulated 320+ service hours across 20+ projects; recognized as a **Five-Star Zijing Volunteer** at Tsinghua University.

        | Activity | Date |
        | --- | --- |
        | Volunteer, Beijing Winter Olympic and Paralympic Games | Jan 2022-Mar 2022 |
        | Blood donor, 6 donations | Sep 2019-Present |
    design:
      columns: '1'
  - block: markdown
    id: gallery
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="shown" >}}
    design:
      columns: '1'
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Feel free to reach out if you are interested in collaboration, research discussion, or related opportunities.
      # Contact (add or remove contact options as necessary)
      email: borui.kang@u.nus.edu
      # email: kbr19thu@gmail.com
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      address:
        street: E7-06-05, E7 Building, 15 Kent Ridge Cres
        city: Singapore
        # region: Singapore
        postcode: '119276'
        country: Singapore
        country_code: SG
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # Choose a map provider in `params.yaml` to show a map from these coordinates
      coordinates:
        latitude: '1.2985'
        longitude: '103.7733'
      # contact_links:
        # - icon: twitter
        #   icon_pack: fab
        #   name: DM Me
        #   link: 'https://twitter.com/Twitter'
        # - icon: skype
        #   icon_pack: fab
        #   name: Skype Me
        #   link: 'skype:echo123?call'
        # - icon: video
        #   icon_pack: fas
        #   name: Zoom Me
        #   link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
---
