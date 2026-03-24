---
title: "対向二輪型倒立振子 BSL-Balancer /ﾀｲﾘﾝﾁｬﾝ"
titleEn: "Two-Wheeled Inverted Pendulum BSL-Balancer"
description: "対向二輪型の倒立振子ロボット。IMUセンサとPID制御により自律的にバランスを維持しながら走行可能。"
descriptionEn: "A two-wheeled inverted pendulum robot that maintains balance autonomously using IMU sensors and PID control."
category: robot
thumbnail: /b-sky-lab/images/icon_mini.jpg
date: 2022-12-31
tags: [Robot, Inverted Pendulum, PID, IMU, M5Stack]
links:
  - label: "GitHub"
    url: "https://github.com/kim-xps12"
order: 2
---

## 概要

BSL-Balancer（ﾀｲﾘﾝﾁｬﾝ）は、2つの車輪で自立するバランスロボットです。IMUセンサからの姿勢情報をもとにPID制御でモータを駆動し、倒立状態を維持します。

## 特徴

- IMU（慣性計測ユニット）による姿勢推定
- PID制御によるリアルタイムバランス維持
- M5Stackによる制御・表示
- コンパクトな3Dプリント製フレーム

## 技術的なポイント

カルマンフィルタによるセンサフュージョンで安定した姿勢角を推定し、PIDゲインのチューニングにより静止・走行時の安定性を両立しています。
