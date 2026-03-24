---
title: "ヘビ型ロボット BSL-Snake /ｽﾈｰｸﾁｬﾝ"
titleEn: "Snake Robot BSL-Snake"
description: "多関節ヘビ型ロボット。Feetechシリアルサーボを用いた冗長自由度機構により、狭隘部への進入や複雑な地形での移動が可能。"
descriptionEn: "A multi-joint snake robot with redundant DOF using Feetech serial servos, capable of navigating narrow spaces and complex terrain."
category: robot
thumbnail: /b-sky-lab/images/icon_mini.jpg
date: 2023-07-16
tags: [Robot, Feetech, Snake Robot, Serial Servo, M5Stack]
links:
  - label: "GitHub"
    url: "https://github.com/kim-xps12"
order: 1
---

## 概要

BSL-Snake（ｽﾈｰｸﾁｬﾝ）は、多関節構造を持つヘビ型ロボットです。Feetechシリアルサーボを複数連結し、冗長な自由度を活かして狭い場所への進入や複雑な地形上での移動を実現しています。

## 特徴

- Feetechシリアルサーボによる多関節駆動
- M5Stackベースの制御システム
- 蛇行運動・横うねり運動に対応
- 3Dプリント製の連結フレーム

## 技術的なポイント

制御にはサーペノイド曲線を用いた蛇行パターン生成を採用し、各関節の位相差を調整することで前進・旋回などの動作を実現しています。
