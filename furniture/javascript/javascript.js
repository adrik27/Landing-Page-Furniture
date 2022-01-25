$(window).on("load", function () {
  $(".gambar-ab").addClass("gMuncul");
  $(".text").addClass("tMuncul");
  $(".navbar").addClass("nMuncul");
  $(".carousel").addClass("cMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // index.html
  //   best-seller
  if (wScroll > $(".best-seller").offset().top - 200) {
    $(".best-seller .card").each(function (i) {
      setTimeout(function () {
        $(".best-seller .card").eq(i).addClass("muncul");
      }, 300 * i + 1);
    });
  }
  //   produk
  if (wScroll > $(".produk").offset().top - 380) {
    $(".produk .card").each(function (i) {
      setTimeout(function () {
        $(".produk .card").eq(i).addClass("tampil");
      }, 200 * i + 1);
    });
  }
  // about
  if (wScroll > $(".about-isi").offset().top - 500) {
    $(".about-isi").addClass("aTampil");
  }
  //   end index.html
});
