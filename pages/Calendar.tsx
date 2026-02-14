
import React, { useState } from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS, MONTHS } from '../constants';

interface CalendarPageProps {
  onNavigate: (route: AppRoute) => void;
  selectedCampaignId: string | null;
  setSelectedCampaignId: (id: string | null) => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onNavigate, selectedCampaignId, setSelectedCampaignId }) => {
  const [selectedMonth, setSelectedMonth] = useState('Fev');

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS' }
  ];

  const selectedCampaign = CAMPAIGNS.find(c => c.id === selectedCampaignId);

  return (
    <Layout activeRoute="calendar" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-2 uppercase">Calendário de Campanhas</h1>
            <p className="text-slate-500 text-sm max-w-2xl font-medium">Selecione o tema da semana para começar a customizar seu enxoval publicitário.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('all-campaigns')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-black text-slate-600 hover:text-primary transition-all border border-slate-300 rounded-xl bg-white shadow-sm uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-lg">folder_open</span>
              Minhas Campanhas
            </button>
            <div className="relative min-w-[320px] group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 placeholder:text-slate-400 shadow-sm" 
                placeholder="Buscar temas, feriados ou modelos..." 
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Month Selector */}
        <div className="mb-10">
          <div className="flex p-1.5 bg-white rounded-2xl overflow-x-auto no-scrollbar border border-slate-200 shadow-sm">
            {MONTHS.map(month => (
              <button 
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`flex-1 min-w-[90px] text-center py-2.5 px-4 text-[11px] font-black rounded-xl transition-all whitespace-nowrap uppercase tracking-widest ${selectedMonth === month ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {CAMPAIGNS.map(campaign => (
            <div key={campaign.id} className="flex flex-col gap-5 group">
              <div className={`flex items-center justify-between border-b-2 pb-3 transition-colors ${selectedCampaignId === campaign.id ? 'border-primary' : 'border-slate-200 group-hover:border-slate-300'}`}>
                <div className="flex flex-col">
                  <span className={`text-[10px] font-black uppercase tracking-widest leading-none mb-1.5 ${selectedCampaignId === campaign.id ? 'text-primary' : 'text-slate-400'}`}>
                    {campaign.week}
                  </span>
                  <span className="font-black text-slate-800 text-sm uppercase tracking-tight">{campaign.dates}</span>
                </div>
                <span className={`material-symbols-outlined text-[24px] ${selectedCampaignId === campaign.id ? 'text-primary' : 'text-slate-300'}`}>
                  {selectedCampaignId === campaign.id ? 'check_circle' : 'calendar_today'}
                </span>
              </div>

              <div 
                onClick={() => setSelectedCampaignId(campaign.id)}
                className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col h-full cursor-pointer relative ${selectedCampaignId === campaign.id ? 'border-primary ring-8 ring-primary/5 shadow-2xl' : 'border-slate-200 hover:border-primary/30 hover:shadow-xl'}`}
              >
                <div className="aspect-[16/11] overflow-hidden relative">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest shadow-sm ${selectedCampaignId === campaign.id ? 'bg-primary text-white border-transparent' : 'bg-white/95 text-primary border-slate-200'}`}>
                      {campaign.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight leading-tight">{campaign.title}</h3>
                  <p className="text-xs text-slate-500 mb-8 flex-grow leading-relaxed font-medium">{campaign.description}</p>
                  <button 
                    className={`w-full py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${selectedCampaignId === campaign.id ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary'}`}
                  >
                    {selectedCampaignId === campaign.id ? 'TEMA SELECIONADO' : 'ESCOLHER ESTE TEMA'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 py-6 px-10 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => setSelectedCampaignId(null)}
            className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-[0.2em] hover:text-primary transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-xl">restart_alt</span>
            Resetar Seleção
          </button>
          <div className="flex items-center gap-12">
            <div className={`transition-all duration-500 flex flex-col items-end ${selectedCampaignId ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Campanha em Foco</span>
              <div className="flex items-center gap-3">
                <span className="text-primary font-black text-sm uppercase tracking-tight">{selectedCampaign?.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{selectedCampaign?.week} • {selectedMonth}</span>
              </div>
            </div>
            <button 
              onClick={() => selectedCampaignId && onNavigate('edition')}
              disabled={!selectedCampaignId}
              className={`px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-2xl active:scale-95 group ${selectedCampaignId ? 'bg-primary text-white hover:bg-mobi-blue shadow-primary/30' : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'}`}
            >
              Customizar Enxoval
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default CalendarPage;
