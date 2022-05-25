 // Atur Batas Waktu Mundur
 var countDownDate = new Date("May 27, 2022 15:00:00").getTime();
    
 // Perbarui hitungan mundur setiap 1 detik
 var x = setInterval(function() {
 
   // atur tanggal dan waktu hari ini
   var now = new Date().getTime();
     
   // Find the distance between now and the count down date | temukan jarak waktu antara sekarang dan hitungan mundur
   var distance = countDownDate - now;
     
   // Time calculations for days, hours, minutes and seconds | hitungan waktu untuk hari, jam, menit dan detik.
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
   // Output the result in an element with id="demo" | output dengan elemend id demo
   document.getElementById("demo").innerHTML = days + "H " + hours + "J "
   + minutes + "M " + seconds + "D ";
     
   // If the count down is over, write some text  | jika waktu berahir tulis sebuah kata
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "WAKTU ANDA HABIS";
   }
 }, 1000);