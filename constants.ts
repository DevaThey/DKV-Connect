
import { DaySchedule, Teacher, TTEntry, PiketEntry, PiketKelasDay } from './types';

export const JADWAL_DATA: DaySchedule[] = [
  {
    day: 'SENIN',
    entries: [
      { no: '1', waktu: '07.05 - 07.45', kodeMapel: 'B.1', mapel: 'Matematika', kodeGuru: '079', guru: 'Ni Putu Linda Agustini, S.Pd.' },
      { no: '2', waktu: '07.45 - 08.25', kodeMapel: 'B.1', mapel: 'Matematika', kodeGuru: '079', guru: 'Ni Putu Linda Agustini, S.Pd.' },
      { no: '3', waktu: '08.25 - 09.05', kodeMapel: 'B.9.4', mapel: 'Animasi', kodeGuru: '062', guru: 'Bella Cintya Devi, S.Kom.' },
      { no: '4', waktu: '09.05 - 09.45', kodeMapel: 'B.9.4', mapel: 'Animasi', kodeGuru: '062', guru: 'Bella Cintya Devi, S.Kom.' },
      { no: '-', waktu: '09.45 - 10.00', kodeMapel: '-', mapel: 'ISTIRAHAT', kodeGuru: '-', guru: '-' },
      { no: '5', waktu: '10.00 - 10.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '6', waktu: '10.40 - 11.20', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '7', waktu: '11.20 - 12.00', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '8', waktu: '12.00 - 12.40', kodeMapel: 'B.2', mapel: 'Bahasa Inggris', kodeGuru: '088', guru: 'Ni Ketut Supartini, SS.' }
    ]
  },
  {
    day: 'SELASA',
    entries: [
      { no: '1', waktu: '07.05 - 07.45', kodeMapel: 'B.7', mapel: 'Projek Kreatif dan Kewirausahaan', kodeGuru: '018', guru: 'Putu Yenny Suryantari, S.Pd.' },
      { no: '2', waktu: '07.45 - 08.25', kodeMapel: 'B.7', mapel: 'Projek Kreatif dan Kewirausahaan', kodeGuru: '018', guru: 'Putu Yenny Suryantari, S.Pd.' },
      { no: '3', waktu: '08.25 - 09.05', kodeMapel: 'A.5', mapel: 'Sejarah Indonesia', kodeGuru: '081', guru: 'Tjok Istri Agung Rai Sintha Devi, S.Pd.' },
      { no: '4', waktu: '09.05 - 09.45', kodeMapel: 'A.2', mapel: 'Pendidikan Pancasila', kodeGuru: '067', guru: 'Nengah Dwi Rahayu, SE.' },
      { no: '-', waktu: '09.45 - 10.00', kodeMapel: '-', mapel: 'ISTIRAHAT', kodeGuru: '-', guru: '-' },
      { no: '5', waktu: '10.00 - 10.40', kodeMapel: 'A.1', mapel: 'Pendidikan Agama Hindu', kodeGuru: '092', guru: 'I Dewa Ayu Setiyawati, S.Pd.' },
      { no: '6', waktu: '10.40 - 11.20', kodeMapel: 'A.1', mapel: 'Pendidikan Agama Hindu', kodeGuru: '092', guru: 'I Dewa Ayu Setiyawati, S.Pd.' },
      { no: '7', waktu: '11.20 - 12.00', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '8', waktu: '12.00 - 12.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' }
    ]
  },
  {
    day: 'RABU',
    entries: [
      { no: '1', waktu: '07.05 - 07.45', kodeMapel: 'B.2', mapel: 'Bahasa Inggris', kodeGuru: '088', guru: 'Ni Ketut Supartini, SS.' },
      { no: '2', waktu: '07.45 - 08.25', kodeMapel: 'B.2', mapel: 'Bahasa Inggris', kodeGuru: '088', guru: 'Ni Ketut Supartini, SS.' },
      { no: '3', waktu: '08.25 - 09.05', kodeMapel: 'A.3', mapel: 'Bahasa Indonesia', kodeGuru: '080', guru: 'Ida Bagus Angga Baskara, S.Pd.' },
      { no: '4', waktu: '09.05 - 09.45', kodeMapel: 'A.3', mapel: 'Bahasa Indonesia', kodeGuru: '080', guru: 'Ida Bagus Angga Baskara, S.Pd.' },
      { no: '-', waktu: '09.45 - 10.00', kodeMapel: '-', mapel: 'ISTIRAHAT', kodeGuru: '-', guru: '-' },
      { no: '5', waktu: '10.00 - 10.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '6', waktu: '10.40 - 11.20', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '7', waktu: '11.20 - 12.00', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '8', waktu: '12.00 - 12.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' }
    ]
  },
  {
    day: 'KAMIS',
    entries: [
      { no: '1', waktu: '07.05 - 07.45', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '2', waktu: '07.45 - 08.25', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '3', waktu: '08.25 - 09.05', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '4', waktu: '09.05 - 09.45', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '-', waktu: '09.45 - 10.00', kodeMapel: '-', mapel: 'ISTIRAHAT', kodeGuru: '-', guru: '-' },
      { no: '5', waktu: '10.00 - 10.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '6', waktu: '10.40 - 11.20', kodeMapel: 'B.7', mapel: 'Projek Kreatif dan Kewirausahaan', kodeGuru: '018', guru: 'Putu Yenny Suryantari, S.Pd.' },
      { no: '7', waktu: '11.20 - 12.00', kodeMapel: 'B.7', mapel: 'Projek Kreatif dan Kewirausahaan', kodeGuru: '018', guru: 'Putu Yenny Suryantari, S.Pd.' },
      { no: '8', waktu: '12.00 - 12.40', kodeMapel: 'B.7', mapel: 'Projek Kreatif dan Kewirausahaan', kodeGuru: '018', guru: 'Putu Yenny Suryantari, S.Pd.' }
    ]
  },
  {
    day: 'JUMAT',
    entries: [
      { no: '1', waktu: '07.05 - 07.45', kodeMapel: 'A.7', mapel: 'Muatan Lokal (Bahasa Bali)', kodeGuru: '092', guru: 'I Dewa Ayu Setiyawati, S.Pd.' },
      { no: '2', waktu: '07.45 - 08.25', kodeMapel: 'A.7', mapel: 'Muatan Lokal (Bahasa Bali)', kodeGuru: '092', guru: 'I Dewa Ayu Setiyawati, S.Pd.' },
      { no: '3', waktu: '08.25 - 09.05', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '4', waktu: '09.05 - 09.45', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '-', waktu: '09.45 - 10.00', kodeMapel: '-', mapel: 'ISTIRAHAT', kodeGuru: '-', guru: '-' },
      { no: '5', waktu: '10.00 - 10.40', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '6', waktu: '10.40 - 11.20', kodeMapel: 'B.6.4', mapel: 'Desain Komunikasi Visual', kodeGuru: '076', guru: 'Triono Doni Wijaya, S.Kom.' },
      { no: '7', waktu: '11.20 - 12.00', kodeMapel: '-', mapel: 'Kosong', kodeGuru: '-', guru: '-' },
      { no: '8', waktu: '12.00 - 12.40', kodeMapel: '-', mapel: 'Kosong', kodeGuru: '-', guru: '-' }
    ]
  },
  {
    day: 'SABTU',
    entries: [
      { no: '1-8', waktu: '07.05 - 12.40', kodeMapel: '-', mapel: 'Kokurikuler Mandiri', kodeGuru: '-', guru: '-' }
    ]
  }
];

export const GURU_DATA: Teacher[] = [
  { kode: '092', nama: 'I Dewa Ayu Setiyawati, S.Pd.', mapel: 'Agama Hindu & B. Bali', phone: '6282146421893' },
  { kode: '067', nama: 'Nengah Dwi Rahayu, SE.', mapel: 'Pendidikan Pancasila', phone: '6281220692219' },
  { kode: '081', nama: 'Tjok Istri Agung Rai Sintha Devi, S.Pd.', mapel: 'Sejarah Indonesia', phone: '6289534767483' },
  { kode: '080', nama: 'Ida Bagus Angga Baskara, S.Pd.', mapel: 'Bahasa Indonesia', phone: '6287860193270' },
  { kode: '079', nama: 'Ni Putu Linda Agustini, S.Pd.', mapel: 'Matematika', phone: '6285738235218' },
  { kode: '088', nama: 'Ni Ketut Supartini, SS.', mapel: 'Bahasa Inggris', phone: '628123987516' },
  { kode: '076', nama: 'Triono Doni Wijaya, S.Kom.', mapel: 'Desain Komunikasi Visual', phone: '6287863112233' },
  { kode: '018', nama: 'Putu Yenny Suryantari, S.Pd.', mapel: 'PKK', phone: '6281353285810' },
  { kode: '062', nama: 'Bella Cintya Devi, S.Kom.', mapel: 'Animasi', phone: '6281999022333' }
];

export const TT_DATA: TTEntry[] = [
  { kode: '007', nama: 'A.A Gede Putra Dwi Artajaya, S.Si.', mapel: 'Matematika', keterangan: '' },
  { kode: '070', nama: 'Ni Putu Tirta Purnama Dewi, S.Pd', mapel: 'Bahasa Inggris', keterangan: '' },
  { kode: '081', nama: 'Tjok Istri Agung Rai Sintha Devi, S.Pd.', mapel: 'Pendidikan Pancasila', keterangan: 'Menggantikan Ibu Nengah' }
];

export const PIKET_PAGI: PiketEntry[] = [
  { hari: 'Senin', nama: 'Ida Ayu Dewi Paramita, S.Pd', phone: '62895375837712' },
  { hari: 'Selasa', nama: 'I Putu Dedy Karsana, S.Pd', phone: '6281933019479' },
  { hari: 'Rabu', nama: 'Tjok Istri Agung Rai Sintha Devi, S.Pd', phone: '6289534767483' },
  { hari: 'Kamis', nama: 'Ida Ayu Indra Pratiwi, S.Sn', phone: '6281239588346' },
  { hari: 'Jumat', nama: 'Dra. Ni Made Ayu Adnyani', phone: '6281238437877' }
];

export const PIKET_SORE: PiketEntry[] = [
  { hari: 'Senin', nama: 'Ni Putu Linda Agustini, S.Pd', phone: '6285738235218' },
  { hari: 'Selasa', nama: 'I Kadek Yogi Mayudana, S.Pd', phone: '628563769773' },
  { hari: 'Rabu', nama: 'Ni Kadek Chandra Putri Irani, S.Pd', phone: '6285953912558' },
  { hari: 'Kamis', nama: 'Ni Wayan Lina Valentine, S.Pd', phone: '628970147321' },
  { hari: 'Jumat', nama: 'Kadek Arie Wira Kusuma, S.Kom', phone: '6282247033484' }
];

export const PIKET_KELAS_DATA: PiketKelasDay[] = [
  {
    hari: 'Senin',
    members: [
      { name: 'Eca', isKoor: true },
      { name: 'Adjie' },
      { name: 'Nesta' },
      { name: 'Abil' },
      { name: 'Hardy' },
      { name: 'Jeremy' }
    ]
  },
  {
    hari: 'Selasa',
    members: [
      { name: 'Novi', isKoor: true },
      { name: 'Stefano' },
      { name: 'Dekda' },
      { name: 'Dwede' },
      { name: 'Keysa' },
      { name: 'Ega' }
    ]
  },
  {
    hari: 'Rabu',
    members: [
      { name: 'Vina', isKoor: true },
      { name: 'Dafa' },
      { name: 'Rani' },
      { name: 'Irfan' },
      { name: 'Krisna' },
      { name: 'Iqbal' }
    ]
  },
  {
    hari: 'Kamis',
    members: [
      { name: 'Aina', isKoor: true },
      { name: 'Ryu' },
      { name: 'Randy' },
      { name: 'Ayini' },
      { name: 'Pande' },
      { name: 'Hafiz' }
    ]
  },
  {
    hari: 'Jumat',
    members: [
      { name: 'Cania', isKoor: true },
      { name: 'Aurel' },
      { name: 'Sutrisna' },
      { name: 'Rangga' },
      { name: 'Rafael' },
      { name: 'Salman' }
    ]
  }
];
