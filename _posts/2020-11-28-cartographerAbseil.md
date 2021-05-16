---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Google CartographerとAbseil
date: 2020-11-28 23:49
firstposted: 2020-11-28 23:49
categories: [Technology]
tags: [Technology, ROS]
---



## Abseiは自動で入らない

Google Cartographerのインストール時に、これで地味にハマりました。2020年6月に関連パッケージのAbseil（C++拡張ライブラリ）が自動でインストールされなくなったらしいのが原因です。

<!-- more -->

まずは[公式リファレンス](https://google-cartographer-ros.readthedocs.io/en/latest/compilation.html)の手順に従ってダウンロードと関連パッケージのインストールを進めます。最後の```catkin_make_isolated --install --use-ninja```でビルドする前に、次の手順でAbseilと関連のパッケージマネージャをインストールします。インストールスクリプトがcartographerのディレクトリの中にあるので、それを利用します。

パッケージマネージャのインストール：```sudo apt install stow```
Abseilのインストール：```~/cartographer/scripts/install_abseil.sh```

Abseilのインストールが完了したら，次のコマンドでCartographerをビルドします。
```catkin_make_isolated --install --use-ninja```

参考記事はこちら：[Build Abseil dependency in CI](https://github.com/cartographer-project/cartographer_ros/pull/1485)



