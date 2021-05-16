---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
pagination: 
  enabled: true
title: Jetson Xavier NXでNano向けカメラモジュールを使いたい
date: 2021-01-11 07:10
firstposted: 2021-01-11 07:10
categories: [Technology]
tags: [Technology, ROS, Jetson]
---



## Xavier NX 対応って書いてあるカメラ少なくない？？？

[Switch Scienceの販売](https://www.switch-science.com/catalog/6340/)ページには，「Jetson Nano開発者きっとでお使いいただいていたカメラモジュールがそのまま利用可能です」と書いてあるわけですが，この文章がリンクになっていてカメラモジュールの販売ページに飛ぶんですよね．

つまりそのままお使いいただけるのは，リンク先のカメラモジュールなのか，製品全般に言えることなのかようわからんわけです．困る．というわけで僕が試してみたカメラモジュール3個を紹介します．



<img src="https://lh3.googleusercontent.com/pw/ACtC-3dwFbWVpjF1vqca2l9Kw2ncg5PRHg-86sEvZox1OeVDyh-Tb4Qv4FFxk1SbWCyJNieHFmaEQknsbRq-jr45z2G3aY6C9WbjdyTGrXxH5E-pvBQR2v_sDaQaJ4q2QKSk3EfmBpAnr3xQWwkGN9OWFT1JcA=w942-h706-no?authuser=0" width="80%" style="display: block; margin: auto;">



## 買ってみたモジュールたち

SainSmart IMX219 AIカメラモジュールNVIDIA Jetson Nanoボード用8MPセンサー120度FoV ([amazonリンクはこちら](https://amzn.to/39iaJ2C]))

<a href="https://www.amazon.co.jp/dp/B07WRC86XN/ref=as_li_ss_il?_x_encoding=UTF8&psc=1&linkCode=li3&tag=bskylab-22&linkId=35ee6256154b8b25410b00b0ef75ef94&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07WRC86XN&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=bskylab-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=bskylab-22&language=ja_JP&l=li3&o=9&a=B07WRC86XN" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />



SainSmart IMX219ナイトビジョンカメラモジュールNVIDIA Jetson Nanoボード用、8MPセンサー77度Fov 3280x2464解像度([amazonリンクはこちら](https://amzn.to/3q7akqj))

<a href="https://www.amazon.co.jp/dp/B07VDBWGK2/ref=as_li_ss_il?&linkCode=li3&tag=bskylab-22&linkId=ac1d4600381d283e9cbfd2382b773976&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07VDBWGK2&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=bskylab-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=bskylab-22&language=ja_JP&l=li3&o=9&a=B07VDBWGK2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />



SainSmart IMX219ナイトビジョンカメラモジュール，2個赤外線LEDライト・ボード・モジュール付き NVIDIA Jetson NanoボードとRaspberry PI CM3用、8MPセンサー160度Fov 3280x2464解像度([amazonリンクはこちら](https://amzn.to/39gsXS8))



<a href="https://www.amazon.co.jp/dp/B07WRCB1J9/ref=as_li_ss_il?&linkCode=li3&tag=bskylab-22&linkId=1629fba7e38b1e95d2beafb2548f986b&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07WRCB1J9&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=bskylab-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=bskylab-22&language=ja_JP&l=li3&o=9&a=B07WRCB1J9" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />



いずれのモジュールも特別な設定無しで使えました．とりあえずNano対応と書いてあるものを買っておけば使えるのかもしれません．



## 使用したパッケージ

基本的には[RT社によるドライバ](https://github.com/rt-net/jetson_nano_csi_cam_ros)を指示通りインストールすれば大丈夫です．
