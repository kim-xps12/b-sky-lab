---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: M5Stack用Feetechインターフェース基板を外注したレビュー（Sponsored by PCBWay）
date: 2023-07-16 04:00
firstposted: 2023-07-16 04:00
categories: [Technology]
tags: [Technology, PCBWay, KiCAD, M5Stack]
---

**Outsourced Review of Feetech Interface Board for M5Stack (Sponsored by PCBWay)**

[本稿はPCBWay様の提供でお送りします！]

## はじめに

こんにちは，孔明です．
以前の記事でFeetechのシリアルサーボをM5Stackへ接続するための基板を設計しました（未読の方は[こちら！](https://kim-xps12.github.io/b-sky-lab/technology/2023/05/31/feetech_serial_board.html)）．今回は御縁あってこの基板をPCBWay様の提供で作って頂いたので，そのレビューをお送りします．


<!-- more -->

## PCBWayってどんな会社？
PCBWayは深センにある回路基板メーカーで，10年来の実績がある会社です．
プリント基板の他に，3DプリントやCNC切削加工も請け負っています．私もいつかお願いしてみたい！

**[PCBWay 公式ページ](https://www.pcbway.com/)**

 <a href="https://www.pcbway.com/" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Y-5DuPTnE3TedC3e_nca1cqsRDBjK2vYiZSVxdn43k2GcDJb8VDV8-wWdl7YSXeOk8qgCawWcfoaiFgCJ9qnNb37NbIEaEEbSrzVHyW-GnTaFKR8emjXSvjAgoxjqR_kjjhXbRssYyPGhAMrseXb4Gg=w1602-h747-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

## 基板設計

PCBWay様に基板を発注するにあたり，前記事のpcbeによる設計からアップグレードしてKiCADで再設計しました．KiCADの解説は様々なサイトや書籍で行われているので割愛しますが，回路図から基板の図面までシームレスに設計を進められるのは非常に便利でした．

こんな感じで3Dプレビューまでできます．ここで端子の向きがひっくり返ってることに気づけたりするのがお気に入りポイント．

<a href="https://lh3.googleusercontent.com/pw/AIL4fc9R6ptmqeeAT7ZgHrMZV4Y_ot8xrcut4hLghnMPUbo5kd66aOF53tk5L7iSZKT9DVaftAgTbxtAxIH-TS8eLUjglJfxGcJSIfpg6cxWJTRlgDmPcGvpj5i3JWf0F1AbJ29U_Qp6kw9B_pFbTtY6JZoQBA=w1160-h660-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc9R6ptmqeeAT7ZgHrMZV4Y_ot8xrcut4hLghnMPUbo5kd66aOF53tk5L7iSZKT9DVaftAgTbxtAxIH-TS8eLUjglJfxGcJSIfpg6cxWJTRlgDmPcGvpj5i3JWf0F1AbJ29U_Qp6kw9B_pFbTtY6JZoQBA=w1160-h660-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

KiCADにはPCBWay向けプラグインが存在し，これを使うと図面から発注に必要なデータをエクスポート＆PCBWayのページにアップまで一気に自動で行ってくれます．細々したことを気にせずさくっと図面を発注できるのは便利すぎますね．


KiCADを覚えながら図面を起こしている様子はこちらのツイートスレッドを御覧ください．

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">部品が並んだ！配線しよう <a href="https://t.co/cFLSzYfVE8">pic.twitter.com/cFLSzYfVE8</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1669383860554186755?ref_src=twsrc%5Etfw">June 15, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 料金

5枚発注して5ドル（日本円で約700円）でした．めっちゃ安い……ちょっともう自分の手でユニバーサル基板上にワイヤ引き回す気が起きないですね…

今回お願いした条件は以下の通りです．

- 枚数: 5枚
- 寸法: 50 x 50 mm
- 層数: 2層
- 厚み: 1.6 mm
- 材質: FR-4, TG130
- 最小ビア: 0.3 mm
- 最小パターン幅: 6 mil
- シルク: 白
- レジスト: 青

今回はこの基板5ドルに加えて，21ドルのマルチテスタ（＋DHLの送料20ドル）も一緒に提供頂きました．ありがたやーーーーー．DHL配送とか人生で初めて使いましたよ．普段高くて選べないのにサクッと「DHLで送るねー」と言っていただきました．懐が深い！！


## スケジュール

いくらお安くても時間がかかりすぎては意味がありませんが，PCBWay様はまじで爆速でした．6月27日の18時に図面をアップして出荷準備完了が7月1日の朝8時です．4日で出荷された計算ですね．ちなみにデータアップした直後に「念のため聞くけど穴位置これでいいの？」という確認メールが来ていたんですが，私が丸1日それに気づかず放置していたので実際にかかった時間は3日といっていいでしょう．

そのあと同日の18時にはDHLに集荷され，我が家に配達されたのは7月4日の13時です．はっっやい．これが…DHLに課金した速度…

<a href="https://lh3.googleusercontent.com/pw/AIL4fc_7v2JALpknqAr7bJ22bnuBzJ1N5dlYFB-ctbnq9SpPb5nun_SzsWSgKNSpwjE7lzwaNcDXgDBykobQ__IyeK3aAFA8guBcv2dpXJ9XX3gToMMq982-qzRZA5h_i0nz_08BqEgfkeR8OGP09_Mo5CQTiw=w755-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc_7v2JALpknqAr7bJ22bnuBzJ1N5dlYFB-ctbnq9SpPb5nun_SzsWSgKNSpwjE7lzwaNcDXgDBykobQ__IyeK3aAFA8guBcv2dpXJ9XX3gToMMq982-qzRZA5h_i0nz_08BqEgfkeR8OGP09_Mo5CQTiw=w755-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

## 完成品

届いたものがこちら！！レジスト，シルク，パッド，非常に良い仕上がりでした．文句なし！！！これが5枚で5ドル！すごい時代ですねえ…

 <a href="https://lh3.googleusercontent.com/pw/AIL4fc8NoepdiOflWxD8LhBQ76KkQ6rhWufbhGY_jlCe9PFfuG6dnmrw45u1aOPZk8kkfTWLS8AjQMkSfiM8SufZFqyXUJInoSWyF-JYj-vqXskNdOtyySGx45-SynRux7_YUnv_0aPDXcTtfEPBNUWTTOZxRg=w1190-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc8NoepdiOflWxD8LhBQ76KkQ6rhWufbhGY_jlCe9PFfuG6dnmrw45u1aOPZk8kkfTWLS8AjQMkSfiM8SufZFqyXUJInoSWyF-JYj-vqXskNdOtyySGx45-SynRux7_YUnv_0aPDXcTtfEPBNUWTTOZxRg=w1190-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>


…発注時には「5枚で5ドル」でだったんですが，なんと11枚届きました…細かい検査をしない代わりに多めに送っておくね作戦は中華メーカーあるあるですが，さすがに2倍以上届くのは予想外で笑いました．気前が良い．
 <a href="https://lh3.googleusercontent.com/pw/AIL4fc-I1m88niNtsSxCz271YnRoy0qrAf8Xaz_CzK8g1PsjncRsH7e4DuUNxSbk1MElG8t2Gewml1dwR10J3PwiUADl4zsqfzlC1ZLBS9i52VQhvYMaoXrItGs-LbPZOCeIOb6WTaZ-lWb95ztd7IR7MpERdw=w1190-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc-I1m88niNtsSxCz271YnRoy0qrAf8Xaz_CzK8g1PsjncRsH7e4DuUNxSbk1MElG8t2Gewml1dwR10J3PwiUADl4zsqfzlC1ZLBS9i52VQhvYMaoXrItGs-LbPZOCeIOb6WTaZ-lWb95ztd7IR7MpERdw=w1190-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

部品たちを実装したものがこちら．半田付けがキレイじゃないのは許してください…フラックスが切れてたんです…

<a href="https://lh3.googleusercontent.com/pw/AIL4fc_7mHbxz3yHYGNFDXRuq8ULvZN6Ht6mC-H-qY-WYztCANEAjPR3WbOlmMuPiq8R0j3nPrPz8TnOPn74arJfLiuS_hTTKiZSSWthr3NDQ7XDF2flLZW9k8sQDX0vvMKLkl4D-BCKTZS5QO33FlACQjIQXA=w1080-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc_7mHbxz3yHYGNFDXRuq8ULvZN6Ht6mC-H-qY-WYztCANEAjPR3WbOlmMuPiq8R0j3nPrPz8TnOPn74arJfLiuS_hTTKiZSSWthr3NDQ7XDF2flLZW9k8sQDX0vvMKLkl4D-BCKTZS5QO33FlACQjIQXA=w1080-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

裏面．
<a href="https://lh3.googleusercontent.com/pw/AIL4fc_V5YH3OBUZ9Mxo-FggIOd7I7bA4Dai6jj55bd7lI4WHwwXloS8uqRLXg0G_PGX_5qKxCC7wY9hMUEphgg51zxQCL2x9Z0TOzhx3wURoFXKoKnu4vgjh-I3tsu3nv7OnKL7wGWeds3870BdyO21LyZz8w=w1125-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc_V5YH3OBUZ9Mxo-FggIOd7I7bA4Dai6jj55bd7lI4WHwwXloS8uqRLXg0G_PGX_5qKxCC7wY9hMUEphgg51zxQCL2x9Z0TOzhx3wURoFXKoKnu4vgjh-I3tsu3nv7OnKL7wGWeds3870BdyO21LyZz8w=w1125-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

M5StackとFeeteckのSTS3215をつないだ様子．外形の寸法もばっちり！！これが5枚で5ドルです．すごいとしか言えない．ちなみに今回は~~BOM書くのがめんどくさくて~~お願いしていませんが，PCBWay様では部品実装まで行って出荷してくれるサービスも展開されています．次はお願いしてみたいですね．

<a href="https://lh3.googleusercontent.com/pw/AIL4fc_ugl-LiKyaZhAQuNLJLDfDx1uy4ruYXeHk2K9O-QkNtQndi8Yz5A3Vtq6NjzK3NcSPJK52oUIOW0o1zUsmTbtp8GgMBabMHAWUAUzqeHNxhAKEoDDy5TY_iA0yS4Iz2Tvb6yIq0Ddl3yl-g48rZlIB2A=w1345-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc_ugl-LiKyaZhAQuNLJLDfDx1uy4ruYXeHk2K9O-QkNtQndi8Yz5A3Vtq6NjzK3NcSPJK52oUIOW0o1zUsmTbtp8GgMBabMHAWUAUzqeHNxhAKEoDDy5TY_iA0yS4Iz2Tvb6yIq0Ddl3yl-g48rZlIB2A=w1345-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

ちゃんとサーボが回っている様子はこちら．サーボからのFBの値も問題なく拾えています．

<iframe width="560" height="315" src="https://www.youtube.com/embed/RMD191YGac0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

一連の様子はこちらのツイートスレッドからもお読みいただけます．

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">PCBWayさんから提供で作っていただいたﾍﾋﾞﾛﾎﾞﾁｬﾝ用の基板が届いた！！！<br><br>Feetech STS3215とM5Stackを繋ぐための変換基板です。M5の背面にプロトモジュールとして貼り付ければ、インターフェースボード無しでサーボ動かせるやつ。わくわく(o・▽・o)<a href="https://twitter.com/PCBWayOfficial?ref_src=twsrc%5Etfw">@PCBWayOfficial</a> <a href="https://twitter.com/PCBWayJP?ref_src=twsrc%5Etfw">@PCBWayJP</a> <a href="https://twitter.com/hashtag/PCBWay?src=hash&amp;ref_src=twsrc%5Etfw">#PCBWay</a> <a href="https://t.co/JGOZtbtNoC">pic.twitter.com/JGOZtbtNoC</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1676430882520076288?ref_src=twsrc%5Etfw">July 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 一緒に頂いたマルチメータも紹介

PCBWay様は基板など作成と一緒にストアも運営されていて，「せっかくだからストアに気に入ったものがあれば一緒にプレゼントするよ！」とのことだったのでマルチメータをお願いしました．

**[PCBWay+](https://www.pcbway.com/project/gifts.html)**
<a href="https://www.pcbway.com/project/gifts.html" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc-ChOE9fiBEdb1ummRyecMn_8kfFtl78cXqJcmJ66rnGTBxVMsWhz6-UXrplBtqYnaysjD2I6xYpceP3FqcqnSumEndhvLShUo8Yxmr2uuWFUSlyqwUMPBRfyTnjZvExQuIQlc84vbvhCvh23b5GsdENA=w1873-h706-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

細かいレンジが手動選択なのがややイマイチ感ですが，電流/電圧/抵抗の他に周期信号の周波数やトランジスタの増幅率までこれ一台で計れるのが推しポイント．前々からこのタイプがひとつ欲しかったんです．一家に一台あると安心できますね！

<a href="https://lh3.googleusercontent.com/pw/AIL4fc9oaD7D_E-QvpVxMw26AT2Az-PkseVmvLAbgIpNL8JuLUMuTE35CvPXmlTZ9bF6N6LXcqml4L5aQ86_RQ5NV-pYA6yY70UpCEuUIAjJKZNrPGHi1svaohQHY_46zqZYPoXLQx3lnv8DsPhcwTkGBD_7hw=w1190-h893-s-no?authuser=0" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc9oaD7D_E-QvpVxMw26AT2Az-PkseVmvLAbgIpNL8JuLUMuTE35CvPXmlTZ9bF6N6LXcqml4L5aQ86_RQ5NV-pYA6yY70UpCEuUIAjJKZNrPGHi1svaohQHY_46zqZYPoXLQx3lnv8DsPhcwTkGBD_7hw=w1190-h893-s-no?authuser=0" width="60%" style="display: block; margin: auto;">
</a>

ちなみのこのストア，マルチメータの他にも半田ごてやロボットの部品も売っていて楽しいのでぜひ覗いてみてください．

## おわりに
いかがでしたか？最後に今回提供頂いたPCBWay様と，縁を繋いで頂いた某仲介人様への感謝を述べて本稿を締めたいと思います．ありがとうございました！！

皆様もぜひ基板外注で良い創作ライフを！

 <a href="https://www.pcbway.com/" target="_blank">
  <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Y-5DuPTnE3TedC3e_nca1cqsRDBjK2vYiZSVxdn43k2GcDJb8VDV8-wWdl7YSXeOk8qgCawWcfoaiFgCJ9qnNb37NbIEaEEbSrzVHyW-GnTaFKR8emjXSvjAgoxjqR_kjjhXbRssYyPGhAMrseXb4Gg=w1602-h747-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

それでは．