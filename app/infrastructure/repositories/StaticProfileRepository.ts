import type { Profile } from '@/app/domain/entities/Profile';
import type { ProfileRepository } from '@/app/domain/repositories/ProfileRepository';

const profile: Profile = {
  name: 'Daichi Hotta',
  tagline: 'Researching physics-based simulation. Building products that bridge ML and the web.',
  affiliation: [
    '青山学院大学 理工学部情報テクノロジー学科 4年',
    'コンピュータグラフィックス研究室 所属',
  ],
  bio: [
    'コンピュータグラフィックス研究室で、DEM と MPM を組み合わせた粒状体の物理シミュレーションを研究しています。Taichi/Python と C++ で実装しながら、形状を限定しない大規模シミュレーション基盤の確立を目指しています。',
    '長期インターンでは、MarkDoor で AI/ML プロダクトのフルスタック開発、コムスクエアでフロント / バック / AWS を横断した開発を担当してきました。データ前処理からモデリング、業務に組み込むための UI まで一貫して手を動かしています。',
    '関心は「使える計算をつくる」こと。物理シミュレーションのような計算負荷がボトルネックになる領域から、Web プロダクトとしてユーザーに届く UI までを行き来しながら、領域をまたいで価値を作れるエンジニアを目指しています。',
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
