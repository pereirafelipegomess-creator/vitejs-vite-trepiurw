import React, { useState, useEffect, useMemo } from 'react';

// ============================================================================
// ÍCONES INDUSTRIAIS EM SVG (SISTEMA AUTOCONTIDO SEM DEPENDÊNCIAS EXTERNAS)
// ============================================================================
const Factory = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 18h1M12 18h1M7 18h1"/>
  </svg>
);

const Layers = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const ClipboardList = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
  </svg>
);

const BarChart3 = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/>
  </svg>
);

const Settings = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const PlusCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8"/>
  </svg>
);

const Trash2 = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/>
  </svg>
);

const AlertTriangle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01"/>
  </svg>
);

const CheckCircle2 = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"/>
  </svg>
);

const XCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="m15 9-6 6M9 9l6 6"/>
  </svg>
);

const LogOut = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);

const Save = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM17 21v-8H7v8M7 3v5h8"/>
  </svg>
);

const RefreshCcw = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16M16 16h5v5"/>
  </svg>
);

const FileSpreadsheet = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7L15 2zM14 2v4a1 1 0 0 0 1 1h4M8 13h8M8 17h8M12 9v10"/>
  </svg>
);

const FileText = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7L15 2zM14 2v4a1 1 0 0 0 1 1h4M10 9h4M8 13h8M8 17h8"/>
  </svg>
);

const ShieldAlert = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01"/>
  </svg>
);

const TrendingUp = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const Filter = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const Loader2 = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} animate-spin`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

const PackageIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.4 7.55 4.24M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.29 7 12 12 20.71 7M12 22v-10"/>
  </svg>
);

const Sparkles = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);

const Bot = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect width="18" height="12" x="3" y="6" rx="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h.01M15 11h.01M12 2v4M4 12H2M22 12h-2"/>
  </svg>
);

// ============================================================================
// DADOS BASE DA LA SERENISSIMA (BRAGANÇA PAULISTA)
// ============================================================================

// 1. As 6 Linhas Oficiais de Envase
const seedMachines = [
  { id: 'm1', codigo: 'L01', nome: 'Envase 1', is_active: true },
  { id: 'm2', codigo: 'L02', nome: 'Envase 2', is_active: true },
  { id: 'm3', codigo: 'L03', nome: 'Envase 3', is_active: true },
  { id: 'm4', codigo: 'L04', nome: 'Envase 4', is_active: true },
  { id: 'm5', codigo: 'L05', nome: 'Envase 5', is_active: true },
  { id: 'm6', codigo: 'L06', nome: 'Envase 6', is_active: true }
];

// 2. Os 18 SKUs Oficiais com Pesos, Taras e Limites de Tolerância
const seedProducts = [
  { id: 'p1', sku: 531, description: 'LPI', nominal_weight_kg: 0.200, standard_tare_g: 4.4, min_weight_limit: 199.5, max_weight_limit: 205 },
  { id: 'p2', sku: 532, description: 'LPI', nominal_weight_kg: 0.200, standard_tare_g: 4.4, min_weight_limit: 199.5, max_weight_limit: 205 },
  { id: 'p3', sku: 533, description: 'LPDI', nominal_weight_kg: 0.200, standard_tare_g: 4.4, min_weight_limit: 199.5, max_weight_limit: 205 },
  { id: 'p4', sku: 590, description: 'LPI', nominal_weight_kg: 0.400, standard_tare_g: 6.2, min_weight_limit: 399.5, max_weight_limit: 405 },
  { id: 'p5', sku: 571, description: 'LPIIV', nominal_weight_kg: 1.000, standard_tare_g: 11.0, min_weight_limit: 998, max_weight_limit: 1012 },
  { id: 'p6', sku: 574, description: 'LPIIV', nominal_weight_kg: 1.000, standard_tare_g: 11.0, min_weight_limit: 998, max_weight_limit: 1012 },
  { id: 'p7', sku: 642, description: 'LPIIV', nominal_weight_kg: 1.000, standard_tare_g: 11.0, min_weight_limit: 998, max_weight_limit: 1012 },
  { id: 'p8', sku: 580, description: 'LPI c/ vitamina', nominal_weight_kg: 0.200, standard_tare_g: 7.1, min_weight_limit: 198, max_weight_limit: 207 },
  { id: 'p9', sku: 587, description: 'LPIIV', nominal_weight_kg: 0.200, standard_tare_g: 7.1, min_weight_limit: 198, max_weight_limit: 207 },
  { id: 'p10', sku: 652, description: 'LPDI', nominal_weight_kg: 0.200, standard_tare_g: 7.1, min_weight_limit: 198, max_weight_limit: 207 },
  { id: 'p11', sku: 653, description: 'LPII Zero Lactose', nominal_weight_kg: 0.200, standard_tare_g: 7.1, min_weight_limit: 198, max_weight_limit: 207 },
  { id: 'p12', sku: 599, description: 'LPDI', nominal_weight_kg: 0.300, standard_tare_g: 9.5, min_weight_limit: 298, max_weight_limit: 307 },
  { id: 'p13', sku: 651, description: 'LPII Zero Lactose', nominal_weight_kg: 0.300, standard_tare_g: 9.5, min_weight_limit: 298, max_weight_limit: 307 },
  { id: 'p14', sku: 576, description: 'LPIIV', nominal_weight_kg: 0.400, standard_tare_g: 9.5, min_weight_limit: 398, max_weight_limit: 407 },
  { id: 'p15', sku: 579, description: 'LPI c/ vitamina', nominal_weight_kg: 0.400, standard_tare_g: 9.5, min_weight_limit: 398, max_weight_limit: 407 },
  { id: 'p16', sku: 654, description: 'LPIIV', nominal_weight_kg: 0.700, standard_tare_g: 14.9, min_weight_limit: 698, max_weight_limit: 710 },
  { id: 'p17', sku: 655, description: 'LPIV', nominal_weight_kg: 0.700, standard_tare_g: 14.9, min_weight_limit: 698, max_weight_limit: 710 },
  { id: 'p18', sku: 647, description: 'LPDI', nominal_weight_kg: 0.500, standard_tare_g: 12.9, min_weight_limit: 498, max_weight_limit: 510 }
];

// 3. Matriz Máquina x Produto (BPM e Capacidade Horária Nominal)
const seedMatrix = [];
const populateMatrix = (prodIndices, machIds, bpm) => {
  prodIndices.forEach(pIdx => {
    machIds.forEach(mId => {
      seedMatrix.push({
        id: `mx_${pIdx}_${mId}`,
        product_id: seedProducts[pIdx].id,
        machine_id: mId,
        packages_per_minute: bpm,
        packages_per_hour: bpm * 60
      });
    });
  });
};

populateMatrix([0, 1, 2, 3, 4, 5, 6], ['m1', 'm2'], 50);
populateMatrix([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], ['m3', 'm4'], 45);
populateMatrix([7, 8], ['m5', 'm6'], 55);

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [user, setUser] = useState({ email: 'manutencao@laserenisima.com.ar', nome: 'Técnico Manutenção' });
  
  // Persistência em LocalStorage com carregamento resiliente
  const [machines, setMachines] = useState(() => JSON.parse(localStorage.getItem('ls_machines')) || seedMachines);
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('ls_products')) || seedProducts);
  const [matrix, setMatrix] = useState(() => JSON.parse(localStorage.getItem('ls_matrix')) || seedMatrix);
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem('ls_logs')) || []);
  
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    localStorage.setItem('ls_machines', JSON.stringify(machines));
    localStorage.setItem('ls_products', JSON.stringify(products));
    localStorage.setItem('ls_matrix', JSON.stringify(matrix));
    localStorage.setItem('ls_logs', JSON.stringify(logs));
  }, [machines, products, matrix, logs]);

  const handleLogout = () => {
    setUser(null);
    showToast('Sessão encerrada com sucesso.', 'success');
  };

  if (!user) {
    return <AuthView setUser={setUser} showToast={showToast} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 pb-20 md:pb-0 selection:bg-emerald-200">
      
      {/* Cabeçalho Fixo Oficial da La Serenísima */}
      <header className="bg-[#128148] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-lg tracking-wider leading-none">LA SERENISSIMA</h1>
                <span className="bg-[#cc0000] text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest shadow-sm">Industrial</span>
              </div>
              <span className="text-[11px] text-emerald-100 font-medium tracking-wide">Gestão de Envase & OEE Dinâmico</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-xs font-bold truncate max-w-[180px]">{user.email}</p>
              <p className="text-[10px] text-emerald-200 uppercase font-black tracking-widest">Admin Manutenção</p>
            </div>
            <button onClick={handleLogout} className="p-2 bg-black/20 hover:bg-black/30 rounded-xl transition text-white" title="Sair">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Abas Principais de Navegação */}
        <div className="bg-[#0f6b3c] px-4 flex space-x-1 overflow-x-auto no-scrollbar shadow-inner">
          {[
            { id: 'dashboard', label: 'Dashboard Inteligente', icon: BarChart3 },
            { id: 'novo_lancamento', label: 'Novo Lançamento', icon: PlusCircle },
            { id: 'historico', label: 'Histórico & Exportar', icon: ClipboardList },
            { id: 'cadastros', label: 'Cadastros Base', icon: Settings },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button 
                key={tab.id} 
                onClick={() => setCurrentTab(tab.id)} 
                className={`flex items-center space-x-2 py-3 px-4 font-bold text-sm whitespace-nowrap border-b-4 transition ${isActive ? 'border-[#cc0000] text-white bg-white/10' : 'border-transparent text-emerald-100 hover:text-white hover:bg-white/5'}`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Alerta Notificação Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[100] animate-bounce">
          <div className={`px-6 py-4 rounded-2xl shadow-2xl text-white font-bold flex items-center space-x-3 ${toast.type === 'error' ? 'bg-[#cc0000]' : 'bg-[#128148]'}`}>
            {toast.type === 'error' ? <XCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Renderização Dinâmica de Telas */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {currentTab === 'dashboard' && <DashboardView logs={logs} machines={machines} products={products} />}
        {currentTab === 'novo_lancamento' && <NovoLancamentoView userEmail={user.email} machines={machines} products={products} matrix={matrix} logs={logs} setLogs={setLogs} showToast={showToast} />}
        {currentTab === 'historico' && <HistoricoView logs={logs} machines={machines} products={products} setLogs={setLogs} showToast={showToast} />}
        {currentTab === 'cadastros' && <CadastrosView machines={machines} setMachines={setMachines} products={products} setProducts={setProducts} matrix={matrix} setMatrix={setMatrix} showToast={showToast} />}
      </main>
    </div>
  );
}

// ============================================================================
// TELA DE AUTENTICAÇÃO COM LOGIN, GOOGLE SSO E MAGIC LINK
// ============================================================================
function AuthView({ setUser, showToast }) {
  const [authMethod, setAuthMethod] = useState('credentials'); // credentials | google | magic_link
  const [email, setEmail] = useState('manutencao@laserenisima.com.ar');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser({ email, nome: email.split('@')[0] });
      showToast('Autenticado com sucesso no sistema!');
      setLoading(false);
    }, 600);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email: 'sso.google@laserenisima.com.ar', nome: 'Usuário Google SSO' });
      showToast('Autenticado via Google SSO com sucesso!');
      setLoading(false);
    }, 800);
  };

  const handleMagicLink = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      showToast('Link Mágico enviado para seu e-mail corporativo!', 'success');
      setUser({ email, nome: 'Usuário Magic Link' });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 selection:bg-[#128148]">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 border-t-8 border-[#128148] relative overflow-hidden">
        
        <div className="text-center mb-8 relative z-10">
          <div className="bg-[#128148]/10 text-[#128148] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#128148]/20 shadow-inner">
            <Factory className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">LA SERENISSIMA</h1>
          <p className="text-[11px] font-black text-[#cc0000] uppercase tracking-widest mt-1">Acesso Restrito - Manutenção</p>
        </div>

        {/* Seleção de Método de Login */}
        <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
          <button 
            type="button"
            onClick={() => setAuthMethod('credentials')} 
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition ${authMethod === 'credentials' ? 'bg-white shadow text-[#128148]' : 'text-slate-500'}`}
          >
            E-mail / Senha
          </button>
          <button 
            type="button"
            onClick={() => setAuthMethod('google')} 
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition ${authMethod === 'google' ? 'bg-white shadow text-[#128148]' : 'text-slate-500'}`}
          >
            Google SSO
          </button>
          <button 
            type="button"
            onClick={() => setAuthMethod('magic_link')} 
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition ${authMethod === 'magic_link' ? 'bg-white shadow text-[#128148]' : 'text-slate-500'}`}
          >
            Magic Link
          </button>
        </div>

        {authMethod === 'credentials' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase tracking-wide mb-1.5">E-mail Corporativo</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-semibold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none transition" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase tracking-wide mb-1.5">Senha</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-semibold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none transition" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-4 bg-[#128148] hover:bg-[#0f6b3c] text-white font-black rounded-2xl shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
              {loading ? <Loader2 className="w-5 h-5" /> : 'Entrar no Sistema'}
            </button>
          </form>
        )}

        {authMethod === 'google' && (
          <div className="space-y-4 text-center">
            <p className="text-xs text-slate-500 font-medium">Autenticação rápida com sua conta corporativa Google.</p>
            <button type="button" onClick={handleGoogleLogin} disabled={loading} className="w-full py-4 bg-slate-800 hover:bg-black text-white font-black rounded-2xl shadow-lg flex items-center justify-center gap-3 transition">
              {loading ? <Loader2 className="w-5 h-5" /> : 'Continuar com Google SSO'}
            </button>
          </div>
        )}

        {authMethod === 'magic_link' && (
          <form onSubmit={handleMagicLink} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase tracking-wide mb-1.5">Seu E-mail Corporativo</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-semibold bg-slate-50 focus:border-[#128148] focus:outline-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-4 bg-[#cc0000] hover:bg-red-700 text-white font-black rounded-2xl shadow-lg flex items-center justify-center gap-2 transition">
              {loading ? <Loader2 className="w-5 h-5" /> : 'Enviar Link sem Senha'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// DASHBOARD EXECUTIVO COM IA GEMINI E KPIS DE PRODUÇÃO
// ============================================================================
function DashboardView({ logs, machines, products }) {
  const [aiReport, setAiReport] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const activeLogs = logs.filter(l => !l.deleted_at);

  const totalPacotes = activeLogs.reduce((acc, l) => acc + (Number(l.accepted_volume) || 0), 0);
  const totalPerdaMpKg = activeLogs.reduce((acc, l) => acc + (Number(l.calculated_mp_loss_kg) || 0), 0);
  const avgOee = activeLogs.length ? (activeLogs.reduce((acc, l) => acc + (Number(l.calculated_efficiency) || 0), 0) / activeLogs.length).toFixed(1) : 0;
  const totalPerdaEmb = activeLogs.reduce((acc, l) => acc + (Number(l.calculated_packaging_loss_kg) || 0), 0);
  const totalRejeitos = activeLogs.reduce((acc, l) => acc + (Number(l.total_rejects) || 0), 0);
  const avgPerdaMpPct = activeLogs.length ? (activeLogs.reduce((acc, l) => acc + (Number(l.perda_mp_percent) || 0), 0) / activeLogs.length).toFixed(2) : 0;

  const generateAIInsight = async () => {
    setIsGenerating(true);
    setError("");
    
    const machineStats = machines.filter(m => m.is_active).map(m => {
      const mLogs = activeLogs.filter(l => l.machine_id === m.id);
      const mOee = mLogs.length ? (mLogs.reduce((acc, l) => acc + (Number(l.calculated_efficiency) || 0), 0) / mLogs.length).toFixed(1) : 0;
      const mPerda = mLogs.reduce((acc, l) => acc + (Number(l.calculated_mp_loss_kg) || 0), 0);
      return `- ${m.nome}: OEE ${mOee}%, Perda Leite ${mPerda.toFixed(1)}kg`;
    }).join('\n');

    const promptText = `
    Analise os dados de produção do turno da fábrica La Serenísima (Bragança Paulista):
    - Pacotes Totais: ${totalPacotes}
    - OEE Geral: ${avgOee}%
    - Perda Total Leite: ${totalPerdaMpKg.toFixed(1)} kg
    - Média Perda MP %: ${avgPerdaMpPct}% (Meta < 0.35%)
    - Perda Embalagem: ${totalPerdaEmb.toFixed(1)} kg (${totalRejeitos} rejeitos)

    Desempenho por Linha:
    ${machineStats}

    Gere um relatório executivo industrial contendo:
    1. Avaliação geral do turno.
    2. Identificação do maior ofensor de perdas.
    3. Três (3) sugestões práticas de manutenção para as ensacadeiras e balanças.
    `;

    try {
      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: {
          parts: [{ text: "Atue como Engenheiro de Produção e Manutenção Sênior da La Serenísima. Responda em tom técnico e objetivo." }]
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Erro na comunicação com a IA.");
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) setAiReport(text);
      else throw new Error("Resposta da IA vazia.");
    } catch (err) {
      console.error(err);
      setError("Não foi possível gerar a análise. Tente novamente mais tarde.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Consultor IA Gemini */}
      <div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-xl border-t-8 border-indigo-500 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500/20 p-3 rounded-xl border border-indigo-500/30 text-indigo-400">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-wide">Consultor IA La Serenísima</h2>
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest mt-0.5">Análise de Turno em Tempo Real</p>
            </div>
          </div>
          <button 
            onClick={generateAIInsight} 
            disabled={isGenerating || activeLogs.length === 0}
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-black rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
          >
            {isGenerating ? <Loader2 className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            {isGenerating ? "Gerando Relatório..." : "Gerar Análise do Turno"}
          </button>
        </div>

        {activeLogs.length === 0 && !isGenerating && !aiReport && (
          <p className="text-sm text-slate-400 font-medium relative z-10 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            Realize lançamentos operacionais na aba "Novo Lançamento" para alimentar a Inteligência Artificial.
          </p>
        )}

        {error && <div className="bg-red-500/10 text-red-400 p-4 rounded-xl relative z-10 text-sm font-bold">{error}</div>}

        {aiReport && (
          <div className="bg-slate-800/85 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 mt-4 relative z-10 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-medium">
            {aiReport}
          </div>
        )}
      </div>

      {/* Cards Indicadores de Desempenho (KPIs) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Produção Total</p>
          <p className="text-3xl font-black text-slate-800 mt-1">{totalPacotes.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1 font-medium">Pacotes Aceitos</p>
        </div>
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">OEE da Planta</p>
          <p className="text-3xl font-black text-[#128148] mt-1">{avgOee}%</p>
          <p className="text-xs text-slate-500 mt-1 font-medium">Eficiência Média</p>
        </div>
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Perda Leite (MP)</p>
          <p className="text-3xl font-black text-[#cc0000] mt-1">{totalPerdaMpKg.toFixed(1)} kg</p>
          <p className="text-xs text-slate-500 mt-1 font-medium">Média: {avgPerdaMpPct}%</p>
        </div>
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Perda Embalagem</p>
          <p className="text-3xl font-black text-slate-800 mt-1">{totalPerdaEmb.toFixed(1)} kg</p>
          <p className="text-xs text-slate-500 mt-1 font-medium">{totalRejeitos} Rejeitos</p>
        </div>
      </div>

      {/* Rankings de Perdas e Máquinas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
          <h3 className="font-black text-sm text-slate-800 uppercase tracking-wide mb-5 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#cc0000]" /> Ranking Perdas MP (Kg)
          </h3>
          <div className="space-y-3">
            {machines.filter(m => m.is_active).map(m => {
              const machineLogs = activeLogs.filter(l => l.machine_id === m.id);
              const mPerda = machineLogs.reduce((acc, l) => acc + (Number(l.calculated_mp_loss_kg) || 0), 0);
              return (
                <div key={m.id} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 text-[#128148] font-black flex items-center justify-center text-xs">{m.codigo}</span>
                    <span className="font-bold text-slate-700">{m.nome}</span>
                  </div>
                  <span className="font-black text-slate-900 text-lg">{mPerda.toFixed(1)} <span className="text-xs text-slate-500">Kg</span></span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
          <h3 className="font-black text-sm text-slate-800 uppercase tracking-wide mb-5 flex items-center gap-2">
            <Factory className="w-5 h-5 text-[#128148]" /> Desempenho OEE por Linha
          </h3>
          <div className="space-y-5">
            {machines.filter(m => m.is_active).map(m => {
              const machineLogs = activeLogs.filter(l => l.machine_id === m.id);
              const mOee = machineLogs.length ? (machineLogs.reduce((acc, l) => acc + (Number(l.calculated_efficiency) || 0), 0) / machineLogs.length).toFixed(1) : 0;
              return (
                <div key={m.id}>
                  <div className="flex justify-between text-xs font-black uppercase tracking-wide mb-2 text-slate-600">
                    <span>{m.nome}</span>
                    <span className={Number(mOee) >= 80 ? 'text-[#128148]' : 'text-[#cc0000]'}>{mOee}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden border border-slate-200/50">
                    <div className={`h-full rounded-full transition-all duration-1000 ${Number(mOee) >= 80 ? 'bg-[#128148]' : 'bg-amber-400'}`} style={{ width: `${Math.min(100, Number(mOee))}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FORMULÁRIO DE NOVO LANÇAMENTO COM MOTOR REATIVO EM TEMPO REAL
// ============================================================================
function NovoLancamentoView({ userEmail, machines, products, matrix, logs, setLogs, showToast }) {
  const activeMachines = machines.filter(m => m.is_active !== false);
  
  const [formData, setFormData] = useState({
    shift_date: new Date().toISOString().split('T')[0],
    shift_number: '1',
    machine_id: activeMachines[0]?.id || 'm1',
    product_id: products[0]?.id || 'p1',
    availability_hours: '',
    accepted_volume: '',
    average_weight: '',
    rejeitos_peso_baixo: '',
    rejeitos_peso_alto: ''
  });

  const availableProductsForMachine = useMemo(() => {
    const validProductIds = matrix.filter(m => m.machine_id === formData.machine_id).map(m => m.product_id);
    const valid = products.filter(p => validProductIds.includes(p.id));
    return valid.length > 0 ? valid : products;
  }, [formData.machine_id, matrix, products]);

  const selectedProduct = products.find(p => p.id === formData.product_id) || products[0];
  const selectedMatrix = matrix.find(m => m.machine_id === formData.machine_id && m.product_id === formData.product_id);
  const bpmConfigurado = selectedMatrix ? selectedMatrix.packages_per_minute : 50;
  const capacidadeNominal = bpmConfigurado * 60;

  const disp = parseFloat(formData.availability_hours) || 0;
  const volAceito = parseFloat(formData.accepted_volume) || 0;
  const medPeso = parseFloat(formData.average_weight) || 0;
  const rejBaixo = parseFloat(formData.rejeitos_peso_baixo) || 0;
  const rejAlto = parseFloat(formData.rejeitos_peso_alto) || 0;

  // CÁLCULOS MATEMÁTICOS REATIVOS EM TEMPO REAL
  const totalRejeitos = rejBaixo + rejAlto;
  const pesoNominalG = (selectedProduct?.nominal_weight_kg || 0) * 1000;
  
  const producaoLiquidaKg = (volAceito * pesoNominalG) / 1000;
  const perdaEmbalagemKg = (totalRejeitos * (selectedProduct?.standard_tare_g || 0)) / 1000;
  const perdaMpKg = (volAceito * Math.max(0, medPeso - pesoNominalG)) / 1000;
  const perdaMpPercent = producaoLiquidaKg > 0 ? (perdaMpKg / producaoLiquidaKg) * 100 : 0;
  const oeePercent = (disp > 0 && capacidadeNominal > 0) ? (((volAceito + totalRejeitos) / (disp * capacidadeNominal)) * 100) : 0;

  const isPerdaMpExceeded = perdaMpPercent > 0.35;
  const isQualityAlert = medPeso > 0 && selectedProduct && (medPeso < selectedProduct.min_weight_limit || medPeso > selectedProduct.max_weight_limit);

  // Verificação de Duplicidade (Data + Turno + Máquina + Produto)
  const existingLog = logs.find(l => 
    !l.deleted_at &&
    l.shift_date === formData.shift_date &&
    l.shift_number.toString() === formData.shift_number.toString() &&
    l.machine_id === formData.machine_id &&
    l.product_id === formData.product_id
  );

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingLog) {
      showToast('Já existe um lançamento para esta Data + Turno + Máquina + Produto.', 'error');
      return;
    }

    const newLogItem = {
      id: 'log_' + Math.random().toString(36).substr(2, 9),
      shift_date: formData.shift_date,
      shift_number: Number(formData.shift_number),
      machine_id: formData.machine_id,
      product_id: formData.product_id,
      availability_hours: disp,
      accepted_volume: volAceito,
      average_weight: medPeso,
      rejeitos_peso_baixo: rejBaixo,
      rejeitos_peso_alto: rejAlto,
      total_rejects: totalRejeitos,
      calculated_efficiency: Number(oeePercent.toFixed(1)),
      calculated_mp_loss_kg: Number(perdaMpKg.toFixed(3)),
      calculated_packaging_loss_kg: Number(perdaEmbalagemKg.toFixed(3)),
      perda_mp_percent: Number(perdaMpPercent.toFixed(2)),
      created_by: userEmail,
      created_at: new Date().toISOString(),
      deleted_at: null
    };

    setLogs([newLogItem, ...logs]);
    showToast('Lançamento salvo com sucesso!');

    // Persistência Inteligente (mantém Data, Turno e Máquina, limpa o restante)
    setFormData(prev => ({ 
      ...prev, 
      availability_hours: '', 
      accepted_volume: '', 
      average_weight: '', 
      rejeitos_peso_baixo: '', 
      rejeitos_peso_alto: '' 
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-28">
      
      {existingLog && (
        <div className="bg-amber-100 border-l-8 border-amber-500 p-4 rounded-2xl shadow-sm flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-700" />
          <p className="font-bold text-amber-900 text-sm">Atenção: Já existe um registro para esta combinação exata neste turno.</p>
        </div>
      )}

      {isQualityAlert && (
        <div className="bg-[#cc0000] text-white p-5 rounded-[2rem] shadow-lg flex items-center space-x-4 animate-pulse">
          <ShieldAlert className="w-10 h-10 flex-shrink-0" />
          <div>
            <p className="font-black text-sm uppercase">Atenção: Média fora das especificações de Qualidade</p>
            <p className="text-xs">Peso permitido: {selectedProduct?.min_weight_limit}g - {selectedProduct?.max_weight_limit}g.</p>
          </div>
        </div>
      )}

      {isPerdaMpExceeded && (
        <div className="bg-red-50 border-2 border-[#cc0000] text-[#cc0000] p-5 rounded-[2rem] shadow-sm flex items-center space-x-4">
          <AlertTriangle className="w-10 h-10 flex-shrink-0" />
          <div>
            <p className="font-black text-sm uppercase">Indicador Vermelho - Fora da Meta</p>
            <p className="text-xs font-bold">Perda MP está em {perdaMpPercent.toFixed(2)}% (Teto é 0,35%).</p>
          </div>
        </div>
      )}

      {/* Seleção de Contexto */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200">
        <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest border-b pb-4 mb-5 flex items-center gap-3">
          <Layers className="w-5 h-5 text-[#128148]" /> Onde e Quando (Turno)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Data</label>
            <input type="date" name="shift_date" value={formData.shift_date} onChange={handleChange} required className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-2xl font-bold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Turno</label>
            <select name="shift_number" value={formData.shift_number} onChange={handleChange} className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-2xl font-bold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none">
              <option value="1">Turno 1 (07:00 - 16:45)</option>
              <option value="2">Turno 2 (17:00 - 02:45)</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Linha (Máquina)</label>
            <select name="machine_id" value={formData.machine_id} onChange={handleChange} className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-2xl font-bold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none">
              {activeMachines.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Produto (SKU - Descrição)</label>
            <select name="product_id" value={formData.product_id} onChange={handleChange} className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-2xl font-bold bg-slate-50 focus:border-[#128148] focus:bg-white focus:outline-none">
              {availableProductsForMachine.map(p => <option key={p.id} value={p.id}>{p.sku} - {p.description} ({(p.nominal_weight_kg*1000)}g)</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Inputs da Balança Dinâmica */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 relative">
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-emerald-50 px-4 py-2 rounded-xl flex flex-col items-end border border-emerald-100">
            <span className="text-[10px] font-black uppercase text-[#128148]">Velocidade Configurada</span>
            <span className="text-xl font-black text-slate-800">{bpmConfigurado} <span className="text-xs">BPM</span></span>
          </div>
        </div>
        <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest border-b pb-4 mb-5 flex items-center gap-3 w-2/3">
          <PlusCircle className="w-5 h-5 text-[#128148]" /> Apontamento da Balança Dinâmica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Disponibilidade (Horas)</label>
            <input type="number" step="any" inputMode="decimal" name="availability_hours" value={formData.availability_hours} onChange={handleChange} placeholder="Ex: 7.5" required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-black bg-slate-50 focus:bg-white focus:border-[#128148] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Volume Aceito (Pacotes)</label>
            <input type="number" inputMode="numeric" name="accepted_volume" value={formData.accepted_volume} onChange={handleChange} placeholder="Ex: 22000" required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-black bg-slate-50 focus:bg-white focus:border-[#128148] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Média Peso (g) - Ref: {pesoNominalG}g</label>
            <input type="number" step="any" inputMode="decimal" name="average_weight" value={formData.average_weight} onChange={handleChange} placeholder={`${pesoNominalG}`} required className={`w-full px-5 py-4 border-2 rounded-2xl font-black focus:outline-none ${isQualityAlert ? 'border-[#cc0000] bg-red-50 text-[#cc0000]' : 'border-slate-200 bg-slate-50 focus:bg-white focus:border-[#128148]'}`} />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Rejeitos Peso Baixo</label>
            <input type="number" inputMode="numeric" name="rejeitos_peso_baixo" value={formData.rejeitos_peso_baixo} onChange={handleChange} placeholder="0" required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-black bg-slate-50 focus:bg-white focus:border-[#128148] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 ml-1">Rejeitos Peso Alto</label>
            <input type="number" inputMode="numeric" name="rejeitos_peso_alto" value={formData.rejeitos_peso_alto} onChange={handleChange} placeholder="0" required className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl font-black bg-slate-50 focus:bg-white focus:border-[#128148] focus:outline-none" />
          </div>
        </div>
      </div>

      {/* Motor Reativo com Indicadores calculados ao vivo */}
      <div className="bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden border-t-8 border-[#128148]">
        <h3 className="text-[10px] font-black uppercase text-emerald-400 tracking-widest mb-6 flex items-center gap-3">
          <RefreshCcw className="w-4 h-4 animate-spin" /> Motor Reativo (Cálculo em Tempo Real)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
            <span className="text-[9px] uppercase font-black text-slate-400 block mb-1">Rejeitos</span>
            <span className="text-2xl font-black text-white">{totalRejeitos} un.</span>
          </div>
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
            <span className="text-[9px] uppercase font-black text-slate-400 block mb-1">Prd. Líquida</span>
            <span className="text-2xl font-black text-white">{producaoLiquidaKg.toFixed(1)} Kg</span>
          </div>
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
            <span className="text-[9px] uppercase font-black text-slate-400 block mb-1">Perda Emb.</span>
            <span className="text-2xl font-black text-amber-400">{perdaEmbalagemKg.toFixed(2)} Kg</span>
          </div>
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
            <span className="text-[9px] uppercase font-black text-slate-400 block mb-1">Perda Leite</span>
            <span className="text-2xl font-black text-amber-400">{perdaMpKg.toFixed(2)} Kg</span>
          </div>
          <div className={`p-5 rounded-2xl border ${isPerdaMpExceeded ? 'bg-red-950 border-[#cc0000]' : 'bg-slate-800 border-slate-700'}`}>
            <span className="text-[9px] uppercase font-black text-slate-400 block mb-1">% P. Leite</span>
            <span className={`text-2xl font-black ${isPerdaMpExceeded ? 'text-red-400' : 'text-emerald-400'}`}>{perdaMpPercent.toFixed(2)}%</span>
          </div>
          <div className="bg-[#128148]/20 p-5 rounded-2xl border border-[#128148]/50">
            <span className="text-[9px] uppercase font-black text-emerald-200 block mb-1">OEE Final</span>
            <span className="text-2xl font-black text-white">{oeePercent.toFixed(1)}%</span>
          </div>
        </div>
      </div>

      {/* Botão Flutuante de Salvar Lançamento */}
      <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-96 z-40">
        <button type="submit" className="w-full py-5 bg-[#128148] hover:bg-[#0f6b3c] text-white font-black rounded-3xl shadow-2xl flex items-center justify-center gap-3 text-lg uppercase tracking-widest border border-emerald-400/30 transition active:scale-95">
          <Save className="w-6 h-6" /> Salvar Lançamento
        </button>
      </div>
    </form>
  );
}

// ============================================================================
// HISTÓRICO AUDITÁVEL E EXPORTAÇÃO (CSV E RELATÓRIOS)
// ============================================================================
function HistoricoView({ logs, machines, products, setLogs, showToast }) {
  const [filterMachine, setFilterMachine] = useState('all');
  const [filterDate, setFilterDate] = useState('');
  
  const filteredLogs = logs.filter(l => {
    if (l.deleted_at) return false;
    if (filterMachine !== 'all' && l.machine_id !== filterMachine) return false;
    if (filterDate && l.shift_date !== filterDate) return false;
    return true;
  });

  const handleSoftDelete = (id) => {
    setLogs(logs.map(l => l.id === id ? { ...l, deleted_at: new Date().toISOString() } : l));
    showToast('Registro removido via Soft Delete com sucesso.');
  };

  const exportCSV = () => {
    if (filteredLogs.length === 0) {
      showToast('Nenhum registro para exportar.', 'error');
      return;
    }
    let csv = 'Data,Turno,Maquina,Produto,OEE,Perda_MP_Kg,Perda_MP_Pct,Perda_Emb_Kg\n';
    filteredLogs.forEach(l => {
      const mach = machines.find(m => m.id === l.machine_id);
      const prod = products.find(p => p.id === l.product_id);
      csv += `${l.shift_date},T${l.shift_number},"${mach?.nome || ''}","SKU ${prod?.sku || ''}",${l.calculated_efficiency}%,${l.calculated_mp_loss_kg},${l.perda_mp_percent}%,${l.calculated_packaging_loss_kg}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `relatorio_producao_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Relatório CSV exportado com sucesso!');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 border-b pb-6">
          <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-3">
            <Filter className="w-5 h-5 text-[#128148]" /> Auditoria e Exportação
          </h2>
          <div className="flex gap-3 w-full md:w-auto">
            <button onClick={exportCSV} className="flex-1 md:flex-none px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 uppercase transition">
              <FileSpreadsheet className="w-4 h-4" /> Exportar CSV / Excel
            </button>
            <button onClick={() => window.print()} className="flex-1 md:flex-none px-6 py-3 bg-[#cc0000] hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 uppercase transition">
              <FileText className="w-4 h-4" /> Imprimir Relatório
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl font-bold bg-slate-50 focus:border-[#128148] focus:outline-none" />
          <select value={filterMachine} onChange={(e) => setFilterMachine(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl font-bold bg-slate-50 focus:border-[#128148] focus:outline-none">
            <option value="all">Todas as Linhas</option>
            {machines.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
          </select>
          <button onClick={() => { setFilterDate(''); setFilterMachine('all'); }} className="py-3.5 bg-slate-200 text-slate-700 font-black rounded-xl text-xs uppercase hover:bg-slate-300 transition">
            Resetar Filtros
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto p-1">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#128148] text-white text-[10px] font-black uppercase tracking-widest">
                <th className="p-5">Turno/Data</th>
                <th className="p-5">Equipamento</th>
                <th className="p-5">SKU - Produto</th>
                <th className="p-5">OEE</th>
                <th className="p-5">Perda MP</th>
                <th className="p-5 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredLogs.length === 0 && <tr><td colSpan={6} className="p-12 text-center text-slate-400 font-bold">Nenhum registro encontrado.</td></tr>}
              {filteredLogs.map(l => {
                const prod = products.find(p => p.id === l.product_id);
                const mach = machines.find(m => m.id === l.machine_id);
                return (
                  <tr key={l.id} className="hover:bg-slate-50">
                    <td className="p-5 font-bold text-slate-700">T{l.shift_number} - {l.shift_date}</td>
                    <td className="p-5 font-bold text-slate-800">{mach?.nome}</td>
                    <td className="p-5 text-slate-600 font-medium">{prod?.sku} - {prod?.description} ({(prod?.nominal_weight_kg*1000)}g)</td>
                    <td className="p-5"><span className="bg-emerald-100 text-[#128148] px-3 py-1 rounded-md font-black">{l.calculated_efficiency}%</span></td>
                    <td className="p-5"><span className={`px-3 py-1 rounded-md font-black ${l.perda_mp_percent > 0.35 ? 'bg-red-100 text-[#cc0000]' : 'text-slate-600'}`}>{l.perda_mp_percent}%</span></td>
                    <td className="p-5 text-center">
                      <button onClick={() => handleSoftDelete(l.id)} className="p-2 text-slate-300 hover:text-[#cc0000] hover:bg-red-50 rounded-lg transition" title="Excluir">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CADASTROS BASE (MÁQUINAS, PRODUTOS E MATRIZ DE VELOCIDADE BPM)
// ============================================================================
function CadastrosView({ machines, setMachines, products, setProducts, matrix, setMatrix, showToast }) {
  const [activeSubTab, setActiveSubTab] = useState('products');
  const [editingMatrixBpm, setEditingMatrixBpm] = useState({});

  const handleBpmChange = (matrixId, value) => {
    setEditingMatrixBpm(prev => ({ ...prev, [matrixId]: value }));
  };

  const handleSaveBpm = (matrixId) => {
    const newBpm = parseInt(editingMatrixBpm[matrixId], 10);
    if (!newBpm || newBpm <= 0) {
      showToast('Insira um valor de BPM válido.', 'error');
      return;
    }
    const updated = matrix.map(m => m.id === matrixId ? { ...m, packages_per_minute: newBpm, packages_per_hour: newBpm * 60 } : m);
    setMatrix(updated);
    showToast('Velocidade BPM atualizada com sucesso!');
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-300">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        <button onClick={() => setActiveSubTab('products')} className={`px-6 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest ${activeSubTab === 'products' ? 'bg-[#128148] text-white shadow-md' : 'bg-white text-slate-500'}`}>
          <PackageIcon className="w-4 h-4 inline-block mr-2" /> SKUs Cadastrados ({products.length})
        </button>
        <button onClick={() => setActiveSubTab('matrix')} className={`px-6 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest ${activeSubTab === 'matrix' ? 'bg-[#128148] text-white shadow-md' : 'bg-white text-slate-500'}`}>
          <Layers className="w-4 h-4 inline-block mr-2" /> Matriz de Velocidade (BPM)
        </button>
      </div>

      {activeSubTab === 'products' && (
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {products.map(p => (
                <div key={p.id} className="p-5 border-2 border-slate-100 rounded-2xl bg-slate-50">
                  <span className="text-xs font-black text-white bg-slate-800 px-2.5 py-1 rounded-lg">SKU: {p.sku}</span>
                  <h4 className="font-black text-slate-800 text-base mt-2">{p.description} ({(p.nominal_weight_kg * 1000)}g)</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm bg-white p-4 rounded-xl border border-slate-100 mt-3">
                    <div><span className="text-[9px] text-slate-400 font-black uppercase">Tara</span><br/><strong className="text-amber-600">{p.standard_tare_g}g</strong></div>
                    <div><span className="text-[9px] text-slate-400 font-black uppercase">Limites</span><br/><strong className="text-[#cc0000] text-xs">{p.min_weight_limit}g - {p.max_weight_limit}g</strong></div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      )}

      {activeSubTab === 'matrix' && (
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
             <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    <th className="p-4">Linha Oficial</th>
                    <th className="p-4">SKU - Descrição</th>
                    <th className="p-4 bg-emerald-50 text-emerald-800">BPM (Editável)</th>
                    <th className="p-4 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {matrix.map(m => {
                    const mach = machines.find(x => x.id === m.machine_id);
                    const prod = products.find(x => x.id === m.product_id);
                    const currentVal = editingMatrixBpm[m.id] !== undefined ? editingMatrixBpm[m.id] : m.packages_per_minute;
                    return (
                      <tr key={m.id} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">{mach?.nome}</td>
                        <td className="p-4 text-slate-600 font-medium">{prod?.sku} - {prod?.description} ({(prod?.nominal_weight_kg*1000)}g)</td>
                        <td className="p-4 bg-emerald-50/50">
                          <div className="flex items-center gap-2">
                            <input 
                              type="number" 
                              value={currentVal} 
                              onChange={(e) => handleBpmChange(m.id, e.target.value)}
                              className="w-24 px-3 py-1.5 border-2 border-emerald-300 rounded-xl font-black text-emerald-800 bg-white"
                            />
                            <span className="text-xs font-bold text-emerald-700">BPM</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <button onClick={() => handleSaveBpm(m.id)} className="px-4 py-2 bg-[#128148] text-white font-bold rounded-xl text-xs shadow-sm hover:bg-[#0f6b3c]">
                            Salvar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
             </table>
          </div>
        </div>
      )}
    </div>
  );
}