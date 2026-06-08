import { useState } from 'react';
import { ZoomIn, X, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RealWorksGallery() {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const getFilterTranslationKey = (filterName) => {
    switch (filterName) {
      case 'All': return 'catAll';
      case 'Roofing': return 'catRoofing';
      case 'Sheds': return 'catSheds';
      case 'Gates': return 'catGates';
      case 'Railings': return 'catRailings';
      case 'Grills': return 'catGrills';
      case 'Structure': return 'catStructure';
      default: return filterName;
    }
  };

  const galleryImages = [
    {
      id: 1,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.17.47 PM.jpeg',
      title: 'Galvalume Metal Roofing Structure',
      category: 'Roofing',
      description: 'Heavy duty metal roofing sheets installed on MS framing for rain protection.'
    },
    {
      id: 2,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.17.49 PM.jpeg',
      title: 'Modern Balcony safety grill',
      category: 'Grills',
      description: 'Sleek geometric safety iron grill window frame installation.'
    },
    {
      id: 3,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.17.55 PM.jpeg',
      title: 'Warehouse Heavy Steel Truss',
      category: 'Structure',
      description: 'Industrial building MS roof truss fabrication under construction.'
    },
    {
      id: 4,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.17.58 PM.jpeg',
      title: 'Commercial Shed Framework',
      category: 'Sheds',
      description: 'Tough structural steel columns and rafters for high span commercial shed.'
    },
    {
      id: 5,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.17.59 PM.jpeg',
      title: 'Terrace Metal Roofing Sheet Setup',
      category: 'Roofing',
      description: 'Color-coated metal roofing sheets fixed over residential terrace area.'
    },
    {
      id: 6,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.18.54 PM.jpeg',
      title: 'Polycarbonate Car Parking Shed',
      category: 'Sheds',
      description: 'Clean arch-type polycarbonate parking roof with protective framing.'
    },
    {
      id: 7,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.18.57 PM.jpeg',
      title: 'Residential Entrance Gate Frame',
      category: 'Gates',
      description: 'Heavy gauge steel main entrance swing gate fabrication.'
    },
    {
      id: 8,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.18.59 PM.jpeg',
      title: 'Modern Iron Main Gate Design',
      category: 'Gates',
      description: 'Custom fabricated metal security sliding gate for modern villa.'
    },
    {
      id: 9,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.01 PM.jpeg',
      title: 'Stainless Steel Staircase Railing',
      category: 'Railings',
      description: 'SS 304 grade safety handrail with glass support brackets.'
    },
    {
      id: 10,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.14 PM.jpeg',
      title: 'Safety Grill Entrance Door',
      category: 'Gates',
      description: 'Heavy iron safety door grill for main house entrance.'
    },
    {
      id: 11,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.15 PM.jpeg',
      title: 'Industrial Heavy MS Truss Frame',
      category: 'Structure',
      description: 'Heavy duty steel truss welding and erection work.'
    },
    {
      id: 12,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.16 PM.jpeg',
      title: 'Terrace Rain Protection Shed',
      category: 'Roofing',
      description: 'Waterproof terrace cover structure using metal roofing profile sheets.'
    },
    {
      id: 13,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.18 PM.jpeg',
      title: 'SS Staircase Safety Handrail',
      category: 'Railings',
      description: 'Smooth finished stainless steel staircase railing for luxury duplex.'
    },
    {
      id: 14,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.20 PM.jpeg',
      title: 'Balcony Iron Safety Railing',
      category: 'Railings',
      description: 'Strong powder-coated iron balcony safety railings.'
    },
    {
      id: 15,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.23 PM.jpeg',
      title: 'Custom Window Safety Grill',
      category: 'Grills',
      description: 'Durable MS square bar window security grills.'
    },
    {
      id: 16,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.19.33 PM.jpeg',
      title: 'Industrial Factory Shed Roofing',
      category: 'Roofing',
      description: 'Large span industrial warehouse color profile sheet installation.'
    },
    {
      id: 17,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.21.55 PM.jpeg',
      title: 'Sliding Gate Fabrication Work',
      category: 'Gates',
      description: 'Heavy track sliding gate with modern linear patterns.'
    },
    {
      id: 18,
      src: '/our-works/WhatsApp Image 2026-06-06 at 9.21.57 PM.jpeg',
      title: 'SS Handrails & Balcony Structural works',
      category: 'Railings',
      description: 'Polished SS pipes structural railing assembly on site.'
    },
    {
      id: 19,
      src: '/our-works/1.jpg',
      title: 'Heavy Truss Shed Framework',
      category: 'Structure',
      description: 'Industrial truss structure under development.'
    },
    {
      id: 20,
      src: '/our-works/2.jpg',
      title: 'Large Area Roofing Structure',
      category: 'Structure',
      description: 'Durable GI framework assembly for commercial site.'
    },
    {
      id: 21,
      src: '/our-works/3.jpg',
      title: 'Terrace Safety Netting Frame',
      category: 'Grills',
      description: 'Balcony screen frame welding and setup.'
    },
    {
      id: 22,
      src: '/our-works/4.jpg',
      title: 'Heavy-Gauge Warehouse Steel Work',
      category: 'Structure',
      description: 'Complete high-span steel columns and support beams.'
    },
    {
      id: 23,
      src: '/our-works/5.jpg',
      title: 'Live Site Welding Work',
      category: 'Roofing',
      description: 'Precision welding of terrace roof support columns.'
    },
    {
      id: 24,
      src: '/our-works/6.jpg',
      title: 'Premium Galvalume Roofing Sheets',
      category: 'Roofing',
      description: 'Corrugation sheeting installation with high-grade anti-leakage screws.'
    },
    {
      id: 25,
      src: '/our-works/7.jpg',
      title: 'Rooftop Storage Shed',
      category: 'Sheds',
      description: 'Enclosed secure storage shed structure made with GI pipes.'
    },
    {
      id: 26,
      src: '/our-works/8.jpg',
      title: 'Modern Main Gate Grill Work',
      category: 'Gates',
      description: 'Custom main gate design preparation under welding.'
    },
    {
      id: 27,
      src: '/our-works/9.jpg',
      title: 'SS Balcony Glass Railing',
      category: 'Railings',
      description: 'Sleek stainless steel railing frames ready for glass fixing.'
    },
    {
      id: 28,
      src: '/our-works/10.jpg',
      title: 'Industrial Ventilation Shed',
      category: 'Roofing',
      description: 'Heavy duty monitor roofing trusses for industrial air passage.'
    },
    {
      id: 29,
      src: '/our-works/11.jpg',
      title: 'Safety Door Grill Frame',
      category: 'Grills',
      description: 'Thick MS square rod safety grill door for flat entrance.'
    },
    {
      id: 30,
      src: '/our-works/12.jpg',
      title: 'Mezzanine Steel Frame Structure',
      category: 'Structure',
      description: 'Strong platform support columns for multi-level storehouse.'
    },
    {
      id: 31,
      src: '/our-works/13.jpg',
      title: 'Color Coated Profile Sheets',
      category: 'Roofing',
      description: 'Residential shelter roofing using premium colored sheets.'
    },
    {
      id: 32,
      src: '/our-works/14.jpg',
      title: 'Double Car Parking Shed',
      category: 'Sheds',
      description: 'Curved canopy frame layout for two vehicle parking slots.'
    },
    {
      id: 33,
      src: '/our-works/15.jpg',
      title: 'Sliding Gate Track System',
      category: 'Gates',
      description: 'Precision ground track installation for smooth heavy gate operation.'
    },
    {
      id: 34,
      src: '/our-works/16.jpg',
      title: 'SS Staircase Handrail Joint',
      category: 'Railings',
      description: 'Highly polished seamless SS pipe joint bends.'
    },
    {
      id: 35,
      src: '/our-works/17.jpg',
      title: 'Security Window Grill Setup',
      category: 'Grills',
      description: 'Classic horizontal grill pattern welded for apartment windows.'
    },
    {
      id: 36,
      src: '/our-works/18.jpg',
      title: 'High Span Warehouse Archs',
      category: 'Structure',
      description: 'Durable curved steel rafters for high capacity storage space.'
    },
    {
      id: 37,
      src: '/our-works/19.jpg',
      title: 'Terrace Rain Cover Roofing',
      category: 'Roofing',
      description: 'Waterproof roofing sheet cover over domestic laundry space.'
    },
    {
      id: 38,
      src: '/our-works/20.jpg',
      title: 'Polycarbonate Entry Canopy',
      category: 'Sheds',
      description: 'Lightweight translucent sun protection canopy over entrance doorway.'
    },
    {
      id: 39,
      src: '/our-works/21.jpg',
      title: 'Wrought Iron Design Gate',
      category: 'Gates',
      description: 'Traditional style decorative entry gate with solid iron bars.'
    },
    {
      id: 40,
      src: '/our-works/22.jpg',
      title: 'Corridor Safety Railing Work',
      category: 'Railings',
      description: 'Long span industrial safety handrail lining paths.'
    }
  ];

  const filters = ['All', 'Roofing', 'Sheds', 'Gates', 'Railings', 'Grills', 'Structure'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-12 md:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark flex items-center justify-center gap-1.5">
            <ImageIcon size={14} />
            {t('galleryBadge')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark">{t('galleryHeading')}</h2>
          <p className="text-sm text-zinc-500">
            {t('galleryDesc')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-2xs text-xs font-semibold transition-all border ${
                activeFilter === filter 
                  ? 'bg-accent-orange border-accent-orange text-white shadow-xs' 
                  : 'bg-white border-zinc-250 text-zinc-650 hover:text-charcoal hover:bg-zinc-50'
              }`}
            >
              {t(getFilterTranslationKey(filter))}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2.5 sm:gap-4 space-y-2.5 sm:space-y-4">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              onClick={() => setSelectedImg(img)}
              className="break-inside-avoid overflow-hidden rounded-xs border border-zinc-200 bg-white hover:border-accent-orange/50 hover:shadow-sm transition-all duration-300 relative group cursor-zoom-in"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover display-block"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-orange mb-1">
                  {t(getFilterTranslationKey(img.category))}
                </span>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  {img.title}
                  <ZoomIn size={12} className="text-zinc-300" />
                </h4>
                <p className="text-[10px] text-zinc-300 leading-relaxed mt-0.5 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in">
            {/* Close button area */}
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <a 
                href={`https://wa.me/917893976679?text=Hi%20Subbu%20Metal%20Works,%20I%20am%20interested%20in%20a%20work%20similar%20to%20this:%20${encodeURIComponent(selectedImg.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="bg-accent-orange hover:bg-accent-orange-dark text-white p-2 rounded-full transition-colors flex items-center justify-center gap-1.5 px-4 text-xs font-bold shadow-md"
              >
                {t('inquireWa')}
                <ExternalLink size={14} />
              </a>
              <button 
                onClick={() => setSelectedImg(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setSelectedImg(null)}></div>

            {/* Lightbox content card */}
            <div className="max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              {/* Image side */}
              <div className="md:flex-1 bg-zinc-900 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain"
                />
              </div>

              {/* Text side */}
              <div className="p-6 md:w-80 border-t md:border-t-0 md:border-l border-zinc-800 flex flex-col justify-between bg-zinc-900 text-white">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-orange">
                      {t(getFilterTranslationKey(selectedImg.category))}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {selectedImg.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedImg.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800 mt-6 space-y-3">
                  <div className="text-[11px] text-zinc-500 font-semibold">
                    📍 {t('galleryBadge')}
                  </div>
                  <a 
                    href={`https://wa.me/917893976679?text=Hi%20Subbu%20Metal%20Works,%20I%20am%20interested%20in%20a%20work%20similar%20to%20this:%20${encodeURIComponent(selectedImg.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center py-3 bg-accent-orange hover:bg-accent-orange-dark text-white font-bold rounded-sm text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    {t('inquireWa')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
