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
  - icon: open-access
    icon_pack: ai
    name: Poster
    url: projects/driving_simulation/Driving_Simulation_Poster.pdf
  - icon: award
    icon_pack: fas
    name: SRT Award
    url: projects/driving_simulation/Second_Award.jpg
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

## Method

### 1 Participants
A total of 38 participants were recruited from the university campus, consisting of undergraduate or graduate students who possessed a valid driver's license. All participants had an average eye-tracking data sampling rate higher than 95%, which was considered for statistical analysis. All participants were university students who had obtained their driver's license within the past five years and had driven less than 10,000 km, categorizing them as novice drivers. The average age of participants was 21 years old, with an average driving experience of 1.5 years. All participants had normal hearing, vision, or corrected vision, and were unfamiliar with the unfamiliar language (Mongolian) set in the experiment.
### 2 Experimental Tools
#### 2.1 Eye Tracker
The experiment utilized an eye tracker to record participants' eye movement trajectories, with a sampling rate of 120Hz and dual-eye tracking capabilities. It could capture data such as eye blink frequency, pupil diameter, gaze point position, and gaze duration, which were used by the experimenter to assess participants' focus and reaction abilities during driving.
#### 2.2 Experimental Materials
##### 2.2.1 Road Video Scenes
Interactive video images of simulated urban road conditions were continuously played for participants on four projection screens. Each pair of adjacent screens simulated forward, lateral, and rearward driving perspectives, providing a 360° view of road conditions without blind spots. The interactive video images were derived from the constructed virtual urban road scenes realized through the Unreal Engine 4.

##### 2.2.2 Music Materials
High-quality music was downloaded from two well-known music websites and categorized into three types based on language: instrumental music (without lyrics), Chinese music (native language), and Mongolian music (unfamiliar language). The low volume level was set at 50dB, similar to the built-in engine noise, while the high volume level was set at 70dB, measured with a decibel meter. Apart from the six types of music consisting of two volume levels and three languages, a blank segment without music was included as a control. With these seven language and volume music variations as the only variable, the experiment aimed to investigate their effects on participants.

### 3 Experimental Design
In the virtual road scenes, eight straight road segments were set up (one for familiarization practice and seven for music experiment segments). Each road segment was 2.4km long, divided into three sections of 800m each, with intersections containing traffic lights at the boundaries. Except for the first road segment where participants started, the remaining seven road segments each had two driving events: vehicles running red lights laterally and pedestrians suddenly crossing the road. Pre-tests indicated that drivers did not experience significant discomfort during simulated driving experiments, but they required a short learning period to familiarize themselves with the operation. Therefore, the first road segment was provided as a conflict-free trial segment.

### 4 Experimental Procedure
After recruiting participants, they filled out pre-experiment questionnaires to collect driving-related information, such as driving duration and distance. Participants were then informed of the experimental schedule, and they were instructed to proceed to the driving simulation laboratory at the designated time. They were briefed on the experimental tasks and required to wear eye-tracking glasses (fitted with appropriate plano or myopic lenses according to participants' visual acuity) and Bluetooth earphones. Subsequently, eye tracker calibration was conducted. Participants were briefed on the presence of sudden traffic conflicts during testing, and their task was to drive on the correct simulated roads according to the screen instructions. In the event of a traffic conflict, they were instructed to operate the driving simulator appropriately to avoid traffic accidents. The experiment was conducted in a controlled environment free from external disturbances, with constant lighting and indoor quietness, lasting approximately 40 minutes. After the experiment, participants were asked to fill out post-experiment questionnaires.

### 5 Data Collection
The cardata software was used to record relevant data such as steering wheel, brake, and accelerator inputs from the simulator, as well as vehicle speed and position in the experimental scenes (20Hz). Simultaneously, Curestudio software was used to collect eye-tracking data (120Hz).

![](Figure9.png)
Figure 9. Relationship between Reaction Time to Pedestrians Crossing and Music
