
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';

interface ConfirmationPageProps {
  onNavigate: (route: AppRoute) => void;
  setSelectedCampaignId: (id: string | null) => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate, setSelectedCampaignId }) => {
  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS', route: 'calendar' as AppRoute },
    { label: 'EDIÇÃO CAMPANHA', route: 'edition' as AppRoute },
    { label: 'PRÉ-VISUALIZAÇÃO', route: 'gallery' as AppRoute },
    { label: 'CONTRATO', route: 'signature' as AppRoute },
    { label: 'CHECKOUT', route: 'payment' as AppRoute },
    { label: 'CONFIRMAÇÃO' }
  ];

  const handleFinish = () => {
    // We could set the ID if we wanted to highlight it, but for now just go home
    onNavigate('all-campaigns');
  };

  return (
    <Layout activeRoute="confirmation" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-green-50 text-green-500 mb-10 border border-green-100 shadow-xl shadow-green-500/5">
            <span className="material-symbols-outlined text-7xl font-light">check_circle</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">Sua campanha está pronta!</h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Pagamento confirmado e ativos gerados. Você já pode baixar os materiais e iniciar a veiculação.
          </p>
          
          <div className="mb-14">
            <button 
              onClick={handleFinish}
              className="bg-primary hover:bg-mobi-blue text-white py-5 px-14 rounded-2xl font-black text-base uppercase tracking-[0.2em] transition-all shadow-2xl shadow-primary/30 flex items-center gap-4 mx-auto active:scale-95"
            >
              ACESSAR MEU DASHBOARD
              <span className="material-symbols-outlined text-2xl">grid_view</span>
            </button>
          </div>

          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 py-2.5 px-6 rounded-2xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg">star</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status do Contrato</p>
                <p className="text-xs font-black text-slate-900 uppercase">ASSINADO & HOMOLOGADO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:text-primary hover:border-primary/50 transition-all flex items-center gap-2.5 shadow-sm active:bg-slate-50">
              <span className="material-symbols-outlined text-xl">description</span>
              Visualizar PDF
            </button>
            <button className="px-8 py-3.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:text-primary hover:border-primary/50 transition-all flex items-center gap-2.5 shadow-sm active:bg-slate-50">
              <span className="material-symbols-outlined text-xl">receipt_long</span>
              Comprovante
            </button>
          </div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-4">
            Dúvidas? <a href="#" className="text-primary hover:underline underline-offset-4 decoration-2">FALE COM O GERENTE DE CONTA</a>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default ConfirmationPage;
