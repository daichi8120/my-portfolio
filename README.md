# my-portfolio

Daichi Hotta のポートフォリオサイト。Next.js (App Router) + React Server Components + TypeScript + Tailwind CSS で構築し、**レイヤードアーキテクチャ** に沿って 4 層に責務を分離しています。

## 技術スタック

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react / react-icons

## アーキテクチャ

```
┌───────────────────────────────────────┐
│  Presentation (React components)       │  Next.js / Tailwind に依存
└──────────────┬────────────────────────┘
               │ 呼び出し
               ▼
┌───────────────────────────────────────┐
│  Application (UseCases)                │  手順を組み立てる
└──────────────┬────────────────────────┘
               │ 依存
               ▼
┌───────────────────────────────────────┐
│  Domain (Entities, Repository IF)      │  何にも依存しない (core)
└──────────────▲────────────────────────┘
               │ 実装する
┌──────────────┴────────────────────────┐
│  Infrastructure (Repository 実装, データ)│  静的データ・API・DB など
└───────────────────────────────────────┘
```

依存方向は内向き (`Presentation → Application → Domain ← Infrastructure`)。Domain はフレームワークに一切依存せず、`Project` / `Skill` / `Profile` というドメイン概念のみを表現します。

### ディレクトリ構成

```
app/
  layout.tsx
  page.tsx                       Server Component。UseCase 経由で取得したデータを Presentation に渡す
  composition.ts                 Composition Root (DI 配線を一箇所に集約)
  not-found.tsx / error.tsx

  domain/                        Layer 1: ドメイン
    entities/                    Project / Skill / Profile
    repositories/                Repository インターフェース (抽象)

  application/                   Layer 2: アプリケーション
    usecases/                    GetProjects / GetSkills / GetProfile

  infrastructure/                Layer 3: インフラ
    repositories/                StaticXxxRepository (Domain の IF を実装)

  presentation/                  Layer 4: UI
    components/                  Header / Hero / About / Projects / ProjectCard / Skills / SkillBadge / Footer
    hooks/                       useMobileMenu
    icons/                       skillIcons (iconKey → コンポーネント解決)
```

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## スクリプト

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint 実行 |

## プロジェクト / スキルの追加

`app/infrastructure/repositories/` 配下の静的データを編集します。

- プロジェクト追加: `StaticProjectRepository.ts` の `projects` 配列に `Project` を追加
- スキル追加: `StaticSkillRepository.ts` の `skills` 配列に追加し、`Skill.iconKey` を `app/domain/entities/Skill.ts` の `SkillIconKey` ユニオンに、`app/presentation/icons/skillIcons.ts` のマッピングに登録
- プロフィール更新: `StaticProfileRepository.ts` を編集
