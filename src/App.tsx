/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CreditCard, 
  ShieldCheck, 
  MessageSquare, 
  Layers, 
  ChevronRight
} from 'lucide-react';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-slate-900 selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center">
            <span className="text-white font-bold text-xs">CM</span>
          </div>
          <span className="font-bold tracking-tighter text-lg">CollabMen.id</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#criteria" className="hover:text-slate-900 transition-colors">Criteria</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">Workflow</a>
          <a href="#compliance" className="hover:text-slate-900 transition-colors">Compliance</a>
          <a href="#payment" className="hover:text-slate-900 transition-colors">Payment</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 cursor-pointer">
          Contact Admin
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto border-x border-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 border border-slate-200 px-3 py-1 bg-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Effective Date: April 22, 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            CollabMen.id <br />
            <span className="text-slate-400">Standard Operasional.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Selamat datang di Portal SOP resmi Manajemen KOL Talent Pria. Kami menghubungkan talent premium dengan brand terkemuka untuk mengoptimalkan karier dan pendapatan profesional Anda.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Pendahuluan & Tujuan */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-x border-slate-50 border-t">
        <motion.div {...FADE_UP} className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <ChevronRight size={14} /> 01. Pendahuluan
          </h2>
          <div className="bg-slate-50 p-10 space-y-4">
            <p className="text-xl font-medium leading-relaxed italic">
              "CollabMen.id merupakan manajemen KOL yang berfokus secara eksklusif pada talent pria."
            </p>
            <p className="text-slate-500">
              Dokumen web ini mendefinisikan regulasi, alur kerja, sistem pembayaran, serta klausul sanksi yang wajib dipatuhi oleh seluruh talent di bawah naungan kami.
            </p>
          </div>
        </motion.div>
        <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <ChevronRight size={14} /> 02. Tujuan
          </h2>
          <div className="p-10 space-y-4">
            <p className="text-slate-600 leading-loose">
              Instrumen ini disusun untuk memastikan seluruh talent memahami dan mengimplementasikan protokol operasional yang telah ditetapkan guna menyelaraskan ekspektasi manajemen, seleksi, dan ketepatan waktu administratif.
            </p>
            <div className="flex gap-4">
              <div className="h-px bg-slate-200 flex-1 mt-3" />
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Formal Protocol</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Glossary */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t bg-slate-900 text-white">
        <motion.div {...FADE_UP} className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 tracking-[0.3em]">
            03. Singkatan Penting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { label: 'PC', desc: 'Private Chat with admin/brand' },
              { label: 'MG', desc: 'Management CollabMen.id' },
              { label: 'SOW', desc: 'Scope of Work / Task detail' },
              { label: 'ER', desc: 'Engagement Rate metric' },
              { label: 'AVG', desc: 'Average Content Views' },
              { label: 'PIC', desc: 'Campaign Person in Charge' },
              { label: 'GForm', desc: 'Standard Registration Form' },
              { label: 'BLACKLIST', desc: 'Permanent account removal' },
            ].map(item => (
              <div key={item.label} className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors">
                <div className="text-xs font-bold text-slate-500 mb-2">{item.label}</div>
                <div className="text-sm uppercase tracking-wide">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 3: Data & Metrics */}
      <section id="criteria" className="py-24 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t">
        <motion.div {...FADE_UP} className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            04 & 05. Data & Metrik Wajib
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4 border-l-2 border-slate-900 pl-6 py-2">
              <h3 className="font-bold uppercase text-[11px] tracking-widest text-slate-400">Identitas</h3>
              <ul className="text-slate-900 text-sm font-medium space-y-2">
                <li>Username & Profile Link</li>
                <li>Domisili & Active WhatsApp</li>
              </ul>
            </div>
            <div className="space-y-4 border-l-2 border-slate-100 pl-6 py-2">
              <h3 className="font-bold uppercase text-[11px] tracking-widest text-slate-400">Performance</h3>
              <ul className="text-slate-900 text-sm font-medium space-y-2">
                <li>Avg Views (Last 10 Items)</li>
                <li>Engagement Rate (%)</li>
              </ul>
            </div>
            <div className="space-y-4 border-l-2 border-slate-100 pl-6 py-2">
              <h3 className="font-bold uppercase text-[11px] tracking-widest text-slate-400">Insights</h3>
              <ul className="text-slate-900 text-sm font-medium space-y-2">
                <li>Verified IG Insights</li>
                <li>Niche Specialization</li>
              </ul>
            </div>
            <div className="space-y-4 border-l-2 border-slate-100 pl-6 py-2">
              <h3 className="font-bold uppercase text-[11px] tracking-widest text-slate-400">Rate Card</h3>
              <ul className="text-slate-900 text-sm font-medium space-y-2">
                <li>Dynamic Calculation</li>
                <li>Tier-based Compensation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Workflow Map */}
      <section id="workflow" className="py-24 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t bg-slate-50">
        <motion.div {...FADE_UP} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Operations</h2>
          <h3 className="text-4xl font-bold tracking-tight">Campaign Workflow</h3>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid gap-12 relative">
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
          
          {[
            { step: '01', title: 'Broadcast Receive', desc: 'Membaca teliti detail campaign pada grup broadcast resmi.' },
            { step: '02', title: 'Application', desc: 'Melakukan registrasi melalui GForm dengan data yang 100% akurat.' },
            { step: '03', title: 'Briefing', desc: 'Mempelajari SOW dan brand requirement secara mendalam.' },
            { step: '04', title: 'Execution', desc: 'Memproduksi konten sesuai deadline tanpa pengecualian.' },
          ].map((item, idx) => (
            <motion.div 
              key={item.step}
              {...FADE_UP}
              className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}
            >
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="bg-white p-8 border border-slate-100 shadow-sm w-full">
                  <div className="text-[10px] font-bold text-slate-400 mb-2">STEP {item.step}</div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="relative z-10 w-16 h-16 bg-slate-900 text-white flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Compliance Policies */}
      <section id="compliance" className="py-24 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t">
        <motion.div {...FADE_UP} className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 underline decoration-slate-200 underline-offset-8">
            08 - 10. Compliance & Regulations
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-bold text-lg uppercase tracking-tight">Protokol Komunikasi</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Talent dilarang menghubungi brand secara langsung. Seluruh korespondensi wajib melalui administrator resmi kami: Jeff, Andin, atau Misbah. Ghosting berakibat Blacklist Permanen.
                </p>
              </div>
              <div className="space-y-4 border-t border-slate-100 pt-8 italic">
                <p className="text-slate-400 text-xs">
                  "Broadcast dan detail campaign bersifat INTERNAL dan RAHASIA; pelarangan keras terhadap publikasi ke media sosial tanpa izin."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Sanksi Pelanggaran</h4>
              <div className="space-y-1">
                {[
                  { level: 'RINGAN', sanksi: 'Reminder / Peringatan Lisan' },
                  { level: 'SEDANG', sanksi: 'Penangguhan Payment / Pembatalan Job' },
                  { level: 'BERAT', sanksi: 'KICK & BLACKLIST PERMANEN' },
                ].map(item => (
                  <div key={item.level} className="flex justify-between items-center p-4 border border-slate-50 hover:border-slate-200 transition-all bg-slate-50/50">
                    <span className="text-[10px] font-black tracking-widest text-slate-400">{item.level}</span>
                    <span className="text-xs font-bold uppercase">{item.sanksi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Payment Terms Section */}
      <section id="payment" className="py-24 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t bg-slate-50">
        <div className="max-w-4xl mx-auto border border-slate-200 bg-white p-12">
          <motion.div {...FADE_UP} className="space-y-8">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold tracking-tight underline decoration-4 decoration-slate-900 underline-offset-8 uppercase">Terms of Payment</h2>
              <CreditCard className="text-slate-200" size={40} />
            </div>
            <div className="space-y-6 text-slate-600">
              <p className="text-sm font-medium">Pembayaran kompensasi diatur oleh regulasi berikut:</p>
              <ul className="grid md:grid-cols-2 gap-8 text-xs font-bold uppercase tracking-wider">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-900">01</span>
                  Kewajiban tuntas sesuai brief kampanye secara progresif.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-900">02</span>
                  Jadwal mengikuti Terms of Payment (TOP).
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-900">03</span>
                  Verifikasi data rekening adalah tanggung jawab penuh talent.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-900">04</span>
                  Bukti transfer rilis maksimal 5 hari kerja setelah eksekusi.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning Footer */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-x border-slate-50 border-t bg-slate-900/5">
        <div className="flex items-center gap-4 text-slate-400">
          <ShieldCheck size={20} />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
            Peringatan: Segala bentuk peretasan data atau penyebaran informasi tanpa izin akan ditindaklanjuti secara hukum Republik Indonesia.
          </p>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="py-20 bg-slate-900 text-white px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xs">CM</span>
              </div>
              <span className="font-bold tracking-tighter text-lg">CollabMen.id</span>
            </div>
            <p className="text-slate-500 text-xs max-w-xs font-medium">
              Connecting premier male talent with category-leading brands globally through formalized excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Management Admins</h5>
              <ul className="text-xs space-y-2 font-bold uppercase tracking-tight">
                <li>Jeff</li>
                <li>Andin</li>
                <li>Misbah</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Connect</h5>
              <div className="flex gap-4">
                <MessageSquare size={18} className="text-slate-400" />
                <Layers size={18} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          &copy; 2026 CollabMen Management Group. Developed by AI Studio.
        </div>
      </footer>
    </div>
  );
}
