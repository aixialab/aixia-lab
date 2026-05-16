export const SITE = {
  name: 'AIXIA Lab',
  domain: 'aixia.dev',
  url: 'https://aixia.dev',
  subtitle: '未経験者がAI Codingで試行錯誤する記録',
  description:
    'Claude Code、OpenCode、Cursor等のAI Codingツールを実際に使った体験記・比較・検証を発信するブログメディア',
  lang: 'ja',
  locale: 'ja_JP',
  author: 'AIXIA Lab',
} as const;

export const CATEGORIES = [
  'ツールレビュー',
  'ツール比較',
  '実装してみた',
  '学習記録',
] as const;

export type Category = (typeof CATEGORIES)[number];
