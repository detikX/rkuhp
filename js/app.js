// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  // const tilt = $(".js-tilt").tilt();
  // // tilt.on("change", callback); // parameters: event, transforms
  // // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // // tilt.on("tilt.mouseEnter", callback); // parameters: event

  // $(".js-tilt").tilt({
  //   max: 30,
  //   speed: 600,
  //   scale: 1,
  //   transition: true,
  //   // easing: "cubic-bezie$(.03,.98,.52,.99)",
  //   perspective: 600,
  //   // glare: true,
  // });
});

//count
/*$(function () {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (
      isScrolledIntoView($this) &&
      !$this.data("isCounting") &&
      current < $this.data("count")
    ) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 1);
    }
  }

  $(".count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("100000");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".count").each(function () {
      count($(this));
    });
  }
  $(window).scroll(function () {
    startCount();
  });
});*/
//slick
var test = screen.width < 768 ? 2 : 20;

$(window)
  .scroll(function () {
    let o = $(window),
      i = $("body"),
      t = $(".section");
    s = o.scrollTop() + o.height() / test;
    // console.log("o.scrollTop()", o.scrollTop());
    // console.log("o.height", o.height());
    t.each(function () {
      // console.log("top", $(this).position().top);
      // console.log("s", s);
      // console.log(
      //   "$(this).position().top + $(this).height()",
      //   $(this).position().top + $(this).height()
      // );
      $(this).position().top <= s &&
        $(this).position().top + $(this).height() > s &&
        i.removeClass(
          $(".section").removeClass("active"),
          $(this).addClass("active")
        );
    });
  })
  .scroll();

if (screen.width > 768) {
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = "translate(" + y + "px, " + x + "px) scale(0.9)";
    translatea = "translate(" + y + "px, " + x + "px) scale(0.9)";

    $(".cover__cloud").css({
      "-webit-transform": translatea,
      "-moz-transform": translatea,
      transform: translatea,
    });

    window.requestAnimationFrame(moveBackground);
  }

  $(window).on("mousemove click", function (e) {
    var lMouseX = Math.max(
      -100,
      Math.min(100, $(window).width() / 2 - e.clientX)
    );
    var lMouseY = Math.max(
      -100,
      Math.min(100, $(window).height() / 2 - e.clientY)
    );
    lFollowX = (5 * lMouseY) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (40 * lMouseX) / 100;
  });

  moveBackground();

  // sr.reveal(".align-left .credit__team", {
  //   delay: 300,
  //   origin: "right",
  // });
  // sr.reveal(".align-left .credit__member", {
  //   delay: 450,
  //   origin: "right",
  // });

  // sr.reveal(".align-right .credit__team", {
  //   delay: 300,
  //   origin: "left",
  // });
  // sr.reveal(".align-right .credit__member", {
  //   delay: 450,
  //   origin: "left",
  // });
}

// setTimeout(() => {
//   document.getElementById("audio").addEventListener("play", myFunction);
// }, 1000);

// function myFunction() {
//   console.log(1);
// }

// var x = document.getElementById("myAudio");
// function playAudio() {
//   // alert(1);
//   $("#myAudio").get(0).play();
// }

// function pauseAudio() {
//   // alert(1);
//   $("#myAudio").get(0).pause();
// }
// const video = document.querySelector("audio");
// const play = document.querySelector("#play");
// const pause = document.querySelector("#pause");
// let isPlaying = false;

// video.onplaying = () => {
//   isPlaying = true;
// };

// video.onpause = () => {
//   isPlaying = false;
// };

// const playVid = () => {
//   if (video.paused && !isPlaying) {
//     video.play();
//   }
// };

// const pauseVid = () => {
//   if (!video.paused && isPlaying) {
//     video.pause();
//   }
// };

// play.addEventListener("click", playVid);
// pause.addEventListener("click", pauseVid);

const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $("#play-button").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }

  // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});
// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById("play-button");
// var sticky = header.offsetTop + 640;

// function myFunction() {
//   // console.log("window.pageYOffset", window.pageYOffset);
//   // console.log("sticky", sticky);
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$.ajax({
  url: "js/book.json",
  type: "GET",
  success: (response) => {
    // console.log(response);
    var a;
    for (a = 0; a < response.length; a++) {
      var image = response[a].image;
      var id = response[a].id;
      var judul = response[a].judul;
      var modal = response[a].modal;
      var color = response[a].coloring;
      var benefit = response[a].content;
      var h = "";
      benefit.map((a, i) => {
        h += `<li><b>${a.pasal}:</b> ${a.text}</li>`;
      });

      // $(".dedi").append(`
      //   <h2>${judul}</h2>
      //   <ul>${h}</ul>
      //   <img src="${image}" style="width:100%"/>
      //   <div
      //     class="btn-modal books"
      //     data-toggle="modal"
      //     data-id="${id}"
      //     data-target="#modalDetail"
      //   >
      //     Info Lainnya
      //   </div>
      // `);
      var test = id == 5 ? "hidden" : "";
      var last = id == 5 ? "" : "hidden";
      $(".flip-book").append(`
        <div class="flip" id="p${id}">
          <div class="back">
            <h2 class="rkuhp ${last}">Draf RKUHP</h2>
            <img src="${image}" class="${test}" alt="" />
            <div
              class="btn-modal books ${test}"
              data-toggle="modal"
              data-id="${id}"
              data-target="#modalDetail"
            >
              Info Lainnya
            </div>
            <label for="c${id}" class="back-btn"><i class="fa fa-angle-double-left" aria-hidden="true"></i><div>Kembali</div></label>
          </div>
          <div class="front ${color}">
            <div class="front__title ${color}">
              <h2>${judul}</h2>
            </div>

            <ul>
              ${h}
            </ul>

            <label for="c${id}" class="next-btn"><div>Lanjut</div><i class="fa fa-angle-double-right" aria-hidden="true"></i></label>
          </div>
        </div>
    `);
    }
    $("#modalDetail .modal-body").html(
      "<p class='font-stdbig'>Pasal ini tidak memiliki kekuatan hukum mengikat. Mahkamah Konstitusi melalui putusan Nomor 013-022/puu-iv/2006 pernah membatalkan pasal ini lantaran dianggap merupakan warisan masa kolonial. Berpotensi menjadi pasal karet dan mengekang kebebasan berpendapat.</p>"
    );
    $(".books[data-target='#modalDetail']").on("click", function (i, x) {
      var dataID = $(this).attr("data-id");
      console.log(dataID);
      console.log(response[dataID].modal);
      $("#modalDetail").modal("show");

      $("#modalDetail .modal-content").html(`
            <div class="modal-body">
                <p class="font-stdbig">${response[dataID].modal}</p>
            </div>
        `);
    });

    // var h = "";
    // benefit.map((a, i) => {
    //   h += `<li><b>${a.pasal}</b>${a.text}</li>`;
    // });

    /*$(".flip-book").append(`
    <div class="flip" id="p1">
      <div class="back">
        <img src="${image}" alt="" />
        <label for="c${id}" class="back-btn">Before</label>
      </div>
      <div class="front">
        <div class="front__title">
          <h2>${judul}</h2>
        </div>

        <ul>
          <li>
            <b>Pasal 218:</b> Setiap orang yang di muka umum
            menyerang kehormatan atau harkat dan martabat diri
            Presiden atau Wakil Presiden dipidana dengan pidana
            penjara paling lama 3 tahun 6 bulan atau pidana denda
            paling banyak kategori IV.
          </li>
          <li>
            <b>Pasal 219:</b> Setiap orang yang menyiarkan,
            mempertunjukkan, atau menempelkan tulisan atau gambar
            sehingga terlihat oleh umum, memperdengarkan rekaman
            sehingga terdengar oleh umum, atau menyebarluaskan
            dengan sarana teknologi informasi yang berisi
            penyerangan kehormatan atau harkat dan martabat
            terhadap Presiden atau Wakil Presiden dengan maksud
            agar isinya diketahui atau lebih diketahui umum
            dipidana dengan pidana penjara paling lama (empat)
            tahun 6 (enam) bulan atau pidana denda paling banyak
            kategori IV.
          </li>
        </ul>

        <label for="c1" class="next-btn">NEXT</label>
      </div>
    </div>
    `);*/
  },
});

$(".chevron,.click-scroll,.ontop__scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#firstletter").offset().top - 20,
    },
    500
  );
});
