
import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Users, 
  Timer, 
  UserCheck, 
  Download, 
  History, 
  X,
  Phone,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Clock,
  MapPin
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { Tab } from './types';
import { 
  JADWAL_DATA, 
  GURU_DATA, 
  TT_DATA, 
  PIKET_PAGI, 
  PIKET_SORE,
  PIKET_KELAS_DATA
} from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.JADWAL);
  const [showLogModal, setShowLogModal] = useState(false);

  // Deteksi Hari Real-time
  const todayName = useMemo(() => {
    return new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  }, []);

  const handleActionWithDelay = (action: () => void) => {
    setTimeout(() => {
      action();
    }, 150);
  };

  const downloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const rows = [['JADWAL KELAS XI DKV 2'], []];
    JADWAL_DATA.forEach(day => {
      rows.push([day.day]);
      rows.push(['No', 'Waktu', 'Kode Mapel', 'Mata Pelajaran', 'Kode Guru', 'Guru']);
      day.entries.forEach(e => rows.push([e.no, e.waktu, e.kodeMapel, e.mapel, e.kodeGuru, e.guru]));
      rows.push([]);
    });
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, 'Jadwal');
    XLSX.writeFile(wb, 'Jadwal_XI_DKV2.xlsx');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-in fade-in duration-700 pb-20 md:pb-8 font-poppins">
      {/* Header */}
      <header className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl mb-8 relative overflow-hidden text-center border border-white/20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-2">
          DKV-Connect
        </h1>
        <p className="text-slate-700 font-bold tracking-wide">
          SMK TI Bali Global Denpasar • TA 2025/2026
        </p>
        
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch justify-center">
          <div className="flex-1 bg-indigo-50 px-6 py-4 rounded-2xl flex items-center gap-3 border border-indigo-200 shadow-sm">
            <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-md shrink-0">
              <UserCheck size={24} />
            </div>
            <div className="text-left flex-1">
              <p className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider">Wali Kelas</p>
              <p className="text-sm md:text-base font-black text-slate-900">Drs. I Gusti Putu Tirta Yasa, M.Pd.</p>
            </div>
            <a href="https://wa.me/6281338401856" target="_blank" className="hover:scale-125 transition-transform ml-2 p-2 bg-green-100 rounded-lg">
               <Phone size={18} className="text-green-600" />
            </a>
          </div>
          
          <div className="flex-1 bg-purple-50 px-6 py-4 rounded-2xl flex items-center gap-3 border border-purple-200 shadow-sm">
            <div className="bg-purple-600 p-2.5 rounded-xl text-white shadow-md shrink-0">
              <Shield size={24} />
            </div>
            <div className="text-left flex-1">
              <p className="text-[10px] text-purple-700 font-bold uppercase tracking-wider">Guru BK</p>
              <p className="text-sm md:text-base font-black text-slate-900">Ni Putu Chintya Pradnya Suari, S.Pd.</p>
            </div>
             <a href="https://wa.me/6281905583802" target="_blank" className="hover:scale-125 transition-transform ml-2 p-2 bg-green-100 rounded-lg">
               <Phone size={18} className="text-green-600" />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-2 mb-6 bg-white/95 backdrop-blur-md p-2 rounded-2xl sticky top-4 z-20 shadow-xl border border-white/50">
        {[
          { id: Tab.JADWAL, label: 'Jadwal', icon: BookOpen },
          { id: Tab.PIKET_KELAS, label: 'Piket Kelas', icon: Sparkles },
          { id: Tab.GURU, label: 'Daftar Guru', icon: Users },
          { id: Tab.TT, label: 'Team Teaching', icon: Timer },
          { id: Tab.PIKET, label: 'Guru Piket', icon: UserCheck },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-300 scale-105' 
                : 'bg-white text-slate-900 hover:bg-indigo-50 hover:text-indigo-700 border border-transparent hover:border-indigo-100'
            }`}
          >
            <item.icon size={18} />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl min-h-[400px] border border-white/20">
        {activeTab === Tab.JADWAL && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-950 mb-6 border-l-[10px] border-indigo-600 pl-4 py-1">Jadwal Mingguan</h2>
            <div className="overflow-x-auto custom-scrollbar mb-8">
              <table className="min-w-[800px] w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-700 text-white">
                    <th className="p-4 text-left rounded-tl-xl font-black uppercase tracking-widest text-xs w-[50px]">No</th>
                    <th className="p-4 text-left font-black uppercase tracking-widest text-xs w-[140px]">Waktu</th>
                    <th className="p-4 text-left font-black uppercase tracking-widest text-xs">Mata Pelajaran</th>
                    <th className="p-4 text-left rounded-tr-xl font-black uppercase tracking-widest text-xs">Guru Pengajar</th>
                  </tr>
                </thead>
                <tbody>
                  {JADWAL_DATA.map(day => (
                    <React.Fragment key={day.day}>
                      <tr>
                        <td colSpan={4} className="bg-indigo-50 p-4 font-black text-indigo-950 text-center tracking-[0.25em] text-sm uppercase border-y border-indigo-100">
                          {day.day}
                        </td>
                      </tr>
                      {day.entries.map((entry, idx) => {
                        const isBreak = entry.mapel === 'ISTIRAHAT';
                        const isEmpty = entry.mapel === 'Kosong';
                        
                        return (
                          <tr key={`${day.day}-${idx}`} className={`border-b border-slate-200 transition-colors ${
                            isBreak ? 'bg-amber-100/50 text-amber-950 font-bold' : 
                            isEmpty ? 'bg-slate-50 text-slate-500 italic' : 
                            'hover:bg-slate-50'
                          }`}>
                            <td className="p-4 text-xs md:text-sm font-bold text-slate-950">{entry.no}</td>
                            <td className="p-4 text-xs md:text-sm font-black text-slate-950 tabular-nums">{entry.waktu}</td>
                            <td className="p-4">
                              <div className={`font-black text-xs md:text-sm leading-snug max-w-[300px] ${isBreak ? 'text-amber-900' : 'text-slate-900'}`}>{entry.mapel}</div>
                              {entry.kodeMapel !== '-' && <div className="text-[10px] text-indigo-700 font-extrabold uppercase mt-0.5">{entry.kodeMapel}</div>}
                            </td>
                            <td className="p-4">
                              <div className={`text-xs md:text-sm font-bold leading-snug max-w-[300px] ${isBreak ? 'text-amber-900' : 'text-slate-800'}`}>{entry.guru}</div>
                              {entry.kodeGuru !== '-' && <div className="text-[10px] text-slate-600 font-bold italic mt-0.5">Kode Guru: {entry.kodeGuru}</div>}
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Note Section */}
            <div className="bg-slate-50 border-2 border-dashed border-indigo-200 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-black text-indigo-950 text-sm uppercase tracking-wider mb-3">
                <MapPin size={18} className="text-indigo-600" /> Informasi Penting
              </h3>
              <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed">
                Jadwal Olahraga / PJOK dilaksanakan setiap hari <span className="text-indigo-700">Selasa jam 15.00 WITA</span> (Jam 3 Sore) di Lapangan Renon, depan Kantor Gubernur.
              </p>
              <p className="text-[10px] text-slate-500 italic mt-2">
                * Ini adalah jadwal mingguan (kecuali ada arahan khusus dari pembina)
              </p>
            </div>
          </div>
        )}

        {activeTab === Tab.PIKET_KELAS && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-950 mb-6 border-l-[10px] border-emerald-500 pl-4 py-1">Piket Kebersihan Kelas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PIKET_KELAS_DATA.map(day => {
                const isToday = day.hari.toLowerCase() === todayName.toLowerCase();
                
                return (
                  <div key={day.hari} className={`relative bg-white border-2 rounded-3xl overflow-hidden transition-all duration-500 shadow-sm ${
                    isToday 
                    ? 'border-amber-400 shadow-xl shadow-amber-100 ring-2 ring-amber-200' 
                    : 'border-slate-100 hover:border-emerald-300 hover:shadow-xl'
                  }`}>
                    {isToday && (
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter animate-bounce z-10 shadow-md">
                        <Clock size={12} /> Piket Hari Ini
                      </div>
                    )}
                    
                    <div className={`p-4 text-center font-black uppercase tracking-widest text-sm text-white ${
                      isToday ? 'bg-amber-500' : 'bg-emerald-600'
                    }`}>
                      {day.hari}
                    </div>
                    
                    <div className="p-6 space-y-3">
                      {day.members.map((member, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                          member.isKoor 
                            ? (isToday ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200')
                            : 'bg-slate-50 border-slate-100'
                        }`}>
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                              member.isKoor 
                                ? (isToday ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white')
                                : 'bg-slate-300 text-slate-700'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className={`text-sm font-black ${
                              member.isKoor 
                                ? (isToday ? 'text-amber-900' : 'text-emerald-900')
                                : 'text-slate-800'
                            }`}>
                              {member.name}
                            </span>
                          </div>
                          {member.isKoor && (
                            <span className={`flex items-center gap-1 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                              isToday ? 'bg-amber-200 text-amber-800' : 'bg-emerald-200 text-emerald-800'
                            }`}>
                              <Star size={10} fill="currentColor" /> Koor
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === Tab.GURU && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-950 mb-6 border-l-[10px] border-indigo-600 pl-4 py-1">Daftar Guru Pengajar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GURU_DATA.map(teacher => (
                <div key={teacher.kode} className="bg-white border-2 border-slate-100 p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-300 hover:shadow-xl transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-[10px] px-3 py-1.5 rounded-full font-black ring-1 ring-indigo-200 uppercase">KODE: {teacher.kode}</span>
                      {teacher.phone && (
                        <a 
                          href={`https://wa.me/${teacher.phone}`} 
                          target="_blank"
                          className="text-green-600 hover:scale-125 transition-transform bg-green-50 p-2.5 rounded-xl border border-green-100 shadow-sm ml-4 shrink-0"
                        >
                          <Phone size={18} />
                        </a>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-slate-950 text-sm mb-2 group-hover:text-indigo-800 transition-colors leading-tight">{teacher.nama}</h3>
                      <p className="text-xs text-indigo-600 font-extrabold uppercase tracking-wide bg-indigo-50/80 inline-block px-3 py-1 rounded-lg border border-indigo-100">{teacher.mapel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === Tab.TT && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-950 mb-6 border-l-[10px] border-orange-500 pl-4 py-1">Team Teaching (TT)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TT_DATA.map(tt => (
                <div key={tt.kode} className="bg-white border-2 border-orange-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-3">
                     <h3 className="font-black text-slate-900 text-lg leading-tight flex-1">{tt.nama}</h3>
                     <span className="text-xs font-black bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full border border-orange-200 ml-2">{tt.kode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm uppercase tracking-wide">
                    <Timer size={16} className="text-orange-600" /> {tt.mapel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === Tab.PIKET && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-950 mb-6 border-l-[10px] border-indigo-600 pl-4 py-1">Guru Piket Harian</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="flex items-center gap-3 font-black text-indigo-950 mb-6 uppercase tracking-widest text-lg">
                  <div className="bg-indigo-600 text-white p-2.5 rounded-2xl shadow-lg ring-2 ring-indigo-100">☀️</div> Sesi Pagi
                </h3>
                <div className="space-y-3">
                  {PIKET_PAGI.map(p => (
                    <div key={p.hari} className="flex justify-between items-center bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-indigo-200 transition-all group">
                      <div>
                        <span className="text-[10px] font-black text-indigo-700 block uppercase mb-1 tracking-[0.2em]">{p.hari}</span>
                        <span className="text-sm font-black text-slate-900 group-hover:text-indigo-900">{p.nama}</span>
                      </div>
                      <a href={`https://wa.me/${p.phone}`} target="_blank" className="p-3 bg-green-50 text-green-700 border border-green-100 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
                        <Phone size={18} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="flex items-center gap-3 font-black text-purple-950 mb-6 uppercase tracking-widest text-lg">
                  <div className="bg-purple-600 text-white p-2.5 rounded-2xl shadow-lg ring-2 ring-purple-100">🌙</div> Sesi Sore
                </h3>
                <div className="space-y-3">
                  {PIKET_SORE.map(p => (
                    <div key={p.hari} className="flex justify-between items-center bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-purple-200 transition-all group">
                      <div>
                        <span className="text-[10px] font-black text-purple-700 block uppercase mb-1 tracking-[0.2em]">{p.hari}</span>
                        <span className="text-sm font-black text-slate-900 group-hover:text-purple-900">{p.nama}</span>
                      </div>
                      <a href={`https://wa.me/${p.phone}`} target="_blank" className="p-3 bg-green-50 text-green-700 border border-green-100 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
                        <Phone size={18} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </main>

      {/* Footer Actions */}
      <footer className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
        <a 
          href="https://bit.ly/4q8DHIq"
          target="_blank"
          className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-rose-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:opacity-90 transition-all hover:bg-rose-700 active:scale-95 border-b-4 border-rose-900 min-w-[160px] order-1"
        >
          <MessageCircle size={20} /> FEEDBACK
        </a>
        <button 
          onClick={() => handleActionWithDelay(() => downloadExcel())}
          className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all hover:bg-indigo-700 active:scale-95 border-b-4 border-indigo-900 min-w-[160px] order-3 md:order-2 w-full md:w-auto"
        >
          <Download size={20} /> EKSPOR EXCEL
        </button>
        <button 
          onClick={() => handleActionWithDelay(() => setShowLogModal(true))}
          className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all hover:bg-black active:scale-95 border-b-4 border-black min-w-[160px] order-2 md:order-3"
        >
          <History size={20} /> RIWAYAT
        </button>
      </footer>

      {/* Crystallized Watermark Capsule */}
      <div className="fixed bottom-4 left-4 z-[50] pointer-events-none select-none flex items-center justify-center">
        <div className="bg-white/40 backdrop-blur-md border border-white/40 px-2.5 py-0.5 rounded-full shadow-lg flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse"></div>
          <span className="font-vibes text-lg md:text-xl text-slate-900 font-bold">
            By Deva
          </span>
        </div>
      </div>

      {/* Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] w-full max-w-sm md:max-w-md p-6 md:p-8 animate-in zoom-in duration-300 relative border border-white/50 shadow-2xl flex flex-col max-h-[80vh]">
            <button 
              onClick={() => setShowLogModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 transition-colors p-2 hover:bg-slate-100 rounded-full"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2 shrink-0">
              <History className="text-indigo-600" size={24} /> Riwayat Update
            </h2>
            
            <div className="flex-1 overflow-y-auto pr-2 scroll-smooth custom-scrollbar space-y-6 py-2">
              {/* v1.2.5 - Current */}
              <div className="relative pl-6 border-l-2 border-indigo-600">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow-md"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-black text-base text-slate-950">v1.2.5</span>
                  <span className="bg-green-100 text-green-700 text-[8px] px-2 py-0.5 rounded-full font-black ring-1 ring-green-200 uppercase tracking-tighter">Terbaru</span>
                </div>
                <ul className="text-[10px] md:text-[11px] text-slate-800 font-bold space-y-2 list-none leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div> Penyesuaian jadwal Senin (Matematika Jam 1-2 & Animasi Jam 3-4).</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div> Penambahan modul informasi kegiatan Olahraga (PJOK) di Lapangan Renon.</li>
                </ul>
              </div>

              {/* v1.2.4 */}
              <div className="relative pl-6 border-l-2 border-slate-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
                <span className="font-black text-sm text-slate-900 block mb-2">v1.2.4</span>
                <ul className="text-[10px] md:text-[11px] text-slate-600 font-bold space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Implementasi sistem deteksi hari real-time untuk penanda petugas Piket Kelas otomatis.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Penambahan indikator visual (Highlight) untuk petugas piket yang bertugas setiap hari.</li>
                </ul>
              </div>

              {/* v1.2.3 */}
              <div className="relative pl-6 border-l-2 border-slate-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
                <span className="font-black text-sm text-slate-900 block mb-2">v1.2.3</span>
                <ul className="text-[10px] md:text-[11px] text-slate-600 font-bold space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Fitur "Ekspor Excel" (.xlsx) untuk akses dan penyimpanan jadwal secara offline.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Optimasi tata letak tabel pada mode mobile untuk akses informasi lebih cepat.</li>
                </ul>
              </div>

              {/* v1.2.2 */}
              <div className="relative pl-6 border-l-2 border-slate-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
                <span className="font-black text-sm text-slate-900 block mb-2">v1.2.2</span>
                <ul className="text-[10px] md:text-[11px] text-slate-600 font-bold space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Perluasan database kontak guru pengampu dengan integrasi "Direct WhatsApp".</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Penambahan database direktori Guru BK dan Wali Kelas di kategori terpisah.</li>
                </ul>
              </div>

              {/* v1.2.1 */}
              <div className="relative pl-6 border-l-2 border-slate-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
                <span className="font-black text-sm text-slate-900 block mb-2">v1.2.1</span>
                <ul className="text-[10px] md:text-[11px] text-slate-600 font-bold space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Peluncuran modul "Team Teaching" (TT) untuk informasi kolaborasi antar guru.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1 shrink-0"></div> Sinkronisasi database Guru Piket harian untuk sesi pagi dan sesi sore.</li>
                </ul>
              </div>

              {/* v1.2.0 - Major Release */}
              <div className="relative pl-6 border-l-2 border-indigo-400">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-indigo-400 rounded-full border-2 border-white shadow-md"></div>
                <span className="font-black text-lg text-indigo-900 block mb-1">v1.2.0</span>
                <span className="text-[8px] text-slate-700 font-black mb-1 uppercase tracking-widest italic block">Major Update</span>
                <ul className="text-[10px] md:text-[11px] text-slate-600 font-bold space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div> Perombakan total antarmuka aplikasi dengan tema modern Kristal & Gradien.</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div> Migrasi ke sistem navigasi berbasis kategori untuk efisiensi penelusuran data.</li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => setShowLogModal(false)}
              className="w-full mt-6 bg-indigo-700 text-white py-3 rounded-2xl font-black text-sm hover:bg-indigo-800 transition-all shadow-lg active:scale-95 shrink-0 border-b-4 border-indigo-900"
            >
              MENGERTI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
