import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TranslateIcon = ({ className, size = 18 }) => (
  <svg 
    className={className} 
    style={{ width: size, height: size }}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
  </svg>
);

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'tang', label: 'Tanglish' },
    { code: 'te', label: 'తెలుగు' }
  ];

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-45" ref={menuRef}>
      {/* Menu Card */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 bg-zinc-950 border border-zinc-800 rounded-sm shadow-xl p-2 w-36 mb-2 animate-fade-in text-xs space-y-1">
          <p className="text-[10px] text-zinc-500 font-extrabold uppercase px-2 py-1 tracking-wider border-b border-zinc-900 mb-1">
            Language / భాష
          </p>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-2.5 py-1.5 rounded-2xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                lang === l.code 
                  ? 'bg-accent-orange text-white' 
                  : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <span>{l.label}</span>
              {lang === l.code && <span className="text-[10px] opacity-80">✓</span>}
            </button>
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-zinc-900 hover:bg-zinc-850 text-white p-3 rounded-full border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
        title="Change Language / భాష మార్చండి"
      >
        <TranslateIcon size={18} className="text-accent-orange animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider pr-1 hidden sm:inline">
          {lang === 'en' ? 'Lang' : lang === 'tang' ? 'Lang' : 'భాష'}
        </span>
      </button>
    </div>
  );
}
