
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS } from '../constants';

interface RightsManagementPageProps {
  onNavigate: (route: AppRoute) => void;
  setSelectedCampaignId: (id: string | null) => void;
}

const RightsManagementPage: React.FC<RightsManagementPageProps> = ({ onNavigate, setSelectedCampaignId }) => {
  const activeRights = CAMPAIGNS.filter(c => c.celebrity);
  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'LICENÇAS ATIVAS' }
  ];

  const handleAction = (id: string) => {
    setSelectedCampaignId(id);
    onNavigate('media-library');
  };

  return (
    <Layout activeRoute="rights" onNavigate={onNavigate} breadcrumbs={breadcrumbs} showSidebar>
      <div className="p-8 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Gestão de Direitos Ativos</h1>
            <p className="text-slate-500 text-sm mt-1 font-medium">Monitore o tempo de vigência e validade das licenças de uso de imagem e voz.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl flex items-center gap-3 shadow-sm">
                <span className="material-symbols-outlined text-primary">verified</span>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Total de Ativos</span>
                   <span className="text-sm font-black text-primary leading-none">12 LICENÇAS</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {activeRights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col xl:flex-row items-center gap-10 transition-all hover:border-primary/30 hover:shadow-xl group">
              <div className="flex items-center gap-6 min-w-[320px]">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                    <img src={item.image} alt={item.celebrity} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                     <span className="material-symbols-outlined text-white text-xs font-black">check</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl uppercase tracking-tight mb-1">{item.celebrity}</h3>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">{item.title}</p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                    <p className="text-[11px] font-bold uppercase tracking-tight">Contrato: {item.contractId || 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expiração da Licença</span>
                    <span className="text-sm font-black text-slate-800 uppercase">15 de Outubro de 2025</span>
                  </div>
                  <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest border border-green-100">72 Dias Restantes</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200 p-0.5 shadow-inner">
                  <div className="h-full bg-primary rounded-full w-2/3 shadow-sm shadow-primary/40"></div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <button 
                  onClick={() => handleAction(item.id)}
                  className="bg-white hover:bg-slate-50 text-slate-900 h-14 px-8 rounded-2xl font-black text-xs border-2 border-slate-200 uppercase tracking-[0.15em] transition-all flex items-center gap-3 active:scale-95"
                >
                  <span className="material-symbols-outlined">collections</span>
                  Ver Mídias
                </button>
                <button className="bg-primary hover:bg-mobi-blue text-white h-14 px-8 rounded-2xl font-black text-xs shadow-xl shadow-primary/30 uppercase tracking-[0.15em] transition-all flex items-center gap-3 active:scale-95">
                  <span className="material-symbols-outlined">refresh</span>
                  Renovar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RightsManagementPage;
