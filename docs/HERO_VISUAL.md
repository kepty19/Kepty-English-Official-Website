# Hero Visual Asset

HOME 右下の 3D ビジュアル（スマホ + サッカーボール）用アセット仕様です。

## 方針（2026-06 抜本見直し）

| やめること | 理由 |
|-----------|------|
| 黒背景 PNG + `mix-blend-screen` | 黒い矩形が残る |
| ビルド時の自動切り抜き（ソフト alpha） | 半透明フリンジ → 横縞グリッチ |
| Framer Motion で位置 `transform` | `animate.y` が `translateX(-50%)` を上書き |
| `filter` / グロー二重化 | 色ずれ・描画ノイズ |

| やること | 理由 |
|---------|------|
| **透過 PNG を1枚だけ使う** | キャラクター時代と同じ確実な方式 |
| 表示は `<img>` + 位置指定のみ | シンプル = 壊れにくい |
| z-index **2**（テキスト z-4 の裏） | 「Kepty English」が切れない |

## ファイル

| パス | 用途 |
|------|------|
| `src/hero-tech-visual.png` | **本番で使う透過 PNG**（差し替え対象） |
| `src/hero-tech-visual-source.png` | 黒背景マスター（参考・バックアップ） |

## よくある失敗：グレー市松模様が出る

画像編集ソフトの「透明を示す市松模様」が **そのまま PNG に焼き込まれている** 状態です（alpha なし）。  
ブラウザでは市松が表示されます。

**対処**

1. `src/hero-tech-visual-source.png`（黒背景マスター）だけを用意する  
2. ターミナルで `node scripts/prepare-hero-asset.mjs` を実行  
3. 生成された `src/hero-tech-visual.png` を commit / push  

透過 PNG を外部ツールで作る場合も、**市松が見えている状態で保存しない**こと。

---

## 画像生成プロンプト（透過背景で出力）

画像ツール（Gemini, ChatGPT, Midjourney 等）で **PNG 透過背景** を指定して生成してください。

```
Premium 3D render for website hero, isolated on fully transparent background (alpha channel, no backdrop).

Subject: sleek smartphone at 3/4 angle showing orange UI (mic, chat, book, waveform icons) with holographic orange wireframe globe above screen; glossy soccer ball beside phone with glowing orange seams; subtle orange light trails and HUD rings; dark metallic phone body with orange rim light.

Style: high-end tech product shot, Pixar-quality 3D, cinematic lighting, orange accent #FF6331 on dark surfaces.

Composition: landscape ~3:2, subject centered-right in frame, generous transparent padding on all sides, feet/base near bottom — designed to sit bottom-right of an orange gradient web hero.

CRITICAL: transparent background only. No black, no white, no gradient backdrop, no floor shadow baked into background.
```

生成後、`src/hero-tech-visual.png` に **そのまま上書き** してください。

## 黒背景しか無い場合（暫定）

```bash
# 黒背景マスターを hero-tech-visual-source.png に置いてから
node scripts/prepare-hero-asset.mjs
```

※ ハード切り抜き（0/255 alpha のみ）なので、プロ向け透過 PNG より品質は落ちます。**本番は透過 PNG 差し替えを推奨**。

## 表示確認

```bash
npm run lint   # アセット検証含む
npm run dev
```
