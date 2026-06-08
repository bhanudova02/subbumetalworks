import { Check, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-16 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Experience Stats left column */}
          <div className="lg:col-span-5 bg-zinc-50 p-6 sm:p-8 border border-zinc-200 rounded-sm">
            <h3 className="font-display text-xl font-bold text-charcoal-dark mb-4">
              {t('ourCapabilities')}
            </h3>
            <p className="text-zinc-650 text-sm mb-6 leading-relaxed">
              {t('capabilitiesDesc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent-orange/15 p-1 rounded-sm text-accent-orange-dark mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-dark">{t('safetyAnalysis')}</h4>
                  <p className="text-xs text-zinc-500">{t('safetyAnalysisDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent-orange/15 p-1 rounded-sm text-accent-orange-dark mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-dark">{t('antiCorrosion')}</h4>
                  <p className="text-xs text-zinc-500">{t('antiCorrosionDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-accent-orange/15 p-1 rounded-sm text-accent-orange-dark mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-dark">{t('precisionAlignment')}</h4>
                  <p className="text-xs text-zinc-500">{t('precisionAlignmentDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Commitment right column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark">
              {t('aboutTitle')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark">
              {t('aboutHeading')}
            </h2>
            <p className="text-sm sm:text-base text-zinc-650 leading-relaxed">
              {t('aboutDesc1')}
            </p>
            <p className="text-sm text-zinc-655 leading-relaxed">
              {t('aboutDesc2')}
            </p>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1 text-sm font-bold text-accent-orange-dark hover:text-accent-orange transition-colors"
              >
                {t('pricingModel')}
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
