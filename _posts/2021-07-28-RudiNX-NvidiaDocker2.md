---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Rudi-NXにnvidia-docker2をインストールする
date: 2021-07-28 03:29
firstposted: 2021-07-28 03:29
categories: [Technology]
tags: [Technology, ROS, Jetson]
---

**How to install nvidia-docker2 @ Rudi-NX**

## 概要
[Connect Tech社のRudi-NX](https://connecttech.com/product/rudi-nx-embedded-system-nvidia-jetson-xavier-nx/)は，Jetson Xavier NXを搭載した組み込み用ボードです．豊富な端子類と何よりファンレス構造が特徴の製品ですね．これでにDockerを入れてROSを動かそうと思ったときに，rvizがうまく起動しませんでした．諸々調べたところ，JetsonのcudaにDocker内からアクセスする際にはnvidia-docker2を使うのが主流らしいのですが，なぜかRudi-NXにプリインストールされているJetpackにはこれが入っていなかったので頑張ってインストールしてみよう，という記事です．

<!-- more -->

## 問題点
通常のJetsonシリーズであれば，[公式サイト](https://developer.nvidia.com/embedded/jetpack)から自前でJetpackのイメージを落としてきてMicro SDに入れるわけですが，この場合は特別な手順を踏むことなく自動的にnvidia-docker2がインストールされた環境が出来上がります．

Rudi-NXの場合は工場出荷状態でOSが入っていますが，これにnvidia-docker2はインストールされていませんでした．更に調べたところ，Rudi-NXの場合は工場出荷時点でaptのsourceslistが変更されているため，`apt install nvidia-docker2`してもパッケージが見つからず自前でインストールもできません．そこで，以下のように修正し，通常のJetpackと同じものをインストールできるようにします．

## 手順
まずは設定ファイルを開きます．

```
sudo vim /etc/apt/sources.list.d/nvidia-l4t-apt-source.list
```

続いて，中身を以下の状態に変更し保存します．

```/etc/apt/sources.list.d/nvidia-l4t-apt-source.list
deb https://repo.download.nvidia.com/jetson/common r32.4 main 
deb https://repo.download.nvidia.com/jetson/t194 r32.4 main
```
出荷状態ではこれらがコメントアウトされていたので，それを解除しました．


次にこれらの認証キーを取得します．

```
sudo apt-key adv --fetch-key http://repo.download.nvidia.com/jetson/jetson-ota-public.asc
```

最後にupdateをかければ，aptでnvidi-docker2をインストールできます．

```
sudo apt update
sudo apt install nvidia-docker2
```

これでdocker内からcudaコアにアクセスするアプリケーションが走ります．お疲れ様でした．

## 参考

sourcelistの編集と認証キーの取得についてはここを参考にしました．
https://forums.balena.io/t/getting-linux-for-tegra-into-a-container-on-balena-os/179421/18