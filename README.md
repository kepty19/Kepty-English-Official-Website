# Kepty English Official Website

## 開発サイクル（Cursor → GitHub Desktop → 本番）

1. **Cursor** でコードを編集する
2. **GitHub Desktop** でコミットし、`main` ブランチへ push する
3. GitHub Actions が自動で `npm run build` し、[本番サイト](https://kepty19.github.io/Kepty-English-Official-Website/) を更新する（通常 1〜3 分）

### 初回だけ：GitHub Pages の設定

リポジトリ [Settings → Pages](https://github.com/kepty19/Kepty-English-Official-Website/settings/pages) で次を選ぶ。

- **Build and deployment → Source:** `GitHub Actions`（ブランチ直下のファイルを公開する設定は使わない）

### デプロイ状況の確認

- [Actions タブ](https://github.com/kepty19/Kepty-English-Official-Website/actions) でワークフロー `Deploy to GitHub Pages` が緑になれば完了
- 完了後、上記 URL を開いて表示を確認

### ローカル確認

```bash
npm install
npm run dev          # http://localhost:3000 （開発用）
npm run preview:pages  # 本番と同じ base パスでビルド＋プレビュー
```

### HOME キャラクター画像（4名）

`src/characters/` に次の4ファイルを配置してください（2秒ごとに切り替わります）。

- `player-1.png`
- `player-2.png`
- `player-3.png`
- `player-4.png`

※ 背景透過 PNG 推奨。既存ファイルを上書きしてコミットしてください。

### お問い合わせフォーム（contact@kepty.co）

フォーム送信は [Web3Forms](https://web3forms.com) 経由で `contact@kepty.co` に届きます。

**初回セットアップ（5分）:**

1. [Web3Forms](https://web3forms.com) で無料登録
2. 受信メールアドレスに `contact@kepty.co` を設定し、**Access Key** を発行
3. GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions**
4. **New repository secret** を追加  
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`  
   - Secret: コピーした Access Key
5. 空のコミットを push するか、Actions の「Deploy to GitHub Pages」を **Re-run** して再デプロイ

ローカルで試す場合は `.env.local` に `VITE_WEB3FORMS_ACCESS_KEY=...` を設定してください。

## Run Locally（AI Studio）

**Prerequisites:** Node.js

1. `npm install`
2. 必要なら `.env.local` に `GEMINI_API_KEY` を設定（[.env.example](.env.example) 参照）
3. `npm run dev`
