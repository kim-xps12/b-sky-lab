---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Creality K1の水平レベリング調整
date: 2023-06-26 06:00
firstposted: 2023-06-26 06:00
categories: [Technology]
tags: [Technology, 3dprinter, Creality]
---



## はじめに

**How to adjust mesh leveling in Creality K1 !**

こんにちは，孔明です．またまたCreality K1ネタです．
K1は歪センサでZエンドストップとmesh levelingを行いますが，デフォルトの設定では傾きを補正しきれないようでベッド左奥に向かうに連れてスカスカになる症状が出ていました．

<!-- more -->

実際の運用としてはそんなに困っていなかったのですが，なんとなく気になってしまったのでパラメータ調整で追い込んでみました．本記事はその備忘録です．

## ！注意！
あくまでこの手順は私の備忘録であり，メーカや公式が推奨している方法ではありません．
また，この手順を真似した際に引き起こされる不具合や不利益について私は一切の責任を持ちません．自己責任でお願いしますね！

（ざっとパターン1の手順を眺めてみて「？？？」になった方は，メリットよりリスクのほうが大きい可能性が高いでしょう．一番下までスクロールして，公式が動画で公開している**メカ的な調整**の節をお試しください！）

## 環境
- exploit用ブラウザ: Edge @Windows11
- SSH用端末: GitBash @Windows11
- K1のファームウェア: V1.2.9.15

## [パターン1] 設定ファイルで調整

### 1. exploit
まずはSSHパスフレーズのハッシュを上書きして，SSHログインできるようにexploitします．私は[このページ](https://gist.github.com/blakadder/9e6e8ab633b9731d934f02cfcc4db246)の手順をEdgeで行いました.chromeは警告が出てダメでした．

### 2. 設定ファイルのオープン

SSHでメインボードに入れたら，`/usr/data/printer_data/config/printer.cfg` をテキストエディタで開きます．僕が試したところ，K1のメインボードにはviがインストール済みだったのでこれで編集しました．

```
vi /usr/data/printer_data/config/printer.cfg
```

ちなみにですが，Klipperが読み込んでいる設定ファイルは `ps` コマンドでプロセスの起動時引数から確認できます．

```
root@creality /root [#] ps
PID   USER     TIME  COMMAND
    1 root      0:00 {linuxrc} init
    2 root      0:00 [kthreadd]
（中略）
 1321 root      0:15 /usr/share/klippy-env/bin/python /usr/share/klipper/klippy/klippy.py /usr/data/printer_data/config/printer.cfg -l /usr/data/printer_data/logs/klippy.log -a /tmp/klippy_uds
（略）
```
こんな感じ．分かりやすくて助かりました．

### 3. パラメータ変更

printer.cfgが開けたら，`z_gap_**`を変えて水平を調整します．
私のK1では以下の値で良い感じでした．

```
z_gap_00:0.03
z_gap_01:-0.05    
z_gap_10:-0.03
z_gap_11:-0.03 
```

z_gapのパラメータを変えたら，以下の手順で水平具合をチェックします．

1. ファイル保存してからプリンタの主電源を一旦オフ
1. 主電源オンで入れ直して再起動
1. K1本体のメニューから[System]→[Device self test]→[auto leveling]でメッシュレベリングを実行
1. サンプルから「First layer testing」を選択して印刷
1. お好みの仕上がりになるまで以降繰り返し

恐らくz_gap_00が左手前のホーム位置のz_gapだと思うのですが，00~11まで一箇所ずつパラメータ変えて試してもどのパラメータがベッドのどの角に対応するのかイマイチわかりませんでした…一箇所だけ変えてもmesh levelingを走らせると全体をレベリングし直すので影響が見えにくく諦めるなど．詳しい方いらしたらTwitterなどで教えてください！

## [パターン2] メカ的な調整（公式動画）

SSHのためのexploitをしたくない方はこちらの手順を推奨です．公式チャンネルぽいし…

<iframe width="560" height="315" src="https://www.youtube.com/embed/CsIAJgCAxFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## おわりに
いかがでしたか？本記事の手順でCreality K1のポテンシャルを引き出せたら嬉しいです．
それでは．

## 参考
- [GitHub Gist Creality K1 exploit method](https://gist.github.com/blakadder/9e6e8ab633b9731d934f02cfcc4db246)
- [Youtube: Service Tutorial K1 How Bed Leveling](https://www.youtube.com/watch?v=CsIAJgCAxFM)