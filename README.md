# AIXIA Lab

未経験者がAI Codingで試行錯誤する記録を発信する、Astro製ブログメディアです。

## セットアップ手順

以下は、ゼロから同じ構成を作るときのコマンドです。

```bash
# 1) Astroプロジェクト作成（TypeScript strict）
npm create astro@latest aixia-lab -- --template minimal --typescript strict --install --yes

# 2) プロジェクトに移動
cd aixia-lab

# 3) 必要な統合機能を追加（MDX / sitemap）
npx astro add mdx sitemap --yes

# 4) Tailwind CSS(v4) と Cloudflare Pages デプロイCLIを追加
npm install tailwindcss @tailwindcss/vite wrangler

# 5) 開発サーバー起動
npm run dev
```

## Cloudflare Pages デプロイ

```bash
# 本番ビルド
npm run build

# 初回デプロイ（Project Name はCloudflare側で作成した名前）
npm run deploy:pages -- --project-name <your-project-name>
```

`wrangler.toml` の `name` は任意で変更してください。

## よく使うコマンド

- `npm run dev` : 開発サーバー起動
- `npm run check` : 型チェック
- `npm run build` : 本番ビルド
- `npm run preview` : ビルド結果のローカル確認
- `npm run deploy:pages -- --project-name <name>` : Cloudflare Pages へデプロイ

## 環境変数（後から設定可）

`.env.example` を `.env` にコピーし、必要な値を設定します。

- `PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 計測ID
- `PUBLIC_GSC_VERIFICATION`: Search Console 検証コード
- `PUBLIC_TWITTER_ID`: Twitter(X) アカウントID（例: `@aixia_dev`）

未設定でもサイトは動作します。
