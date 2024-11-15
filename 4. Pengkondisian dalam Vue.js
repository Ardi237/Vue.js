A. Pengertian :
1. Dalam Vue.js, pengkondisian digunakan untuk mengontrol tampilan elemen HTML berdasarkan kondisi tertentu yang ditentukan dalam data komponen. Vue menyediakan beberapa cara untuk melakukan pengkondisian, seperti menggunakan direktif v-if, v-else, v-else-if, dan v-show.
------------------------------------------------------------------------------------------------------------------------------

B. v-if :
1. Direktif v-if digunakan untuk memutuskan apakah elemen tertentu harus ditampilkan di DOM berdasarkan kondisi yang dievaluasi sebagai true atau false. Jika kondisi bernilai true, elemen akan ditampilkan; jika false, elemen akan dihapus dari DOM.
2. Contoh :
-------
<div id="app">
  <p v-if="isVisible">Elemen ini akan muncul jika isVisible adalah true.</p>
  <button @click="toggleVisibility">Togggle Visibility</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      isVisible: true
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  });
</script>
-------
//Pada contoh di atas, elemen <p> hanya akan muncul jika isVisible bernilai true. Saat tombol diklik, nilai isVisible akan berganti dan menampilkan atau menyembunyikan elemen tersebut.
------------------------------------------------------------------------------------------------------------------------------  



C. v-else :
1. Direktif v-else digunakan bersama dengan v-if untuk menangani kasus di mana kondisi pada v-if bernilai false. Elemen yang menggunakan v-else akan ditampilkan hanya jika ekspresi pada v-if bernilai false.
2. Contoh :
------
  <div id="app">
  <p v-if="isVisible">Elemen ini akan muncul jika isVisible adalah true.</p>
  <p v-else>Elemen ini akan muncul jika isVisible adalah false.</p>
  <button @click="toggleVisibility">Toggle Visibility</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      isVisible: true
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  });
</script>
------
//Dalam contoh di atas, jika isVisible bernilai true, elemen pertama yang menggunakan v-if akan ditampilkan. Sebaliknya, jika isVisible bernilai false, elemen kedua dengan v-else akan ditampilkan.
------------------------------------------------------------------------------------------------------------------------------



D. v-else-if :
1. Direktif v-else-if digunakan jika ada beberapa kondisi yang perlu dipertimbangkan secara berurutan. v-else-if bekerja seperti else if dalam logika pemrograman biasa dan digunakan setelah v-if.
2. Contoh :
------
<div id="app">
  <p v-if="status === 'loading'">Loading...</p>
  <p v-else-if="status === 'success'">Data loaded successfully!</p>
  <p v-else>Error occurred!</p>
  <button @click="changeStatus">Change Status</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      status: 'loading'
    },
    methods: {
      changeStatus() {
        if (this.status === 'loading') {
          this.status = 'success';
        } else if (this.status === 'success') {
          this.status = 'error';
        } else {
          this.status = 'loading';
        }
      }
    }
  });
</script>
------
// Pada contoh ini, kita memiliki tiga kondisi berbeda:
- Jika status adalah 'loading', pesan "Loading..." akan ditampilkan.
- Jika status adalah 'success', pesan "Data loaded successfully!" akan muncul.
- Jika status bukan 'loading' atau 'success', pesan "Error occurred!" akan ditampilkan.
------------------------------------------------------------------------------------------------------------------------------




E. v-show :
1. Direktif v-show juga digunakan untuk mengontrol tampilan elemen berdasarkan kondisi, tetapi cara kerjanya berbeda dari v-if. Dengan v-show, elemen tidak dihapus dari DOM, melainkan hanya disembunyikan atau ditampilkan dengan mengubah gaya CSS display. Elemen dengan v-show akan selalu ada di DOM, dan Vue hanya akan menambahkan atau menghapus properti display: none pada elemen tersebut.
2. Contoh :
------
<div id="app">
  <p v-show="isVisible">Elemen ini akan muncul jika isVisible adalah true.</p>
  <button @click="toggleVisibility">Toggle Visibility</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      isVisible: true
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  });
</script>
------
//Pada contoh di atas, meskipun elemen tetap ada di DOM (berbeda dengan v-if yang menghapusnya), gaya CSS display: none akan ditambahkan ketika isVisible bernilai false.
------------------------------------------------------------------------------------------------------------------------------





F. Kesimpulan :
- v-if: Digunakan untuk kondisi yang tidak terlalu sering berubah. Elemen ditambahkan atau dihapus dari DOM sesuai dengan kondisi.
- v-else: Digunakan bersamaan dengan v-if untuk menangani kondisi lainnya.
- v-else-if: Digunakan untuk beberapa kondisi berturut-turut, seperti else if dalam pemrograman.
- v-show: Digunakan jika elemen sering perlu disembunyikan atau ditampilkan, tetapi tetap ada di DOM.
------------------------------------------------------------------------------------------------------------------------------

































































