
import React, { useState } from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';

const maskDocument = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 11) {
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .substring(0, 14);
  } else {
    return digits
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 18);
  }
};

interface SignaturePageProps {
  onNavigate: (route: AppRoute) => void;
}

const SignaturePage: React.FC<SignaturePageProps> = ({ onNavigate }) => {
  const [accepted, setAccepted] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');

  // Lógica de avanço agora depende apenas do Nome e Documento após o aceite
  const canAdvance = accepted && document.length >= 14 && name.length > 3;

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS', route: 'calendar' as AppRoute },
    { label: 'EDIÇÃO CAMPANHA', route: 'edition' as AppRoute },
    { label: 'PRÉ-VISUALIZAÇÃO', route: 'gallery' as AppRoute },
    { label: 'CONTRATO' }
  ];

  return (
    <Layout activeRoute="signature" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <main className="max-w-6xl mx-auto w-full p-12 space-y-10">
        <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden">
          <div className="p-10 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl font-light">verified_user</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Assinatura do Contrato</h2>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Formalização imediata da campanha</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 text-[10px] font-black text-slate-500 hover:text-primary transition-all bg-white border border-slate-200 rounded-2xl uppercase tracking-widest">
              <span className="material-symbols-outlined text-xl">download</span> Minuta Completa
            </button>
          </div>

          <div className="p-12">
            <div className="h-[300px] overflow-y-auto no-scrollbar bg-slate-50/50 rounded-[2.5rem] p-12 border border-slate-200 text-sm leading-relaxed text-slate-700 font-serif shadow-inner mb-12">
               <h3 className="font-black text-center text-slate-900 text-xl mb-8 uppercase tracking-tight">CONTRATO DE LICENÇA MOBIAUTO ADS</h3>
               <p className="mb-6">Pelo presente instrumento, o <strong>CONTRATANTE</strong> declara-se ciente das condições de uso da imagem e voz da celebridade selecionada, respeitando os prazos e territórios definidos no checkout da oferta.</p>
               <p className="mb-6">1. <strong>DO OBJETO:</strong> O licenciamento é válido exclusivamente para a unidade comercial vinculada a este cadastro, conforme os dados de regionalização preenchidos na etapa de edição.</p>
               <p className="mb-6">2. <strong>DA VIGÊNCIA:</strong> O contrato tem validade de 90 dias a partir desta data.</p>
               <p className="mb-6">3. <strong>RESPONSABILIDADE:</strong> O assinante abaixo identificado declara possuir plenos poderes para representar a empresa contratante.</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <label className="flex items-center gap-6 cursor-pointer p-8 rounded-[2rem] border-2 border-slate-100 bg-slate-50/30 hover:bg-white hover:border-primary/20 transition-all group">
                <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="w-8 h-8 rounded-xl text-primary focus:ring-primary/20 transition-all cursor-pointer" />
                <span className="text-sm font-black text-slate-800 uppercase tracking-tight">Li e concordo com todos os termos e cláusulas contratuais.</span>
              </label>

              {/* Form Section - Simplificado conforme solicitado */}
              <div className="space-y-10">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 md:col-span-7 space-y-3">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-tight ml-4">Assinante (Nome Completo)</label>
                    <input 
                      className="w-full h-20 px-8 bg-slate-50/50 border-2 border-slate-100 rounded-[1.8rem] font-black text-slate-900 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-300 text-lg shadow-sm" 
                      placeholder="Nome do responsável" 
                      value={name} 
                      onChange={(e) => setName(e.target.value.toUpperCase())} 
                    />
                  </div>
                  <div className="col-span-12 md:col-span-5 space-y-3">
                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-tight ml-4">Documento (CPF ou CNPJ)</label>
                    <input 
                      className="w-full h-20 px-8 bg-slate-50/50 border-2 border-slate-100 rounded-[1.8rem] font-black text-slate-900 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-slate-300 text-lg tabular-nums shadow-sm" 
                      placeholder="00.000.000/0000-00" 
                      value={document} 
                      onChange={(e) => setDocument(maskDocument(e.target.value))} 
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6">
                  <button 
                    onClick={() => canAdvance && onNavigate('payment')} 
                    disabled={!canAdvance} 
                    className={`w-full h-24 rounded-[1.8rem] font-black text-xl uppercase tracking-widest transition-all flex items-center justify-center shadow-2xl active:scale-[0.98] ${canAdvance ? 'bg-primary text-white shadow-primary/30 hover:brightness-110' : 'bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-300'}`}
                  >
                    ASSINAR E IR PARA PAGAMENTO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SignaturePage;
