A. Perulangan d Vue.js :
1. v-for adalah direktif dalam Vue.js yang digunakan untuk membuat perulangan di dalam template.
--------------------------------------------------------------------------------------------------------------------
2. kita dapat menampilkan daftar data atau elemen berdasarkan array atau objek yang ada dalam data komponen. 
--------------------------------------------------------------------------------------------------------------------
3. Fitur ini sangat berguna untuk menangani daftar item, tabel dinamis, atau elemen berulang lainnya.
--------------------------------------------------------------------------------------------------------------------



B. Sintaks Dasar v-for :
--------
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
--------
//item in items: items adalah array yang akan diiterasi, dan item adalah elemen individu dari array tersebut. :key: Atribut key penting untuk membantu Vue mengidentifikasi elemen secara unik, terutama saat melakukan pembaruan DOM. Biasanya, ini dihubungkan ke properti unik seperti id.



























