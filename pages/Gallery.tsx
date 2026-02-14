
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS, CELEBRITIES } from '../constants';

interface GalleryPageProps {
  onNavigate: (route: AppRoute) => void;
  selectedCampaignId: string | null;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, selectedCampaignId }) => {
  const campaign = CAMPAIGNS.find(c => c.id === selectedCampaignId) || CAMPAIGNS[1];
  const celebrity = CELEBRITIES.find(ce => ce.name === campaign.celebrity) || CELEBRITIES[0];

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS', route: 'calendar' as AppRoute },
    { label: 'EDIÇÃO CAMPANHA', route: 'edition' as AppRoute },
    { label: 'PRÉ-VISUALIZAÇÃO' }
  ];

  return (
    <Layout activeRoute="gallery" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900">Galeria de Ativos: {campaign.title}</h2>
                <p className="text-xs text-slate-500 font-medium">Seus arquivos estarão disponíveis em alta resolução após o pagamento.</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">check_circle</span> Pronto para download
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">smartphone</span> Stories / TikTok
                </h3>
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl group border-2 border-white">
                  <img src={campaign.image} alt="Vertical Asset" className="w-full h-full object-cover blur-[3px]" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em] rotate-[-45deg] border border-white/20 px-4 py-1 bg-black/10 backdrop-blur-sm">
                      PRÉ-VISUALIZAÇÃO
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">square</span> Post Social Media
                </h3>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img src={campaign.image} alt="Square Asset" className="w-full h-full object-cover blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 font-black text-[8px] uppercase rotate-[-45deg] border border-white/20 p-2">PRÉ-VISUALIZAÇÃO</span>
                  </div>
                </div>
              </div>

              <div className="col-span-5 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">rectangle</span> Banners para Site
                </h3>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                  <img src={campaign.image} alt="Banner Asset" className="w-full h-full object-cover blur-[4px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 font-black text-[10px] uppercase border border-white/20 px-4 py-1">PRÉ-VISUALIZAÇÃO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-[380px] bg-white border-l border-slate-200 flex flex-col shrink-0 z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
          <div className="p-6 flex-1 overflow-y-auto space-y-8">
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Resumo da Campanha</h3>
              <div className="bg-slate-50 rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                    <img src={celebrity.image} alt={celebrity.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase">Celebridade</p>
                    <p className="text-sm font-black text-slate-900">{celebrity.name}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cachet</span>
                    <span className="text-slate-900 font-bold">R$ 15.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Produção</span>
                    <span className="text-slate-900 font-bold">R$ 2.490,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50/50">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Investimento</span>
              <p className="text-2xl font-black text-slate-900">R$ 17.490,00</p>
            </div>
            <button 
              onClick={() => onNavigate('signature')}
              className="w-full bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              Continuar para Contrato
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default GalleryPage;
