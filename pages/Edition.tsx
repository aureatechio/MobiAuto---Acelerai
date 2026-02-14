
import React, { useState, useRef } from 'react';
import { AppRoute } from '../types';
import Layout from '../components/Layout';
import { CELEBRITIES, CAMPAIGNS } from '../constants';

const BRAZIL_STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const maskCurrency = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  const amount = (parseInt(digits) / 100).toFixed(2);
  const [int, dec] = amount.split('.');
  const formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formattedInt},${dec}`;
};

interface EditionPageProps {
  onNavigate: (route: AppRoute) => void;
  selectedCampaignId: string | null;
}

const EditionPage: React.FC<EditionPageProps> = ({ onNavigate, selectedCampaignId }) => {
  const campaign = CAMPAIGNS.find(c => c.id === selectedCampaignId) || CAMPAIGNS[1];
  
  // Estados de Personalização
  const [model, setModel] = useState('Jeep Compass Longitude');
  const [price, setPrice] = useState('185.900,00');
  const [installment, setInstallment] = useState('2.490,00');
  const [cta, setCta] = useState('Quero Aproveitar Agora');
  const [primaryColor, setPrimaryColor] = useState('#0041B2');
  const [secondaryColor, setSecondaryColor] = useState('#FF9900');
  const [selectedCeleb, setSelectedCeleb] = useState(CELEBRITIES[0]);
  const [state, setState] = useState('São Paulo');
  const [city, setCity] = useState('São Paulo');

  // Estados para Imagens
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [carPreview, setCarPreview] = useState<string | null>(null);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const carInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const breadcrumbs = [
    { label: 'MARKETING' },
    { label: 'ACELERAÍ', route: 'all-campaigns' as AppRoute },
    { label: 'HUB DE CAMPANHAS', route: 'all-campaigns' as AppRoute },
    { label: 'CALENDÁRIO DE CAMPANHAS', route: 'calendar' as AppRoute },
    { label: 'EDIÇÃO CAMPANHA' }
  ];

  return (
    <Layout activeRoute="edition" onNavigate={onNavigate} breadcrumbs={breadcrumbs}>
      <div className="flex flex-1 h-full overflow-hidden">
        {/* Sidebar de Edição (Inspirada na Imagem) */}
        <aside className="w-[440px] bg-white border-r border-slate-100 flex flex-col h-full overflow-hidden z-10 shadow-2xl">
          <div className="px-8 py-6 border-b border-slate-50 bg-white shrink-0 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-black text-slate-900 leading-tight">Edição Campanha</h1>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Etapa 3 de 5: Customização visual</p>
            </div>
            <div className="bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
               <span className="text-[10px] font-black text-primary uppercase">Passo 3</span>
            </div>
          </div>

          <div className="flex-1 px-8 py-8 space-y-12 overflow-y-auto custom-scrollbar bg-white">
            
            {/* 1. BRANDING DA LOJA */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl font-light">palette</span>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-800">1. BRANDING DA LOJA</h2>
              </div>
              
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Logo Concessionária</label>
                <div 
                  onClick={() => logoInputRef.current?.click()}
                  className="w-full aspect-[16/7] bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[1.5rem] flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-all overflow-hidden relative group"
                >
                  {logoPreview ? (
                    <img src={logoPreview} className="w-full h-full object-contain p-6" />
                  ) : (
                    <div className="text-center p-6">
                      <span className="material-symbols-outlined text-slate-300 text-4xl mb-3">add_photo_alternate</span>
                      <p className="text-[11px] font-black text-slate-600 uppercase mb-1">Fazer upload do logo</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Formatos: PNG ou JPG com fundo transparente</p>
                    </div>
                  )}
                </div>
                <input type="file" ref={logoInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, setLogoPreview)} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Cor Primária</label>
                  <div className="flex items-center gap-4 h-14 px-4 bg-slate-50/50 border border-slate-100 rounded-xl shadow-sm">
                    <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="w-6 h-6 rounded-md cursor-pointer border-none p-0 shrink-0" />
                    <span className="text-[11px] font-black text-slate-800 uppercase tabular-nums font-mono">{primaryColor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Destaque</label>
                  <div className="flex items-center gap-4 h-14 px-4 bg-slate-50/50 border border-slate-100 rounded-xl shadow-sm">
                    <input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} className="w-6 h-6 rounded-md cursor-pointer border-none p-0 shrink-0" />
                    <span className="text-[11px] font-black text-slate-800 uppercase tabular-nums font-mono">{secondaryColor}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. REGIÃO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl font-light">location_on</span>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-800">2. REGIÃO</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">UF</label>
                  <div className="relative">
                    <select 
                      className="w-full h-14 px-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 appearance-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      {BRAZIL_STATES.map(uf => <option key={uf} value={uf}>{uf}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Cidade</label>
                  <div className="relative">
                    <input 
                      className="w-full h-14 px-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. DETALHES DA OFERTA */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl font-light">directions_car</span>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-800">3. DETALHES DA OFERTA</h2>
              </div>
              
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Foto Veículo</label>
                <div 
                  onClick={() => carInputRef.current?.click()}
                  className="w-full aspect-[16/9] bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[1.5rem] flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-all overflow-hidden relative group"
                >
                  {carPreview ? (
                    <img src={carPreview} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <span className="material-symbols-outlined text-slate-300 text-4xl mb-3">directions_car</span>
                      <p className="text-[11px] font-black text-slate-600 uppercase mb-1">Selecionar imagem do veículo</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Resolução sugerida: 1920×1080px</p>
                    </div>
                  )}
                </div>
                <input type="file" ref={carInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, setCarPreview)} />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Modelo / Versão</label>
                <input className="w-full h-14 px-5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:border-primary outline-none shadow-sm" value={model} onChange={(e) => setModel(e.target.value)} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Preço Total</label>
                  <input className="w-full h-14 px-5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:border-primary outline-none tabular-nums shadow-sm" value={price} onChange={(e) => setPrice(maskCurrency(e.target.value))} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Parcela</label>
                  <input className="w-full h-14 px-5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:border-primary outline-none tabular-nums shadow-sm" value={installment} onChange={(e) => setInstallment(maskCurrency(e.target.value))} />
                </div>
              </div>
            </section>

            {/* 4. CHAMADA PARA AÇÃO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl font-light">ads_click</span>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-800">4. CHAMADA PARA AÇÃO</h2>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Texto do Botão (CTA)</label>
                <input className="w-full h-14 px-5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:border-primary outline-none shadow-sm" value={cta} onChange={(e) => setCta(e.target.value)} />
              </div>
            </section>

            {/* 5. SELEÇÃO DE CELEBRIDADE */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-xl font-light">stars</span>
                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-800">5. SELEÇÃO DE CELEBRIDADE</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {CELEBRITIES.map(celeb => (
                  <div 
                    key={celeb.id} 
                    onClick={() => celeb.status === 'active' && setSelectedCeleb(celeb)}
                    className={`relative cursor-pointer rounded-2xl border-2 p-1.5 transition-all group overflow-hidden ${celeb.status === 'inactive' ? 'opacity-30 grayscale cursor-not-allowed' : 'bg-white border-slate-100 hover:border-primary/30'} ${selectedCeleb.id === celeb.id ? 'border-primary ring-4 ring-primary/5 shadow-xl' : ''}`}
                  >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                      <img src={celeb.image} alt={celeb.name} className="w-full h-full object-cover" />
                      {selectedCeleb.id === celeb.id && (
                        <div className="absolute top-2 right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                          <span className="material-symbols-outlined text-[12px] font-black">check</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 px-1">
                      <p className="text-[10px] font-black text-slate-800 leading-tight truncate uppercase">{celeb.name}</p>
                      <p className={`text-[8px] font-bold uppercase tracking-widest ${celeb.status === 'active' ? 'text-primary' : 'text-slate-400'}`}>
                        {celeb.status === 'active' ? 'Ativo' : 'Indisponível'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="px-8 py-8 border-t border-slate-100 bg-white flex gap-4 shrink-0">
            <button onClick={() => onNavigate('calendar')} className="flex-1 h-14 text-[11px] font-black text-slate-500 border-2 border-slate-100 rounded-2xl uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">Voltar</button>
            <button onClick={() => onNavigate('gallery')} className="flex-[2] h-14 bg-primary text-white text-[11px] font-black rounded-2xl uppercase tracking-widest shadow-2xl shadow-primary/20 hover:brightness-110 transition-all active:scale-95">Avançar para Galeria</button>
          </div>
        </aside>

        {/* Visualização em Tempo Real (Lado Direito) */}
        <main className="flex-1 bg-slate-100 p-12 flex items-center justify-center overflow-y-auto custom-scrollbar">
          <div className="relative w-full max-w-[1000px] aspect-[16/9] bg-white rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] overflow-hidden border-[12px] border-white transition-all transform">
            {/* Foto do Carro */}
            <img src={carPreview || campaign.image} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${primaryColor}F2, ${primaryColor}33, transparent)` }}></div>
            
            {/* Celebridade */}
            <div className="absolute right-0 bottom-0 w-[45%] h-full flex items-end justify-center pointer-events-none">
              <img src={selectedCeleb.image} className="max-h-[95%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </div>

            <div className="absolute inset-0 p-16 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-[2rem] shadow-2xl flex items-center gap-5 border border-white/50">
                  {logoPreview ? (
                    <img src={logoPreview} className="h-10 w-auto object-contain" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl font-light">store</span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[14px] font-black uppercase text-slate-900 tracking-tighter leading-none">Minha Concessionária</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Logo Verificada</span>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-white text-lg">location_on</span>
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">{city} / {state}</span>
                </div>
              </div>

              <div className="max-w-[55%] space-y-8">
                <div className="space-y-3">
                  <span className="inline-block px-4 py-1.5 rounded-lg bg-white text-primary text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">Oferta Limitada</span>
                  <h3 className="text-white text-6xl font-black uppercase leading-[0.9] tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">{model}</h3>
                </div>

                <div className="flex items-center gap-14 pt-4">
                  <div>
                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-1.5">Entrada + Parcelas</p>
                    <p className="text-white text-5xl font-black tabular-nums tracking-tighter">R$ {installment}</p>
                  </div>
                  <div className="w-px h-16 bg-white/20"></div>
                  <div>
                    <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-1.5">À Vista</p>
                    <p className="text-white text-4xl font-black tabular-nums tracking-tighter">R$ {price}</p>
                  </div>
                </div>

                <button className="h-20 px-14 rounded-full text-white font-black text-base uppercase transition-all shadow-2xl flex items-center gap-4 group active:scale-95" style={{ backgroundColor: secondaryColor }}>
                  {cta}
                  <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </button>
              </div>

              <div className="absolute bottom-6 left-16 text-[9px] font-bold text-white/40 uppercase tracking-widest">
                * Condições válidas apenas para {city} - {state} enquanto durar o estoque.
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default EditionPage;
