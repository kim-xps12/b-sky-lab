---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
pagination: 
  enabled: true
title: Jetson Xavier NXでXsensのデバイスが認識しない問題
date: 2020-12-10 22:02
firstposted: 2020-12-10 22:02
categories: [Technology]
tags: [Technology, ROS, Jetson]
---



## JetsonだってXsensのIMUを使いたい

Jetson Xavier NXで自律移動システムを構成するときに，IMUとしてXsens社のMTi-30を使おうと思ったのですが，単に[xsens_driver](http://wiki.ros.org/xsens_driver)をaptでインストールするだけでは動かなかったのでメモをまとめます．

<!-- more -->

## 症状

```fatal could not find proper mt device```

と出てきてroslaunchしても値が取れません．```lsusb```を叩くとデバイス自体は見えていますが```/dev/ttyUSB0```は無いので，ドライバ周りが怪しそうです．



## なぜ動かない？

そもそもなぜ動かないかを調べたところ，普段のUbuntuのカーネルには含まれているドライバがJetson向けイメージでは入っていないことが原因のようです．Xavier NXに限った話ではなく，AGX Xavierでも[同じくXsensのデバイスが検出できない症例](https://forums.developer.nvidia.com/t/xavier-cannot-recognize-xsens-solved/66673)が起きており，TX1や2でもカーネルの都合でそのままでは[動かないデバイス](https://qiita.com/karaage0703/items/9bef6aeec9ad24f647c6)の記事も割とありました．ライセンス的な都合なのでしょうか．不便．



## ないものは入れよう

ドライバがないなら入れれば良いじゃない，ということで自分でビルドしてカーネルに突っ込むことにしました．[上記の症例](https://forums.developer.nvidia.com/t/xavier-cannot-recognize-xsens-solved/66673/15)やそこから参照されているページに沿って進めてみたのですが，```xsens_mt.ko```が生成されずに困っていたところ，Xsens社のコミュニティページに[良い感じの手順](https://base.xsens.com/hc/en-us/community/posts/211806629-MTi-300-not-working-on-NVIDIA-TX1-platform-Kernel-3-10-96-)が載っていました．これに基づいて実際に叩いたコマンドを以下にまとめます．


```
sudo apt-get install libncurses5-dev
dmesg --follow
cd /usr/src/linux-headers-4.9.140-tegra-ubuntu18.04_aarch64/
sudo make modules_prepare
cd ~
git clone https://github.com/xsens/xsens_mt.git
cd xsens_mt/
make
sudo modprobe ./xsens_mt.ko
sudo depmod -a
sudo cp xsens_mt.ko /lib/modules/4.9.140-tegra/kernel/drivers/usb/serial/
sudo reboot now
rosstack profile
rospack profile
sudo depmod -a
sudo reboot now
```

何やかんや試行錯誤行き当たりばったりで試したログをそのまま貼っているので，冗長だったり足りない内容があるかもしれませんがとりあえずこれで動いたのでメモとして残しておきます．



## 参考サイト

- ROS.org [xsens_driver] : [http://wiki.ros.org/xsens_driver](http://wiki.ros.org/xsens_driver)
- xavier cannot recognize xsens (Solved) : [https://forums.developer.nvidia.com/t/xavier-cannot-recognize-xsens-solved/66673](https://forums.developer.nvidia.com/t/xavier-cannot-recognize-xsens-solved/66673)

- A guide to solve USB serial driver problems on TX2 : [https://forums.developer.nvidia.com/t/a-guide-to-solve-usb-serial-driver-problems-on-tx2/60787#5254939](https://forums.developer.nvidia.com/t/a-guide-to-solve-usb-serial-driver-problems-on-tx2/60787#5254939)
- Jetson NanoでMIDIを使うためにカーネルビルド : [https://qiita.com/karaage0703/items/9bef6aeec9ad24f647c6](https://qiita.com/karaage0703/items/9bef6aeec9ad24f647c6)