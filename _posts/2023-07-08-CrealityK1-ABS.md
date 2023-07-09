---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Creality K1でABSを印刷したい！
date: 2023-07-08 21:00
firstposted: 2023-07-08 21:00
categories: [Technology]
tags: [Technology, 3dprinter, Creality]
---

**How to setup ABS filament @Creality K1 !**

## はじめに

こんにちは，孔明です．
今回はCreality Slicerの後継ことCreative3DからCreality K1でABSを印刷する設定の備忘録です．

<!-- more -->

## ！注意！
あくまでこの手順は私の備忘録であり，メーカや公式が推奨している方法ではありません．
また，この手順を真似した際に引き起こされる不具合や不利益について私は一切の責任を持ちません．自己責任でお願いしますね！

## 想定環境
- Creative3D（Creality K1向け純正スライサ）
- RepRapper ABS
- ビルドプレートのりやケープを吹いておくことを推奨

## 変更箇所
HyperPLAのnormalプロファイルをベースに，以下のようにパラメータを変更しました．
下記箇所を変更した際に，連動してスライサが自動更新する項目はそのまま受け入れます．

- Quality/ Layer Height: 0.25
- Shell/ Wall Line Count: 2
- Speed/ Initial Layer Speed: 25
- Speed/ Print Acceleration: 20000
- Material/ Printing Temperature: 260
- Material/ Build Plate Temperature: 100
- Cooling/ Fan Speed: 10
- Cooling/ Minimum Speed: 75
- Cooling/ Cds Fan Speed: 10
- Cooling/ Spetial Cds Fan Speed: 10
- Extruder/ Line Width: 0.5
- Experimental/ Bridge Fan Speed: 10
- Experimental/ Small Feature Fan Speed: 10

## 関連記事
- [Creality K1 レビュー[高速造形機種の幕開け！]](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/04/CrealityK1-01.html)
- [Creality K1のfluidd開放とタイムラプス設定](https://kim-xps12.github.io/b-sky-lab/technology/2023/07/02/CrealityK1-fluidd-timelapse.html)
- [Creality K1の水平レベリング調整](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/26/CrealityK1-leveling.html)


## おわりに
いかがでしたか？本記事の手順でCreality K1のポテンシャルを引き出せたら嬉しいです．
それでは．
