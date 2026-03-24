---
title: "Feetechサーボ用M5Stack向けIF基板"
titleEn: "Feetech Servo Interface Board for M5Stack"
description: "FeetechシリアルサーボをM5Stackから制御するためのインターフェース基板。半二重UART変換回路を搭載し、簡単に接続可能。"
descriptionEn: "An interface board for controlling Feetech serial servos from M5Stack, featuring half-duplex UART conversion circuit."
category: board
thumbnail: /b-sky-lab/images/icon_mini.jpg
date: 2023-05-31
tags: [PCB, Feetech, M5Stack, Serial Servo, Interface Board]
links:
  - label: "GitHub"
    url: "https://github.com/kim-xps12"
  - label: "関連ブログ記事"
    url: "/b-sky-lab/technology/2023/05/31/feetech_serial_board.html"
order: 1
---

## 概要

Feetechシリアルサーボ（STS/SCSシリーズ）をM5Stackから簡単に制御するためのインターフェース基板です。半二重UART通信に必要な信号変換回路を搭載しています。

## 特徴

- M5Stack用スタッカブル基板形状
- 半二重UART変換回路搭載
- サーボ用電源コネクタ付き
- KiCadで設計、JLCPCBで製造

## 技術的なポイント

Feetechサーボの半二重通信プロトコルに対応するため、TX/RXの切り替え回路をハードウェアで実装。ソフトウェア側の制御を簡素化しています。
