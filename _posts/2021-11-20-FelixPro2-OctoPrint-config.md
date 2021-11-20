---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: OctoPrintにFelix Pro 2を接続する(How to setting OctoPrint for Felix Pro 2)
date: 2021-11-20 08:15
firstposted: 2021-11-20 08:15
categories: [Technology]
tags: [Technology, 3dprinter, Raspberry_pi]
---



## はじめに
Felix Pro 2でOctoPrintを使って無線化しようとしたところ，デフォルトのプロファイルにはFelix Pro 2がなかったのでパラメータ類をまとめておきます．OctoPrint自体の導入は[このサイト](https://kurashi-note.com/post-8673/)や[このサイト](https://symamone-tec.com/octopi-procedure/)が詳しいです．

<!-- more -->

シングルノズルとして使っています．一応普通に動いていますが間違っていたらごめんなさい．

## 設定

### Serial Connection

Baudrateを115200に設定，他はGeneralのデフォルトのまま．

### Printer Profiles

General : お好みの名前を設定

Print bed & build volume : 

- Form Factor : rectangular
- Origin : Lower Left
- Heated Bed : Enable
- Headed Chamber : Disable
- Width (X) : 245 mm
- Depth (Y) : 237 mm
- Height (Z) : 235 mm
- Custom bounding box : Disable

Axes : Y軸だけ反転をONにします

- X : 6000 mm/min
- Y : 6000 mm/min, Invert
- Z : 200 mm/min
- E : 300 mm/min

Hotend & extruder

- Nozzle Diameter : 0.35 mm



以上
