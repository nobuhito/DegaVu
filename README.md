# DegaVu

**De**ploy the **G**olang app to **A**ppEngine. With **Vu**e.

## Description

DegaVu は、Golang のバックエンドと Vue.js のフロントエンドを持つアプリケーションを、AppEngine 上へ簡単に構築できるアプリケーション用テンプレートです。

Vue を採用するメリットである単一ファイルコンポーネンの良さを活かしつつ、GAE の開発用サーバーである dev_appserver を立ち上げながら開発できるよう、Vue の都度ビルドと事前ビルド無しで開発やデプロイが出来ます。

![screen](https://raw.githubusercontent.com/nobuhito/DegaVu/master/screen.gif?raw=true)

**DEMO:**

DegaVu で提供される機能については以下で確認出来ます。

[DEMO](http://degavu.bulkus.net/)

## Features

* 単一ファイルコンポーネントっぽく Vue を使える
* Webpack 等での事前ビルド不要でデプロイできる
* 今時の Web アプリでよく使われる機能を実装済み
  * Google アカウントによるユーザー認証(別途 Firebase の設定が必要)
  * 切り替え可能なカード表示とリスト表示の両方をサポートしたコンテンツ表示
  * マテリアルデザインライクなコンテンツ追加ボタン
* GAE 用にスタティックファイルハンドラ設定済み
* CSS フレームワークとして Bulma.io を採用

## Requipment

* GCP アカウント
* GAE プロジェクト
* Firebase プロジェクト
* Gcloud ライブラリ

## Usage

1. GCP の設定

   1. [GoogleCloudConsole](https://console.cloud.google.com/)で新しいプロジェクトを作成
   1. [CloudShell](https://console.cloud.google.com/cloudshell)を開く
   1. `gcloud app create` を実行し、適当なリージョンを選択

      * 速度優先なら `asia-northeast1` を選択
      * FireStore を使うなら `us-central` を選択（2018/02 時点）

1. Firebase の設定

   1. [FirebaseConsole](https://console.firebase.google.com)でプロジェクトを追加して GCP と紐付ける
   1. Firebase の「Web アプリに Firebase を追加」からスニペットをコピーし、 `web/static/js/firebase.js.sample` を参考にして `web/static/js/firebase.js` を作成
   1. Firebase の Authentication を開き、`ログイン方法` から `Google` を有効にする
   1. `承認済みドメイン` に、 GAE の URL（ProjectID.appspot.com）もしくは独自ドメインを追加する

1. ローカル PC から GAE へデプロイ

   1. ターミナルで `gcloud auth login` を実行して GCP にログイン
   1. ターミナルで `gcloud app deploy web/app.yaml --project=XXXXXX` を実行して GAE にデプロイ（ProjectID は firebase.js 等を参照）

## TODO

* [ ] PWA の設定を追加
* [ ] ヘッダーへ検索用フォーム追加

## Thanks

* [AppEngine](https://cloud.google.com/appengine/)
* [Firebase](https://firebase.google.com/)
* [Go](http://golang.org/)
* [Vue.js](https://vuejs.org/index.html)
* [gorilla/mux](https://github.com/gorilla/mux)
* [font awesome](https://fontawesome.com/)
* [axios](https://github.com/axios/axios)
* [bulma](https://bulma.io/)

## Author

[nobuihto.sato@gmail.com](mailto:nobuhito.sato@gmail.com)

## License

[MIT](https://raw.githubusercontent.com/nobuhito/DegaVu/master/LICENSE)
