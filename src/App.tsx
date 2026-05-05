import { motion } from 'motion/react';
import { 
  CreditCard, 
  ShieldCheck, 
  MessageSquare, 
  Layers, 
  ChevronRight,
  AlertCircle,
  Info,
  Lock,
  ShieldAlert,
  ArrowRight,
  Smartphone,
  Globe
} from 'lucide-react';

const FADE_UP = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-slate-900 selection:text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 bg-slate-900 flex items-center justify-center transition-transform group-hover:rotate-6">
            <span className="text-white font-black text-xs italic tracking-tighter">CM</span>
          </div>
          <span className="font-bold tracking-tighter text-lg uppercase">CollabMen.id</span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#about" className="hover:text-slate-900 transition-colors">01 Prolog</a>
          <a href="#criteria" className="hover:text-slate-900 transition-colors">02 Metrik</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">03 Alur</a>
          <a href="#compliance" className="hover:text-slate-900 transition-colors text-red-400">04 Regulasi</a>
          <a href="#payment" className="hover:text-slate-900 transition-colors">05 Finansial</a>
        </div>

        <button className="bg-slate-900 text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
          Portal Admin
        </button>
      </nav>

      {/* Hero Section: Corporate Presentation */}
      <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-8 border border-slate-200 px-4 py-1.5 bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">SOP v2.0 // INTERNAL_USE_ONLY</span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-black tracking-[-0.06em] leading-[0.85] mb-12 uppercase italic">
            CollabMen<br />
            <span className="text-slate-100 not-italic block">Management.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-end">
            <p className="text-lg md:text-2xl text-slate-500 max-w-xl leading-[1.3] font-light">
              Selamat datang di pusat regulasi resmi Talent Pria. Standar operasional ini diciptakan untuk profesionalisme dan keseragaman data.
            </p>
            <div className="flex gap-10 border-l border-slate-100 pl-10 h-min">
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Effective</div>
                <div className="text-xl font-black italic">22.04.26</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Auth Level</div>
                <div className="text-xl font-black italic">TIER_01</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Background Element */}
        <div className="absolute top-20 right-0 text-[30vw] font-black text-slate-50 leading-none select-none pointer-events-none uppercase -z-10 tracking-tighter italic">
          SOP
        </div>
      </section>

      {/* Highlights Banner: Quick Critical Rules */}
      <div className="bg-slate-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <div className="flex items-center gap-6">
            <ShieldCheck size={32} className="text-emerald-400 shrink-0" />
            <p className="text-xs uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed">
              Seluruh talent wajib mematuhi protokol tanpa terkecuali.
            </p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-slate-800" />
          <div className="flex items-center gap-6">
            <Smartphone size={32} className="text-blue-400 shrink-0" />
            <p className="text-xs uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed text-slate-400">
              Komunikasi satu arah melalui Administrator resmi.
            </p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-slate-800" />
          <div className="flex items-center gap-6">
            <Lock size={32} className="text-red-400 shrink-0" />
            <p className="text-xs uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed">
              Pelanggaran berujung Blacklist Permanen.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Intro + Importance */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 border-x border-slate-50">
        <motion.div {...FADE_UP} className="lg:col-span-4 lg:sticky lg:top-32 h-min space-y-8">
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] block">01 / Prologue</span>
          <h2 className="text-6xl font-black tracking-tighter leading-none uppercase italic">Visi & <br />Protokol.</h2>
          <div className="w-16 h-1 w- bg-slate-900" />
        </motion.div>

        <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="lg:col-span-8 space-y-12">
          <div className="p-12 bg-slate-50 border border-slate-100 relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
              <Info size={40} />
            </div>
            <p className="text-2xl font-medium leading-relaxed italic text-slate-800">
              "CollabMen.id adalah ekosistem manajemen talent pria premium yang berfokus pada hasil strategis dan integritas operasional."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-slate-900" /> Efisiensi Data
              </h4>
              <p className="text-sm text-slate-500 leading-loose">
                Memastikan setiap talent terdaftar dengan metadata yang valid untuk mempermudah kurasi brand.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-slate-900" /> Transparansi Hukum
              </h4>
              <p className="text-sm text-slate-500 leading-loose">
                Sistem reward dan sanksi yang adil guna menjaga reputasi agensi di mata global clients.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section: Professional Glossary */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...FADE_UP} className="mb-16">
            <h3 className="text-4xl font-black tracking-tighter uppercase italic mb-12">Bahasa Manajemen.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'PC', desc: 'Private Chat with HQ.' },
                { label: 'SOW', desc: 'Scope of Work / Task.' },
                { label: 'ER', desc: 'Engagement Rate.' },
                { label: 'AVG', desc: 'Average Reach.' },
                { label: 'PIC', desc: 'Person in Charge.' },
                { label: 'BLACKLIST', desc: 'Terminal Removal.' },
                { label: 'TOP', desc: 'Terms of Payment.' },
                { label: 'GF', desc: 'Google Form Portal.' },
              ].map(item => (
                <div key={item.label} className="bg-white p-8 border border-slate-200 hover:border-slate-900 transition-all duration-300">
                  <div className="text-2xl font-black mb-3 italic tracking-tighter">{item.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Core Data Metrics */}
      <section id="criteria" className="py-40 px-6 max-w-7xl mx-auto border-x border-slate-50">
        <div className="grid lg:grid-cols-2 gap-32">
          <motion.div {...FADE_UP}>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] block mb-8">02 / Auditing</span>
            <h3 className="text-7xl font-black tracking-tighter leading-none uppercase italic mb-12">
              Integritas<br />Aset Digital.
            </h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
              Data Anda adalah mata uang di manajemen ini. Ketidakkonsistenan data dapat mengakibatkan diskualifikasi dari campaign branding utama.
            </p>
            
            <div className="space-y-1">
              {[
                'Username & Link Profil Aktif',
                'Domisili & WhatsApp Responsive',
                'Audit AVG Views (10 Konten Terakhir)',
                'ER Calculation & Niche Specialization'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border-b border-slate-100 group hover:pl-8 transition-all">
                  <div className="text-xs font-black text-slate-200 group-hover:text-slate-900 transition-colors">0{i+1}</div>
                  <div className="text-sm font-bold uppercase tracking-widest">{text}</div>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...FADE_UP} className="bg-slate-900 p-16 text-white relative shadow-2xl">
            <div className="absolute top-8 left-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Audit Intelligence</div>
            <div className="space-y-12 mt-8">
              <div className="border-b border-white/5 pb-8">
                <div className="text-4xl font-black mb-2 italic">ER % Audit</div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Formula: Organic Interaction / Reach Volume</p>
              </div>
              <div className="border-b border-white/5 pb-8">
                <div className="text-4xl font-black mb-2 italic">AVG Reach</div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Historical Logic: Last 10 Organic Posts</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 italic text-sm leading-relaxed text-slate-300">
                "Pihak Manajemen rutin melakukan audit manual guna memastikan integritas data talent sebelum divalidasi ke pihak client."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Workflow - Highlighted steps */}
      <section id="workflow" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h3 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none">Alur Kampanye.</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
            {[
              { step: '01', title: 'Broadcast', desc: 'Menelaah brief campaign secara detail pada channel.' },
              { step: '02', title: 'Registration', desc: 'Input data melalui GForm dengan presisi 100%.' },
              { step: '03', title: 'Onboarding', desc: 'Mempelajari SOW setelah dikonfirmasi via WhatsApp.' },
              { step: '04', title: 'Production', desc: 'Eksekusi konten & pelaporan hasil sesuai KPI.' },
            ].map(item => (
              <div key={item.step} className="bg-white p-16 hover:bg-slate-900 group transition-all duration-500">
                <div className="text-8xl font-black text-slate-50 group-hover:text-white/5 transition-colors mb-12 select-none italic tracking-tighter">
                  {item.step}
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest mb-6 group-hover:text-white">{item.title}</h4>
                <div className="h-0.5 w-12 bg-slate-900 group-hover:bg-white transition-all mb-6" />
                <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase group-hover:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITICAL HIGHLIGHT: COMPLIANCE SECTION */}
      <section id="compliance" className="py-40 px-6 max-w-7xl mx-auto">
        <motion.div {...FADE_UP} className="border-x-0 md:border-x border-slate-50">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.6em] block">CRITICAL PROTOCOL</span>
              <h3 className="text-7xl font-black tracking-tighter uppercase leading-none italic">Sanctions & <br />Integrity.</h3>
            </div>
            <div className="p-8 bg-red-50 border-l-4 border-red-600 max-w-sm">
              <p className="text-xs font-black uppercase tracking-widest text-red-800 leading-loose">
                "Setiap bentuk pembocoran data kampanye atau ghosting adalah pelanggaran berat."
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-12 border-2 border-slate-900 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 scale-150 rotate-12 opacity-[0.03] text-[20vw] font-black pointer-events-none italic">LAW</div>
              <h4 className="text-2xl font-black uppercase italic flex items-center gap-4">
                <Lock className="text-slate-900" size={24} /> Aturan Komunikasi
              </h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 leading-loose">
                Dilarang keras menghubungi Brand secara mandiri (Cross-Management). Seluruh koordinasi wajib melalui administrator resmi kami: Jeff, Andin, atau Misbah.
              </p>
              <div className="bg-slate-900 text-white p-8 flex items-center gap-8">
                <AlertCircle size={32} />
                <div className="text-[10px] font-black uppercase tracking-[0.2em]">
                  GHOSTING = AUTO-BLACKLIST & REMOVAL FROM ALL ACTIVE CAMPAIGNS.
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {[
                { type: 'Ringan', desc: 'Keterlambatan input data atau respon admin.', action: 'Official Warning' },
                { type: 'Sedang', desc: 'Terlambat posting konten tanpa approval tertulis.', action: 'Payment Hold / Fine' },
                { type: 'Berat', desc: 'Double Management, Ghosting, Leak Data Brand.', action: 'PERMANENT BLACKLIST' },
              ].map((item, i) => (
                <div key={i} className={`p-10 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 ${item.type === 'Berat' ? 'bg-red-600 text-white border-red-600' : 'bg-white hover:bg-slate-50 transition-colors'}`}>
                  <div className="text-center md:text-left">
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.type === 'Berat' ? 'text-white/60' : 'text-slate-300'}`}>Violation: {item.type}</div>
                    <div className="text-sm font-bold uppercase tracking-widest">{item.desc}</div>
                  </div>
                  <div className={`px-6 py-2 border text-[10px] font-black uppercase tracking-widest italic ${item.type === 'Berat' ? 'border-white text-white' : 'border-slate-900 text-slate-900'}`}>
                    {item.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Payment - Clean & Formal */}
      <section id="payment" className="py-40 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...FADE_UP} className="space-y-16">
            <div className="flex flex-col items-center gap-6">
              <CreditCard size={64} strokeWidth={1} className="text-slate-700" />
              <h3 className="text-6xl font-black tracking-tighter uppercase italic">Terms of Payment.</h3>
              <div className="h-px w-24 bg-white/20" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="p-12 bg-slate-900 space-y-4">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Payment Cycle</div>
                <div className="text-2xl font-black italic">Net 5 Work Days</div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-loose">
                  Terhitung setelah SOW lengkap dan divalidasi oleh tim audit pusat.
                </p>
              </div>
              <div className="p-12 bg-slate-900 space-y-4">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Validation Policy</div>
                <div className="text-2xl font-black italic">100% Accuracy</div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-loose">
                  Verifikasi data rekening adalah tanggung jawab penuh talent. Kesalahan input data = Resiko Talent.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-12 bg-white/5 border border-white/10 text-left">
              <ShieldAlert className="text-emerald-500 shrink-0" size={32} />
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-relaxed italic">
                Pihak manajemen tetap menghormati transparansi keuangan. Bukti transfer resmi rilis melalui channel maksimal 5 hari kerja setelah periode pembayaran kampanye dimulai.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Corporate Footer */}
      <footer className="py-24 px-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-slate-900 flex items-center justify-center transition-all group-hover:scale-110">
                <span className="text-white font-black text-xl italic tracking-tighter">CM</span>
              </div>
              <h2 className="text-4xl font-black tracking-[-0.08em] uppercase italic leading-none">
                Collab<br />Men.id
              </h2>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs">
              Elevating the professional standards of male talent management. High integrity, high performance.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">HQ Support</h5>
            <div className="space-y-3">
              {['Jeff (Lead Admin)', 'Andin (Auditor)', 'Misbah (Accountant)'].map(name => (
                <div key={name} className="text-xs font-black uppercase tracking-widest text-slate-900 italic hover:pl-2 transition-all cursor-crosshair">
                   {name}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Social Connections</h5>
            <div className="flex gap-8">
              <MessageSquare size={24} className="text-slate-200 hover:text-slate-900 transition-colors cursor-pointer" />
              <Globe size={24} className="text-slate-200 hover:text-slate-900 transition-colors cursor-pointer" />
              <Layers size={24} className="text-slate-200 hover:text-slate-900 transition-colors cursor-pointer" />
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-loose">
              © 2026 COLLABMEN MANAGEMENT HQ // ALL DATA ARCHIVED AND SECURED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
