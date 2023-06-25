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
tags: [Technology, 3dprinter, Creality]
---



## 設定
こんにちは，孔明です．先日Creality K1をうっかりポチってしまったのがきっかけでCreality SlicerことCrealive 3Dを使い始めました．

<!-- more -->

フィラメントの設定欄にコストの設定欄があるのですが，初期値が0.3€でよく分からなかったので設定し直しです．

ちまちまと値を入れて試した結果，どうやら **Filament cost の欄は1mあたりの値段**のようです．
デフォルトだと€（ユーロ）と書いてありますが，スライス後のプレビュー画面では勝手に￥に差し替わるので気にしないことにします．

我が家のHyperPLAはAmazon.jpで購入して1kgあたり4100円だったので，これに合わせて計算すると `12.23` となりました．

購入時の値段が違って気になる方は，よしなに定数倍して計算してください．

それでは．

## 参考
4100円/kgのHyper PLA，販売リンクはこちら！
最近はPrime対象で翌日に届いて助かっています．

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=eternalfriend-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0C464V7F2&linkId=9d786e9c6744ac16afe45774a10f774a"></iframe>


