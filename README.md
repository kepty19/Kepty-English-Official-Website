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

## Run Locally（AI Studio）

**Prerequisites:** Node.js

1. `npm install`
2. 必要なら `.env.local` に `GEMINI_API_KEY` を設定（[.env.example](.env.example) 参照）
3. `npm run dev`
