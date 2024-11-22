import React from 'react';
import { Github, Mail, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const portfolioData = {
  header: {
    name: "山田 太郎",
    title: "ソフトウェアエンジニア",
    subtitle: "フロントエンド開発に特化したエンジニア"
  },
  about: {
    expertise: "フロントエンド開発に特化し、最新のUI/UXデザインに情熱を注いでいます。",
    background: "音楽制作が趣味で、その経験をUXデザインにおける直感的な操作性の追求に活かしています。常に新しい技術トレンドをキャッチアップし、より良いユーザー体験の創造を目指しています。"
  },
  experience: [
    {
      title: "シニアフロントエンドエンジニア",
      company: "ABCテクノロジー株式会社",
      period: "2020 - 現在",
      description: "大規模Webアプリケーションの設計・開発をリード。Reactを用いたマイクロフロントエンド化を推進し、開発効率を50%向上。"
    },
    {
      title: "フルスタックエンジニア",
      company: "XYZソリューションズ",
      period: "2018 - 2020",
      description: "ECサイトのフルスタック開発を担当。Node.jsとReactを使用したシステム構築。"
    }
  ],
  projects: [
    {
      title: "Task Flow",
      description: "チーム向けタスク管理アプリケーション。リアルタイムコラボレーション機能を実装。",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/username/task-flow",
      demo: "https://task-flow.demo.com",
      technologies: ["React", "TypeScript", "Firebase"]
    },
    {
      title: "Code Share",
      description: "プログラマー向けコード共有プラットフォーム。シンタックスハイライト機能付き。",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/username/code-share",
      technologies: ["Next.js", "MongoDB", "AWS"]
    }
  ],
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "Firebase", "Vercel"],
    other: ["UI/UX Design", "Agile/Scrum", "Technical Writing"]
  },
  contact: {
    email: "taro.yamada@example.com",
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username",
    zenn: "https://zenn.dev/username"
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header {...portfolioData.header} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <About {...portfolioData.about} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact contact={portfolioData.contact} />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 {portfolioData.header.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;