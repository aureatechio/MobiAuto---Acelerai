
import React, { useState } from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS, CELEBRITIES } from '../constants';

interface MediaLibraryPageProps {
  onNavigate: (route: AppRoute) => void;
  selectedCampaignId: string | null;
}

const MediaLibraryPage: React.FC<MediaLibraryPageProps> = ({ onNavigate, selectedCampaignId }) => {
  const campaign = CAMPAIGNS.find(c => c.id === selectedCampaignId) || CAMPAIGNS[1];
  const celebrity = CELEBRITIES.find(ce => ce.name === campaign.celebrity) || CELEBRITIES[0];
  const [filter, setFilter] = useState<'all' | 'Video' | 'Post' | 'Banner' | 'Arte' | 'Áudio'>('all');
  const [previewAsset, setPreviewAsset] = useState<any | null>(null);

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'BIBLIOTECA DE ATIVOS' }
  ];

  const assets = [
    { type: 'Video', format: '16:9 HD', title: 'Comercial de TV / Youtube', icon: 'videocam', size: '42MB', duration: '30s', tag: 'Destaque' },
    { type: 'Video', format: '9:16 HD', title: 'Stories / Reels / TikTok', icon: 'smartphone', size: '18MB', duration: '15s' },
    { type: 'Post', format: '1:1', title: 'Feed Instagram / Facebook', icon: 'square', size: '4MB' },
    { type: 'Banner', format: 'Horizontal', title: 'Banner para Site / Portal', icon: 'view_quilt', size: '2MB' },
    { type: 'Arte', format: 'A3', title: 'Cartaz de Loja (Impressão)', icon: 'print', size: '12MB' },
    { type: 'Áudio', format: 'MP3 High', title: 'Spot para Rádio / Carro Som', icon: 'mic', size: '3MB', duration: '45s' },
    { type: 'Post', format: '4:5', title: 'LinkedIn Performance', icon: 'crop_portrait', size: '5MB' },
    { type: 'Video', format: '16:9 4K', title: 'Vinheta de Cinema', icon: 'movie', size: '120MB', duration: '05s' }
  ];

  const filteredAssets = filter === 'all' ? assets : assets.filter(a => a.type === filter);

  return (
    <Layout activeRoute="media-library" onNavigate={onNavigate} breadcrumbs={breadcrumbs} showSidebar footerSticky>
      <div className="p-8 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-12">
          <div className="flex items-start gap-6">
            <button 
              onClick={() => onNavigate('all-campaigns')}
              className="w-14 h-14 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all shadow-sm active:scale-95 shrink-0"
            >
              <span className="material-symbols-outlined text-3xl">arrow_back</span>
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                 <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">Biblioteca de Ativos</h1>
                 <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-green-500/20">Licença Ativa</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                 TEMA: {campaign.title} 
                 <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 
                 PERSONALIDADE: {celebrity.name}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
             <button className="bg-white border-2 border-slate-200 text-slate-900 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm">
                <span className="material-symbols-outlined text-xl">share</span> Compartilhar Link
             </button>
             <button className="bg-primary text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/30 hover:bg-mobi-blue transition-all flex items-center gap-3 active:scale-95 group">
                <span className="material-symbols-outlined text-xl group-hover:-translate-y-0.5 transition-transform">download_for_offline</span> 
                Baixar Enxoval Completo (ZIP)
             </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-slate-200 pb-8">
           <div className="flex p-1.5 bg-slate-100 rounded-2xl overflow-x-auto no-scrollbar border border-slate-200">
             {['all', 'Video', 'Post', 'Banner', 'Arte', 'Áudio'].map((type) => (
               <button
                 key={type}
                 onClick={() => setFilter(type as any)}
                 className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === type ? 'bg-white text-primary shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 {type === 'all' ? 'Todos os Ativos' : type === 'Arte' ? 'Impressos' : type + 's'}
               </button>
             ))}
           </div>
           <div className="relative group min-w-[300px]">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-2xl text-xs font-bold focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400 shadow-sm" 
                placeholder="Filtrar por nome ou formato..." 
                type="text"
              />
           </div>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAssets.map((asset, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] border-2 border-slate-200 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full shadow-sm"
              onClick={() => setPreviewAsset(asset)}
            >
              <div className="aspect-video bg-slate-900 relative overflow-hidden shrink-0 border-b border-slate-200 cursor-zoom-in">
                <img src={campaign.image} alt={asset.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                   <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-[9px] font-black text-white uppercase tracking-widest">
                      {asset.format}
                   </div>
                   {asset.tag && (
                     <div className="px-3 py-1 bg-primary text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                        {asset.tag}
                     </div>
                   )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl text-primary border-4 border-primary/10">
                      <span className="material-symbols-outlined text-3xl font-black">
                        {asset.type === 'Video' ? 'play_arrow' : asset.type === 'Áudio' ? 'equalizer' : 'visibility'}
                      </span>
                   </div>
                </div>

                {asset.duration && (
                  <div className="absolute bottom-4 right-4 text-[9px] font-black text-white/90 uppercase tracking-[0.2em] bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    {asset.duration}
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between bg-white relative">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                     <span className="material-symbols-outlined text-primary text-lg">{asset.icon}</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{asset.type}</span>
                  </div>
                  <h3 className="font-black text-slate-800 text-lg leading-tight uppercase tracking-tight mb-6 line-clamp-2">{asset.title}</h3>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Peso do Arquivo</span>
                      <span className="text-[11px] font-black text-slate-900 uppercase">{asset.size}</span>
                   </div>
                   <div className="flex gap-2.5">
                      <button className="p-3 rounded-2xl border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary/40 transition-all bg-slate-50 shadow-sm active:scale-90">
                         <span className="material-symbols-outlined text-xl">share</span>
                      </button>
                      <button className="bg-slate-900 hover:bg-black text-white h-12 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 active:scale-95">
                         <span className="material-symbols-outlined text-lg">download</span> Baixar
                      </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asset Preview Modal */}
      {previewAsset && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-slate-900/95 backdrop-blur-xl animate-in fade-in duration-300">
          <button 
            onClick={() => setPreviewAsset(null)}
            className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all active:scale-90"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <div className="w-full max-w-6xl flex flex-col items-center gap-10">
            <div className="w-full aspect-video bg-black rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative border-8 border-white/5">
               <img src={campaign.image} alt="Preview" className="w-full h-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 animate-pulse cursor-pointer">
                     <span className="material-symbols-outlined text-5xl font-black">play_arrow</span>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8">
               <div className="text-center md:text-left">
                  <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-2 block">{previewAsset.type} • {previewAsset.format}</span>
                  <h2 className="text-white text-4xl font-black uppercase tracking-tighter leading-none">{previewAsset.title}</h2>
               </div>
               <div className="flex gap-4">
                  <button className="h-16 px-10 bg-white text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-100 transition-all flex items-center gap-4 shadow-2xl active:scale-95">
                     <span className="material-symbols-outlined text-2xl">download</span>
                     Baixar em Alta Resolução ({previewAsset.size})
                  </button>
                  <button className="w-16 h-16 bg-white/10 text-white rounded-[2rem] flex items-center justify-center hover:bg-white/20 transition-all">
                     <span className="material-symbols-outlined text-2xl">share</span>
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MediaLibraryPage;
