A. Reactive data :
1. Reactive data adalah mekanisme data di mana data dalam aplikasi secara otomatis sinkron dengan tampilan (UI).
----------------------------------------------------------------------------------------------------------------------------
2. Vue.js menggunakan reactivity system yang memungkinkan hal ini terjadi, yang berarti bahwa ketika data diubah, perubahan tersebut langsung terdeteksi dan tampilan akan otomatis diperbarui.
----------------------------------------------------------------------------------------------------------------------------


B. Bagaimana Reactive data bekerja :
1. Ketika kita membuat aplikasi dengan Vue.js.
2. kita mendeklarasikan data dalam objek data di instance atau komponen Vue.
3. Vue kemudian "mengamati" (observe) semua properti dalam objek data tersebut dan membuatnya reaktif.
4. Ini berarti setiap perubahan pada data akan memberi tahu Vue untuk memperbarui DOM (HTML di halaman) agar mencerminkan perubahan tersebut.
----------------------------------------------------------------------------------------------------------------------------


C. Contoh Reactive data :
------
new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  }
});
------
// Dengan kode di atas, message adalah reactive data. Jika kita mengubah nilai message, misalnya this.message = 'Hello, World!', Vue akan otomatis memperbarui tampilan di halaman.
----------------------------------------------------------------------------------------------------------------------------


D. Reactive Data di Vue 2 vs. Vue 3 :
1. Vue 2 menggunakan Object.defineProperty untuk memantau perubahan pada data. Setiap properti di data "diobservasi" oleh Vue, dan setiap kali properti tersebut berubah, Vue memperbarui DOM.
----------------------------------------------------------------------------------------------------------------------------
2. Vue 3 memperkenalkan Proxy sebagai mekanisme reactivity baru. Proxy memungkinkan Vue memantau seluruh objek dan memiliki performa yang lebih baik. Di Vue 3, kita juga memiliki fungsi reactive dan ref yang lebih fleksibel dalam mendeklarasikan data reaktif.
----------------------------------------------------------------------------------------------------------------------------


E. Manfaat Reactive Data :
1. Memudahkan sinkronisasi data dan tampilan : Setiap perubahan pada data akan langsung tercermin di UI.
2. Mengurangi kode berulang : Tidak perlu memperbarui tampilan secara manual saat data berubah.
3. Mempermudah pengelolaan status aplikasi : Data reaktif bisa digunakan untuk status, membuat aplikasi lebih interaktif.
----------------------------------------------------------------------------------------------------------------------------



G. Kesimpulan :
1. Dengan reactive data, Vue.js membuat pengembangan aplikasi yang interaktif dan dinamis menjadi lebih sederhana dan efisien. Ini memungkinkan kita fokus pada logika aplikasi tanpa harus khawatir mengelola pembaruan tampilan secara manual.
----------------------------------------------------------------------------------------------------------------------------

















































