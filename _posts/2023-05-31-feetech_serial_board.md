---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Feetechのシリアルサーボをインターフェースボード無しで動かしたい！
date: 2023-05-31 01:00
firstposted: 2023-05-31 01:00
categories: [Technology]
tags: [Technology, M5Stack, SnakeRobot, Robotics]
---

## はじめに

ちょうど半年ぶりの更新になってしまいました，こんにちは孔明です．

最近趣味でヘビ型ロボットを徐々に作っており，今回はその中でFeetechのシリアルサーボをインターフェースボード（＝メーカ純正の専用基板）を使わずに動かしたい需要が生じました．インターフェースボードは秋月で1枚1000円程度で買える（[リンク](https://akizukidenshi.com/catalog/g/gM-16295/)）ので値段は大して気にならないのですが，何気に大きくて場所を取ります．ロボットに組み込もうとすると少々面倒なので，M5Stackのプロトモジュール基板を使ってコンパクトに自作してみました．

<!-- more -->


## コンセプト
ヘビ型ロボットに組み込むために，以下のコンセプトで作ってみました．

- M5Stackプロトモジュール上に実装する
- 動かす対象のシリアルサーボはSTS3215として，これのみ動かせればOK
- M5Stackからの入力はUARTで受け付け，他のインターフェースはなくてOK
- 電源入力はJST PHの2ピンで受け取る
- 信号入力はMolex 5263(2.5mmピッチシリーズの3ピン)で受け取る
- サーボからのフィードバックの読み出しもサポートする



## 設計

回路図はSTS3215の商品ページから，「FEETECH社デジタルサーボの使用方法」のPDFリンクを踏むと7ページ目上段に載っているものをそのまま使います．こうやって代替の回路図を載せてくれているのは非常に助かりますね！実際にはMAX485を3.3V版のMAX3485EDに差し替えて作りました．


実体配線図はpcbeで描いています．KiCAD覚えたいーー！
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">たぶんできた！！<a href="https://twitter.com/hashtag/bsl_snake?src=hash&amp;ref_src=twsrc%5Etfw">#bsl_snake</a> <a href="https://t.co/kZHb0KsTPJ">pic.twitter.com/kZHb0KsTPJ</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1643625806969618439?ref_src=twsrc%5Etfw">April 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


今回描いたpcbeのファイルは[私のリポジトリ](https://github.com/kim-xps12/bsl-snake-public/tree/master/hardware/board)からDLできます．
ご利用は自己責任でお願いします．近いうちにヘビ型ロボットの図面もUP予定です．



## 材料リスト
実体配線図まで描けたので，秋葉原にお買い物に行きましょう．M5のプロトモジュールは安い方ということでスイッチサイエンス版のリンクを載せていますが，千石電商の店舗でも買えます．

- M5Stack用プロトモジュール: [SWITCH SCIENCEのリンク](https://www.switch-science.com/products/3650) / [千石のリンク](https://www.sengoku.co.jp/mod/sgk_cart/detail.php?code=EEHD-58CC)
- FEETECHサーボ STS3215: [秋月のリンク](https://akizukidenshi.com/catalog/g/gM-16312/)
- PHコネクタ ベース付ポスト トップ型 2P B2B-PH-K-S: [秋月のリンク](https://akizukidenshi.com/catalog/g/gC-12802/)
- RS485ドライバ MAX3485ED: [秋月のリンク](https://akizukidenshi.com/catalog/g/gI-16211/)
- SOP8(1.27mm)DIP変換基板 金フラッシュ: [秋月のリンク](https://akizukidenshi.com/catalog/g/gP-05154/)
- ICソケット ( 8P) (10個入): [秋月のリンク](https://akizukidenshi.com/catalog/g/gP-00017/)
- トランジスタ 2SA1015GR 50V150mA (10個入): [秋月のリンク](https://akizukidenshi.com/catalog/g/gI-00882/)
- リード型積層セラミックコンデンサー 0.1μF50V: [秋月のリンク](https://akizukidenshi.com/catalog/g/gP-00090/)
- 三端子DC/DCレギュレーター 5V BP5293-50: [秋月のリンク](https://akizukidenshi.com/catalog/g/gM-11188/)
- カーボン抵抗（7.5k 1本, 20k 1本, 2.2k 2本）: [秋月のリンク（めんどくさいので全部入り買ってます）](https://akizukidenshi.com/catalog/g/gR-07791/)
- Molex 5264-03: [千石のリンク](https://www.sengoku.co.jp/mod/sgk_cart/detail.php?code=EEHD-0HWD)



## ブレッドボードで動作確認

ブレッドボードで動作確認した際の様子がこちら！ちゃんと動いてるーーーーー！！！
（動画は5V向けの485ドライバICですが）

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Feetechのシリアル変換基板はデカすぎるので、取説に載ってる回路で代替する予定。部品少ないので場所を抑えられそう！！！<a href="https://t.co/hst9rgBK9k">https://t.co/hst9rgBK9k</a><a href="https://twitter.com/hashtag/bsl_snake?src=hash&amp;ref_src=twsrc%5Etfw">#bsl_snake</a> <a href="https://t.co/hEiJ2gYCm9">pic.twitter.com/hEiJ2gYCm9</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1635327057549987840?ref_src=twsrc%5Etfw">March 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



## 気合で手ハンダ実装

はい，部品たち買ってきました．プロトモジュールを千石の店舗で買ったのでちょっと高めですが，すぐ手に入るのは良い．秋葉原大好きです．大好きすぎて秋葉原で働ける勤務先を選んだりしています．

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">この回路はM5のプロトモジュールに載せてCore2に背負わせちゃおうね作戦。組み付ける場所を考えなくて良くなるので最高<a href="https://twitter.com/hashtag/bsl_snake?src=hash&amp;ref_src=twsrc%5Etfw">#bsl_snake</a> <a href="https://t.co/iCIKwk7F8f">pic.twitter.com/iCIKwk7F8f</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1635675882760343555?ref_src=twsrc%5Etfw">March 14, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


実装して組み付けた様子．手ハンダは鬼つかれるんですわ…

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">背面はこんな感じ<br>久々に手ハンダしたら疲れた<a href="https://twitter.com/hashtag/bsl_snake?src=hash&amp;ref_src=twsrc%5Etfw">#bsl_snake</a> <a href="https://t.co/L2ma46w2Iv">pic.twitter.com/L2ma46w2Iv</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1643668354354544640?ref_src=twsrc%5Etfw">April 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

問題なく動いていますね！最＆高

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">自作のFeetechサーボ用シールドでSTS3215駆動ヨシ！！！！！<a href="https://twitter.com/hashtag/bsl_snake?src=hash&amp;ref_src=twsrc%5Etfw">#bsl_snake</a> <a href="https://t.co/XJmArrwm6s">pic.twitter.com/XJmArrwm6s</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1643668238403010561?ref_src=twsrc%5Etfw">April 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



## おわりに

いかがでしたか？ロボットを作る方でFeetechサーボを採用している場合には地味に需要あるんじゃないかな～と淡く期待しています．

数年ぶりに回路図＆配線図を起こして基板を作ってみましたが，やっぱり楽しいですね．ただこれ手ハンダが堪える歳になってきたので，次はガーバーデータ起こして外注にも挑戦したいです．最近は格安でしかも爆速で届くとTwitterで話題ですので，流れに乗りたい気持ちです．

ちなみにですが，ここで作成したヘビ型ロボットは以下の動画で観られます．
5月上旬に都内某所で講演をさせて頂いた際のアーカイブです．よろしければぜひ．

<iframe width="560" height="315" src="https://www.youtube.com/embed/6VCq5kFy-LE?start=3789" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

それでは．
