import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredProjects = {
    All: {
      title: 'Industrial Warehouse Heavy Steel Frame',
      category: 'Structural Steel Fabrication',
      description: 'Engineered and fabricated strong structural steel trusses and columns for a 12,000 sq.ft industrial storehouse. The project utilized high-strength MS columns, anti-corrosion coat finish, and durable roofing profiles. Completed exactly within 18 working days in Vijayawada industrial zone.',
      image: '/images/project_structure.png',
      gauge: 'Heavy Duty IS 2062 MS',
      scope: 'Truss & Column Fabrication',
      ctaText: 'Request Similar Construction',
      waQuery: 'Industrial Warehouse Heavy Steel Frame'
    },
    Roofing: {
      title: 'Premium Standing Seam Metal Roof',
      category: 'Roofing Works',
      description: 'High-performance leak-proof standing seam roofing sheets installed on a modern residential villa. Designed for high wind resistance, excellent water runoff, and clean industrial appearance.',
      image: '/images/project_roofing.png',
      gauge: '0.50mm Galvalume Color Coat',
      scope: 'Standing Seam Installation',
      ctaText: 'Inquire About Roofing',
      waQuery: 'Premium Standing Seam Metal Roof'
    },
    Sheds: {
      title: 'Modern Polycarbonate Car Parking Shed',
      category: 'Parking Sheds',
      description: 'Premium cantilever steel parking frames with durable polycarbonate roofing. Protects luxury vehicles from direct sun, heavy rain, and UV damage while maintaining a modern style.',
      image: '/images/project_shed.png',
      gauge: 'Heavy MS Pipes & 4mm Polycarbonate',
      scope: 'Cantilever Parking Structure',
      ctaText: 'Inquire About Sheds',
      waQuery: 'Modern Polycarbonate Car Parking Shed'
    },
    Gates: {
      title: 'Minimalist Black Steel Main Gate',
      category: 'Gates & Grills',
      description: 'Custom architectural sliding main gate with rich teakwood panels and rust-proof heavy black steel frames. Designed for secure access and premium local residential entrance aesthetic.',
      image: '/images/project_gate.png',
      gauge: '12-Gauge MS Hollow Sections',
      scope: 'Sliding Gate Fabrication',
      ctaText: 'Inquire About Gates',
      waQuery: 'Minimalist Black Steel Main Gate'
    },
    Railings: {
      title: 'Stainless Steel & Glass Balcony Railing',
      category: 'SS Railings',
      description: 'Sleek stainless steel (SS 304) staircase and balcony railings with heavy toughened glass brackets. Designed for modern luxury look and lifetime safety.',
      image: '/images/project_railing.png',
      gauge: 'SS 304 Grade / 12mm Glass',
      scope: 'Glass & SS Railing Installation',
      ctaText: 'Inquire About Railings',
      waQuery: 'Stainless Steel & Glass Balcony Railing'
    }
  };

  const featured = featuredProjects[activeCategory] || featuredProjects.All;

  const portfolioProjects = [
    {
      id: 1,
      title: 'Modern Polycarbonate Car Parking Shed',
      category: 'Sheds',
      description: 'Cantilever black steel structure with high-strength polycarbonate sheet roof.',
      image: '/images/project_shed.png'
    },
    {
      id: 2,
      title: 'Premium Standing Seam Metal Roof',
      category: 'Roofing',
      description: 'Leak-proof standing seam roofing sheets installed on a modern residential villa.',
      image: '/images/project_roofing.png'
    },
    {
      id: 3,
      title: 'Minimalist Black Steel Main Gate',
      category: 'Gates',
      description: 'Custom architectural sliding main gate with rich teakwood panels.',
      image: '/images/project_gate.png'
    },
    {
      id: 4,
      title: 'Stainless Steel & Glass Balcony Railing',
      category: 'Railings',
      description: 'High-grade SS 304 staircase railing with toughened glass panels.',
      image: '/images/project_railing.png'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 md:py-16 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-accent-orange-dark">Our Handiwork</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mt-1">Featured Projects Gallery</h2>
            <p className="text-sm text-zinc-500 mt-1">Browse our real-world structural fabrication work completed across Telugu states.</p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 border border-zinc-200 p-1 rounded-sm bg-zinc-50">
            {['All', 'Roofing', 'Sheds', 'Gates', 'Railings'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-2xs text-xs font-semibold transition-all ${
                  activeCategory === category 
                    ? 'bg-accent-orange text-white shadow-xs' 
                    : 'text-zinc-600 hover:text-charcoal hover:bg-zinc-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* LARGE FEATURED PROJECT CARD AT TOP */}
        <div className="mb-8 bg-zinc-900 text-white rounded-xs overflow-hidden border border-zinc-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative group overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-accent-orange text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-2xs">
                Featured Project
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase tracking-wider">
                {featured.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {featured.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {featured.description}
              </p>
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 block">Structure Gauge</span>
                  <span className="font-semibold text-zinc-300">{featured.gauge}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Work Scope</span>
                  <span className="font-semibold text-zinc-300">{featured.scope}</span>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href={`https://wa.me/917893976679?text=Hi%20Subbu%20Metal%20Works,%20I%20am%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(featured.waQuery)}%20featured%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-orange hover:bg-accent-orange-dark text-white rounded-sm text-xs font-bold transition-colors"
                >
                  {featured.ctaText}
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RESPONSIVE GRID GALLERY BELOW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white border border-zinc-200 rounded-2xs overflow-hidden group shadow-xs hover:shadow-sm transition-all"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-charcoal text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-2xs border border-zinc-200">
                  {project.category}
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-charcoal-dark leading-tight group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Note */}
        <div className="text-center mt-8">
          <p className="text-xs text-zinc-500">
            *All projects displayed are constructed under engineered safety guidelines. 
            <a href="#contact" className="text-accent-orange-dark font-semibold ml-1 hover:underline">
              Ask to see our physical album.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
