import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const WhatsAppIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <section className="bg-zinc-50 border-b border-zinc-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-orange-light text-accent-orange-dark text-xs font-bold uppercase tracking-wider rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange-dark animate-pulse"></span>
              {t('heroBadge')}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark tracking-tight leading-tight uppercase">
              {t('companyName')}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-accent-orange-dark">
              {t('tagline')}
            </p>
            <p className="text-sm sm:text-base text-zinc-650 max-w-2xl leading-relaxed">
              {t('heroDesc')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="tel:+917893976679" 
                className="flex items-center gap-2 px-6 py-3 bg-accent-orange hover:bg-accent-orange-dark text-white rounded-sm text-sm font-bold shadow-xs hover:shadow-sm transition-all"
              >
                <Phone size={16} />
                {t('callNow')} (+91 78939 76679)
              </a>
              <a 
                href="https://wa.me/917893976679" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-6 py-3 border border-zinc-300 hover:border-zinc-400 bg-white hover:bg-zinc-50 text-charcoal rounded-sm text-sm font-bold transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                {t('whatsAppChat')}
              </a>
            </div>

            {/* Badges strip below Hero content */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80">
              <div className="space-y-1">
                <div className="text-xl font-bold text-charcoal-dark">{t('statExpValue')}</div>
                <div className="text-xs text-zinc-500 font-medium">{t('statExpLabel')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-charcoal-dark">{t('statMatValue')}</div>
                <div className="text-xs text-zinc-500 font-medium">{t('statMatLabel')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-charcoal-dark">{t('statGuarValue')}</div>
                <div className="text-xs text-zinc-500 font-medium">{t('statGuarLabel')}</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="relative border border-zinc-200 p-2 bg-white rounded-xs shadow-xs max-w-md mx-auto lg:max-w-none">
              <img 
                src="/hero.png" 
                alt="Steel Fabrication Welder at Subbu Metal Works Vijayawada Workshop" 
                className="w-full h-auto object-cover rounded-2xs aspect-square"
              />
              <div className="absolute -bottom-4 -left-4 bg-zinc-900 text-white p-3.5 border border-zinc-800 rounded-sm hidden sm:block">
                <p className="text-xs font-bold text-accent-orange uppercase tracking-wider">Quality Assurance</p>
                <p className="text-sm font-semibold mt-0.5">Heavy-Duty GI & MS Fabrication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
