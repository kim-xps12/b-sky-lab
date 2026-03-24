---
title: Creality K1のfluidd開放とタイムラプス設定
date: 2023-07-02 23:00
firstposted: 2023-07-02 23:00
categories: [Technology]
tags: [Technology, 3dPrinter, Creality]
---

**How to setup Fluidd and timelapse component @Creality K1 !**

## はじめに

こんにちは，孔明です．引き続きCreality K1ネタです．
今回は内蔵fluiddのWEB UIを利用可能にする手順と，そのfluiddにタイムラプスコンポーネントを追加＆利用可能にする手順の備忘録をお送りします．

<!-- more -->

## ！注意！
あくまでこの手順は私の備忘録であり，メーカや公式が推奨している方法ではありません．
また，この手順を真似した際に引き起こされる不具合や不利益について私は一切の責任を持ちません．自己責任でお願いしますね！


## 環境
- exploit用ブラウザ: Edge @Windows11
- SSH用端末: GitBash @Windows11
- K1のファームウェア: V1.2.9.15（最新版だとこの手順は使えないとの噂です）
- K1用純正カメラ（タイムラプスを行う場合）

## 1. Exploit for SSH
例によってSSHパスフレーズのハッシュを上書きし，SSHログインできるようにexploitします．済んでいる方はこの節は飛ばして問題ありません．
私は[このページ](https://gist.github.com/blakadder/9e6e8ab633b9731d934f02cfcc4db246)の手順をEdgeで行いました.chromeは警告が出てダメでした．

## 2. Setup Fluidd

この動画の概要欄にある手順に従えばOKです．

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZJjOkQJVSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

ちなみにこの動画はTwitterで教えていただきました．感謝しかない…

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">自分はYoutubeを参考にしましたよ👌<br><br>Root解放後の作業は、概要欄に操作手順が載ってるのでわかりやすかったです。<a href="https://t.co/ZIP58HMdob">https://t.co/ZIP58HMdob</a><br><br>VIエディタを使ったことがあれば、スムーズに終わると思います</p>&mdash; Kazuya Goto (@MeganezaruDev) <a href="https://twitter.com/MeganezaruDev/status/1674707157777010689?ref_src=twsrc%5Etfw">June 30, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

概要欄の手順はわかりにくいポイントもあったので一応解説を添えて手順を転記しておきます．

1. SSHでK1に接続．

1. 以下のコマンドで設定ファイルをコピー．

    ```
    cp /usr/share/moonraker/moonraker.conf /usr/data/printer_data/config/
    ```
1. 以下のコマンドで設定ファイルを開く．viは初見さんに優しくないエディタなので，使い方をご存知ない方は「vi 使い方」でググってください…
    ```
    vi /etc/init.d/S50nginx
    ```
1. 以下の記述を検索して，#を削除してコメントアウト解除．
    これを，
    ```
    # mkdir -p /var/log/nginx /var/tmp/nginx
    # start-stop-daemon -S -x "$NGINX" -p "$PIDFILE” 
    ```

    こう！
    ```
    mkdir -p /var/log/nginx /var/tmp/nginx
    start-stop-daemon -S -x "$NGINX" -p "$PIDFILE” 
    ```

1. 以下のコマンドで別の設定ファイルを開きます．
    ```
    vi /etc/init.d/S56moonraker_service
    ```

1. 「start」でファイル内を検索して，#でコメントアウトされたものがあればそれを解除しまｓ．私のときは37行目あたりに `#start`があった記憶です．これを`start`にすればOK．

1. K1本体の電源を入れ直します．

1. K1と同じネットワークにあるブラウザから，`K1のIPアドレス:4408`に接続できたらOK！例えば，K1のIPアドレスが`192.168.1.100`であれば，`192.168.1.100:4408`に接続します．

## Setup Timelapse

せっかくFluiddが使えるようになったので，タイムラプス機能を追加します．
これでCreality Cloudのスマホアプリから脱却できます．

1. K1にSSHで接続．

1. 以下のコマンドでtimelapseコンポーネントを取得．

    ```
    cd ~
    git clone https://github.com/mainsail-crew/moonraker-timelapse.git
    ```

1. 以下のコマンドで設定ファイルをコピー．
    ```
    cd ~
    cp moonraker-timelapse/klipper_macro/timelapse.cfg /usr/data/printer_data/config/timelapse.cfg
    ```

1. 以下のコマンドでタイムラプスコンポーネントのPythonスクリプトをコピー．
    ```
    cp moonraker-timelapse/component/timelapse.py /usr/share/moonraker/moonraker/components/timelapse.py
    ```

1. 以下のコマンドでコピーしたスクリプトを開きます．
    ```
    vi /usr/share/moonraker/moonraker/components/timelapse.py
    ```

1. ffmpegのコマンドを修正します．672~682行目にある以下の箇所を，
    ```
    cmd = self.ffmpeg_binary_path \
        + " -r " + str(fps) \
        + " -i '" + inputfiles + "'" \
        + filterParam \
        + " -threads 2 -g 5" \
        + " -crf " + str(self.config['constant_rate_factor']) \
        + " -vcodec libx264" \
        + " -pix_fmt " + self.config['pixelformat'] \
        + " -an" \
        + " " + self.config['extraoutputparams'] \
        + " '" + self.temp_dir + outfile + ".mp4' -y"
    ```

    このように編集します↓
    ```
    cmd = self.ffmpeg_binary_path \
        + " -r " + str(fps) \
        + " -i '" + inputfiles + "'" \
        + filterParam \
        + " -threads 2 -g 5" \
        + " -vcodec h264_v4l2m2m" \
        + " -pix_fmt " + self.config['pixelformat'] \
        + " -an" \
        + " " + self.config['extraoutputparams'] \
        + " '" + self.temp_dir + outfile + ".mp4' -y"
    ```

    これはK1のボードにインストールされているffmpegが`libx264`を持っておらず，`-crf`オプションのパースもできないためです．

1. 編集が面倒な方は，私のリポジトリに編集済みのものを公開しているのでこちらを使ってもOKです．

    ```
    cd ~
    git clone https://github.com/kim-xps12/fluidd_timelapse_k1
    cp fluidd_timelapse_k1/timelapse.py /usr/share/moonraker/moonraker/components/timelapse.py
    ```

1. ブラウザからFluiddのWeb UIへ接続し`moonraker.conf`を開いて，以下を追記します．
    ```
    [timelapse]
    ##   Following basic configuration is default to most images and don't need
    ##   to be changed in most scenarios. Only uncomment and change it if your
    ##   Image differ from standart installations. In most common scenarios 
    ##   a User only need [timelapse] in there configuration.
    #output_path: ~/timelapse/
    ##   Directory where the generated video will be saved
    #frame_path: /tmp/timelapse/
    ##   Directory where the temporary frames are saved
    #ffmpeg_binary_path: /usr/bin/ffmpeg
    ##   Directory where ffmpeg is installed
    ```

1. ブラウザからFluiddのWeb UIへ接続し`printer.cfg`を開いて，以下を追記します．
    ```
    [include timelapse.cfg]
    ```

1. K1本体の電源を入れ直します．

1. Fluiddの左バーにTimelapseの項目が追加されたらOK．
    印刷開始で自動的に撮影開始，印刷終了で画像からレンダリングしてmp4ファイルが作成されるはずです．細かな設定は[公式ドキュメント](https://github.com/mainsail-crew/moonraker-timelapse/blob/main/docs/configuration.md)を参照してください．

## 関連記事
- [Creality K1 レビュー[高速造形機種の幕開け！]](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/04/CrealityK1-01.html)
- [Creality K1の水平レベリング調整](https://kim-xps12.github.io/b-sky-lab/technology/2023/06/26/CrealityK1-leveling.html)
- [Creality K1でABSを印刷したい！](https://kim-xps12.github.io/b-sky-lab/technology/2023/07/08/CrealityK1-ABS.html)

## おわりに
いかがでしたか？本記事の手順でCreality K1のポテンシャルを引き出せたら嬉しいです．
それでは．

## 参考
- [GitHub Gist Creality K1 exploit method](https://gist.github.com/blakadder/9e6e8ab633b9731d934f02cfcc4db246)
- [Youtube: Get FULL KLIPPER Access on your Creality K1](https://www.youtube.com/watch?v=sZJjOkQJVSQ)
- [GitHub: moonraker-timelapse](https://github.com/mainsail-crew/moonraker-timelapse)