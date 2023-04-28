---
title: New Preprint Available. Neural Networks are taking over DPD!
date: 2019-07-09T23:09:35.714Z
draft: false
featured: false
authors:
  - admin
tags:
  - DPD
  - MachineLearning
  - DSP
  - Python
  - RFWebLab
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
---
I have a new preprint available for my submission to the 2019 IEEE International Workshop on Signal Processing Systems in Nanjing, China. 
The paper is titled "Design and Implementation of a Neural Network Based Predistorter for Enhanced Mobile Broadband" and is available [here](https://arxiv.org/pdf/1907.00766.pdf).

In this paper, I use a neural network (NN) to implement digital predistortion (DPD) to correct for power amplifier (PA) nonlinearities. 
The main contributions are:

* A novel training method where we learn the NN DPD by first modeling the PA with a NN and backpropagating through the PA NN model to update the DPD NN weights.
* Avoiding the commonly used indirect learning architecture (ILA) by using the above method. ILA learns a postinverter and uses this as the DPD, but this is known to converge to a biased solution.
* Reducing complexity of the predistorter when comparing to a memory polynomial
* Testing on [RFWebLab](http://dpdcompetition.com/rfweblab/)
* FPGA implementation of NN DPD and memory polynomials; showing that the NN has reduced implementation complexity.

Machine learning has been popular for classification tasks such as image recognition. 
Now many wireless researchers are exploring machine learning for tackling a variety of problems such as [spectrum sharing](https://chancetarver.com/pdf/2018_dyspan.pdf).