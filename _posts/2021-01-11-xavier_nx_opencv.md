---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
pagination: 
  enabled: true
title: Jetson Xavier NXでOpenCVが見つからないエラー ([Error] OpenCV not found @ Jetson Xavier NX)
date: 2021-01-11 07:25
firstposted: 2021-01-11 07:25
categories: [Technology]
tags: [Technology, ROS, Jetson]
---



## OpenCVを手動インストールはしたくない

OpenCVを利用するちょっと古いパッケージ（Turtlebot 2 kobukiの開発環境とか）をcloneしてビルドするときにOpenCV周りでエラーが出ることがあります．デフォルトで入っているOpenCVを消して手動でインストールすると直るらしいですが，~~ばり面倒なの~~ 時間がかかるのであまりやりたくないですよね．

<!-- more -->

## 症状

```catkin build```を実行すると，```/usr/include/opencv```が見つからない旨のエラーが出る．（ごめんなさいエラーメッセージ控えておくの忘れました．機会があれば更新します）



## 解決法

シンボリックリンクを貼ってデフォルトで入っているものを使う．デフォのものはディレクトリ名が```opencv4```なのでリネーム等の工夫が必要ですが，そうすると他と干渉して良くない感じになりそうなのでシンボリックリンクで押し切ります．コマンドは次の通り．

```sudo ln -s /usr/include/opencv4/ /usr/include/opencv```

あくまで僕の環境ではうまくいっただけなので，ご利用の際は自己責任でお願いします．

