import { Award, Wrench, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const whyChooseUs = [
    {
      title: t('steelTitle'),
      description: t('steelDesc'),
      icon: Award
    },
    {
      title: t('expTitle'),
      description: t('expDesc'),
      icon: Wrench
    },
    {
      title: t('deliveryTitle'),
      description: t('deliveryDesc'),
      icon: Clock
    },
    {
      title: t('priceTitle'),
      description: t('priceDesc'),
      icon: DollarSign
    }
  ];

  return (
    <section id="why-us" className="py-12 md:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark">{t('whyUsBadge')}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark">{t('whyUsHeading')}</h2>
          <p className="text-sm text-zinc-500">{t('whyUsDesc')}</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {whyChooseUs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-zinc-200 p-5 rounded-xs flex gap-4 hover:border-zinc-300 transition-colors"
              >
                <div className="bg-accent-orange/10 w-10 h-10 rounded-xs flex items-center justify-center text-accent-orange-dark shrink-0">
                  <IconComp size={18} className="stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-charcoal-dark">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
