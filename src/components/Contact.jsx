import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const WhatsAppIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const InstagramIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  return (
    <section id="contact" className="py-12 md:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark">{t('contactBadge')}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark">{t('contactHeading')}</h2>
          <p className="text-sm text-zinc-500">
            {t('contactDesc')}
          </p>
        </div>

        {/* 4-Column Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Call */}
          <div className="bg-white border border-zinc-200 p-6 rounded-xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-accent-orange/10 rounded-sm flex items-center justify-center text-accent-orange-dark shrink-0">
                <Phone size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-charcoal-dark">{t('phoneCardTitle')}</h3>
                <p className="text-xs text-zinc-500">{t('phoneCardDesc')}</p>
                <p className="text-sm font-bold text-charcoal-dark pt-1">+91 78939 76679</p>
              </div>
            </div>
            <a 
              href="tel:+917893976679"
              className="mt-6 w-full text-center py-2.5 bg-accent-orange hover:bg-accent-orange-dark text-white font-bold rounded-sm text-xs uppercase tracking-wider transition-colors"
            >
              {t('callNow')}
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white border border-zinc-200 p-6 rounded-xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-sm flex items-center justify-center text-emerald-600 shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-charcoal-dark">{t('waCardTitle')}</h3>
                <p className="text-xs text-zinc-500">{t('waCardDesc')}</p>
                <p className="text-sm font-bold text-emerald-600 pt-1">Instant Chat</p>
              </div>
            </div>
            <a 
              href="https://wa.me/917893976679"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-sm text-xs uppercase tracking-wider transition-colors"
            >
              {t('startChat')}
            </a>
          </div>

          {/* Card 3: Instagram Page */}
          <div className="bg-white border border-zinc-200 p-6 rounded-xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-pink-50 rounded-sm flex items-center justify-center text-pink-600 shrink-0">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-charcoal-dark">{t('instaCardTitle')}</h3>
                <p className="text-xs text-zinc-500">{t('instaCardDesc')}</p>
                <p className="text-sm font-bold text-pink-600 pt-1">@urs.subbu.90</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/urs.subbu.90/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-sm text-xs uppercase tracking-wider transition-colors"
            >
              {t('followPage')}
            </a>
          </div>

          {/* Card 4: Workshop Location */}
          <div className="bg-white border border-zinc-200 p-6 rounded-xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center text-charcoal shrink-0">
                <MapPin size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-charcoal-dark">{t('addressCardTitle')}</h3>
                <p className="text-xs text-zinc-500">{t('addressCardDesc')}</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Autonagar+Industrial+Area+Vijayawada"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center py-2.5 bg-charcoal hover:bg-charcoal-dark text-white font-bold rounded-sm text-xs uppercase tracking-wider transition-colors"
            >
              {t('getDirections')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
