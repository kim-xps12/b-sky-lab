---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: SUNLU FilaDryer S2 レビュー
date: 2022-06-30 09:20
firstposted: 2022-06-30 09:20
categories: [Technology]
tags: [Technology, 3dPrinter, review]
---



## はじめに
[本稿は株式会社サンステラ様の商品提供でお送りします．]

最近暑いですね．6月というのに異様な暑さと湿度です．3Dプリンタのフィラメントにとっては非常に厳しい季節になってきました．ご存じの方も多いと思いますが，フィラメントは（樹脂の種類にもよりますが）その多くは空気中の湿気を吸い込むと造形品質が悪化します．噂によると，高温多湿な気候になる東方に固有の問題でもあるとかないとか．
そんなときに有用なのがフィラメント乾燥機．これまでも各社から出ており私も1台持っていたり，中には食品用のオーブンやドライフルーツマシンで乾燥させている方もいたりします．

<!-- more -->

そのフィラメント乾燥機において，新型機がSUNLU社から発表され，現在日本では株式会社サンステラさんがクラウドファンディングを実施中です．本稿では，提供頂いた新型フィラメント乾燥機の効果や良い点/イマイチな点などをレビューしていきたいと思います．

商品提供こそ頂いておりますが，ミリも忖度せずに素直な感想や実験結果を載せております．

## 外観

まずは外箱から．中々良いパッケージデザインですね．僕は割と外箱とっておくことが多い派なので，地味にありがたい．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLWpdnXqqKyc3U0viq3us8JYVrrbZYuhAfO1io-Co4v0gUPo6PpVt5S8_k7hwClyl2zk-TA-CjNzv0JLy9A0mVerrG7tyncJMzlJXP6gIwc7Y000JNt1_lWAPnV8n_Tr6Rk48uRHNecfUhQUc1trAfUJpA=w833-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">


箱から出すとこんな感じ．丸くて可愛らしさもありつつカッコいいデザインです．性能には直接影響しないといえばその通りですが，やはり見た目は大事です．寸法は実測で280 x 270 x 115（縦 x 横幅 x 厚み）[mm]でした．フィラメントのスプールが二周りくらい大きくなった気持ちですね．（本体上部の7セグは僕が後入れしたものです，後述します．）
<img src="https://lh3.googleusercontent.com/pw/AM-JKLWKcZLUp_du2isLGDXARQN0ylpflWJmc6LFAykqFYkgg8P4fQhbfZv9F82WwrCdSazUrUQbnjt7_VKwqo8yhZHt7otPAbeDjcTwDBGf9Xq5wtjZ1VgpDurGvq46LxUun3uxgiUe7snRAHRe4Uzm8To6jg=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">


電源ON！この製品の特徴の1つが，大きなタッチパネル．直感的に操作しやすくて良いUIです．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUBsK7pd69tCM0YK0N6IkEb1MzcQDNUOzTMRxtYYCnQFtzuZlRKqKONliMPdUiL89WQHFwb0EoIYOYKfS9t5iTEQIQZTpcllY5r3rrdSLeAnYFewEu8g9TPu9zW3O_sun1Tk-VCM1QkOWgKYptX7uDd1Q=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

タッチパネルは横幅が約80[mm]，高さは約70[mm]でした．バックライトまでついています．暗いところで使うかと言われればまあ無いとは思いますが，見やすいに越したことはありません．タッチパネル周囲のリングはLED内蔵も光ります．ロマン．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLX-S6zW8lrmNMhiBnQIeiQ1DJacKjefdtIlwNnJ8VoEU2rh5yveE4xP7By-VJdop3Af3POw3VNCUBtB0JXMFE6cdODEH_2wABqdDaeUtFKEoBdj8hSAFVqGev8n67gVXtJEUOYgAFRHzJrUlRL4HD1FuQ=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">


この後の乾燥実験で使用するKingroon KP3Sと並べるとこんな感じ．サンステラ様提供記事なので本当はSermoon V1 Proで試したかったのですが，あちらは非常に優秀でずっと戦線投入中なので今回は空いていたKP3Sで実験です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLVsQnUA4pfF0YU-jb2Edl5QDa1ZbiMSxTqShcef73FhIfPFKVXhL65y813PFBfGSzBRqOLYBeZhd3V0wrDjnZjtPo1INieDaiXE5GQMjLfpiLnP3BMKkMiALND0-08WaFdGdO6FskZMxh2Dk0Y_Uvs1ng=w848-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">


僕が元々持っていたeSUN社の乾燥機と並べると，今回のFilaDryer S2の方が大きいですね．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLV9_5bCTifhPrzDNKli9cFMOCWhdeHFrMbQMPnXLZ4Ks0WAtlIRdNefy2u6xP9JY8CSN_QArcx9xUpYF4h961JZ2py7arg650DOVHfqAaLZ5Zzssdy_r9oOrXcG3N0S6NNRPu0t2LSVD7ZW2JGC2fv9MQ=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

## 技術仕様・特徴

FilaDryer S2の特徴は何と言ってもこの「360度ヒート機構」です！上に挙げたeSUNの乾燥機（写真右）は上半分が単なる透明なフタでしたが，このFilaDryer S2はこの部分にもヒーターが内蔵されています．これにより，フィラメント全体を一気にムラ無く加熱することで，効率は30%アップしているのだとか．また全周から加熱するため空気を循環させるファンも不要となり，動作音が抑えられる副次効果もあります．中国国内で特許取得の技術だそうです．さすが最新式ですね．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLXEkOQMmLMKZU_stT8Pq8AQ5qDzsd03VfwCBMZfjL3arIQyAz0eeadI_bbiX29uF5etuAa7Qx43yNFeZikIH9wXGQaUkeqo6OBBp-poYj0duXpNygINSD7HGpGiXyhnieUq9woVllVdFR-iSAs181UEfw=w953-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

また，ACアダプタの出力は24V, 2Aの48W品でした．こちらはeSUNの乾燥機と同じです．このあたりの消費電力がスタンダードなのでしょうか．サンステラ様から発売のFilaDryer S2はACアダプタに加えて本体側のPSE認証を取得した上で販売されるそうで，安心して使用できるのも嬉しいポイントです．


## eSUN PA-CFを乾燥させてみた
見た目と仕様の話ばかりしていてもレビュー記事の意味がありませんので，さっそく乾燥実験です．まずは現在愛用中のeSUN PA-CFフィラメントから．

まずは乾燥前に印刷してみたのがこちら．画像中央部分になんかゴミが生えています．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLVG7qkqoR7EUTmrGbLy5cU5TkWYkLymQ6nvJAM-ldL-lJvJ3yPqLUZyOxfhXqxGMUOvoBihSnnaDp1RfSGcPavADbhum2rv51N16S9zFq0F0Rdik8bpf7hYL37g2YiAtyPv_SCQIETOnPa_q-0gZvSf6Q=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

あまりに分かりづらいので拡大．ここです．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLVS4zvCX1WsKeSXW7kHKLQyUHih7yjxhOCsa6xe_kfV99UuMUoUWNgZtevVPF5T2Z85AFGk7hCNtAPu_QwK7H5cYGRF0fuW-LCrNca80YW6kHJhxaKAzqa5UlhF-pM2wbCk0c_w7rR6aVqFVdYOtLOp-g=w963-h508-no?authuser=0" width="80%" style="display: block; margin: auto;">


別角度から．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUEddmCn8p5ZbDVJvCDtPudJTgU10G6TfxxpkYq28GKiCdwTc7M8ykEqqgElJ-2_QpTZ04yCSBFK-7ErEtanDleyCT7ULMXMSRmR6mA96Alyz-rLqKj_jfa-w0ty3KjdTBZEakU8oXaD0zhMysA9cZ7bg=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

更に拡大．地味ですね．

...意外と吸湿していない説が出てきました．きちんと管理していたのが仇になったようですが，続けます．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLXgo87L9rKLZR75u9cE6wK5f9DH3XjeNEt3APaLIjg94A_Cyb82gfY-GH2l_JJC4AFPWa1HjbTvKlKrhBTJDWv6Y6SXvEaAj0X3diqG6C6wieIzVzRFl7lKCsPZby6hRRUulGINAKn1lk_221WE-6P5MQ=w471-h323-no?authuser=0" width="80%" style="display: block; margin: auto;">


乾燥前の重量を測っておきましょう．スプール込みで972[g]です．一応実験の仮定として，スプールは吸湿しておらずフィラメントからのみ水分が出入りしたものとしてカウントします．（この仮定が妥当でない！という方いらしたらコメントください）
<img src="https://lh3.googleusercontent.com/pw/AM-JKLXq2I-th98BGNlIRS9oaklQOySihRbbaOe_9ZLUu0bSCozuTwE5SUM-3omztRTFXmeHdy5QGjAVA2n2N7NJExqQ6hrS_UKwDb21PyMcNRpHO3N17upj6JvxAsT5Ejq1EHpoB_lOZxPl3Mmxf8UUjNxX5g=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

設定温度は最大出力の70度，キリよく10時間コースです．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLV4gdkVo9soEuQ46uvuVit9ZI75PVTm39R8yHsqwtaalWNkZdsPGOlmH4Ut5_9DRFlhPNoweL6QRTtwsax30MNxLZxaPNT0v26K9x9tWngfVTgi1vQiA79tlsVITSgajKkX-BKaVHgKGsnFdptk2AK81A=w670-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

乾燥開始から約90分経過．本体の表示は70度53%ですが，自分で後入れした温湿度計の表示は56度26%です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUn3MBC1VENftUKCCkLDYuJXC4vO31_JUStfHqIPalf1qszlj_X0t1wIwkx_AYDSPsrhQzc0hRy0tDjN88CAVC7yZ-r5BEKeYtij1WjX0s7F9JRIRJVLetzt-GcUGcswV5bFDO207mmgIiRwV6uHXoE9w=w670-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

外観写真の節でも述べましたが，僕は温湿度計を別途後入れしています．というのも，Twitter上で「本体の表示と実際の値がズレているのでは？？」という話題が挙がっているのを見かけ，自分でも確認してみることにしたためです．
この辺のズレについて，確認と考察は別途Twitterに載せておりますので，気になる方はそちらでご確認ください．結論だけ書いておくと，「本体側の表示，狂ってるわけではないけど実際の数値に対して追従が遅いかも？」「そもそもセンサの位置が違うので直接比較は不適切」「後入れの温湿度計を下部へ落としたら液晶が変色する程度には十分加熱されていたため，恐らく問題ないだろう」となりました．機体によって生じたり生じなかったりしているようなので，購入された後に症状が出た場合にはサンステラ様まで問い合わせてみてください．
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">何か表示がヘン？説が上がっていたので検証<br><br>70度で12時間の乾燥をかけたところ、約11時間経過で<br>・本体側表示 : 70℃ / 19%<br>・参照用音温湿度計 : 57℃ / 16% <a href="https://t.co/qwZWEzmUz6">pic.twitter.com/qwZWEzmUz6</a></p>&mdash; 孔明 (@eternalfriend17) <a href="https://twitter.com/eternalfriend17/status/1538736578805215232?ref_src=twsrc%5Etfw">June 20, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


閑話休題．印刷前に，乾燥後の重量を測ってみましょう．1.1[g]減の970.9[g]です．きちんと重量減っていて一安心．この1.1[g]の水分が印刷にどの程度の影響を与えていたのか，もう一度同じモデルを同じ設定で印刷です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLWvTHSUcJ4oFk9B7eq3mrHhU-U7DnZSq9JIMPG6X9MJvtgRhG0XvBnKFPIMeA79YxEKDfqHmIQ_RcjCnNUKus7ILC9uYEoB_YaBIP1LOuuby150Zra8wYA9iDCY6stIA-mywH54N5Ss3Y7w7u5_rO1Y5g=w1203-h894-no?authuser=0" width="80%" style="display: block; margin: auto;">

乾燥前の写真でしつこく拡大していた，画像中央付近にいたノイズ（たぶん垂れ）がいなくなった！！のですが，写真だとあまりにも伝わりにくい...
<img src="https://lh3.googleusercontent.com/pw/AM-JKLWdwidHfqj0rxOnYt4heZ1RUMqtl1cQIgwA18qwOZ2oTKG34nIzr_1kG3SOPbAw5gUSKZZ3sshl_f3IXrYwkXwK775UshzVvQfC0CJo0oVbgpRMiFudShmRLO02NrBLBmxjTzQ7ww19quN7VXbaauPm_g=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

拡大して比較した画像がこちら．上が乾燥前，下が乾燥後です．オレンジの枠での中にいたゴミ部分が生じなくなりました．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUj76G-JqzMhWoTUsMUSE_1Cey-X42LFxiWGkHCt09GdkPBUTu5PPR7lSuRIdfLhFL04L-TRKT93fi8diaBeg3c4jzCC2BHgdAfGV9sW4dU_WJPlUTbOoo3v5Ul9njdvNCj707OY6Qk1q1ri90tZwsVyQ=w989-h539-no?authuser=0" width="80%" style="display: block; margin: auto;">



## SHINA ゴールド光沢PLAを乾燥させてみた
当初の予定ではeSUN PA-CFで顕著に効果が出てめでたしめでたし，にするつもりだったのですが，思いの外吸湿していなかったのか地味な結果に終わりましたので追加実験です．忖度した記事にする気はありませんが，僕の実験が悪く性能が分かりづらいのは本意ではありません．

というわけで用意したのがSHINA ゴールド光沢PLA．こちらなんと2019年7月に購入して何の湿気対策もしないまま使いかけで3年放置した代物です．過去の僕がズボラで助かりました．

さっそく先程のモデルを印刷．しっかり吸湿による糸引きが現れています．企画倒れにならなくて良かった...
<img src="https://lh3.googleusercontent.com/pw/AM-JKLV2w-H0b4M4OLoGFh2pts8F1zVJl-7DipSR941JUfSgvR9Rc6sDrFMzExjb9dMA66Xz1l3PJB__a3Q9rtTh8R_lRLHjy9zcXKIwvT3ycNYIhVO8uy5TKREA3lslRcfaJqUYuANzlk1Ww7PM13N9jfA1ow=w1328-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

乾燥前の重量は395.8[g]でした．それでは乾燥いってみましょう！
<img src="https://lh3.googleusercontent.com/pw/AM-JKLWKB-lDEbvNOWJ7MIGy7P1BzbkzSbpw5XuwzgCPrE0CkZjtFvhFWH-WvZR727Liwqi39ogG_rY30ZzamAP-kWqe-xfk00z5nJT1Bvmq2UXtEc2g2p0cSvSEXMww20m7VvIUVVNlLDGzYxYt0kqRmab8tQ=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

こちらの乾燥は50度で10時間かけた後に，タイミングが合わず数時間放置になってしまったので，更に追加で53度で1.5時間乾燥しました．ちなみにPLAのガラス転移点は55度程度と言われているので，これ以上温度を上げると乾燥の段階で変形して使い物にならないフィラメントになってしまう恐れがあります．要注意です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUeSLx30lgFYX1yL5OFoMtVPg3Uzh4F8VK2QLZZlWFxKQ_P1NEy6vyiGRc0yzQ2NGLfVDWpYDGsvaKrbFleDm_1pQAhO6gJBzHVaTAHBD5EFbGbdPoPFUD-mM1lv-vzG0ZXECOR0wRly16GhuLPfSQNdw=w670-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

合計11.5時間の乾燥を経たフィラメントの重量は395.2[g]でした．0.6[g]減ですね．フィラメントそのものの重量（とスプールの重量も含まれている）を考えると，先程のPA-CFよりも抜けた水分の割合は大きい気がします．これは期待大です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUHtsac7Abb0WbE3LrAkFm2-1oYIEFxEhWZYH8poZYoSjoXJVyF2z5nIpV0IQ9cKGvbKB3leMlyt6aZCe8WsgMMEDxvizrzNoRok4965mRYjwyob4hHDOTEot9j07Jdl8GwlBNBKOJEdXsoB7vRJ0zvoQ=w1029-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">


どうでしょう！！乾燥前よりも糸引きがグッと改善されたのではないでしょうか？？流石に3年放置しただけあって完璧には消えませんでしたが，その効果はきちんと現れています．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLX-L-MeL7VrjwHm261iTHcDqageP2rqeDDFjQIzEG2X5c1IdEna2DK8wB9BgIVNqvkE0agBzkst0TNHpkywQoVjOtUnATzgJnjS9RGaiLOOQsQDVc536wRiRDEFnOpnCdIcbpl-bVmfUJ4QI0APOHnf1w=w1219-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

糸引き部分を拡大して比較したものがこちら．上が乾燥前，下が乾燥後です．こうして見ると違いがよく分かりますね．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLX-d2CfNhmqrbeVTleH6GBMaHrLE4IQ2gWzCRYaWMcPnL571U_sfeIN1IEv4aTO4fJavH7DCf_4HhqQTSLnaEf725ougjDaELRwk6BtSD4VZ_Z3-prgobdc7dIJpP9lxJBKbQss0uOxutel8eSuUzAYJQ=w556-h612-no?authuser=0" width="80%" style="display: block; margin: auto;">

横並びで比較するとこんな感じ，上に挙げた糸引きの他に，それぞれ左下の箇所の印刷品質もかなりマシな状態まで回復しました．素晴らしい．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLXW7uLs-QunnwybbHRYQDc4LEVqj__4LydVLWFB7w8AcS6w7Rd8TF9-ByLAVYyXOsCzQV65Zo0FlQMI0VkPwjft509MXM3zkZRzZHTz0tYomrTXfHvbcSXa26GOutvQrPlWpOJTPoC_Y2UOpWBOgrALxA=w1920-h707-no?authuser=0" width="80%" style="display: block; margin: auto;">

## 良かった点
ここからはレビュー期間に色々使ってみて良かった点を挙げていきます．

### 360度加熱
FilaDryer S2の特徴でもある全周加熱は非常に安心感があります．下半分を加熱するタイプと厳密な性能比較こそしていませんが，乾燥後に取り出した際の温度からも（よく加熱されてそうだな...）という印象を受けました．

### 乾燥しながら印刷OK
これは各社実現しており，FilaDryer S2固有というよりも食品用オーブン系の乾燥機に対する優位性ですが，下図のように直接プリンタへ供給できるのは便利です．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLVsQnUA4pfF0YU-jb2Edl5QDa1ZbiMSxTqShcef73FhIfPFKVXhL65y813PFBfGSzBRqOLYBeZhd3V0wrDjnZjtPo1INieDaiXE5GQMjLfpiLnP3BMKkMiALND0-08WaFdGdO6FskZMxh2Dk0Y_Uvs1ng=w848-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

ちなみにですが，サンステラ様が独自にEnder3 S1系の機種に向けてフィラメントガイドも公開されていますので，このあたりの機種をお使いの方はチェックしてみてください．リンクは[こちら](https://note.com/sunstella_3d/n/nd0e662f9110c)．
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">最新のEnder3 S1等では印刷中使えないよーという声に<br>弊社でねじを締め直すだけでフィラメントの軌道を変えるフィラメントガイドを設計！<br><br>無料配布してますのでみんな使ってね！<br><br>SUNLU FilaDryer S2用のフィラメントガイドデータを配布しています。-サンステラnote<a href="https://t.co/VMJzeMaD8I">https://t.co/VMJzeMaD8I</a> <a href="https://t.co/nPy3PP6Tv2">pic.twitter.com/nPy3PP6Tv2</a></p>&mdash; 【SUNLU】サンステラ公式【クラファン開始】 (@sunstella_3d) <a href="https://twitter.com/sunstella_3d/status/1535175963553583109?ref_src=twsrc%5Etfw">June 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### 使いやすいUI
タッチパネルから直感的に操作でき，温湿度計内蔵なUIは非常に便利でした．
実験の節では触れませんでしたが，材料ごとに温度のプリセットが用意されており，毎回温度調整のボタンを細かく連打せずに適切な温度を呼び出せるのも嬉しいポイントです．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLX-S6zW8lrmNMhiBnQIeiQ1DJacKjefdtIlwNnJ8VoEU2rh5yveE4xP7By-VJdop3Af3POw3VNCUBtB0JXMFE6cdODEH_2wABqdDaeUtFKEoBdj8hSAFVqGev8n67gVXtJEUOYgAFRHzJrUlRL4HD1FuQ=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;"> 


## イマイチな点
続いて公平にイマイチと感じた点も列挙しておきます．

### 地味にデカい
ほぼ好みの問題ですが，デスクにプリンタと一緒に置いて使うには少々大きかったです．どう考えても商品ではなく狭いデスクに置いている僕が悪いのですが，同じような設置を考えている方は場所の確保に気をつけてください．

### フタに開いているフィラメント供給用の穴の向きが悪い
恐らく製造を簡単にするためだとは思うのですが，フタに開いているフィラメントを通す用の穴がスプールの半径方向（穴位置における円の接線に対して垂直）に開いているため，フィラメントを通す際に内側でかなりキツくフィラメントが曲がることになります．特に開けたばかりの量が多いフィラメントではキツイ曲げの影響が顕著に現れ，（ベアリング入ってるのに引き出すの重いな...）と感じることがありました．個人的には，フィラメントは鉛直方向（スプールの一番横に出ている位置の接線方向）に引き出せるような穴の向きの方が抵抗少なく使いやすかったのでは？と思います．気が向いたら改造してみようと目論んでいます．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLUHnFjzxoTDu6OiCDGlpGjyTj9qogc6VsjbAG8Q8FEAO08D9vwPYadYbvAhYPFn0M-b87vlJukoF6YuitTnF6x849XcwV3DDcd_OfWI2IhlWzor1vJ8n2I1MsnYYcUfawqanL0bYG4fiki6FNg5Q0I7Jw=w1547-h893-no?authuser=0" width="85%" style="display: block; margin: auto;"> 

### 白いデスクで引きずるとゴム足の跡が付く
僕は白いオフィスデスクの上に置いて使っているのですが，そこで引きずるとゴム足の黒い跡が残ります．毎回掃除するのも面倒なので適当な大きさの紙を敷いて汚れを防ぐことにしました．乾燥機能とは本質的に何の関係もないのですが，同じような設置で使いたい方は注意してください．
<img src="https://lh3.googleusercontent.com/pw/AM-JKLXbyFK-2DUbwgn-agz6zdWa7fiPIWabnZBvSbxNMsaus8GQRthQSo_b0vNm_UQrQpN_eYnp7Wi_kpKcI6OTJ975ANgvLPp_mkFtYB9yYY1Lsy2OySlYlNeTXM8D6qmW-XX5BbNjQK6j3_l17Hb_yt_RiA=w1190-h893-no?authuser=0" width="80%" style="display: block; margin: auto;">

## 総評・おわりに
乾燥実験といくつかの使用感を述べましたが，僕の総評としては「この製品は導入の価値あり」だと思います．最大70度の全周加熱と便利なUIはもちろん非常に実用的で良いポイントですが，何よりメリットに感じるのは「信頼できる購入経路」の点にあると思います．

海外製品へ簡単にアクセスできて便利になった反面でAmazonにも怪レい中華製品が蔓延する昨今，「代理店が責任を持って輸入し，ACアダプタに加えて本体側にまでPSE認証を通して販売されている」というのはかなり希少で重要な価値であると思います．安かろう悪かろうで中華製品の博打を打つのもおたく的には一興なのですが，やはり万人に勧めるならこのような安心できるルートで入手可能な品です．

そんな安心かつ高い実用性のSUNLU FilaDryer S2は，現在GREENでクラウドファンディング受付中です．クラファン特典として早期割引が掛かりますので，気になる方はぜひこの機会にチェックしてみてください．リンクは[こちら](https://greenfunding.jp/lab/projects/6166)．

あわせて，今回ご提供頂いた株式会社サンステラ様の公式通販「サンステラ3Dモール」もぜひご利用ください．安心できる高品質なフィラメントやアクセサリたちは，一度使えばその価値が体感できると思います．僕も最近は中華格安フィラメントからサンステラ様経由のフィラメントに移行しつつあります．高品質品の安定供給は最高です．リンクは[こちら](https://sunstella.co.jp/)．

今後とも株式会社サンステラ様と弊ブログ共々，宜しくお願い致します．

それでは．