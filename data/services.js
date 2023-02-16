const services = [
  {
    id: "SR01",
    title: "Spesialis Perizinan",
    slug: "spesialis-perizinan",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit ullamcorper diam. Neque dictum fermentum turpis in ornare suspendisse sed elit. Fusce quam sit duis purus curabitur donec porttitor tortor pharetra.",
    service: [
      {
        id: "SR01-001",
        title: "HGU - HGB - SHM / HakPakai / Hak pengelolaan",
        slug: "hgu-hgb-shm",
        desc: "HGU adalah singkatan untuk Hak Guna Usaha. Sesuai UU Nomor 5 Tahun 1960 tentang Pokok-Pokok Agraria, Hak Guna Usaha atau HGU adalah hak untuk mengusahakan tanah yang dikuasai oleh negara dalam jangka waktu tertentu.",
        image: "/../public/images/services/hgu.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-002",
        title: "Perkebunan",
        slug: "perkebunan",
        desc: "Izin Usaha Perkebunan disebut IUP adalah izin tertulis dari Pejabat yang berwenang dan wajib dimiliki oleh perusahaan perkebunan yang melakukan usaha budidaya perkebunan dan terintegrasi dengan usaha industri pengolahan hasil perkebunan.",
        image: "/../public/images/services/perkebunan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-003",
        title: "Pertambangan",
        slug: "pertambangan",
        desc: "Izin Usaha Pertambangan adalah izin untuk melaksanakan usaha pertambangan di wilayah Negara Kesatuan Republik Indonesia yang meliputi tahapan kegiatan penyelidikan umum, eksplorasi, studi kelayakan, konstruksi, penambangan, pengolahan dan pemurnian, pengangkutan dan penjualan, serta pascatambang.",
        image: "/../public/images/services/pertambangan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-004",
        title: "Kehutanan",
        slug: "kehutanan",
        desc: "Izin Usaha Pemanfaatan Hasil Hutan Kayu Dalam Hutan Alam yang selanjutnya disingkat lUPHHK-HA yang sebelumnya disebut Hak Pengusahaan Hutan (HPH) adalah izin memanfaatkan hutan produksi yang kegiatannya terdiri dari pemanenan atau penebangan, pengayaan, pemeliharaan dan pemasaran hasil hutan kayu.",
        image: "/../public/images/services/kehutanan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-005",
        title: "Kepelabuhan",
        slug: "kepelabuhan",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/kepelabuhan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-006",
        title: "Perdagangan Ekspor dan Impor",
        slug: "ekspor-impor",
        desc: "Untuk dapat melakukan kegiatan ekspor, pengusaha atau eksportir di Indonesia perlu memiliki Izin Ekspor. Ada ketentuan umum ekspor melalui Peraturan Menteri Perdagangan Republik Indonesia Nomor 18/M-DAG/PER/4/2013. Dalam peraturan tersebut tertera mengenai pengelompokkan barang ekspor.",
        image: "/../public/images/services/ekspor.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-007",
        title: "Perumahan",
        slug: "perumahan",
        desc: "Izin ini diperlukan supaya perumahan yang akan kita bangun mendapat persetujuan dari warga. Sehingga ketika proyek sudah berjalan tidak ada lagi gangguan. Izin warga ini menjadi salah satu syarat untuk mengurus izin atau rekomendasi-rekomendasi selanjutnya",
        image: "/../public/images/services/perumahan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR01-008",
        title: "HAKI, Merk dagang",
        slug: "haki",
        desc: "Sebagai perlindungan hukum terhadap pencipta yang dipunyai perorangan ataupun kelompok atas jerih payahnya dalam pembuatan hasil cipta karya dengan nilai ekonomis yang terkandung di dalamnya. Mengantisipasi dan juga mencegah terjadinya pelanggaran atas HAKI milik orang lain.",
        image: "/../public/images/services/haki.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
    ],
  },
  {
    id: "SR02",
    title: "Spesialis Bisnis",
    slug: "spesialis-bisnis",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit ullamcorper diam. Neque dictum fermentum turpis in ornare suspendisse sed elit. Fusce quam sit duis purus curabitur donec porttitor tortor pharetra.",
    service: [
      {
        id: "SR02-001",
        title: "Konsultasi Bisnis",
        slug: "konsultasi-bisnis",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/bisnis.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR02-002",
        title: "Pendirian dan perubahan badan usaha",
        slug: "pendirian-badan-usaha",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/pendirian-bu.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR02-003",
        title: "Perpajakan",
        slug: "perpajakan",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/perpajakan.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR02-004",
        title: "Badan Usaha dan perorangan",
        slug: "badan-usaha-perseorangan",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/badan-usaha.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
    ],
  },
  {
    id: "SR03",
    title: "Spesialis Legal",
    slug: "spesialis-legal",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit tellus nisl morbi sit ullamcorper diam. Neque dictum fermentum turpis in ornare suspendisse sed elit. Fusce quam sit duis purus curabitur donec porttitor tortor pharetra.",
    service: [
      {
        id: "SR03-001",
        title: "Konsultasi Hukum",
        slug: "konsultasi-hukum",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/konsultasi-hukum.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR03-002",
        title: "Legal Corporate",
        slug: "legal-corporate",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/legal-corporate.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
      {
        id: "SR03-003",
        title: "Kontrak dan Perjanjian",
        slug: "kontrak-perjanjian",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec convallis quis aenean sed. Lacus lorem senectus cras aenean sit dui. Amet amet viverra sollicitudin tortor. In aenean morbi id turpis mauris ac augue eleifend scelerisque. Nibh est id eget quis augue egestas justo sem volutpat. Dui purus lectus eu pretium amet nam.",
        image: "/../public/images/services/kontrak-perjanjian.jpg",
        information: {
          sp: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          hl: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
          ad: [
            {
              title: "Syaratnya",
              desc: "Penjelasan dari syaratnya",
            },
          ],
        },
        price: 300000,
      },
    ],
  },
];

export default services;
