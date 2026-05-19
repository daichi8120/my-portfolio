'use client';

import { useCallback, useState } from 'react';

export interface MobileMenuController {
  readonly isOpen: boolean;
  readonly toggle: () => void;
  readonly close: () => void;
}

export function useMobileMenu(): MobileMenuController {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, toggle, close };
}
