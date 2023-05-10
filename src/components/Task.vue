<template>
    <div class="container">
      <h1 style="text-align: center;">Daftar Kegiatan Karyawan</h1>
      <form @submit.prevent="addKegiatan">
        <input type="text" v-model="newKaryawan" placeholder="Nama Karyawan">
        <input type="text" v-model="newKegiatan" placeholder="Tambahkan kegiatan harianmu">
        <input type="datetime-local" v-model="newWaktu">
        <button>Tambahkan</button>
      </form>
  
      <br>
  
      <div>
        <button :class="{aktif: filter === 'all'}" @click="filter = 'all'">Semua</button>
        <button :class="{aktif: filter === 'aktif'}" @click="filter = 'aktif'">Belum Selesai</button>
        <button :class="{aktif: filter === 'selesai'}" @click="filter = 'selesai'">Sudah Selesai</button>
      </div>
  
      <br>
  
      <ul>
        <li v-for="Kegiatan in filterAktifitas" :key="Kegiatan.id">
          <div>
            <button @click="completeKegiatan(Kegiatan)">Selesai</button>
            <button @click="deleteKegiatan(Kegiatan)">Hapus</button>
          </div>
          <div>
            <span :class="{selesai: Kegiatan.selesai}">{{ Kegiatan.name }}</span>
            <span>{{ Kegiatan.karyawan }}</span> <!-- tambahkan tampilan nama karyawan -->
            <br>
            Waktu: {{ Kegiatan.waktu }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        aktifitas: [],
        newKegiatan: '',
        newWaktu: '',
        newKaryawan: '',
        filter: 'all'
      }
    },
  
    methods: {
      addKegiatan() {
        if (this.newKegiatan.trim() !== '') {
          this.aktifitas.push({
            id: Date.now(),
            name: this.newKegiatan.trim(),
            selesai: false,
            waktu: new Date(this.newWaktu).toLocaleString(),
            karyawan: this.newKaryawan // tambahkan properti karyawan
          });
          this.newKegiatan = '';
          this.newWaktu = '';
          this.newKaryawan = ''; // reset nilai properti newKaryawan
        }
      },
  
      deleteKegiatan(Kegiatan) {
        const index = this.aktifitas.findIndex(a => a.id === Kegiatan.id);
        if (index !== -1) {
          this.aktifitas.splice(index, 1);
        }
      },
  
      completeKegiatan(Kegiatan) {
        Kegiatan.selesai = true;
      }
    },
  
    computed: {
      filterAktifitas() {
        if (this.filter === 'all') {
          return this.aktifitas;
        } else if (this.filter === 'aktif') {
          return this.aktifitas.filter(a => !a.selesai);
        } else {
          return this.aktifitas.filter(a => a.selesai);
        }
      }
    }
  }
  </script>
  
  
  <style>
  
  body {
    background-image: url('login.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
    background-color: #1abc9c48;
    font-family: "Open Sans", sans-serif;
    color: #333;
    border-radius: 15px;
  }
  
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #2c3e50;
  }
  
  form {
    display: flex;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex-grow: 1;
    border: none;
    border-radius: 5px;
    padding: 16px;
    font-size: 18px;
    margin-right: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  button {
    background-color: #2c3e50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 2px;
  }
  
  button:hover {
    background-color: #1abc9c;
  }
  
  button.aktif {
    background-color: #e74c3c;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  span.selesai {
    text-decoration: line-through;
    color: #7f8c8d;
  }
  
  </style>