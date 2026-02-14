
import React from 'react';
import { AppRoute } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  showSidebar?: boolean;
  breadcrumbs: { label: string; route?: AppRoute }[];
  footerSticky?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeRoute, 
  onNavigate, 
  showSidebar = false, 
  breadcrumbs,
  footerSticky = false
}) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="h-12 bg-white border-b border-slate-200 shrink-0 z-50 flex items-center justify-between px-6">
        <nav className="flex items-center gap-2 text-[10px]">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="material-symbols-outlined text-slate-300 text-[12px]">chevron_right</span>}
              <button 
                onClick={() => crumb.route ? onNavigate(crumb.route) : null} // Only navigate if route is defined
                className={`${crumb.route ? 'text-primary font-bold hover:underline' : 'text-slate-400 font-medium'}`}
                disabled={!crumb.route}
              >
                {crumb.label.toUpperCase()}
              </button>
            </React.Fragment>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Sistema Operacional</span>
          </div>
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-4 h-4 flex items-center">
            MÓDULO DE CAMPANHAS
          </span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-64 bg-white border-r border-slate-200 py-8 flex flex-col gap-10 shrink-0">
            <div className="px-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">Navegação</p>
              <nav className="space-y-1">
                <button onClick={() => onNavigate('all-campaigns')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold ${activeRoute === 'all-campaigns' ? 'bg-blue-50 text-primary border-r-4 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <span className="material-symbols-outlined text-lg">folder_shared</span>
                  Campanhas
                </button>
                <button onClick={() => onNavigate('rights')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold ${activeRoute === 'rights' ? 'bg-blue-50 text-primary border-r-4 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <span className="material-symbols-outlined text-lg">verified</span>
                  Licenças Ativas
                </button>
                <button onClick={() => onNavigate('history')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold ${activeRoute === 'history' ? 'bg-blue-50 text-primary border-r-4 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <span className="material-symbols-outlined text-lg">history</span>
                  Histórico
                </button>
                <button onClick={() => onNavigate('financial')} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold ${activeRoute === 'financial' ? 'bg-blue-50 text-primary border-r-4 border-primary' : 'text-slate-500 hover:bg-slate-50'}`}>
                  <span className="material-symbols-outlined text-lg">payments</span>
                  Financeiro
                </button>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 custom-scrollbar relative">
          {children}
        </main>
      </div>
      
      {footerSticky && (
        <footer className="h-16 bg-white border-t border-slate-200 shrink-0 flex items-center justify-between px-6 z-50">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2024 MOBIAUTO ADS - UNIDADE DE NEGÓCIO DO GRUPO TORQUE
          </p>
          <div className="flex gap-4">
             <button className="text-[10px] text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-wider">Privacidade</button>
             <button className="text-[10px] text-primary font-bold hover:underline uppercase tracking-wider">Suporte Direto</button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
