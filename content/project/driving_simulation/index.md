---
title: 'Exploring the Impact of Music on Driving Focus and Emergency Handling Ability Based on Driving Simulation: A Case Study of Novice Drivers'
summary: A study investigated the impact of music with different volumes and languages on driver behavior. Specifically, it examined factors such as reaction time to encountering vehicles running red lights or pedestrians suddenly crossing the road, as well as the ability to maintain a constant vehicle speed. A somewhat counterintuitive finding was that the study discovered that appropriate music might enhance drivers' reaction speed rather than impede them.
tags:
  - Other
date: '2021-12-05T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: During the experiment
  focal_point: Smart

links:
  # - icon: file
  #   icon_pack: fas
  #   name: Follow
  #   url: https://twitter.com/georgecushen
  - icon: file-powerpoint
    icon_pack: fas
    name: Slides
    url: projects/driving_simulation/Driving_Simulation_Slides.pdf
  - icon: signs-post
    icon_pack: fas
    name: Poster
    url: projects/driving_simulation/Driving_Simulation_Poster.pdf
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

## Abstract

Improper driving behavior is a significant factor contributing to traffic accidents. The influence of listening to music on driving behavior is substantial but often overlooked. In this experiment, a simulation-based experimental approach was employed to investigate the effects of music genre (including instrumental, native language, and foreign language) and volume on driving behavior. Conducted at the "Driving Simulator Laboratory" of Tsinghua University's Institute of Transportation Studies, the experiment utilized the Unreal Engine to construct the experimental scenarios. Prior to and after the experiment, participants were required to complete questionnaires to gather relevant information. During the experiment, participants were instructed to drive along specified routes in two virtual urban environments while listening to different types of music. Additionally, participants were tasked with controlling vehicle speed, lane deviation, and managing sudden situations. Eye-tracking glasses were worn by participants to collect gaze data while driving, and relevant data regarding speed control and emergency situation handling were recorded. Through data analysis, the impact of music on driver focus and reaction capability can be elucidated, providing insights for safe driving practices and potential revisions to regulations by traffic management authorities.

## Literature Review and Background Introduction

Existing experimental studies on the effects of music on driving behavior have mainly focused on the influence of music melodies (such as intensity and rhythm) on driving behavior. Beh and Hirst (1999) investigated the impact of music volume on simple or complex tasks and found that: at lower volumes, music can broaden visual attention, while at higher volumes, it can narrow attention. Yang Meng et al. (2011.5) discovered that compared to slow-paced music, fast-paced music leads to faster driving speeds, shorter average eye blink distances, and shorter vertical search widths. Familiar language compared to unfamiliar language results in slower driving speeds, more errors, longer average gaze times for novice drivers, while experienced drivers' gaze behavior remains unaffected. Cheng Jie et al. (2014.5) studied the effects of volume and rhythm on the cognitive load and driving behavior of various groups of drivers, finding that as music tempo increases, average driving speeds increase, lateral position control worsens, and violation frequency increases; with increasing music volume, violation frequency also increases. Shi Jing et al. (2014.5) found that listening to music while driving, especially rock and heavy metal music, increases the likelihood of improper driving behaviors such as running red lights, speeding, and distraction. Qiu Xin (2015.5) found that under simpler road conditions, higher music volume enhances driver alertness, while under complex road conditions, drivers are more alert when listening to slow-paced music with lower volume. Lai Wuning (2016.3) discovered that light music can reduce driver mental load, while rock music increases driver mental load. Alafat and Wu Chaozhong (2017.1) found that listening to hard rock music has negative effects on driving performance and physiology, while listening to natural sounds can improve driver driving ability. Li Shu (2018.3) found that listening to in-car music while driving leads to decreased vehicle speed, lane-keeping ability, steering wheel operation ability, and event detection ability, thereby increasing driving risk.

In addition to the aforementioned studies, some research has found that the impact of music on driving behavior is not significant. Ayca Berfu Ünal, Steg, and Epstude (2012.1) found that whether or not to listen to music has little effect on drivers' driving behavior, as drivers tend to increase mental effort as a cognitive compensation strategy when listening to music to handle task demands.

Some studies provide theoretical explanations for the impact of music on driving behavior. The arousal theory suggests that music helps drivers maintain optimal levels of emotional arousal to sustain driving alertness (Brown, 1965); the "distraction hypothesis" posits that music can also distract drivers, increasing the cognitive load and jeopardizing road safety (Turner, Fernandez, & Nelson, 1996). While "arousal" and "distraction" emphasize the unidirectional effects of music, the dynamic theory integrates both viewpoints, suggesting that the effects of music on drivers are arousal or distraction-dependent, depending on factors such as music attributes, driving context demands, and individual differences in drivers' characteristics (Oron-Gilad, Ronen, & Shinar, 2008). The latest Compensatory Control Theory proposes that drivers adjust their driving behavior to compensate for distractions or secondary task interference, which addresses the oversight of driver agency in the dynamic theory (Young, Regan, & Hammer, 2007).

Most of the experimental methods in the aforementioned studies involve simulated driving. However, simulated driving differs significantly from driving in real road environments, and the reliability of its results is often lower than experiments conducted on actual roads. Therefore, the author's research utilizes the cutting-edge rendering capabilities of Unreal Engine 4 to build scenes and conduct driving simulation experiments.
