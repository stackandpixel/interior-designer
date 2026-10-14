import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studioConfig';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const InstagramShowcaseSection: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_1.jpg`,
      title: 'Fluted Walnut & Travertine Living Room',
      category: 'Concept Project',
      likes: '412',
    },
    {
      id: 'ig-2',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_2.jpg`,
      title: 'Quartz Island & Brass Modular Kitchen Details',
      category: 'Joinery Focus',
      likes: '589',
    },
    {
      id: 'ig-3',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_3.jpg`,
      title: 'Acoustic Bouclé & Fluted Glass Master Suite',
      category: 'Bedroom Styling',
      likes: '344',
    },
    {
      id: 'ig-4',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_4.jpg`,
      title: 'Natural Material Flatlay: Walnut, Travertine, Brass',
      category: 'Material Palette',
      likes: '621',
    },
    {
      id: 'ig-5',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_5.jpg`,
      title: 'Before & After Spatial Transformation',
      category: 'Renovation Study',
      likes: '890',
    },
    {
      id: 'ig-6',
      image: `${import.meta.env.BASE_URL}images/instagram/insta_6.jpg`,
      title: 'Sheltered Verandah & Kota Stone Pavilions',
      category: 'Villa Architecture',
      likes: '517',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]" id="instagram-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#C19A5B]" />
              <span>{STUDIO_CONFIG.social.instagramHandle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Follow Our Design Journey
            </h2>
            <p className="text-sm text-[#6B625B] mt-2 max-w-xl">
              Behind-the-scenes material exploration, spatial experiments, and design perspectives from our Pune studio.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={STUDIO_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E1A17] hover:bg-[#3E3733] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow On Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C19A5B]" />
            </a>
          </div>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={STUDIO_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-sm overflow-hidden border border-[#ECE5DC] bg-[#ECE5DC]"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-white">
                <span className="text-[10px] text-[#E8C98B] uppercase tracking-wider font-semibold">
                  {post.category}
                </span>
                <span className="text-xs font-medium line-clamp-2 mt-0.5">
                  {post.title}
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-[#8C7A6B]">
          Note: Instagram visuals shown are curated studio concept demonstrations. Official feed embed available upon social authentication.
        </p>
      </div>
    </section>
  );
};
