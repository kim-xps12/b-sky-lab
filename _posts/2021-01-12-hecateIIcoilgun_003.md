---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: 【第3回】Hecate II コイルガン --3DCADで設計編-- 
date: 2021-01-12 21:44
firstposted: 2021-01-12 21:44
categories: [Creation]
tags: [Creation, HecateII, Coilgun]
---

**[Part 3] Hecate II Coil Gun --3D CAD design--**

## いよいよCADモデルを作ります

Hecate II製作記録の第3回，設計編です．前回は頭の中に3Dモデルのイメージを作ったので，実際に3DCADでモデリングしていきます．3Dモデルから2D図面にして金属加工を...という流れで作れたらカッコいいのですが，そんな技術も予算も時間もないので，具現化は3Dプリンタに丸投げです．いや，丸投げと呼べるほど簡単でもないのですが，フライスくるくるするよりはきっとお手軽です．基本的には放っておけば物が出てくるし．<!-- more -->例えるなら，フライパンと電子レンジの違いみたいな感じです．フライパンで加熱するときは付きっきりでフライパンの前にいますが，電子レンジならボタン押して放置でOKみたいな．そんなわけで設計思想としても「3Dプリンタで印刷しやすい形状／分割」を念頭において作りました．3Dプリンタ購入編も近いうちに書きますのでお楽しみに．



## 完成品がこちら

3DCADはAutodeskのInventor Professional 2017を使いました．ロボコンで教わったCADがInventorだったので，流れでずっと使っています．スコープとバイポッド（二脚）は既製品を使うので，接続用のピカニティーレールまで図面に入れます．強度とかは知らん．

<img src="https://lh3.googleusercontent.com/pw/ACtC-3fnY6_33uajeCOP2DOfLtSHFuZY-cqDCFPeU3qNUij44g72PlNanYRS3r_0S-Ei8d-mEHcGgPZAk4ScDiAWr7v5YD0bg2QAn_aZSohTxkXaCOrpkD9TRDxZMAWVw-F25NwEeF9GoneDGP5A-ls8687RbQ=w1674-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">



せっかくなので上側のカバーの制作過程を紹介します．

<img src="https://lh3.googleusercontent.com/pw/ACtC-3clwfjr4xtsme2BXj1sVBKB0C9I24YwwrvKOwImwY4Fr_coTcdnnoNT9gTtq632A33RY4cZ1us70HXWcL8sXOJUhty0qz_36LS4aAx0-jw9Yg3DYYu4vPr1tP-jeWMj76sJDrXZTyP5wSdbfr9IPzen5Q=w1687-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

このパーツですね．まずはこの図の右下の面から描いていきます．



<img src="https://lh3.googleusercontent.com/pw/ACtC-3fv6R_VtTwl8J3YeXOlCCQej6AwzNyie06FTLRbd-2Jv-pO_5va0Ao6wkFzW9-Uq86wlzTWCwH2_-yFsB5DZXU6PcW_p1zfSFQKfBNDK17p9jisghirfyjIy8g8pVLxKsSXj595eI0AYSE1VkwNhk5tyw=w1689-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

こんな感じ．これが上の図の右下の部分に相当します．六角形を途中で切ったみたいな．



<img src="https://lh3.googleusercontent.com/pw/ACtC-3eMtbzvMpv74_5UJ7xZkzny0xLLLSFHfVzp_Em6UmbU6ECOhGDEQVThHKRVf-COVda_QmljpxoyY6yNXxA_n5rZdyd7MC2pvWaoQFN8m9V1k6s8WwCke6FMHbetU_WgBbuR46gVZwI9dySbvbcndu-3cw=w1685-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

次はレールが生えてる後半（図でいうと左上側の半分）を作っていきます．まずはこんな感じで断面を描いて，



<img src="https://lh3.googleusercontent.com/pw/ACtC-3dHIfKRxVDP9qUkvLNdwZf1akhL6EvLgFH7qL6l0TrO2N7kG4Pgb_XU6k3Avjqpp2znbrsELZLnUmfQkKkfi6w31BFNUYfyt9KdsyzoDjS7uz9BoNpVMmcJmXyfOGNvineRlXwxFHj1tGdRleixwCBB2Q=w1682-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

にゅっと押し出しつつ切り欠きや矩形の穴を開けます．一見複雑な部品も基本的には単純な形状の連結でできています．ついでにピカニティーレールの断面も描いておきましょう．



<img src="https://lh3.googleusercontent.com/pw/ACtC-3cCBS0Y2OmPue0R_8NlR8Q_hKwqrfdxC1sU1qAQXQC_7pTpgFtLqWsUtIaagBKPkcm64sjUzhOHOL4Jwc5cI7Ror9naxn2rMdeht-DJNQWzy3KWOj1OWu4ik85GRHompODZs1vXyEk4LQM3vqldVL1bRw=w1684-h914-no?authuser=0" width="80%" style="display: block; margin: auto;">

レールの押し出しを繰り返しコマンドで複製して並べたら完成です．いえい！



## 内部構造

3DCADの醍醐味といえば，組み立てたモデルを透過させて内部が見える画像が作れることだと思っているんですが，皆さんはどうですか？子供の頃に憧れた「博士の秘密基地で新アイテムの設計図を見せてもらう」みたいな感じしませんか？カッコいい！

<img src="https://lh3.googleusercontent.com/pw/ACtC-3dbKLbuwEzdCrbEEeWi7WIkZKOVI74MYKSvsKWmlvXCdAsdSZCrpDUdQmdRXIC7FqJtTdnffVKQg35EZs9rpE3r0CxEm1Zuh-IQC2EQZmi55B3PR65x8Nd1Be7pGltz0FTPa617WkAoKf8zX5GXN430Ow=w995-h745-no?authuser=0" width="80%" style="display: block; margin: auto;">



基板や電池ボックスも大体の大きさでモデルを作ってCAD上で配置してみることで，本当に組み立てられるのかを確認しながら作業できます．まあモデルが大体すぎて結局パワーで押し込むことになるんですけど．

今回は部品たちの配置と概要の紹介にとどめ，電装系の詳しい話は別の回で書くことにします．こうしてみると，結構ぎっちり詰まっていることがわかりますね．以降に各箇所の簡単な説明です．

- 加速コイル

  今回のHecate IIでは多段式コイルガン（2段）を採用しました．コイルを縦に2段並べるよう設計します．

  

- キャパシタバンク

  コイルの下にキャパシタバンクを配置します．スペースの都合です．450V／150uFのキャパシタを並列に4個接続して使います．威力と昇圧回路の定格とスペースから決定しました．電装屋さんの僕と機械設計屋さんの僕が相談しながら作れるのは，一人で全部作る趣味工作のいいところです．

  

- 電源

  電源はアルカリ単4電池を8本で12Vを用意します．昇圧回路のゲートドライバICに12V必要だったので12Vです．リチウムイオン電池やリポバッテリーも考えましたが，入手性の観点から乾電池を採用しました．僕が作る電子工作は基本的に乾電池かモバイルバッテリーです．何かあったときに出先のコンビニでも何とかなる系の部品が好きです．あと乾電池は程よい重りになって本体を持ったときのずっしり感にも貢献してくれます．

  

- パワエレ基板／制御基板

  パワエレ基板（昇圧回路と発射回路）と制御基板は分けました．本当は1枚にまとまっていると美しいのですが，マガジンの中に収めるとなると分けた方が無難かなという判断です．実際でかい一枚板は多分入れられなかった正解でした．

  

- トリガー

  図だと空中に引き金だけが浮いていますが，実際にはトグルスイッチを埋め込みます．バネで跳ね返るタイプのものを使いました．モデリングするのが面倒だったので，トグルスイッチの寸法に合わせた矩形穴までしかCAD図に反映されていません．ちなみにこの形の引き金だとトグルスイッチの可動域を超えて動けてしまうため，後輩氏の手によってスイッチが1個こわされ，ストッパー付きの形状に変更されます．なんもかんも設計が悪い．



## 設計ができたら印刷

3DCADのモデルが用意できたので，次回は3Dプリンタで印刷していきます．お楽しみに！