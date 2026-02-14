
import React from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CAMPAIGNS } from '../constants';

interface HistoryPageProps {
  onNavigate: (route: AppRoute) => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HISTÓRICO' }
  ];

  return (
    <Layout activeRoute="history" onNavigate={onNavigate} breadcrumbs={breadcrumbs} showSidebar>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Histórico de Campanhas</h1>
            <p className="text-slate-500 text-sm mt-1 font-medium">Consulte ativos expirados e reative contratos de campanhas passadas.</p>
          </div>
          <button className="bg-primary hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">refresh</span> Recontratar em Lote
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Celebridade</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Campanha</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Período</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CAMPAIGNS.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden"><img src={c.image} className="w-full h-full object-cover" /></div>
                      <span className="font-bold text-slate-800 text-sm">{c.celebrity || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{c.title}</td>
                  <td className="px-6 py-4 text-xs text-slate-400">Jan 2023 - Mar 2023</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase rounded-full">Expirado</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline text-xs font-bold uppercase">Reativar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryPage;
