---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: OctoPrintをマルチインスタンス立ち上げて複数プリンタを接続したい！
date: 2021-11-04 00:49
firstposted: 2021-11-04 00:49
categories: [Technology]
tags: [Technology, 3dPrinter, Raspberry_pi]
---

**How to launch multiple instance OctoPrint and connect multiple printers!**

## はじめに
Ender 3やAnycubic i3 mega，そして我が家のFelix Pro 2など，標準でWi-Fiデータ転送に対応していない3Dプリンタは割と多くあります．そんなときに便利なのがOctoPrint．Raspberry Piや適当なLinux PCにインストールしてプリンタと接続するだけで，Wi-Fi経由でのデータ転送や状態監視，カメラを取り付ければ映像配信やタイムラプスまで可能な便利ソフトです[[1]](https://octoprint.org/)．

<!-- more -->

諸事情あってFelix Pro 2を2台お迎えすることになったので（僕もこれでプリンタたちを管理...）と思っていたのですが，なんと標準のままでは1台のプリンタとしか接続できません．色々調べてみると，内部で立ち上がるOctoPrintのインスタンスを増やしてあげれば複数台と接続可能らしいのですが，見つけた参考サイト[[2]]( http://thomas-messmer.com/index.php/14-free-knowledge/howtos/79-setting-up-octoprint-for-multiple-printers)は

- ちょっと情報が古い

- 同じ機種2台ではないのでデバイス名固定のやり方が使いにくい

更に，ここ以外にキレイにまとまってるサイトが英語日本語ともに見当たらない，ということでOctoPrint Version 1.7.0でマルチインスタンスする方法をまとめておきます．



## 使用機器

今回の使用機器は以下の通りです．

- Raspberry Pi 3 （OctoPrintインストール先）・・・1台
- Felix Pro 2（制御対象の3Dプリンタ）・・・2台
- Terra Term（OctoPrint設定書き換えに使用，RasPiにssh接続できればなんでもいいです．）



## OctoPrintのインストール

これに関しては詳細に解説しているサイトが多くあるのでそちらに譲ります．基本的には

1. 公式サイトからOctoPiイメージをダウンロード
2. balena EtcherなどでMicro SDへ書き込み
3. SDカード内の設定ファイルを直接編集
4. RasPiに差し込んで起動，プリンタプロファイルを登録

という流れです．



## OctoPrintのマルチインスタンス設定

本題です．基本的な手順は参考サイト[[2]]( http://thomas-messmer.com/index.php/14-free-knowledge/howtos/79-setting-up-octoprint-for-multiple-printers)と同じですが，設定ファイルの場所が一部異なっています．今回の記事ではインスタンス2個分の作業をしていますので，3台以上のプリンタと接続したい場合は良きように読み替えてください．以降の手順は全てSSHでラズパイにログインした状態で行います．ラズパイに直接モニタとキーボードをつないで作業しても大丈夫です．



### デバイス名の固定

話の流れをすっきりさせるために，先にプリンタのデバイス名を固定してしまいます．詳細な手順はこのサイト[[3]](https://smdn.jp/electronics/udev_create_persistent_usb_device_symlink/)が詳しいです．まずはプリンタたちを接続した状態で以下のコマンドを実行し，識別に必要な情報を確認します．

```bash
udevadm info -q property -n /dev/ttyACM_FPCL  | grep -E "ID_SERIAL_SHORT=|ID_VENDOR_ID=|ID_MODEL_ID="
```

ここで取得できた情報を元に，USBのルールファイルを作成します．下記のコマンドでは，```99-usb.rules```という名前のルールファイルを作っています．まずはルールファイルを作成＆エディタで開きます．

```bash
sudo nano /etc/udev/rules.d/99-usb.rules
```

そうしたら下記フォーマットに従ってデバイス情報を書き込みます．ベンダー番号などは```udevadm...```のコマンドで確認したものをセットします．

```bash
SUBSYSTEM=="tty", ATTRS{idVendor}=="ベンダー番号", ATTRS{idProduct}=="プロダクト番号", ATTRS{serial}=="シリアル番号", SYMLINK+="設定したい固定デバイス名", GROUP="dialout"
```

例えば，プリンタ1とプリンタ2を接続したいとして，デバイス情報が以下のように取得できたとします．

プリンタ1

- ID_VENDOR_ID：1234（ベンダー番号に相当）
- ID_MODEL_ID：001d（プロダクト番号に相当）
- ID_SERIAL_SHORT：1234567890（シリアル番号に相当）

プリンタ2

- ID_VENDOR_ID：1234（ベンダー番号に相当）
- ID_MODEL_ID：001d（プロダクト番号に相当）
- ID_SERIAL_SHORT：567890123（シリアル番号に相当）

プリンタ1のデバイス名を```ttyACM_3DP1```，プリンタ2を```ttyACM_3DP2```に固定したいとします．このとき，ルールファイルの中身は下記のようになります．

```bash
SUBSYSTEM=="tty", ATTRS{idVendor}=="1234", ATTRS{idProduct}=="001d", ATTRS{serial}=="1234567890", SYMLINK+="ttyACM_3DP1", GROUP="dialout"
SUBSYSTEM=="tty", ATTRS{idVendor}=="1234", ATTRS{idProduct}=="001d", ATTRS{serial}=="567890123", SYMLINK+="ttyACM_3DP2", GROUP="dialout"
```

同じ機種を2台使おうとすると，ベンダ番号とプロダクト番号は共通でシリアル番号のみ異なるようです．

どうやらOctoPrintは```ttyACM```から始まるデバイスのみを接続候補としてピックアップするようなので，このような名前にしておく必要があるみたいです．設定変えればどうにかなりそうな気もしますが，別にデバイス名にこだわりは無いのでこれでいきます．

```ls /dev/ttyACM_3DP*```のようにしてシンボリックリンクが生成されているのを確認できればOKです．



### Workingディレクトリの複製

まずは以下のコマンドでOctoPrint関連のデータがあるディレクトリを2個目のインスタンス用に複製します．

```bash
cp -R /home/pi/.octoprint /home/pi/.octoprint2
```



### Seriviceファイルの変更

まずは1個目のインスタンス用のserviceを下記のように設定します．

```bash
sudo nano /etc/systemd/system/octoprint.service
```

で設定ファイルを開いて，

```bash
[Unit]
Description=The snappy web interface for your 3D printer
After=network.online.target
Wants=network.online.target

[Service]
Environment="HOST=127.0.0.1"
Environment="PORT=5000"
Type=simple
User=pi
ExecStart=/home/pi/oprint/bin/octoprint serve --host=${HOST} --port=${PORT}  --config /home/pi/.octoprint/config.yaml --basedir /home/pi/.octoprint/

[Install]
WantedBy=multi-user.target
```

上記の内容を書き込みます．

続いて，2個目のインスタンス用のserviceを設定します．

```bash
sudo nano /etc/systemd/system/octoprint2.service
```

で設定ファイルを生成＆開いて，

```bash
[Unit]
Description=The snappy web interface for your 3D printer
After=network.online.target
Wants=network.online.target

[Service]
Environment="HOST=127.0.0.1"
Environment="PORT=5001"
Type=simple
User=pi
ExecStart=/home/pi/oprint/bin/octoprint serve --host=${HOST} --port=${PORT}  --config /home/pi/.octoprint2/config.yaml --basedir /home/pi/.octoprint2/

[Install]
WantedBy=multi-user.target
```

上記の内容を書き込みます．

保存して終了したら，下記コマンドで自動起動を有効にしておきましょう．

```bash
sudo systemctl enable octoprint2.service
```

この設定だと，デフォルトの5000番ポートでプリンタ1用のインスタンス，追加で5001番ポートでプリンタ2用のインスタンスへアクセスできます．



### haproxyの設定

最後にプロキシ関係の設定をしておきます．IPアドレスの後ろに識別子をくっつけることで，各インスタンス用のポートへつないでくれるようです．この辺はあまり詳しくないので説明が間違っていたらごめんなさい．動いてはいるので大丈夫だとおもいます，たぶん．

このコマンドでhaproxyの設定ファイルを開いて，

```bash
sudo nano /etc/haproxy/haproxy.cfg
```

次のように書き換えます．この例では，5000番ポートのプリンタ用の識別子を```fpcl```，5001番の方を```fpop```にしています．僕の環境に合わせてエンクロージャ有り/無しを意味するように命名しただけなので，良きように書き換えてください．また，```frontend public```の欄の```default_backend```の欄でデフォルトでどちらのインスタンスに接続するかを設定できます．

```bash
global
        maxconn 4096
        user haproxy
        group haproxy
        log /dev/log local1 debug
        tune.ssl.default-dh-param 2048

defaults
        log     global
        mode    http
        compression algo gzip
        option  httplog
        option  dontlognull
        retries 3
        option redispatch
        option http-server-close
        option forwardfor
        maxconn 2000
        timeout connect 5s
        timeout client  15min
        timeout server  15min

frontend public
        bind :::80 v4v6
        bind :::443 v4v6 ssl crt /etc/ssl/snakeoil.pem
        option forwardfor except 127.0.0.1
        use_backend webcam if { path_beg /webcam/ }
        use_backend webcam_hls if { path_beg /hls/ }
        use_backend webcam_hls if { path_beg /jpeg/ }
        use_backend fpcl if { path_beg /fpcl/ }
        use_backend fpop if { path_beg /fpop/ }
        default_backend fpop

backend fpcl
        acl needs_scheme req.hdr_cnt(X-Scheme) eq 0
        option forwardfor
        server octoprint1 127.0.0.1:5000
        reqrep ^([^\ :]*)\ /fpcl/(.*) \1\ /\2
        reqadd X-Scheme:\ https if needs_scheme { ssl_fc }
        reqadd X-Scheme:\ http if needs_scheme !{ ssl_fc }
        reqadd X-Script-Name:\ /fpcl
        errorfile 503 /etc/haproxy/errors/503-no-octoprint.http

backend fpop
        acl needs_scheme req.hdr_cnt(X-Scheme) eq 0
        option forwardfor
        server octoprint2 127.0.0.1:5001
        reqrep ^([^\ :]*)\ /fpop/(.*) \1\ /\2
        reqadd X-Scheme:\ https if needs_scheme { ssl_fc }
        reqadd X-Scheme:\ http if needs_scheme !{ ssl_fc }
        reqadd X-Script-Name:\ /fpop
        errorfile 503 /etc/haproxy/errors/503-no-octoprint.http

backend webcam
        reqrep ^([^\ :]*)\ /webcam/(.*)     \1\ /\2
        server webcam1  127.0.0.1:8080
        errorfile 503 /etc/haproxy/errors/503-no-webcam.http

backend webcam_hls
        server webcam_hls_1 127.0.0.1:28126
        errorfile 503 /etc/haproxy/errors/503-no-webcam-hls.http
```



ここまでの設定が問題なくできていれば，ブラウザから各OctoPrintにアクセスできるようになっているはずです．例えば，RasPiのIPアドレスを```192.168.1.50```に設定している場合は，```http://192.168.1.50/fpop/```，```http://192.168.1.50/fpcl/```でページを開けます．





## 参考

[1] OctoPrint公式サイト [https://octoprint.org/](https://octoprint.org/)

[2] Setting up OctoPrint on a Raspberry Pi for multiple printers [http://thomas-messmer.com/index.php/14-free-knowledge/howtos/79-setting-up-octoprint-for-multiple-printers](http://thomas-messmer.com/index.php/14-free-knowledge/howtos/79-setting-up-octoprint-for-multiple-printers)

[3] USB-シリアル変換器のデバイスファイル名を固定する [https://smdn.jp/electronics/udev_create_persistent_usb_device_symlink/]( https://smdn.jp/electronics/udev_create_persistent_usb_device_symlink/)

