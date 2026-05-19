import type { Project } from '@/app/domain/entities/Project';
import type { ProjectRepository } from '@/app/domain/repositories/ProjectRepository';

const projects: readonly Project[] = [
  {
    id: 'basic-dem-simulation',
    title: 'Basic DEM Simulation',
    description:
      'Pythonのtkinterというライブラリを用いて、粒子一つ一つを計算する個別要素法 (Discrete Element Method) を簡単に実装しました。',
    tags: ['Python', '物理シミュレーション'],
    imageUrl: '/images/basic-dem-simulation.png',
    link: 'https://github.com/daichi0812/basic-dem-simulation',
  },
  {
    id: 'madoi',
    title: 'Madoi',
    description:
      'Flutterを用いて、自分の所属する自動車部向けて、自動車の整備記録やセッティング記録、ToDoリストをまとめたアプリを開発しました。',
    tags: ['Flutter', 'Dart'],
    imageUrl: '/images/madoi.png',
    link: 'https://github.com/daichi0812/madoi',
  },
  {
    id: 'simple-mpm',
    title: 'Simple MPM',
    description: 'MPM (Material Point Method) の簡単なシミュレーションを実装しました。',
    tags: ['C++', 'OpenGL', 'SFML'],
    imageUrl: '/images/simple-mpm-cpp.png',
    link: 'https://github.com/daichi0812/simple-mpm-cpp',
  },
  {
    id: '2d-stable-fluids',
    title: '2D Stable Fluids',
    description:
      '流体の基礎的なシミュレーションを実装しました。FLIP法などを用いずに、ナビエ・ストークス方程式を各項に分解し、それぞれの項に対してステップを立て、シミュレーションを実行しました。',
    tags: ['C++', 'OpenGL'],
    imageUrl: '/images/stable-fluids.png',
    link: 'https://github.com/daichi0812/2d-stable-fluids',
  },
  {
    id: 'abs-ems',
    title: '機材管理システム',
    description:
      '友人と大学の放送部に向けて、機材の貸し出し状況を管理するシステムを作りました。',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'Auth.js'],
    imageUrl: '/images/auth-logicode.png',
    link: 'https://github.com/daichi0812/abs-ems',
  },
  {
    id: 'superwindui',
    title: 'SuperwindUI',
    description:
      'SuperwindUIは、スタイルを固定化することにより、モダンなUIを超速で開発できるReact, Next.jsのUIコンポーネントライブラリです。また、従来のUIコンポーネントライブラリと比べ、コンポーネントの単位が大きく、ドキュメントをそこまで読まなくても、フロントエンド初学者でも簡単に使うことができます。',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    imageUrl: '/images/superwindui.png',
    link: 'https://github.com/balckowl/superwindui',
  },
] as const;

export class StaticProjectRepository implements ProjectRepository {
  async findAll(): Promise<readonly Project[]> {
    return projects;
  }
}
