# [Gmail-to-chatwork](https://shyazusa.github.io/gmail-to-chatwork/)

Gmailの未読メールの本文をchatworkに通知して既読処理してくれるGoogle Apps Scriptです。

## 使用手順

1. chatworkのapi_keyをコピるなりしてメモる
2. `code.gs`内で`api_key`, `room_id`の設定をする
3. Googleスプレッドシートを新規作成
4. ツール → スクリプトエディタ
5. コード記述欄に出来上がった`code.gs`をペースト，保存
6. Google Apps Scriptで定期実行を設定
    ![image](https://user-images.githubusercontent.com/10899437/34185722-5d8e062a-e56a-11e7-9f49-4a630a29b6aa.png)

以上デス。
