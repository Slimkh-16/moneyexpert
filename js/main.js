window.onload = function() {
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.remove('noscroll')
  body.classList.add('loading')
  setTimeout(function(){body.classList.add('loaded')},1500)
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},2300)
  // PRELOADER
  setTimeout(function(){
    rait();
  },1500);
  var swiper1 = new Swiper('.bank-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop:false,
      spaceBetween: 5,
      setWrapperSize: true,
      slidesPerView: 9,
      simulateTouch:false,
      onlyExternal:true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8
        },
        1700: {
          slidesPerView: 9
        }
      }
  });
  var swiper2 = new Swiper('.bank-raiting-slider', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop:false,
      spaceBetween: 5,
      setWrapperSize: true,
      slidesPerView: 9,
      simulateTouch:false,
      onlyExternal:true,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8
        },
        1700: {
          slidesPerView: 9
        }
      }
  });
  if(document.querySelector('.bank-table-box') != undefined)
    heightTable()
}
window.onresize = function() {
  if(document.querySelector('.bank-table-box') != undefined)
    heightTable()
}
// rait
function rait() {
  var raitBlock = document.querySelectorAll('.rait');
  var raitBlockText = document.querySelectorAll('.tek-tr');
  for(var i = 0; i < raitBlock.length; i++) {
    var data_rt_1 = raitBlock[i].getAttribute('data-rt-1'),
        data_rt_h = Math.ceil(data_rt_1/10*100);
        raitBlock[i].style.height= data_rt_h + 'px';
        raitBlockText[i].innerHTML = data_rt_1 + ' / 10';
  }
}
// rait
function tekRt(obj){
  var _this = obj;
  for(var k = 0; k<document.querySelectorAll('.bank-raiting-nav ul li').length; k++) {
    document.querySelectorAll('.bank-raiting-nav ul li')[k].classList.remove('active');
  }
  _this.classList.add('active');
  var data_filter = _this.getAttribute('data-filter');
  var rtBlock = document.querySelectorAll('.rait');
  var rtBlockText = document.querySelectorAll('.tek-tr');
  for(var i = 0; i < rtBlock.length; i++) {
    var data_rt = rtBlock[i].getAttribute('data-rt-'+ data_filter +''),
        data_rt_h = Math.ceil(data_rt/10*100);
        rtBlock[i].style.height= data_rt_h + 'px';
        rtBlockText[i].innerHTML = data_rt + ' / 10';
  }
};
// height table
function heightTable() {
  var winH = window.innerHeight;
  document.querySelector('.bank-table-box').style.height = winH + 'px';
}
// heaight table
$(window).load(function(){
  $('#myTable').fixedHeaderTable({
    // altClass: 'odd',
    // footer: false,
    fixedColumns: 1,
    // autoResize: true
    footer: false,
    cloneHeadToFoot: false,
    // fixedColumns: true,
    autoResize: true
  });
});
$(window).resize(function(){
  $('#myTable').fixedHeaderTable('destroy');
  $('#myTable').fixedHeaderTable({
    // altClass: 'odd',
    fixedColumns: 1,
    footer: false,
    cloneHeadToFoot: false,
    fixedColumns: true,
    autoResize: true
  });
})
$(document).ready(function() {
  // $('.bank-raiting-nav ul li').on('click',function(){
  //   $('.bank-raiting-nav ul li').removeClass('active');
  //   this.classList.add('active');
  //   var data_filter = this.getAttribute('data-filter');
  //   var rtBlock = document.querySelectorAll('.rait');
  //   var rtBlockText = document.querySelectorAll('.tek-tr');
  //   for(var i = 0; i < rtBlock.length; i++) {
  //     var data_rt = rtBlock[i].getAttribute('data-rt-'+ data_filter +''),
  //         data_rt_h = Math.ceil(data_rt/10*200);
  //         rtBlock[i].style.height= data_rt_h + 'px';
  //         rtBlockText[i].innerHTML = data_rt + ' / 10';
  //   }
  //   console.log()
  // });
});


