---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Creality SlicerのFilament cost 設定
date: 2023-06-25 14:00
firstposted: 2023-06-25 14:00
categories: [Technology]
tags: [Technology, 3dPrinter, Creality]
---



## はじめに
こんにちは，孔明です．先日Creality K1をうっかりポチってしまったのがきっかけでCreality SlicerことCrealive 3Dを使い始めました．

<!-- more -->

フィラメントの設定欄にコストの設定欄があるのですが，初期値が0.3€でよく分からなかったので設定し直した際の備忘録です．

## 設定
ちまちまと値を入れて試した結果，どうやら **Filament cost の欄は1mあたりの値段**のようです．

デフォルトだと€（ユーロ）と書いてありますが，スライス後のプレビュー画面では勝手に￥に差し替わるので気にしないことにします．

我が家のHyperPLAはAmazon.jpで購入して1kgあたり4100円だったので，これに合わせて計算すると `12.23` となりました．

購入時の値段が違って気になる方は，よしなに定数倍して計算してください．

それでは．


## 関連記事
- [Creality K1 レビュー[高速造形機種の幕開け！]](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/04/CrealityK1-01.html)
- [Creality K1の水平レベリング調整](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/26/CrealityK1-leveling.html)
- [Creality K1のfluidd開放とタイムラプス設定](https://kim-xps12.github.io/b-sky-lab/technology/2023/07/02/CrealityK1-fluidd-timelapse.html)
- [Creality K1でABSを印刷したい！](https://kim-xps12.github.io/b-sky-lab/technology/2023/07/08/CrealityK1-ABS.html)

## 参考
4100円/kgのHyper PLA，販売リンクはこちら！最近はPrime対象で翌日に届いて助かっています．

[CREALITY Hyperシリーズ PLA 3Dプリンティング用フィラメント 1KG/2.2Ib 1.75mm スプール 10倍高速印刷 高速冷却 より高い靭性 精度±0.03mm アップグレード版素材 ほとんどのFDM 3Dプリンターと互換性があり (ホワイト)](https://amzn.to/3pnddsu)

<a href="https://www.amazon.co.jp/gp/product/B0C464V7F2?smid=A2TYIGUT0JH9I9&psc=1&linkCode=li2&tag=eternalfriend-22&linkId=77d70e1e20d89cbb164ef71c8de22d12&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img src="https://lh3.googleusercontent.com/pw/AJFCJaUfvdduWkkf76GQriFWgXCfb6SJI5i_yaNIkYEPkNuiUr9UoVSzHIvx0ivC_8u4gCzb2PBtGuAMOUQ4NOrzUvNOW0S8qj2Dh2NopjXsXvYzOA11jHHHk0QWRfb-X2u3ZlbsciTj0WImPi_pcdfBewdLEQ=w894-h893-s-no?authuser=0" width="30%" style="display: block; margin: auto;"></a>
