---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: MFTokyo2023頒布品の説明書ページ
date: 2023-10-14 06:30
firstposted: 2023-10-14 06:30
categories: [Technology]
tags: [Technology, M5Stack]
---
## はじめに
MFTokyo2023にて弊ブースにご来場頂いた皆様，ありがとうございました！！本記事は各種頒布品の説明を記載しています．ぜひブクマしてご利用ください．

<!-- more -->

## MFTokyo2023のB-SKY Labブースにてｽﾀｯｸﾁｬﾝキットをお買い上げ頂いた方へ

### ケーブル同封漏れのお詫びとご案内
2023/10/14(土)にR/03-05 B-SKY Labブースにて，ほぼフルセットをご購入頂いた方へ．

同日分の頒布ロットに，サーボ基板とM5Stack Basic V2.7を接続するためのケーブル同封が漏れていることが確認されました．詳細は[こちらのページ](https://kim-xps12.github.io/b-sky-lab/technology/2023/10/15/MFTokyo2023-kit-missing.html)をご参照ください．

この度はご迷惑をおかけし申し訳ございませんでした．

### ボディの組立

組立の全体像はｽﾀｸﾁｬﾝ本家リポジトリをご参照ください！
[GitHub リンク](https://github.com/meganetaaan/stack-chan/blob/dev/v1.0/README_ja.md)

磁石吸着版のマニュアルはこちらに記載しています．
[READMEリンク](https://github.com/meganetaaan/stack-chan/blob/dev/v1.0/case/contributed/magnet_shell_basic_v2.7_SG90/README_for_shell_SG90_magnet_basic_v2.7_ja.md)

### 基板の組立

基板のシルクに従って**部品の向きに注意しながら**部品をはんだ付けしてください．
- PHコネクタ: 切り欠きが基板の内側（＝電解コンデンサに面した側）
- 電解コンデンサ: シルクの白い塗りつぶし側にコンデンサ本体の負極（一般的には白い帯の側の足）
- ピンヘッダ: 特に極性はありません

<a href="https://lh3.googleusercontent.com/pw/ADCreHe8GtbQ0mFp8BR-X9BvPvAQlK55yvCNnKti5a-l7EXbhMNxPRZhA3iyLBxwScmZBRC40HhpKnMLsUixGGTYoEgnASCiB8IyBfKdIEeU3SEbSEalHSOmxkX-i6FeDnddUMDzUmWBnHwHJed8UebeCH5Z7A=w1020-h706-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/ADCreHe8GtbQ0mFp8BR-X9BvPvAQlK55yvCNnKti5a-l7EXbhMNxPRZhA3iyLBxwScmZBRC40HhpKnMLsUixGGTYoEgnASCiB8IyBfKdIEeU3SEbSEalHSOmxkX-i6FeDnddUMDzUmWBnHwHJed8UebeCH5Z7A=w1020-h706-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

ご自身でプリント基板を発注したい場合は，こちらにKiCADの元データが公開されています．MITライセンスです．
[GitHubリンク](https://github.com/kim-xps12/m5stack_board_grove_port_servo/)

### 配線
次節にある専用テストファームを使用する場合は，以下のようにサーボのケーブルを接続してください．
- S1: ヨー関節（横向きに首を振る関節の方）
- S2: ピッチ関節（上下に首を振る関節の方）

サーボのケーブルは，以下のように**GNDの刻印に茶色をあわせて**差し込んでください．きっと同封でないサーボを使用される場合は，その製品の仕様に合わせて接続してください．

<a href="https://lh3.googleusercontent.com/pw/ADCreHflTZ0MyyJSU16oQ4-vJPt2mPs1meE31RexsmWyWwxz7pYfREzKndGWAwS-sIG-n_kuhxi19u1XC-Shcpivpq_C7As21knu0XDRY2S0m7iII3FvhTUzV0-tAwOR4UjOCXvLCbOiMOW0nuzdP0OowTyF7A=w1141-h884-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/ADCreHflTZ0MyyJSU16oQ4-vJPt2mPs1meE31RexsmWyWwxz7pYfREzKndGWAwS-sIG-n_kuhxi19u1XC-Shcpivpq_C7As21knu0XDRY2S0m7iII3FvhTUzV0-tAwOR4UjOCXvLCbOiMOW0nuzdP0OowTyF7A=w1141-h884-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

### ファームウェアの書き込み
本品専用のコードをこのリポジトリ（[GitHubリンク](https://github.com/kim-xps12/stack-chan-tester-v2.7-portA)）
にご用意しています．まずはこれでサーボなどの動作確認をしていただき，そのあとにオリジナルのカスタマイズを行うのがおすすめです．

開発環境にはVisual Studio CodeにPlatform IOを導入したものを想定しています．未構築の方は「Visual Studio Code Platform IO」で検索していただくと解説記事が豊富です．

### 困ったときは

ご相談はこちらのdiscord（ｽﾀｯｸﾁｬﾝサーバ）へどうぞ！[discord招待リンク](https://discord.com/invite/b2zYSezuHa)
`@孔明` でメンションいただければ私に通知が届きます．

Discordのフレンド未登録の方からのDMは通知が届かずお返事が遅くなる恐れがあります．DMでのご連絡自体は問題ありませんので，チャンネルでメンションいただくか，[Twitter](https://twitter.com/eternalfriend17)のリプで「〇〇でDMしました！」とご一報いただけると確実です．

### オススメのL字USBコネクタ
我が家ではこれを愛用しています（動作を保証するものではありません）．

[タイプC L字 USB C 変換アダプタ 2個 Type Cオスメス 90度 直角 40Gbps高速転送 5A急速充電100W 8K@60Hz映像出力 wuernine](https://amzn.to/46ScsYA)

<a href="https://amzn.to/46ScsYA" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/ADCreHdOTNoulbqTO6ucY8q4F8ZzgoSUlqBdNvTEJwep7CDqiJy9b89us7JFFLfRD0RnKZqLZt5BgKywtdxdbIZXaa7SBWr9xRtoU8dULvjZGsVpTYSV7rYz1RjwjstXNvOKamj7gj0vpx_HRd3kLpy3DNtBPg=w916-h884-s-no?authuser=0" width="30%" style="display: block; margin: auto;">
</a>

## Feetechインターフェースボード（未組立品）をお買い上げ頂いた方へ

BOMや使い方，元データはこちらのリポジトリを参照ください．

[GitHubリンク](https://github.com/kim-xps12/m5stack_interface_board_feetech_sts)

動作確認用のサンプルコードはこちらで公開しています．
[GitHubリンク](https://github.com/kim-xps12/m5stack_uart_feetech_sts/)

通販ページもあります．追加でご入用の方はぜひ！
[boothリンク](https://b-sky-lab.booth.pm/items/5083992)

## Feetechインターフェースボード（完成品）をお買い上げ頂いた方へ

動作確認用のサンプルコードはこちらで公開しています．
[GitHubリンク](https://github.com/kim-xps12/m5stack_uart_feetech_sts/)

完成品の通販ページも現在準備中です．