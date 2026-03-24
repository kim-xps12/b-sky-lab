---
title: "DYNAMIXELサーボ用M5Stack向けIF基板"
titleEn: "DYNAMIXEL Servo Interface Board for M5Stack"
description: "ROBOTIS DYNAMIXELサーボをM5Stackから制御するためのインターフェース基板。半二重UART変換回路を搭載。"
descriptionEn: "An interface board for controlling ROBOTIS DYNAMIXEL servos from M5Stack, featuring half-duplex UART conversion circuit."
category: board
thumbnail: /b-sky-lab/images/icon_mini.jpg
date: 2023-09-12
tags: [PCB, DYNAMIXEL, ROBOTIS, M5Stack, Serial Servo, Interface Board]
links:
  - label: "GitHub"
    url: "https://github.com/kim-xps12"
order: 2
---

## 概要

ROBOTIS社のDYNAMIXELシリアルサーボをM5Stackから制御するためのインターフェース基板です。DYNAMIXEL Protocol 2.0に対応した半二重UART変換回路を搭載しています。

## 特徴

- M5Stack用スタッカブル基板形状
- DYNAMIXEL Protocol 2.0対応
- 半二重UART変換回路搭載
- サーボ用電源コネクタ付き

## 技術的なポイント

DYNAMIXELの通信プロトコルに対応するため、Feetech版とは異なる信号レベル・タイミングに最適化した変換回路を設計しています。
