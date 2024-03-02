---
title: 'WaveformMAE: Self-Supervised Learning for Fault-Inversion-Free Reconstruction of Ground Motion Waveforms Across the Entire Area'

event: AGU 2023 Annual Meeting
event_url: https://agu.confex.com/agu/fm23/meetingapp.cgi/Paper/1409667

location: Moscone Center, South, Poster Hall A-C, S31F-0409
address:
  street: 747 Howard St
  city: San Francisco
  region: CA
  postcode: '94103'
  country: United States

summary: A study attempting to reconstruct seismic waveforms of various locations across an entire region using the self-supervised learning approach of MAE, without the need for inversion in geophysics.
abstract: 'We propose an innovative approach utilizing self-supervised learning and Masked Autoencoder (MAE) to reconstruct ground motion waveforms throughout the area without relying on fault inversion. Preprocessing involves transforming three-channel waveforms into one-dimensional word vectors for Transformer encoding. During training, a significant portion (75%-99%) of station information is randomly masked, allowing MAE to reconstruct seismic waveforms within specific spatial ranges. Inference involves dividing longer waveforms into segments and performing weighted averaging for improved predictions. The training dataset is constructed manually based on publicly available source model datasets and pre-calculated Greens functions. This approach shows promising potential for predicting seismic waveforms across the entire spatial domain, enhancing our understanding of seismic events and improving earthquake risk mitigation strategies.'

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2023-12-13T08:30:00Z'
date_end: '2023-12-13T12:50:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2024-03-02T00:00:00Z'

authors: [admin, Peng Wu, Chen Gu, Yichen Zhong]
tags: []

# Is this a featured talk? (true/false)
featured: false

image:
  caption: ''
  focal_point: Right

# links:
#   - icon: twitter
#     icon_pack: fab
#     name: Follow
#     url: https://twitter.com/georgecushen
url_code: ''
url_pdf: './content/event/WaveformMAE/AGU_Poster-KBR.pdf'
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
  - example
---

{{% callout note %}}
Click on the **Slides** button above to view the built-in slides feature.
{{% /callout %}}

Slides can be added in a few ways:

- **Create** slides using Hugo Blox Builder's [_Slides_](https://docs.hugoblox.com/reference/content-types/) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://docs.hugoblox.com/reference/markdown/).

Further event details, including [page elements](https://docs.hugoblox.com/reference/markdown/) such as image galleries, can be added to the body of this page.

Earthquakes, especially large ones, usually pose immense hazards to human life and property safety. Understanding seismic waveforms is crucial for effective earthquake-resistant structural design. However, traditional methods for obtaining seismic waveforms at various locations require two steps, the inversion of fault conditions and forward modeling.

In this study, we propose an innovative approach with self-supervised learning and the Masked Autoencoder (MAE) as the backbone, drawing inspiration from the field of image reconstruction. In this method, ground motion waveforms all around can be reconstructed within only one step. Seismic data are preprocessed the by transforming three-channel waveforms with 256 samples (equivalent to approximately 128 seconds of data at a frequency of 2 Hz) into one-dimensional word vectors. This allows us to apply Transformer encoding.

To construct the training dataset, we manually calculate the ground motion waveform spatial distribution based on publicly available source model datasets of hundreds of earthquakes, convolved with pre-calculated Green's functions at specific area.

During the training phase, we randomly mask a significant portion (75%-90%) of the station information. The masked data is then passed through an encoder and decoder within the MAE framework, enabling us to reconstruct the seismic waveforms within a specific spatial range. For inference, when reconstructing longer seismic waveforms, we can divide them into segments and perform weighted averaging on overlapping sections to enhance the accuracy of the predictions.

This approach shows promising potential for predicting seismic waveforms across the entire spatial domain without the need for traditional fault inversion procedures. By leveraging self-supervised learning and the MAE framework, we can overcome the limitations imposed by sparse station coverage, ultimately enhancing our understanding of seismic events and improving earthquake risk mitigation strategies.