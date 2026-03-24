---
title: "完全無線型左右分割キーボード"
titleEn: "Wireless Split Keyboard"
description: "左右分割型の完全無線キーボード。BLE通信により左右間・PC間ともにワイヤレスで接続。自作キーボード。"
descriptionEn: "A fully wireless split keyboard with BLE connectivity between halves and to the host PC."
category: gadget
thumbnail: /b-sky-lab/images/icon_mini.jpg
date: 2022-05-08
tags: [Keyboard, BLE, Wireless, Split Keyboard, Self-made]
links:
  - label: "GitHub"
    url: "https://github.com/kim-xps12"
order: 1
---

## 概要

左右分割型の完全無線キーボードです。左右間の通信もBLE（Bluetooth Low Energy）で行い、ケーブルを一切使わずに運用できます。

## 特徴

- 左右間通信もBLEで完全ワイヤレス
- カスタムPCB設計
- Cherry MX互換キースイッチ対応
- バッテリー駆動（充電式）

## 技術的なポイント

左右間のBLE通信における低遅延化と省電力化を両立するため、通信プロトコルとスリープ制御を最適化しています。ファームウェアはZMKベースでカスタマイズ。
