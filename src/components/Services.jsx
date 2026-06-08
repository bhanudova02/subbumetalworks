import { Layers, ShieldCheck, Construction, Wrench, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'roofing',
      title: t('roofingWorks'),
      description: t('roofingWorksDesc'),
      icon: Layers,
      image: '/images/project_roofing.png'
    },
    {
      id: 'gates',
      title: t('gatesGrills'),
      description: t('gatesGrillsDesc'),
      icon: ShieldCheck,
      image: '/images/project_gate.png'
    },
    {
      id: 'car-sheds',
      title: t('carParkingSheds'),
      description: t('carParkingShedsDesc'),
      icon: Construction,
      image: '/images/project_shed.png'
    },
    {
      id: 'terrace-sheds',
      title: t('terraceSheds'),
      description: t('terraceShedsDesc'),
      icon: Layers,
      image: '/images/project_roofing.png'
    },
    {
      id: 'steel-fab',
      title: t('steelFab'),
      description: t('steelFabDesc'),
      icon: Wrench,
      image: '/images/project_structure.png'
    },
    {
      id: 'railings',
      title: t('railingsTitle'),
      description: t('railingsDesc'),
      icon: ShieldCheck,
      image: '/images/project_railing.png'
    },
    {
      id: 'window-grills',
      title: t('windowGrillsTitle'),
      description: t('windowGrillsDesc'),
      icon: ShieldCheck,
      image: '/images/service_grill.png'
    },
    {
      id: 'waterproofing',
      title: t('waterproofingTitle'),
      description: t('waterproofingDesc'),
      icon: Sparkles,
      image: '/images/service_waterproof.png'
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark">{t('servicesBadge')}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark">{t('servicesHeading')}</h2>
          <p className="text-sm text-zinc-500">{t('servicesDesc')}</p>
        </div>

        {/* Services Grid with Card-Image structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white border border-zinc-200 rounded-2xs overflow-hidden hover:border-accent-orange/50 hover:shadow-xs transition-all flex flex-col group"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-zinc-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Floating Icon overlay */}
                  <div className="absolute bottom-3 right-3 bg-white p-2 rounded-xs text-accent-orange-dark shadow-xs border border-zinc-150 flex items-center justify-center">
                    <IconComponent size={16} className="stroke-[2.5]" />
                  </div>
                </div>

                {/* Service details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-charcoal-dark group-hover:text-accent-orange-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-zinc-100">
                    <a 
                      href={`https://wa.me/917893976679?text=Hi%20Subbu%20Metal%20Works,%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-accent-orange-dark hover:text-accent-orange transition-colors inline-flex items-center gap-0.5"
                    >
                      {t('inquireWa')}
                      <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
