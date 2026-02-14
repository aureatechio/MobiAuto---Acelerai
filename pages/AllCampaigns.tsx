
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS } from '../constants';

interface AllCampaignsPageProps {
  onNavigate: (route: AppRoute) => void;
  setSelectedCampaignId: (id: string | null) => void;
}

const AllCampaignsPage: React.FC<AllCampaignsPageProps> = ({ onNavigate, setSelectedCampaignId }) => {
  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS' }
  ];

  const handleEdit = (id: string) => {
    setSelectedCampaignId(id);
    onNavigate('edition');
  };

  const handleViewMedia = (id: string) => {
    setSelectedCampaignId(id);
    onNavigate('media-library');
  };

  const handleNew = () => {
    setSelectedCampaignId(null);
    onNavigate('calendar');
  };

  return (
    <Layout activeRoute="all-campaigns" onNavigate={onNavigate} breadcrumbs={breadcrumbs} showSidebar footerSticky>
      <div className="p-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Dashboard de Campanhas</h1>
            <p className="text-slate-500 text-sm mt-1 font-medium">Gerencie suas criações, visualize mídias e monitore contratos vigentes.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">search</span>
              <input className="pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all w-64 h-[46px] outline-none text-slate-900 placeholder:text-slate-400" placeholder="Buscar por tema ou celebridade..." />
            </div>
            <button 
              onClick={handleNew}
              className="bg-primary hover:bg-mobi-blue text-white px-8 py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 uppercase tracking-widest h-[46px]"
            >
              <span className="material-symbols-outlined text-xl">add_circle</span> Nova Campanha
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Campanhas Ativas', val: '08', icon: 'campaign', color: 'text-primary' },
            { label: 'Licenças Expirando', val: '02', icon: 'priority_high', color: 'text-amber-500' },
            { label: 'Vídeos Gerados', val: '24', icon: 'videocam', color: 'text-slate-700' },
            { label: 'Contratos Próximos', val: '01', icon: 'description', color: 'text-primary' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className={`material-symbols-outlined ${stat.color} text-2xl`}>{stat.icon}</span>
                <span className="text-2xl font-black text-slate-900">{stat.val}</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CAMPAIGNS.map(campaign => (
            <div key={campaign.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1.5 flex flex-col h-full shadow-sm">
              <div className="relative h-56 overflow-hidden bg-slate-200 shrink-0">
                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest backdrop-blur-md bg-white/90 text-primary border border-white/40 shadow-sm z-10">
                    {campaign.category}
                  </span>
                  {campaign.celebrity && (
                     <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest backdrop-blur-md bg-green-500/90 text-white border border-white/20 shadow-sm z-10 flex items-center gap-1">
                       <span className="material-symbols-outlined text-[10px]">verified</span> Ativa
                     </span>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1.5">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{campaign.week} • {campaign.dates}</p>
                     <span className="material-symbols-outlined text-slate-400 text-lg hover:text-primary cursor-pointer transition-colors">more_vert</span>
                  </div>
                  <h3 className="font-black text-slate-800 text-base leading-tight uppercase tracking-tight line-clamp-2">{campaign.title}</h3>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                       <img src={campaign.image} className="w-full h-full object-cover grayscale" />
                    </div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wide">{campaign.celebrity || 'Arte Genérica'}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewMedia(campaign.id)} 
                    className="flex-1 bg-slate-50 hover:bg-primary hover:text-white text-slate-700 py-3 rounded-xl text-[10px] font-black transition-all border border-slate-200 uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">play_circle</span> Mídias
                  </button>
                  <button 
                    onClick={() => handleEdit(campaign.id)} 
                    className="flex-1 bg-slate-50 hover:bg-primary hover:text-white text-slate-700 py-3 rounded-xl text-[10px] font-black transition-all border border-slate-200 uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-base">edit_note</span> Customizar
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add New Placeholder Card */}
          <div 
            onClick={handleNew}
            className="bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 transition-all hover:bg-white hover:border-primary/50 hover:shadow-xl cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all mb-4 border border-slate-200">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <p className="text-xs font-black text-slate-400 group-hover:text-primary uppercase tracking-[0.2em]">Criar nova campanha</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllCampaignsPage;
