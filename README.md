# READ ME

- Codejumpの練習課題をAI無しでコーディングしたサイトです。[【HTML/CSS コーディング練習】入門編：プロフィールサイト／1カラム](https://code-jump.com/profile-menu/)
- デザインカンプはXDのWeb版を使用しております。[デザインカンプ(XD-Web)](https://xd.adobe.com/view/03bbbaee-5ffb-4f82-8b0a-f1c8e32a49e9-56e8/?hints=off)
- テキストエディタはVSCodeを使用し、Copilotの入力補助も無効化してコーディングしています。
- 分からない箇所はMDNをメインに調べました。

## 目的

AI無しでのコーディング能力の確認・証明

## コーディング仕様

### BMS（小崎さんに確認した上で決定）

- **AI原則使用禁止**
- SPファースト
- CSS変数使用可能
- Sass使用可能
- ブレイクポイントは640pxと1024px → メディアクエリはタブレットからPCの切り替えで、min-width(1025px)を採用
- 検証ブラウザ：WindowsPC(Edge,Firefox,Chrome),iPhoneSE(Safari),Pixel4a(Chrome)
- 参考：中日新聞Webサイトポリシー

### Codejumpより

- コンテンツ幅
  コンテンツの横幅は960pxで横のパディングは4%です。
  メインビジュアルだけ全幅にします。
- メインビジュアル
  全幅で高さは600px固定です。
- About
  画像をCSSで丸く切り抜きます。
  画像とテキストを横並びの中央寄せで配置します。
- Bicycle
  画像を両端ぞろえの横ならびに配置します。
- レスポンシブ
  About、Bicycleともに、レスポンシブ時はコンテンツを縦積みにします。

## 閲覧について

ヘッダーを共通にしてJSで読み込んでいるのでローカルサーバーを立てて開いてください。
