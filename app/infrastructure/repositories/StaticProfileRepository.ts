import type { Profile } from '@/app/domain/entities/Profile';
import type { ProfileRepository } from '@/app/domain/repositories/ProfileRepository';

const profile: Profile = {
  name: 'Daichi Hotta',
  headline: '計算の力で、複雑な世界を解き明かし、未来を実装する',
  affiliation: [
    '青山学院大学 理工学部情報テクノロジー学科 4年',
    'コンピュータグラフィックス研究室 所属',
  ],
  bio: [
    '大学でコンピュータサイエンスを学ぶ中で、計算の力で現実世界の複雑な課題を解決することに魅力を感じています。現在は、コンピュータグラフィックスの研究室に所属し、連続体力学やMPMに関する物理シミュレーションの研究を通じて、そのための基礎となる数学的、物理的知識とC++やPythonによる実装力を養っています。',
    '私が特に関心を持っているのは、計算負荷がボトルネックとなる課題の解決です。研究で取り組んでいる物理演算やHPC分野に加え、OSやブラウザのように、システム全体のパフォーマンスを決定づける低レイヤー技術にも強い興味があります。',
    'この興味は、より現代的な課題にも繋がっています。例えば、深層学習・強化学習のモデル実用化の鍵となる推論速度の向上や、ブロックチェーンの社会実装を阻むスループットの問題など、計算効率の改善がブレークスルーを生む領域に挑戦したいと考えています。',
    '研究で得た専門性に加え、Next.jsやFlutterを用いた個人開発を通じて、ユーザーに価値を届けるためのアプリケーション開発経験も積んでいます。',
  ],
  email: 'daichi8120@gmail.com',
  socials: {
    twitter: 'https://twitter.com/glound_1',
    github: 'https://github.com/daichi0812',
    linkedin: 'https://www.linkedin.com/in/daichi-hotta-645565388/',
  },
};

export class StaticProfileRepository implements ProfileRepository {
  async get(): Promise<Profile> {
    return profile;
  }
}
