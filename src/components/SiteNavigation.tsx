import React, {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

const NAV_ITEMS = [
  {id: 'hero-section', tab: 'hero', label: 'HOME'},
  {id: 'ceo-message-section', tab: 'ceo-message', label: 'MESSAGE'},
  {id: 'why-effort-necessary-section', tab: 'service', label: 'SERVICE'},
  {id: 'collection-section', tab: 'collection', label: 'USER VOICE'},
  {id: 'ceo-profile-section', tab: 'ceo-profile', label: 'CEO'},
  {id: 'company-section', tab: 'company', label: 'COMPANY'},
] as const;

interface SiteNavigationProps {
  activeTab: string;
  onNavigate: (sectionId: string, tabName: string) => void;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({activeTab, onNavigate}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (sectionId: string, tabName: string) => {
    onNavigate(sectionId, tabName);
    setMenuOpen(false);
  };

  const tabClass = (tab: string) =>
    activeTab === tab
      ? 'bg-white text-neutral-900 shadow'
      : 'text-white/80 hover:text-white hover:bg-white/10';

  return (
    <>
      {/* Desktop */}
      <nav
        id="toonhub-floating-navigation"
        className="fixed top-8 inset-x-0 z-100 hidden md:flex justify-center px-4 pointer-events-none"
      >
        <div className="bg-black/25 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-2xl pointer-events-auto">
          {NAV_ITEMS.map(({id, tab, label}) => (
            <button
              key={tab}
              onClick={() => handleNav(id, tab)}
              type="button"
              className={`px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase transition-all duration-300 ${tabClass(tab)}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden fixed top-4 right-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-white shadow-lg"
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[105]">
          <button
            type="button"
            aria-label="メニューを閉じる"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 inset-x-0 pt-[4.5rem] px-4 pb-6">
            <div className="rounded-2xl border border-white/15 bg-neutral-950/95 backdrop-blur-xl shadow-2xl overflow-hidden">
              {NAV_ITEMS.map(({id, tab, label}) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleNav(id, tab)}
                  className={`w-full text-left px-5 py-4 text-sm font-bold tracking-wider uppercase border-b border-white/10 last:border-b-0 transition-colors ${
                    activeTab === tab ? 'bg-white text-neutral-900' : 'text-white/90 active:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
