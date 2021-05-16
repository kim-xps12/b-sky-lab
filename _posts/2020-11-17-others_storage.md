---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
pagination: 
  enabled: true
title: このブログのフォトストレージ、どこにしよう問題（11/29追記）
date: 2020-11-29 11:03
firstposted: 2020-11-17 22:14
categories: [Technology]
tags: [Technology, Review]
---







## Google Photoの無料無制限おわってしまった

元々はGoogle Photoの無制限ストレージを使おうと目論んでいたわけですが、なんとなんと無制限でなくなってしまったので代替サービスを検討中です。

基本的にiPhoneで写真を撮るのでiCloudから直接リンクを発行するか、Prime会員の特典をフル活用してAmazon Photoを使うか、の2択で考えています。とりあえず使ってみよ～（〇・▽・〇）

<!-- more -->



Fig.1(a) 当初の予定のGoogle Photo

![img](https://lh3.googleusercontent.com/pw/ACtC-3eB6IYpZYe1Y-b0XPpnHdXoE0M-K7BVZOL-HjT755g1BSPJJbwVWVVLIbvhX11SfCbKyPhMzfR_dPCS6ymqrYvjz2Kgfe3v1nXP1armmeUexroRqvzL0OJMZpRlXaj3xAXe8zIiG_pBYmR5NBvasPDSXA=w1273-h843-no?authuser=0)



Fig.1(b) Google Photoをimg タグで横幅の70%にしてみた

<img src="https://lh3.googleusercontent.com/pw/ACtC-3eB6IYpZYe1Y-b0XPpnHdXoE0M-K7BVZOL-HjT755g1BSPJJbwVWVVLIbvhX11SfCbKyPhMzfR_dPCS6ymqrYvjz2Kgfe3v1nXP1armmeUexroRqvzL0OJMZpRlXaj3xAXe8zIiG_pBYmR5NBvasPDSXA=w1273-h843-no?authuser=0" width="70%">



Fig.2(a) iCloudの共有URL  ![img](https://share.icloud.com/photos/0Xw6Bsns2u2c9e90Icq63udPQ)

Fig.2(b) iCloudの画像URLを右クリックから ![img](blob:https://www.icloud.com/450108fa-d59c-49c5-8594-042b2eac1b54)



Fig.3(a) Amazon Photoの共有URL ![img](https://www.amazon.co.jp/photos/share/788uPw92ijjpwofWxNLT63HjoH09dvMffiBixgxPL3b)

Fig.3(b) Amazon Photoの画像UR(ry ![img](https://thumbnails-photos.amazon.co.jp/v1/thumbnail/M2wdOxoRTVi85AoR9Woy6Q?viewBox=1380%2C914&ownerId=A51FYWAP2EL6T)



書いてる時点だと全滅だけど、Github Pageでビルドしたらどうなるでしょうか。とりあえずコミット。



## 追記

コミットしてみたら1時間くらいはFig.3 (b)だけ生きてました。正直意外。でも次の日まで放置したら案の定リンク切れてましたね。困ったーーーー。とりあえず圧縮併用でGoogle Photoかなー

## 更に追記

よく考えたらGoogle Driveの無制限高画質モード、200kB/枚くらいに圧縮されてるので、15GBなら食い切らないのではという気がした。またはこのブログのリポジトリに写真も入れてしまうか。重そう。

## iCloud 共有アルバム

よく考えたらFig.2は共有設定かけてないのだから第三者が見られるわけない。というわけでiCloud共有アルバム経由で貼ってみます。共有アルバムをブラウザから開くと投稿者の名前が出てるのがきもちわるいのと、サムネ表示がなぜか均一な大きさじゃないことを除けば使い勝手が良い気がする。多分。これはMac乗り換えのメリットが一つ増えてしまった？

<img src="https://cvws.icloud-content.com/S/AQlPjo-cOMZrXdQaorfGjTh4ncPh/IMG_0007.JPG?o=AnwJokml5UZfWufw_bsvKybDUOIu3h3MjkUg4PidktiD&v=1&z=https%3A%2F%2Fp16-content.icloud.com%3A443&x=1&a=CAogl0-efdHR-maAR_AVNDHMcIlJyCPQ6mKGyAlrG_oUlggSZxCI5o304C4YiP2g-eAuIgEAUgR4ncPhaibQm0hO2t0cD4o7XXb_koIWOPy2iOyHHoXOFXaHh05fuSdNxZeU7HImQQcqu0Gjcn7qWOjAXpR8rQDLefPsSeWwLaYP82xivQzTqshYLmo&e=1606572064&r=72c335f2-98e0-446f-9cc2-383d431195a2-22&s=bvKA7LN48I6RMcG_7SetfMmnogw" width="70%">



と思っていたのですが、iCloud 共有フォトは時間経過で画像のURLが変化するっぽい。ブログ画像用には使えないわね。



## Amazon Drive で共有をオンにして画像を新タブで開いたときのURL



<img src="https://cnt-02.content-jp.drive.amazonaws.com/cdproxy/templink/F03m1NOQyv2aTXPAXCmSD_jC4I1t9gVQVnHNWu5VW-EpX92IB?viewBox=1380%2C914" width="70%">