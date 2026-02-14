
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS } from '../constants';

interface FinancialPageProps {
  onNavigate: (route: AppRoute) => void;
}

const FinancialPage: React.FC<FinancialPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'FINANCEIRO' }
  ];
  const transactions = CAMPAIGNS.filter(c => c.price);

  return (
    <Layout activeRoute="financial" onNavigate={onNavigate} breadcrumbs={breadcrumbs} showSidebar>
      <div className="p-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-2">Contratos e Financeiro</h1>
            <p className="text-slate-500 text-sm">Gestão centralizada de faturamento e obrigações contratuais.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">filter_alt</span> Filtrar
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">file_download</span> Exportar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-40">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total em Contratos</p>
              <h2 className="text-3xl font-black text-slate-800 tabular-nums">R$ 145.200,00</h2>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-green-600 bg-green-50 w-fit px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-xs">trending_up</span> +12% vs mês anterior
            </div>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm h-40 flex flex-col justify-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Investimento Anual</p>
            <h2 className="text-3xl font-black text-slate-800 tabular-nums">R$ 890.500,00</h2>
          </div>
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm h-40 flex flex-col justify-center">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Campanhas Realizadas</p>
             <h2 className="text-3xl font-black text-slate-800 tabular-nums">14</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-base">Transações Recentes</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-50 border-slate-200 rounded-xl text-xs w-80" placeholder="Buscar..." />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">Celebridade</th>
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">Campanha</th>
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">Data</th>
                  <th className="px-8 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100"><img src={t.image} className="w-full h-full object-cover" /></div>
                         <div className="flex flex-col"><span className="font-bold text-xs text-slate-800">{t.celebrity}</span><span className="text-[9px] text-slate-400 uppercase">{t.contractId}</span></div>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-xs font-semibold text-slate-600">{t.title}</td>
                    <td className="px-8 py-4 text-xs text-slate-500">15 Out 2024</td>
                    <td className="px-8 py-4"><span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[9px] font-bold uppercase">Pago</span></td>
                    <td className="px-8 py-4 text-right text-xs font-black text-slate-800">R$ {t.price?.toLocaleString('pt-BR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FinancialPage;
