---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: 除湿ボックスのために秋月の温湿度計のマウンタを作る
date: 2021-07-31 23:09
firstposted: 2021-07-31 23:09
categories: [Technology]
tags: [Technology, 3dPrinter]
---





## 四角い穴は開けたくない

3Dプリンタのフィラメントは湿気ると特性が悪化し印刷品質に悪影響を与えることが一般に知られています．そのため，密閉容器に乾燥剤と一緒に収納する商品もよく売っていますが，性能の割に高価な印象です．

僕はダイソーの300円タッパーにAmazonで買った乾燥剤と一緒に詰めて使っているわけですが，当然のことながら温湿度計も自分で取り付ける必要があります．[秋月電子の温湿度計](https://akizukidenshi.com/catalog/g/gM-13159/)を愛用しているのですが，矩形の穴を頑張ってあけるのは非常に面倒です．

というわけで，M3のネジ2本でタッパーに固定できるようにマウンタを印刷しました．データの公開先も記載していますのでよろしければお使いください．

<!-- more -->



## 設計

設計にはFusion 360を使いました．クラウドにしかデータがいないというのが何とも慣れませんが，学生を終えるとInventorが使えなくなるので今のうちから慣れておきましょうということで．

<img src="https://lh3.googleusercontent.com/pw/AM-JKLXV3bxpmQfXz_aIkPPQSL2tiN0tlvWzMvBtwXwiVR9848cN5_pinYAlwUD27iFj8CfZP7TQNBDz_DMtLLmZ5Me9gtNQpCKULPOgNn5y1hyVKBonqPyjG7UTtYQAnt1T7CMsYTtgJSKFzPak0Ldf8nAieQ=w1505-h914-no?authuser=0" width="70%" style="display: block; margin: auto;">



## 印刷

FlashforgeのAdventuer 3で印刷した現物

<img src="https://lh3.googleusercontent.com/pw/AM-JKLVuLWgW-9JumOjRuT2YRfaLlznyKDKRP7k-HNlOkHstcs_1MxbtUHnELHQnact_d0Y_E1vpX9N1Av8r-ZD4i_jwAV1YlLLwkK21aav-1zOnGZN6aFvS-WQ8jHaUfbQoLpE-jl5gTo-4LqYqu6t96YLjhg=w687-h914-no?authuser=0" width="60%" style="display: block; margin: auto;">



実際に組み付けるとこんな感じ．嵌合もいい感じです．

<img src="https://lh3.googleusercontent.com/pw/AM-JKLWqcCaism3w14keLzMp3Wkp2jz_fRdANH8RsTd-4MyDZnd0OY_PvxON4GrdHF4zbJ1nvqV8ELo0VPg7mMRPvsejmtewPadKxSOtQOSx1MpftTdID-w-jTxj3F0rwqqG-ucEARsTLjgOYrgwLAJdh5I1QA=w687-h914-no?authuser=0" width="60%" style="display: block; margin: auto;">



## 組付け

組付けは軸間距離37mmでM3のネジ2本です．タッパーにネジ止めするとこう．緑よりも青いタッパーの方が見やすいです．次も青にしよう．

<img src="https://lh3.googleusercontent.com/pw/AM-JKLWtwfifCr1qN_whXMu-BPOGXYJTxFg47gcmKt8vaJeOwOWgVQRcllNxt4g_zUY7z0-nTKYhwkwalscwftFX54wfkZb5kOAiT5DVqmOrNH5Xiz0H_ZXBp7qoBqO9vAbTrKKn6sFZQFUCBRvORax6HiPjrA=w687-h914-no?authuser=0" width="60%" style="display: block; margin: auto;">





## データ公開

BOOTHでSTLデータを公開しています．秋月温湿度計を愛用している方はお試しください．投げ銭されるととても喜びます．印刷代行も一応受け付けてます（客層的に皆さん自分のご家庭で印刷できそうですが...）

DLリンクは[こちら](https://b-sky-lab.booth.pm/items/3163095)