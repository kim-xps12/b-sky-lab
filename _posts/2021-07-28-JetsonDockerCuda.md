---
layout: post
classes: wide
toc: true
sidebar:
  nav: "docs"
title: Jetson Xavier NX上でOpenGLを呼び出せるDocker環境を構築する (How to build a Docker environment that can call OpenGL on Jetson Xavier NX)
date: 2021-07-28 03:30
firstposted: 2021-07-28 03:30
categories: [Technology]
tags: [Technology, ROS, Jetson]
---



## 概要

Dockerを標準オプションでrunするとGUIアプリケーションは使用できません．しかし，ROSでの開発の際にはrvizで各種データを可視化することが割と必須なのが現状です．ROSネットワークに接続された別マシンで受信したデータを表示しても良いのですが，やはりJetsonが自前で表示できた方が便利だろうと思います．そこでGUIアプリケーション，それもcudaにアクセスするOpenGLを利用するアプリを動かせる状態に設定していきます．rivzが内部でOpenGLを呼び出しているのでこれを使用する場合は対応がマストです． 

<!-- more -->

## 手順

まずDockerfileとdocker-compose.ymlを下記のように記述します．
ベースイメージはJetpack 4.4.1を想定しているので，他のバージョンを使用している場合には適宜変更してください．


```Dockerfile:Dockerfile
FROM nvcr.io/nvidia/l4t-base:r32.4.4 
MAINTAINER B-SKY Lab 

# Set values 
ENV USER docker 
ENV PASSWORD docker 
ENV HOME /home/${USER} 
ENV SHELL /bin/bash 
ENV DEBIAN_FRONTEND=noninteractive

# nvidia-container-runtime 
ENV NVIDIA_VISIBLE_DEVICES=all 
ENV NVIDIA_DRIVER_CAPABILITIES=all

# Install basic tools 
RUN apt update && apt upgrade -y 
RUN apt install -y tzdata 
ENV TZ=Asia/Tokyo 
RUN apt install -y sudo 
RUN apt install -y vim-gtk \ 
                   git \ 
                   tmux \
                   gnupg2 \
                   glmark2 \
                   libgl1-mesa-glx \
                   libgl1-mesa-dri \ 
                   libglu1-mesa-dev \ 
                   libgles2-mesa-dev \ 
                   freeglut3-dev \                 
                   build-essential \ 
                   bash-completion \ 
                   command-not-found \ 
                   software-properties-common \ 
                   xdg-user-dirs \ 
                   xsel \ 
                   dirmngr \ 
                   gpg-agent \ 
                   mesa-utils \ 

RUN rm -rf /var/lib/apt/lists/* 

# Create user and add to video group and sudo group 
RUN useradd --user-group --create-home --shell /bin/false ${USER} 
RUN gpasswd -a ${USER} video 
RUN gpasswd -a ${USER} sudo 
RUN echo "${USER}:${PASSWORD}" | chpasswd 
RUN sed -i.bak "s#${HOME}:#${HOME}:${SHELL}#" /etc/passwd

# Set defalut user 
USER ${USER} 
WORKDIR ${HOME} 
SHELL ["/bin/bash", "-c"] 
RUN echo "export PATH=/usr/local/cuda/bin:$PATH" >> ~/.bashrc && \ 
    echo "export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH" >> ~/.bashrc && \ 
    source ~/.bashrc

# Change name color at terminal 
# Green (default) --> Light Cyan 
# RUN cd ~ 
# RUN sed s/32/36/ .bashrc > .bashrc_tmp 
# RUN mv .bashrc_tmp .bashrc
```

```yml:docker-compose.yml
version: '2.3' 
services:  
    mymelodic: 
        runtime: nvidia 
        build: 
            context: . 
        container_name: mymelodic
        network_mode: host 
        environment:  
          - "DISPLAY=$DISPLAY" 
          - "QT_X11_NO_MITSHM=1" 
          - "TERM=xterm-256color"  
          - "XAUTHORITY=/tmp/.docker.xauth" 
        volumes:  
          - "/home/$USER:/home/HOST" 
          - "/etc/sudoers.d:/etc/sudoers.d:ro" 
          - "/tmp/.X11-unix:/tmp/.X11-unix:rw" 
          - "/tmp/.docker.xauth:/tmp/.docker.xauth:rw" 
        #devices:  
        #- "/dev/ttyUSB0:/dev/ttyUSB0" 
        tty: true 
        stdin_open: true
```

また，このDockerfileでは基本的な開発ツールのインストールや一般ユーザの作成，パスワードの設定，sudoグループへの追加等も行っています．一番下のRUN3行（Change name color at terminalの部分）のコメントアウトを外すと，コンテナ内に入ったときにターミナルの名前表示がデフォルトの緑から青に変更されます．かなり雑なやり方なので事故防止のためにコメントアウトしています．自己責任でお使いください．


最後に，以下のコマンドで画面転送の設定を行います．

```
XAUTH=/tmp/.docker.xauth 
touch $XAUTH 
xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f $XAUTH nmerge -
```

これで設定系は完了です．コンテナのビルドおよび起動は以下のコマンドで行えます．

```
docker-compose up -d
docker attach mymelodic
```

mymelodic の部分をDockerfileやdocker-compose.ymlの時点で別のコンテナ名にしている場合は，適宜変更してください．
上記の起動手順は以下のようにスクリプトファイルにまとめておくと便利です．


```launch_compose.sh
#!/bin/sh

echo "Setting xauth..." 
XAUTH=/tmp/.docker.xauth 
touch $XAUTH 
xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f $XAUTH nmerge -

echo "Build and Start container" 
docker-compose up -d
docker attach mymelodic
```

このようにまとめておいた場合は，下記のコマンド一発でコンテナのビルド，起動を済ませてコンテナ内に入れます．

```
./launch_compose
```


## 動作確認

下記コマンドでOpenGLベンチマークを実行し，ポップアップが表示されれば成功です．

```
glmark2
```

## 参考

[GPUを利用するためのDocker プラグイン「NVIDIA Docker」とは？導入手順は？(前編)](https://licensecounter.jp/devops-hub/blog/nvidia-1/)
[nvidia-dockerコンテナ内のrViz](https://stackoverflow.com/questions/59388345/rviz-in-nvidia-docker-container)
[Using Hardware Acceleration with Docker](http://wiki.ros.org/docker/Tutorials/Hardware%20Acceleration)