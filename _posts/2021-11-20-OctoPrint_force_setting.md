---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: OctoPrintでPrinter Profileのidentiferを編集したい！ (How to edit Printer Profile identifer in OctoPrint !)
date: 2021-11-20 07:49
firstposted: 2021-11-20 07:49
categories: [Technology]
tags: [Technology, 3dprinter, Raspberry_pi]
---



## はじめに
OctoPrintでPrinter Profileの設定のうち，identiferを編集したいと思ったのですが，ブラウザで開くいつものUIからは編集できませんでした．

<!-- more -->

仕方ないので，sshでラズパイにログインして直接編集します．恐らく公式の手順ではないので，あくまで非推奨/自己責任で行ってください．



## 手順

トラブル防止のため，作業開始前に全ての印刷を停止します．また，念のため変更したいプロファイル以外のプロファイルを設定，デフォルトプロファイルとして保存しておくと気持ち的に安心です．

まずはsshでログイン．またはモニタとキーボードを接続後に再起動してコンソールへログインします．

下記コマンドを実行し，念のため設定ファイル（下記の例ではfelix_pro_2.profile）をバックアップしておく．設定ファイルの名前は各自のものに読み替えてください．

```bash
cp ~/.octoprint/printerProfiles/felix_pro_2.profile ~/.octoprint/printerProfiles/felix_pro_2.profile.back
```

設定ファイルの名前が分からない場合は，

```bash
cp ~/.octoprint/printerProfiles/
```

まで打ち込んでからtabキーを連打すると補完されるか候補が表示されます．

下記コマンドを実行し，エディタ（nano）で設定ファイル（下記の例ではfelix_pro_2.profile）を開くきます．設定ファイルの名前は各自のものに読み替えてください．

```bash
nano ~/.octoprint/printerProfiles/felix_pro_2.profile
```

24行目あたりの，idの行を任意の文字列に書き換えます．例えばIdentifierをfelix_pro_2からfelix_pro_2_single_nozzleに変えたいときは，

こうなっているものを

```bash
id:felix_pro_2
```

こう変更します．

```bash
id:felix_pro_2_single_nozzle
```

最後にsshログアウト，モニタを接続していた場合は諸々取り外して念のため再起動すれば完了です．



以上．
