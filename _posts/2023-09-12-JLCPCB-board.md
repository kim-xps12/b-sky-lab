---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: M5Stack用Feetechインターフェース基板を外注したレビューその2（Sponsored by JLCPCB）
date: 2023-09-15 06:30
firstposted: 2023-09-15 06:30
categories: [Technology]
tags: [Technology, KiCAD, M5Stack, JLCPCB]
---

**Outsourced Review of Feetech Interface Board for M5Stack (Sponsored by JLCPCB)**

[本稿はJLCPCB様の提供でお送りします！]

## はじめに

こんにちは，孔明です．

以前の記事でFeetechのシリアルサーボをM5Stackへ接続するための基板を設計しました（未読の方は[こちら！](https://kim-xps12.github.io/b-sky-lab/technology/2023/05/31/feetech_serial_board.html)）．この基板，M5Stackシリーズの背面に固定する想定で作成したわけですが，ピンアサインの都合上，例えばCore2でこれを使おうとするとIMUやマイクは利用できません．
<!-- more -->
というわけで，側面のPort AからUART接続して利用できるバージョンを作成してみました．更に御縁あってこの基板をJCLPCB様の提供で作って頂いたので，そのレビューをお送りします！遅くなってごめんなさい！！


## JLCPCBってどんな会社？
JLCPCBは中国の深センにある回路基板メーカーで，PCBプロトタイピングと小ロット生産を専門に扱っている会社です．2006年創業で，プリント基板の他に3Dプリントも請け負っているとのこと．我が家は3台の3Dプリンタが元気に稼働しているのでなかなか機会がなさそうですが，高品質との噂はよく聞くのでいつかお願いしてみたいですね．


**[JLCPCB 公式ページ](https://jlcpcb.com/JPV)**: 部品実装が無料…良い響きです

<a href="https://jlcpcb.com/JPV" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Y8kZop8dgRUjW5M83o6_vhguWwTlpDAOeYsZgnwsSjNo0FVLw6M0YFd7r-cQomtqF7xV0vCWzt9sPmRnbt-b5QirB2c4dSAd75tLKdstCGqyh_cEbFFVTtzbuUnBUJ2PQIHBkm5lIFOg3TRhSgSUwRA=w1867-h696-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

## 基板設計

JLCPCB様に基板を発注するにあたり，M5Stack背面版をベースにKiCADで再設計しました．

回路図描いて…
<a href="https://lh3.googleusercontent.com/pw/AIL4fc_QC53iC9axwabDniQ5CzAT1I2uM-_hQ3liUcOLZ6WrCv8BFnPg0iV4qTn4ClFltdP5Ji9ThP4kspnW5KLH_clRuBpeh3bnjKHiVYM5UtTfb_POEwftmtaLa-EM4gRgqsAd8TFEr32dSOpIl6svKkWbiw=w1125-h730-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc_QC53iC9axwabDniQ5CzAT1I2uM-_hQ3liUcOLZ6WrCv8BFnPg0iV4qTn4ClFltdP5Ji9ThP4kspnW5KLH_clRuBpeh3bnjKHiVYM5UtTfb_POEwftmtaLa-EM4gRgqsAd8TFEr32dSOpIl6svKkWbiw=w1125-h730-s-no?authuser=0" width="65%" style="display: block; margin: auto;">
</a>

基板に起こす！慣れたらあっという間ですね．もっと複雑な回路にも挑戦したい．まあここで図面ミスってて悲劇起こすんですが…
<a href="https://lh3.googleusercontent.com/pw/AIL4fc-kPuQN5yzx-rWl6ZnJECofLKtj08Ir-ZUsEZ5kB8Gxlh5lz8tIg45WcLxlXtmpOvZv1drpAmZmeBzh82IQh_hMOz8y-fov_BTJlNLRA4ppceiiqBUsO5MG28bh0OLA9K2VO8aFy9glgZV7TtlD12Wp7g=w1631-h884-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-kPuQN5yzx-rWl6ZnJECofLKtj08Ir-ZUsEZ5kB8Gxlh5lz8tIg45WcLxlXtmpOvZv1drpAmZmeBzh82IQh_hMOz8y-fov_BTJlNLRA4ppceiiqBUsO5MG28bh0OLA9K2VO8aFy9glgZV7TtlD12Wp7g=w1631-h884-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

KiCADにはJLCPCB向けプラグインが存在し，これを使うと図面から発注に必要なデータをzipで固めてエクスポートしてくれます．あとはこれを公式サイトにぽいするだけ！

<a href="https://lh3.googleusercontent.com/pw/AIL4fc9wpPF_XWavnhQkP9W-OrXvoMNoY27Daej_68L5GVqjaVcTT_6xfSLxHQXreMNpmotwNsrL9-HvnO_lmBJ16SWjbt7n8I_sxFKoiKzJBBXVTKkXK0DNJlG23pntJZvdqe0gdY-2rFhZ5KobeBvYvAsUtg=w1831-h513-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc9wpPF_XWavnhQkP9W-OrXvoMNoY27Daej_68L5GVqjaVcTT_6xfSLxHQXreMNpmotwNsrL9-HvnO_lmBJ16SWjbt7n8I_sxFKoiKzJBBXVTKkXK0DNJlG23pntJZvdqe0gdY-2rFhZ5KobeBvYvAsUtg=w1831-h513-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>
ここですね．便利．競合の某社のプラグインは1クリックでアップロードまでできるものもあるので，JLCさんも是非対応していただけるともっと良き…


## 料金

今回は提供で作っていただけるとのことで，部品実装もお願いしちゃいました！！一回使ってみたかったんですよーこのサービス．近未来というか貴族というか感あって良いですよね…料金内訳は以下のとおりです．

- 基板製造: $5 /10pcs（2 daysプラン，各種設定はデフォルトまま）
- 部品実装: $30.25 /10pcs（2-3 daysプラン）
- 送料: $14.18（DHL 2-3 daysプラン）

これら合計で$47.43，日本円で約7000円です．基板製造本体が格安なだけに実装をつけると一気に跳ね上がる印象を受けますね．あと円が弱すぎる．それでも全然安いんですが…！！！これ，同じ条件で日本企業に頼むと平気でゼロが1個増える上に納期も2倍くらいの期間になったりならなかったり…

しかも1608のチップ部品マシマシなので，仮に基板だけ頼んだとすると僕の腕で1枚完成させるのに30分~1時間はかかります．と考えると悪くない選択肢かもしれません（もちろん用途によりますが）．



## 爆速製造＆配送のスケジュール

HPからぽちっとしたら，あとは製造されて届くのを待つだけです．私はこのトラッキングを眺めるの結構好きだったりします．8/15の23時に作り始めて，8/17の12時には出荷されていますね．これ組み立て込みです．はっっっっやい．

<a href="https://lh3.googleusercontent.com/pw/AIL4fc-L4n7RAY55jjwW3xSY19Phx44K5ne6Qa0mnKg4OcHt2KzSjnzwt2xbkHbj6CZ5sA9qbZdzNQAv6Z3diiscUB97nSTAc_7UBQ3ZVt0kvYva6IWvDzytOfjl3aK8Vr-bqbgtx4bx4sOBKn6TdJKpsTfZXA=w868-h835-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-L4n7RAY55jjwW3xSY19Phx44K5ne6Qa0mnKg4OcHt2KzSjnzwt2xbkHbj6CZ5sA9qbZdzNQAv6Z3diiscUB97nSTAc_7UBQ3ZVt0kvYva6IWvDzytOfjl3aK8Vr-bqbgtx4bx4sOBKn6TdJKpsTfZXA=w868-h835-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

ちなみに組み立て工程の内訳はこんな感じ．

<a href="https://lh3.googleusercontent.com/pw/AIL4fc8SosP13bV73GQFPo3ungTz1bHuJwrdlEts7lIDcVmM0YGypLBAjoCQ6ViFfEikKujiwhWaKNL0wOTgYzWQVa8_mw06UwDDWMGmV_sy7kThkcubb242sxdIjiBraP-IzdxSAwmEtezZB7sm_qzT3l0zCA=w882-h546-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8SosP13bV73GQFPo3ungTz1bHuJwrdlEts7lIDcVmM0YGypLBAjoCQ6ViFfEikKujiwhWaKNL0wOTgYzWQVa8_mw06UwDDWMGmV_sy7kThkcubb242sxdIjiBraP-IzdxSAwmEtezZB7sm_qzT3l0zCA=w882-h546-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

配送はこう．8/17の21時に出荷されて，8/18の22時には成田空港から我が家に向けて動き始めました．実際に受け取ったのは8/20の午前とかだったと思います．8/15の夜中にぽちってから5日で届いた計算ですね．素晴らしい！！！

<a href="https://lh3.googleusercontent.com/pw/AIL4fc9xL_qyfoE6sTDE3OntornnNiiQCi9-YQh1uisQxxydO7Ax5JV2V60u2ciX7xrQOioFrzXBmmdXl1LV0iIpEa9zmTs3zhqdQoHurSg_VFFja2MMpbhhY-_Vi0zhXN4NtMwc0rpdqGZxNsJFTjYt3_DnEg=w962-h862-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc9xL_qyfoE6sTDE3OntornnNiiQCi9-YQh1uisQxxydO7Ax5JV2V60u2ciX7xrQOioFrzXBmmdXl1LV0iIpEa9zmTs3zhqdQoHurSg_VFFja2MMpbhhY-_Vi0zhXN4NtMwc0rpdqGZxNsJFTjYt3_DnEg=w962-h862-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

## 届いた！

届いたものがこちら！！レジスト，シルク，パッド，はんだ付け，どれも非常に良い仕上がりでした．文句なし！！！U1のICが未実装なのは私の設計が悪くて組み立て不可だったせいです．この辺もメールで「この寸法だと実装無理だけどここだけ飛ばすか一旦キャンセルかどうする？」の相談ができました．私は早く手に取ってみたかったので「飛ばしていいから作っちゃって！」をお願いした次第です．

<a href="https://lh3.googleusercontent.com/pw/AIL4fc8prAjVIyKxXdRLJxrN8GxEQCgGMYt7KbnjJdN35bjSAOS3OOoUMpuo7W7761xVOll2ZsYmPPDc5uDeQ6GgtLJLrZ70UTb2ZJnSgMXecxidmqhXNTWuTOZXADd3eb0xdKhqTXAnMkVHOfLPKTzp8ZGkHQ=w1695-h884-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8prAjVIyKxXdRLJxrN8GxEQCgGMYt7KbnjJdN35bjSAOS3OOoUMpuo7W7761xVOll2ZsYmPPDc5uDeQ6GgtLJLrZ70UTb2ZJnSgMXecxidmqhXNTWuTOZXADd3eb0xdKhqTXAnMkVHOfLPKTzp8ZGkHQ=w1695-h884-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

## 動かない！

とってもキレイに仕上がって届いた基板ですが，なんとKiCADの図面の段階でトランジスタQ1の足の割り当てをキレイに間違っており動かず…

**誤り**
<a href="https://lh3.googleusercontent.com/pw/AIL4fc_6EUoa-pouSXkQQkot6Tl42_mQLAZbh__KGPNe560ojuEU5UAAmxlYLDwflJ_zF2bWmkR6wRt7mJIyfEuJRU4rhZPknuc-VXuW6Ftd0qebcf67R0DKLVecEDJXBlwIQ074vvXW5p0QQuf2RW07Nte4Cg=w1024-h534-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc_6EUoa-pouSXkQQkot6Tl42_mQLAZbh__KGPNe560ojuEU5UAAmxlYLDwflJ_zF2bWmkR6wRt7mJIyfEuJRU4rhZPknuc-VXuW6Ftd0qebcf67R0DKLVecEDJXBlwIQ074vvXW5p0QQuf2RW07Nte4Cg=w1024-h534-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

このトランジスタの配線が盛大にミスってました…悲しみに暮れつつ，とりあえず向き変えてはんだ付けし直せば動きそうだったので気合でやってみます．

**修正後**
<a href="https://lh3.googleusercontent.com/pw/AIL4fc8DiXbZKGvooVuoPX_kiAkHUgWsoGkeENlZA2OUEAXCwckoDL5XfyFjGyZQhoUAoLtnLgpmKiFslAN2hiCiKt26qfFaHQaNYr-KWzzw5ysms4jX-bykuiJR8Ti3p_h32RuCDrXkVkxLYOfJ8dtTCf55SA=w1024-h602-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8DiXbZKGvooVuoPX_kiAkHUgWsoGkeENlZA2OUEAXCwckoDL5XfyFjGyZQhoUAoLtnLgpmKiFslAN2hiCiKt26qfFaHQaNYr-KWzzw5ysms4jX-bykuiJR8Ti3p_h32RuCDrXkVkxLYOfJ8dtTCf55SA=w1024-h602-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>
力 is ぱわー！ICも自分でつけましたが，無事動きました．よかたーーーーー

## 修正して再発注！

せっかくここまで来たので完璧な基板も作りたい！ということで，修正して再発注．さすがに申し訳ないのでここは自腹でぽちりました．

**届いた基板**: 自腹でぽち＆早く試したかったので製造のみの注文です（）
<a href="https://lh3.googleusercontent.com/pw/AIL4fc-ugfABXGN1Q8k9dasdKooGSjUPAxV0JCGWoZ2d5S1vsoJj950EFdbxT49dd6UYV555zFQ9FjXXUUPEYPHHQuCpzKK9ZS0tHnmRaN1D7c1r5ls2Xv9I21bPfPeqbyzBpAI3K0EDvkxFNNpSckuDq1q7RA=w1024-h566-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-ugfABXGN1Q8k9dasdKooGSjUPAxV0JCGWoZ2d5S1vsoJj950EFdbxT49dd6UYV555zFQ9FjXXUUPEYPHHQuCpzKK9ZS0tHnmRaN1D7c1r5ls2Xv9I21bPfPeqbyzBpAI3K0EDvkxFNNpSckuDq1q7RA=w1024-h566-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

**自分ではんだ付け**: チップ部品が多くて地味に疲れました
<a href="https://lh3.googleusercontent.com/pw/AIL4fc8Wru-STUHHVCgYJT29zdpt_frReG8dVEvpSDx1kJ-brh7KC-Zj5ZJ0IKjmu5xIBVvWJYcZSQNTF3hLvZxPmq3zgLtUJa4NKO3n8aaAwpHWM5WjlEh0LiZ08NIwS8sQo20Y69-b7wSY-9-qNRG4Rn7owQ=w1618-h884-s-no?authuser=0" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Wru-STUHHVCgYJT29zdpt_frReG8dVEvpSDx1kJ-brh7KC-Zj5ZJ0IKjmu5xIBVvWJYcZSQNTF3hLvZxPmq3zgLtUJa4NKO3n8aaAwpHWM5WjlEh0LiZ08NIwS8sQo20Y69-b7wSY-9-qNRG4Rn7owQ=w1618-h884-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

v2.2にして！ようやく！完動品になりました！！！
ちゃんとサーボが回っている様子はこちら．サーボからのFBの値も問題なく拾えています．めでたしめでたし！

<iframe width="560" height="315" src="https://www.youtube.com/embed/_5FpvqL4ExI?si=uBo86f7XYWGD3WuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## おわりに
いかがでしたか？私的には爆速製造＆組み立てが格安なのは非常に魅力的だなーという月並な感想．いや，実際便利なんですよ…チップ部品の実装疲れるし…またお世話になろうと思います．

最後に今回提供頂いたJLCPCB様へ感謝を述べて本稿を締めたいと思います．ありがとうございました！！

皆様もぜひ基板外注で良い創作ライフを！

<a href="https://jlcpcb.com/JPV" target="_blank">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Y8kZop8dgRUjW5M83o6_vhguWwTlpDAOeYsZgnwsSjNo0FVLw6M0YFd7r-cQomtqF7xV0vCWzt9sPmRnbt-b5QirB2c4dSAd75tLKdstCGqyh_cEbFFVTtzbuUnBUJ2PQIHBkm5lIFOg3TRhSgSUwRA=w1867-h696-s-no?authuser=0" width="75%" style="display: block; margin: auto;">
</a>

それでは．
