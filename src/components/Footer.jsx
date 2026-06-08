import { Construction } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-dark text-zinc-400 border-t border-zinc-800 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Company Profile */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Construction size={18} className="text-accent-orange stroke-[2.5]" />
              <span className="font-display font-extrabold text-sm tracking-wider uppercase">
                {t('companyName')}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-500 max-w-sm">
              {t('footerDesc')}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-bold uppercase tracking-wider text-white text-[11px]">{t('quickNav')}</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <a href="#about" className="hover:text-white transition-colors">{t('aboutUsLink')}</a>
              <a href="#services" className="hover:text-white transition-colors">{t('servicesLink')}</a>
              <a href="#gallery" className="hover:text-white transition-colors">{t('galleryLink')}</a>
              <a href="#why-us" className="hover:text-white transition-colors">{t('whyUsLink')}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t('contactLink')}</a>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-bold uppercase tracking-wider text-white text-[11px]">{t('contactInfo')}</h4>
            <div className="space-y-1.5 text-[11px] leading-relaxed">
              <p><strong>Phone:</strong> +91 78939 76679</p>
              <p><strong>WhatsApp:</strong> +91 78939 76679</p>
              <p><strong>Instagram:</strong> <a href="https://www.instagram.com/urs.subbu.90/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@urs.subbu.90</a></p>
              <p><strong>Address:</strong> {t('addressCardDesc')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} Subbu Metal Works. All Rights Reserved.
          </p>
          <p>
            Designed for trust & longevity.
          </p>
        </div>
      </div>
    </footer>
  );
}
