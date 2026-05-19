'use client';

import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '@/app/presentation/hooks/useMobileMenu';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

interface HeaderProps {
  readonly siteName: string;
}

export function Header({ siteName }: HeaderProps) {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#home" className="font-mono text-sm text-zinc-900 hover:opacity-70">
          {siteName}
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
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
            className="text-zinc-700"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-nav" className="md:hidden bg-white border-t border-zinc-200">
          <nav className="flex flex-col items-start space-y-4 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
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
