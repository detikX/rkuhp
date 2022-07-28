$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(1e4), $(".preloader").remove();
  }),
    new WOW().init();
  $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
  }),
    $(document).on("click", ".close-btn", () => {
      $(".menu").hide();
    }),
    $(window).width();
});
var test = screen.width < 768 ? 2 : 20;
$.ajax({
  url: "js/nama.json",
  type: "GET",
  beforeSend: function () {
    $(".loader_ajax").show();
  },
  complete: function () {
    $(".loader_ajax").hide();
  },
  success: (a) => {
    var n;
    for (console.log(a), n = 0; n < a.length; n++) {
      var l = a[n].nama,
        t = a[n].asal,
        i = a[n].usia,
        d = a[n].id;
      $(".nama-nama").append(
        `\n        <div class="card_">\n          <div class="card__image">\n            <img src="img/icon-student.png" alt="" title="" />\n          </div>\n          <div class="card__content namasiswa" data-toggle="modal" data-target="#modalSiswa" data-id="${d}">\n            <div class="name"><b>${l}</b></div>\n            <div class="age">${i} Tahun</div>\n            <div class="from">${t}</div>\n            <div class="mt-2">\n              <button class="btn-name">Selengkapnya</button>\n            </div>\n          </div>\n        </div>\n      `
      );
    }
    $(".namasiswa[data-target='#modalSiswa']").on("click", function (n, l) {
      var t = $(this).attr("data-id") - 1,
        i = a[t].modal,
        d = a[t].img,
        e = a[t].nama,
        o = a[t].sumber;
      $("#modalSiswa").modal("show"),
        $("#modalSiswa .modal-content").html(
          `\n            <div class="modal-body">\n                <div class="modal-image"><img src="${d}" alt="${e}" title="${e}" loading="lazy" /></div>\n                <div class="sumber">Sumber: ${o}</div>\n                <p class="font-stdbig">${i}</p>\n            </div>\n        `
        );
    });
  },
}),
  $.ajax({
    url: "js/book.json",
    type: "GET",
    beforeSend: function () {
      $(".loader_ajax").show();
    },
    complete: function () {
      $(".loader_ajax").hide();
    },
    success: (a) => {
      var n;
      for (n = 0; n < a.length; n++) {
        var l = a[n].image,
          t = a[n].id,
          i = a[n].judul,
          d = (a[n].modal, a[n].coloring),
          e = a[n].content,
          o = "";
        e.map((a, n) => {
          o += `<li><b>${a.pasal}:</b> ${a.text}</li>`;
        });
        var s = 12 == t ? "hidden" : "",
          m = 12 == t ? "" : "hidden";
        $(".flip-book ").append(
          `\n        <div class="flip" id="p${t}">\n          <div class="back">\n            <h2 class="rkuhp ${m}">Draf RKUHP</h2>\n            <img src="${l}" class="${s}" alt="${i}" title="${i}" loading="lazy" />\n            <div\n              class="btn-modal books ${s}"\n              data-toggle="modal"\n              data-id="${t}"\n              data-target="#modalDetail"\n            >\n              Info Lainnya\n            </div>\n            <label for="c${t}" class="back-btn"><i class="fa fa-angle-double-left" aria-hidden="true"></i><div>Kembali</div></label>\n          </div>\n          <div class="front ${d}">\n            <div class="halaman">${t}</div>\n            <div class="help-front"><img src="img/palu-help.png" alt="palu" title="palu"/></div>\n            <div class="help-front2"><img src="img/kertas.webp" alt="palu" title="palu"/></div>\n            <div class="front__title ${d}">\n              <h2>${i}</h2>\n              <div class="help-front2"><img src="img/kertas.webp" alt="palu" title="palu"/></div>\n            </div>\n\n            <ul>\n              ${o}\n            </ul>\n\n            <label for="c${t}" class="next-btn"><div>Lanjut</div><i class="fa fa-angle-double-right" aria-hidden="true"></i></label>\n          </div>\n        </div>\n    `
        );
      }
      $("#modalDetail .modal-body").html(
        "<p class='font-stdbig'>Pasal ini tidak memiliki kekuatan hukum mengikat. Mahkamah Konstitusi melalui putusan Nomor 013-022/puu-iv/2006 pernah membatalkan pasal ini lantaran dianggap merupakan warisan masa kolonial. Berpotensi menjadi pasal karet dan mengekang kebebasan berpendapat.</p>"
      ),
        $(".books[data-target='#modalDetail']").on("click", function (n, l) {
          var t = $(this).attr("data-id");
          console.log(t),
            console.log(a[t].modal),
            $("#modalDetail").modal("show"),
            $("#modalDetail .modal-content").html(
              `\n            <div class="modal-body">\n                <p class="font-stdbig">${a[t].modal}</p>\n            </div>\n        `
            );
        });
    },
  }),
  $(".chevron,.click-scroll,.ontop__scroll").click(function () {
    $("html, body").animate(
      { scrollTop: $("#firstletter").offset().top + 5 },
      500
    );
  });
let bg = document.getElementById("dpr"),
  moon = document.getElementById("one"),
  mountain = document.getElementById("two"),
  road = document.getElementById("demo");
window.addEventListener("scroll", function () {
  var a = window.scrollY;
  (bg.style.top = 0.5 * a + "px"), (road.style.bottom = 0.05 * a + "px");
});
