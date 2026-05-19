'use client';

import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '@/app/presentation/hooks/useMobileMenu';

const NAV_ITEMS = [
  { href: '#about', label: '私について' },
  { href: '#projects', label: '制作実績' },
  { href: '#skills', label: 'スキル' },
  { href: '#contact', label: 'お問い合わせ' },
] as const;

interface HeaderProps {
  readonly siteName: string;
}

export function Header({ siteName }: HeaderProps) {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">
          {siteName}
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-nav" className="md:hidden bg-gray-900">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
