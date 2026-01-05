
export interface ScheduleEntry {
  no: string;
  waktu: string;
  kodeMapel: string;
  mapel: string;
  kodeGuru: string;
  guru: string;
}

export interface DaySchedule {
  day: string;
  entries: ScheduleEntry[];
}

export interface Teacher {
  kode: string;
  nama: string;
  mapel: string;
  phone: string | null;
}

export interface TTEntry {
  kode: string;
  nama: string;
  mapel: string;
  keterangan: string;
}

export interface PiketEntry {
  hari: string;
  nama: string;
  phone: string;
}

export interface PiketKelasMember {
  name: string;
  isKoor?: boolean;
}

export interface PiketKelasDay {
  hari: string;
  members: PiketKelasMember[];
}

export enum Tab {
  JADWAL = 'JADWAL',
  PIKET_KELAS = 'PIKET_KELAS',
  GURU = 'GURU',
  TT = 'TT',
  PIKET = 'PIKET'
}
