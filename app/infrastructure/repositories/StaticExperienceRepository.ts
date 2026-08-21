import type { Experience } from '@/app/domain/entities/Experience';
import type { ExperienceRepository } from '@/app/domain/repositories/ExperienceRepository';

const experiences: readonly Experience[] = [
  {
    id: 'markdoor',
    title: '長期インターン: MarkDoor',
    organization: '株式会社MarkDoor',
    category: 'Internship',
    period: { start: '2026-02' },
    status: 'In Progress',
    summary:
      'クライアント案件ベースで、AI/ML プロダクトのフルスタック開発を担当。要件整理から実装・報告までを自分の裁量で進めている。',
    highlights: [
      '不動産情報を統合する大規模データベース構築。週次のクライアントMTGで方針合意を取りながら、データパイプラインを設計・実装。',
      '機能性ヘアケアSKUの需要予測モデルをデモ構築。間欠需要に対し、業務側で許容できる月次粒度への運用切替を提案して合意形成し、最終的に実用ラインの精度を達成。',
      'Next.js で配分判断のモックUIを作成し、月末在庫と翌月予測から仕入れ推奨量を SKU 単位で可視化。モデルの数字を「業務に使える形」まで落とし込んだ。',
    ],
    tech: ['Python', 'Next.js', 'TypeScript', 'AWS', 'Claude Code'],
  },
  {
    id: 'comsquare',
    title: '長期インターン: コムスクエア (広告連携開発)',
    organization: '株式会社コムスクエア',
    category: 'Internship',
    period: { start: '2025-08', end: '2026-02' },
    status: 'Completed',
    summary:
      '自社サービス「コールトラッカー」の広告連携機能をフルスタックで開発。Yahoo!広告 / Google広告に連動した効果計測機能を設計・実装。',
    highlights: [
      'インターン生 6〜8 名チームの中で、フロントエンド / バックエンド / AWS インフラまでを横断的に担当。',
      'リモート開発でも齟齬が出ないよう、ログ・動作スクショ・動画付きの報告フローを定着させ、PM との認識合わせを高速化。',
      '途中参加でドメイン理解が不十分な領域は、他のインターン生と積極的に共有して認識のずれを早期に解消。',
    ],
    tech: ['TypeScript', 'Next.js', 'AWS'],
  },
  {
    id: 'cg-granular-simulation',
    title: '研究: 粒状体シミュレーション (DEM/MPM ハイブリッド)',
    organization: '青山学院大学 コンピュータグラフィックス研究室',
    category: 'Research',
    period: { start: '2025-03' },
    status: 'In Progress',
    summary:
      'DEM と MPM を組み合わせ、任意形状の粒状体を大規模・長時間にわたって安定にシミュレーションするハイブリッド手法を研究。',
    highlights: [
      'DEM で観測される塑性流動・降伏挙動を MPM 側に写像することで、粒子形状を限定しない再現を目指す。',
      'データ取得パイプラインのデバッグから着手し、保守性と拡張性を見据えてベストプラクティスに沿った構成へ再構築。',
      'Taichi/Python と C++ で実装。マクロな応力-歪み再現性まで含めた評価で、任意形状でも堅牢に動作する基盤の確立を目標。',
    ],
    tech: ['Python', 'C++', 'Taichi'],
  },
  {
    id: 'llmatch',
    title: '研究: LLMATCH',
    organization: '東京大学 松尾・岩澤研究室',
    category: 'Research',
    period: { start: '2026-05' },
    status: 'In Progress',
    summary: 'LLM を用いた新規研究プロジェクトを 2026 年 5 月に開始。詳細は準備中。',
    highlights: [],
    tech: [],
  },
  {
    id: 'abs-ems',
    title: '機材管理システム (放送部向けチーム開発)',
    category: 'Personal Project',
    period: { start: '2024-06', end: '2025-01' },
    status: 'Completed',
    summary:
      '学内放送部の機材予約・返却を一元化する Web アプリを 3 人チームで開発し、約 40 名のアカウントで現在も常用されている。',
    highlights: [
      '部長と直接要件をすり合わせ、フロントエンドの認証機能および UI 全般を担当。',
      'デプロイコストを抑えるため Ruby バックエンドを Next.js へ統一し、Vercel 上で一元管理する構成に変更。',
      '卒業後の保守を見据えて問い合わせフォームを新設し、導入後のユーザー要望にも継続対応。',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'NextAuth', 'Tailwind CSS'],
    links: [
      { type: 'live', url: 'https://abs-ems.vercel.app' },
      { type: 'github', url: 'https://github.com/daichi8120/abs-ems' },
    ],
  },
  {
    id: 'madoi',
    title: 'Madoi (部活向け記録・タスク管理アプリ)',
    category: 'Personal Project',
    period: { start: '2025-05', end: '2025-07' },
    status: 'Completed',
    summary:
      '所属する自動車部に向けて、整備記録・セッティング記録・ToDo を一元管理するモバイルアプリを Flutter で開発。',
    highlights: [
      '個人開発として、要件定義からデザイン・実装まで一人称で完遂。',
      'Flutter / Dart のアプリ開発の流れを実プロダクトとして習熟。',
    ],
    tech: ['Flutter', 'Dart'],
    links: [{ type: 'github', url: 'https://github.com/daichi8120/madoi' }],
  },
] as const;

export class StaticExperienceRepository implements ExperienceRepository {
  async findAll(): Promise<readonly Experience[]> {
    return experiences;
  }
}
