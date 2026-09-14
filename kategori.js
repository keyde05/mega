export const KATEGORI = {
  sijil: {
    label: 'Kehadiran Basic',
    kumpulan: 'kehadiran',
    kumpulanLabel: 'Kehadiran',
    harga: 15,
    penerangan: null,
    bank: 'Maybank',
    namaAkaun: 'Faiz',
    noAkaun: '1628 9802 3347',
    tutup: '8 November, 12 Tengah Hari',
    ciri: ['Sijil', 'Stiker'],
    nota: null,
    featured: false,
  },
  terbuka: {
    label: 'Kategori Terbuka',
    kumpulan: 'terbuka',
    kumpulanLabel: 'Kategori Terbuka',
    harga: 50,
    penerangan: 'Pilih kategori pertandingan.',
    bank: 'Maybank',
    namaAkaun: 'Danish',
    noAkaun: '155135248615',
    tutup: '8 November, 12 Tengah Hari',
    ciri: [],
    nota: 'Hantar resit selepas bayaran.',
    featured: false,
    // Senarai penuh & rasmi ikut poster "Kategori Proton".
    subKategori: [
      'Open Standart Modified',
      'Open Modified',
      'Open Engine Bay N/A',
      'Open Engine Bay Turbo',
      'Open Engine Bay S/Cam',
      'Open Interior',
      'Open Colour',
      'Open JDM',
      'Open MDM',
      'Open Ladiescar',
      'Open MPV/SUV',
      'Open Wira',
      'Open Putra',
      'Open Satria/Neo',
      'Open Persona/Gen2',
      'Open Saga',
      'Open Iswara',
      'Open Waja',
      'Open Arena',
      'Open Preve',
      'Open Perdana',
      'Open Inspira',
      'Open Race Look',
      'Open S70',
      'Open X50',
      'Open X70',
      'Open X90',
      'Pop & Bang',
    ],
  },
  kombo: {
    label: 'Kehadiran Kombo',
    kumpulan: 'kehadiran',
    kumpulanLabel: 'Kehadiran',
    harga: 70,
    penerangan: null,
    bank: 'UOB',
    namaAkaun: 'Mierul',
    noAkaun: '9153153759',
    tutup: '9 Oktober',
    ciri: [
      'Baju Mega Proton',
      '1x Keychain Lanyard',
      '1x Stiker Cermin 6x11 inci (Besar)',
      '2x Cabutan Bertuah',
      'Beg Zip Lock Baju',
    ],
    nota: 'Jika nak sijil, sila isi nama di Kehadiran Basic dan terus buat pembayaran.',
    featured: true,
  },
};

export function semuaKumpulan() {
  const out = {};
  for (const [slug, k] of Object.entries(KATEGORI)) {
    if (!out[k.kumpulan]) {
      out[k.kumpulan] = { label: k.kumpulanLabel, slugs: [] };
    }
    out[k.kumpulan].slugs.push(slug);
  }
  return out;
}
