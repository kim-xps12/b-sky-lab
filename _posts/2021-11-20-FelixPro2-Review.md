---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: 企業様から3Dプリンタを頂いた話（Felix Pro 2まとめ）
date: 2021-11-20 09:24
firstposted: 2021-11-20 09:24
categories: [Technology]
tags: [Technology, 3dprinter]
---



## はじめに
この度，株式会社3D Printing Corporationの古賀様が募集されていた3Dプリンタ譲渡先に選んでいただき，業務用グレードの3Dプリンタを我が家にお迎えすることができました．誠にありがとうございます！

<!-- more -->

当選(?)連絡がこちら．とても嬉しかったのを覚えています．

<blockquote class="twitter-tweet" data-align="center"><p lang="ja" dir="ltr">お渡しする方は下記に決定しました．<br>Sigmax <a href="https://twitter.com/HAKKE_sabage?ref_src=twsrc%5Etfw">@HAKKE_sabage</a> Sigma <a href="https://twitter.com/214harunadayo?ref_src=twsrc%5Etfw">@214harunadayo</a> Felix pro2 <a href="https://twitter.com/eternalfriend17?ref_src=twsrc%5Etfw">@eternalfriend17</a> <a href="https://twitter.com/jun_robot?ref_src=twsrc%5Etfw">@jun_robot</a> <a href="https://twitter.com/naoki10jitsu?ref_src=twsrc%5Etfw">@naoki10jitsu</a> Zortrax <a href="https://twitter.com/yu99jp?ref_src=twsrc%5Etfw">@yu99jp</a> <a href="https://twitter.com/3210kapi?ref_src=twsrc%5Etfw">@3210kapi</a> <a href="https://twitter.com/Ray_Yamazaki_?ref_src=twsrc%5Etfw">@Ray_Yamazaki_</a> Sindoh <a href="https://twitter.com/Ryo040427?ref_src=twsrc%5Etfw">@Ryo040427</a> <br>ぜひ使い倒してください．追って個々にご連絡します． <a href="https://t.co/5IFVEWl71w">https://t.co/5IFVEWl71w</a></p>&mdash; 古賀洋一郎 / Dr. Eng. Yoichiro Koga (@YoichiroKoga) <a href="https://twitter.com/YoichiroKoga/status/1407588728961323008?ref_src=twsrc%5Etfw">June 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

そこから諸事情あって現在我が家にはFelix Pro 2が2台います．印刷領域が広い上に材料ごとで使い分けができて非常に助かっています．広い家に住みたいです．本記事では，約4ヶ月ほど使ってみた諸々をまとめたいと思います．



## 外観



<img src="https://lh3.googleusercontent.com/pw/AM-JKLU2t0myI9_HnNPq4BiBF9JCf5R-nhnxiKZVOVo57ThTbjMDROJew4b3CW4JFwRhMpXEi-y7OYWMkj7Z0JiclMJf1NK8zdVyhcyXs6t3dm4pELJAVBrTVQZvwvKlZNbQ3SNm-_LXyLSi-MGvb0DwL4Mqig=w633-h843-no?authuser=0" width="80%" style="display: block; margin: auto;">

こんな感じです．デフォルトではエンクロージャ無しのタイプ．ABS等を印刷する場合は[この記事](https://kim-xps12.github.io/b-sky-lab/technology/2021/09/21/FelixPro2-enclosure.html)のようにエンクロージャ作ってあげると幸せになれます．



<img src="https://lh3.googleusercontent.com/pw/AM-JKLWox7ZmZklu0rLi0HOkLp7tkqh2XY28GWBkLDJw-kDe3NI5IQWYaTD-iX9TdhoOQcm17aJX3FNYnX37uDoqHL7SsxkFmJkCV1YraCm4SMpjy-gFzWXXjJwzOdb1QuuWds5rMQ4HlWyFsmSlneGGl0R6nQ=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

2台並べるとこう．カッコいいですね．左がエンクロージャありのABS用，右はエンクロージャなしでPLA用になっています．

<img src="https://lh3.googleusercontent.com/pw/AM-JKLWuji8n46QM_xt7TzN9RAAWjtMYZXqJnpf94QXs_yFqH2ySTsOGMZxMiYwwLimp9UcirdKI4bDNJTGYelqWoVdNDD_lh1vi4K1k9VLqBuDKn-Q8nGziH6aMmFHx6EnTA-XTGZboP3MhbJEzxt8AyC6sPg=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

エンクロージャのフタを取り付けるとこうなります．ちゃんと中も見えます．左の上のほうに写ってる白いカゴは後述するRaspberry Pi用の容れ物です．



## 諸元

- 印刷サイズ：(L, W, H) 237 x 245 x 235 mm
- 積層ピッチ：0.05-0.25 mm
- ノズル温度：最大275℃
- ベッド温度：最大100℃
- ノズル径：0.35 mm（フルメタルホットエンド）
- フィラメント径：1.75 mm
- インターフェイス：Micro SD, USB
- 電源：220W（24V, 9.2A）6 pins Molex Connector
- 自動Z軸レベリング
- 自動ベッド水平出し

主な仕様はこんなところです．業務用/研究用グレードなので全体的に高性能ですね．Z軸レベリングとベッド水平出しが自動なのは非常に楽．一度これを知ってしまうともう手動には戻れない体になってしまいました．唯一モダンでないのはインターフェイス部分ですが，[OctoPrintを入れたRaspberry Piと接続する](https://kim-xps12.github.io/b-sky-lab/technology/2021/11/20/FelixPro2-OctoPrint-config.html)ことでWi-Fi化できます．正直1台であればUSB接続でも問題ないのですが，2台目をお迎えした時点でノートPCのUSBポートが足りなくなったのでOctoPrintを導入しました．[OctoPrintを複数インスタンス立ち上げる](https://kim-xps12.github.io/b-sky-lab/technology/2021/11/04/OctoPrint_multi_instance.html)ことで，1台のRaspberry Piで2台ともまとめて管理できます．非常に便利なので複数のプリンタをお使いのご家庭はお試しください．



## 左右ノズルキャリブレーション

左右ノズルのキャリブレーション用G-codeを[公式が配布](https://www.felixprinters.com/downloads/?dir=1.%20Pro%20Series/2.%20FELIX%20Pro%202/4.%20Printables/Calibration%20Files)しています．こういう取り組みめっちゃ助かる．ありがたやーーーー．
僕はここから左右ノズルのXYキャリブレーション用のG-codeを落としてきて，ABS用の温度設定に書き換えて使いました．
一応本体にもこのG-codeたちは内蔵されてはいますが，PLA想定のものだったのでコード公開は助かりました．



## 印刷例

<img src="https://lh3.googleusercontent.com/pw/AM-JKLVBtwv840DhMGqI_4xEWda6vv9ErBA_gxkNkCaH1TZhF0T_zLtxT_mQeTWSLweIUUxRrbR6xcOGkFWXQrXiqinYY2os8pFpndw-_2qfMnld5jU6262Cn64ayE3IhYkLLKsAHAXqhreiYPs41qjibwU6Zw=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

みんな大好き[ベンチ船](https://www.thingiverse.com/thing:763622)．PolyTerra PLAで印刷しています．冷却が追いつかなくてオーバーハングが一部辛いですが，僕は本番ではサポートつける派なので問題ないです．



<img src="https://lh3.googleusercontent.com/pw/AM-JKLUprWGH1B6M5QbdvZsNBxemibMVGkb7aQMUWGLmh608t48NMqO21PF8VaMKbkFriiDdzKKdujkedNRlVLfvfPciyK_Zxw9DA7p_WvrbjIlRj-Ji2OKi9sS4cGmOT-PP1PWrcAyWeov3swyc4WP_T8Pe_g=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

ベンチ船印刷完了．キレイにできました．



<img src="https://lh3.googleusercontent.com/pw/AM-JKLX0BDjW3Grv8O7Udhfkt1D8lxuDJoYhwwRJdMY0uNoRTvnQAngQoEyl9PSB0-RbRMH5uEgZc61AbWsznG1wZyaPFFFOJhE4_VFpjmYWSkszcCuf3nZoUh3jien8_H4QPHSqnMyHCy_dMfTNw9rQGIl9Kw=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

ベンチ船の背面．適応的積層ピッチを使ってみたのですが，積層0.1mmになっている領域は非常にキレイです．もはや積層跡は見えない勢い．



<img src="https://lh3.googleusercontent.com/pw/AM-JKLV3QShM1gj9kBtSsEyKt7DZN7J21w8M-9fBJP-4jwlkUCOCpWql9fvvJRRgqe_1jkCsnRWR0fHFPwlPDLPzpQhsHpJ7z9TzzTw5mWz5ZEmgyO_RwwzG9Ruvh4JNAL4E8PKCTsFwVYtfTBASVqXqQKzFuQ=w1219-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

底面．Felix Pro 2のビルドプレートはカプトンシートが貼られていますが，Polyterra PLAであればラフトもスティックのりもケープも無しで十分に食いつきます．



<blockquote class="twitter-tweet" data-align="center"><p lang="ja" dir="ltr">PolyTerra PLAでシリカゲルビンを印刷したら、糸引きこそすごい（普段この形のモデル刷らないのでパラメータ調整してない）けど蓋閉めたときに合わせ目が消える勢いで表面綺麗に印刷できてしまい感動してる<a href="https://twitter.com/hashtag/Polymaker?src=hash&amp;ref_src=twsrc%5Etfw">#Polymaker</a><a href="https://twitter.com/hashtag/PolyTerraPLA?src=hash&amp;ref_src=twsrc%5Etfw">#PolyTerraPLA</a><a href="https://twitter.com/hashtag/felixpro2?src=hash&amp;ref_src=twsrc%5Etfw">#felixpro2</a> <a href="https://t.co/pFgrCwStRo">pic.twitter.com/pFgrCwStRo</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1460427946032652305?ref_src=twsrc%5Etfw">November 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

同じPolyTerra PLAで印刷したシリカゲルビン．こちらもキレイですね．（語彙力）



<img src="https://lh3.googleusercontent.com/pw/AM-JKLW-0adXNxEPuUFW3t5MWpAgGXY2V94qWBeD-dXz9USF5ygvemQ3hKpHreqfQ35YOPD56ZLdrWHKv7ZbbOpPTopcuUQ5dLofxMOzqJ9YBLQONGPzvTXd3i5JqjyPreQjdfbt6Y4oxN9X3e8Ly9weVxgxjw=w687-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

AnkunのABSで印刷したロボットの脚です．僕の環境ではABSの場合はラフトが必須のようです．ケープとか吹いたら変わるのかも？エンクロージャによる保温はどう頑張ってもマスト．庫内温度は60℃くらいになっています．



<blockquote class="twitter-tweet" data-align="center"><p lang="ja" dir="ltr">多脚ロボットのメリットの1つに、その冗長性によって脚を失った場合でも行動続行が可能であることが知られています<a href="https://twitter.com/hashtag/Rospider?src=hash&amp;ref_src=twsrc%5Etfw">#Rospider</a><a href="https://twitter.com/hashtag/Adventurer3?src=hash&amp;ref_src=twsrc%5Etfw">#Adventurer3</a> <a href="https://twitter.com/hashtag/felixpro2?src=hash&amp;ref_src=twsrc%5Etfw">#felixpro2</a> <a href="https://t.co/yyINVwDjse">pic.twitter.com/yyINVwDjse</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1436657108292751366?ref_src=twsrc%5Etfw">September 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

頂いたプリンタをフル駆使してボディを印刷したクモ型8脚ロボットです．早く歩かせてあげたいのですが修論が落ち着いたらになりそうな予感．[#Rospider](https://twitter.com/hashtag/Rospider?src=hashtag_click)のタグで色々とつぶやいているのでよろしければ読んでやってください．



## 総括

自動レベリング，3軸リニアガイドレールの筐体に，自前でWi-Fiデータ転送まで揃えたので非常に快適/安定した印刷ライフです．大きめの印刷領域が2台もあるので我が家の部品生産能力が一挙に高くなりました．

今後も末永く使い倒していこうと思います．改めて古賀様，ありがとうございました！！



## 関連記事

本ブログでFelix Pro 2が関連する記事たちです．

- [除湿ボックスのために秋月の温湿度計のマウンタを作る](https://kim-xps12.github.io/b-sky-lab/technology/2021/07/31/Akitsuki-Thermo-hygrometer.html)

  Felix Pro 2やAdventurer3などで使っている除湿ボックスの秋月温湿度計マウンタの話です．

- [Felix Pro 2に保温用エンクロージャをつけたい (How to make Enclosure for Felix Pro 2)](https://kim-xps12.github.io/b-sky-lab/technology/2021/09/21/FelixPro2-enclosure.html)

  ダイソーに売っている材料だけで保温用エンクロージャを作った話です．

- [OctoPrintをマルチインスタンス立ち上げて複数プリンタを接続したい！ (How to to launch multiple instance OctoPrint and connect multiple printers!)](https://kim-xps12.github.io/b-sky-lab/technology/2021/11/04/OctoPrint_multi_instance.html)

  Felix Pro 2が2台になったのでOctoPrintで管理しようとしたら，原則1台と言われてしまったのでインスタンスを複数個起動してプリンタたちを使えるようにした話です．

- [OctoPrintでPrinter Profileのidentiferを編集したい！ (How to edit Printer Profile identifer in OctoPrint !)](https://kim-xps12.github.io/b-sky-lab/technology/2021/11/20/OctoPrint_force_setting.html)

  OctoPrintの初期設定時に適当なidentiferを名付けたら後から変更できなかったので設定ファイルを直接書き換えた話（非推奨）

- [OctoPrintにFelix Pro 2を接続する(How to setting OctoPrint for Felix Pro 2)](https://kim-xps12.github.io/b-sky-lab/technology/2021/11/20/FelixPro2-OctoPrint-config.html)

  OctoPrintにFelix Pro 2をつなぐときの各種設定メモです．

