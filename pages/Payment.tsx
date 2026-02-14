
import React, { useState } from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';

const maskCardNumber = (value: string) => {
  return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').substring(0, 19);
};

const maskExpiry = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 2) return digits;
  const month = digits.substring(0, 2);
  const year = digits.substring(2, 4);
  const validMonth = parseInt(month) > 12 ? '12' : month;
  return `${validMonth}/${year}`;
};

const maskCVV = (value: string) => {
  return value.replace(/\D/g, '').substring(0, 4);
};

interface PaymentPageProps {
  onNavigate: (route: AppRoute) => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  const [method, setMethod] = useState<'pix' | 'card' | 'boleto'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS', route: 'calendar' as AppRoute },
    { label: 'EDIÇÃO CAMPANHA', route: 'edition' as AppRoute },
    { label: 'PRÉ-VISUALIZAÇÃO', route: 'gallery' as AppRoute },
    { label: 'CONTRATO', route: 'signature' as AppRoute },
    { label: 'CHECKOUT' }
  ];

  return (
    <Layout activeRoute="payment" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <main className="max-w-6xl mx-auto w-full p-12 grid grid-cols-12 gap-12">
        {/* Painel de Pagamento */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
             <div className="p-10 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="font-black text-slate-900 uppercase tracking-tight text-lg">Método de Pagamento</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ambiente criptografado e seguro</p>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-xl border border-green-100">
                  <span className="material-symbols-outlined text-green-600 text-lg">lock</span>
                  <span className="text-[9px] font-black text-green-700 uppercase">SSL Ativo</span>
                </div>
             </div>
             
             <div className="p-10 space-y-10">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'pix', label: 'PIX', icon: 'qr_code_2' },
                    { id: 'card', label: 'CARTÃO', icon: 'credit_card' },
                    { id: 'boleto', label: 'BOLETO', icon: 'barcode' }
                  ].map(m => (
                    <button key={m.id} onClick={() => setMethod(m.id as any)} className={`flex flex-col items-center gap-4 p-8 rounded-[2rem] border-2 transition-all group ${method === m.id ? 'border-primary bg-blue-50 text-primary shadow-xl ring-4 ring-primary/5' : 'border-slate-100 text-slate-400 hover:bg-slate-50'}`}>
                      <span className={`material-symbols-outlined text-4xl ${method === m.id ? 'text-primary' : 'text-slate-300'}`}>{m.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                    </button>
                  ))}
                </div>

                {method === 'card' && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Número do Cartão de Crédito</label>
                      <div className="relative">
                        <input className="w-full h-16 px-6 bg-slate-50 border-2 border-slate-200 rounded-2xl font-black text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 tabular-nums text-lg" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(maskCardNumber(e.target.value))} />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300 text-3xl">credit_card</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Validade (MM/AA)</label>
                        <input className="w-full h-16 px-6 bg-slate-50 border-2 border-slate-200 rounded-2xl font-black text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 tabular-nums text-lg text-center" placeholder="MM/AA" value={expiry} onChange={(e) => setExpiry(maskExpiry(e.target.value))} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CVV (Segurança)</label>
                        <input className="w-full h-16 px-6 bg-slate-50 border-2 border-slate-200 rounded-2xl font-black text-slate-900 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300 tabular-nums text-lg text-center" placeholder="123" value={cvv} onChange={(e) => setCvv(maskCVV(e.target.value))} />
                      </div>
                    </div>
                  </div>
                )}

                {method === 'pix' && (
                  <div className="flex flex-col items-center py-10 space-y-6 animate-in zoom-in duration-300">
                    <div className="p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-2xl">
                      <span className="material-symbols-outlined text-[120px] text-slate-200">qr_code_2</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-tight">QR Code gerado na próxima etapa</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">O acesso à campanha é imediato após o PIX</p>
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Resumo e Total */}
        <div className="col-span-12 lg:col-span-5">
           <div className="bg-slate-900 rounded-[3rem] p-12 text-white space-y-10 sticky top-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/5">
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight">Carrinho de Compras</h3>
                <div className="w-12 h-1 bg-primary"></div>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10">
                 <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Licença Master</span>
                      <span className="text-xs font-bold">Uso de imagem (90 dias)</span>
                    </div>
                    <span className="font-black tabular-nums">R$ 15.000,00</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Setup de Produção</span>
                      <span className="text-xs font-bold">Processamento de ativos HD</span>
                    </div>
                    <span className="font-black tabular-nums">R$ 2.490,00</span>
                 </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                 <div className="flex justify-between items-end mb-8">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Total Geral</p>
                    <p className="text-5xl font-black text-white tabular-nums tracking-tighter">R$ 17.490,00</p>
                 </div>
                 <button onClick={() => onNavigate('confirmation')} className="w-full h-16 bg-primary text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all active:scale-95 shadow-2xl shadow-primary/20">Finalizar Compra</button>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                <span className="material-symbols-outlined text-primary">verified</span>
                <p className="text-[9px] text-white/40 font-bold uppercase leading-relaxed tracking-widest">Seu investimento está protegido. Garantia de entrega Mobiauto Ads em conformidade com o contrato digital.</p>
              </div>
           </div>
        </div>
      </main>
    </Layout>
  );
};

export default PaymentPage;
