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
  },2300);
  var swiper1 = new Swiper('.bank-container', {
    nextButton: '.table-next',
    prevButton: '.table-prev',
      loop:true,
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
      nextButton: '.table-next',
      prevButton: '.table-prev',
      loop:true,
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
  var swiper3 = new Swiper('.bank-table-slider .swiper-container', {
      nextButton: '.table-next',
      prevButton: '.table-prev',
      loop:true,
      spaceBetween: 0,
      setWrapperSize: true,
      slidesPerView: 8,
      simulateTouch:false,
      onlyExternal:true,
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
        1600: {
          slidesPerView: 7
        },
        1700: {
          slidesPerView: 8
        }
      }
  });
  hBlock() ;
  lhBlock();
  if(document.querySelector('.bank-table-box') != undefined){
    document.querySelector('.table-next').style.top = headTable - 200 +'px';
    document.querySelector('.table-prev').style.top = headTable - 200 +'px';
    // border element
    for (var i=0; i < document.querySelectorAll('.bank-table-head').length; i++ ) {
      document.querySelectorAll('.bank-table-head')[i].previousElementSibling.style.borderBottom = '1px solid #cecece';
    }
    // border element
  }

}
window.onresize = function() {
  hBlock() ;
  lhBlock();
}
if(document.querySelector('.bank-table') != undefined){
  var headTable = document.querySelector('.bank-table').offsetTop;
  var bottOFF = document.querySelector('.text-block--bottom').offsetTop;
}
window.onscroll = function() {
  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if(document.querySelector('.bank-table') != undefined){
    if (scrollTop > headTable && scrollTop < bottOFF ) {
      // document.querySelector('.bank-table--head').classList.add('fix-table');
      document.querySelector('.bank-table--head--fix').classList.add('visible');
      // document.querySelector('.bank-table--head').style.top = scrollTop + 'px';
      // document.querySelector('.bank-table-head').style.marginTop = document.querySelector('.bank-table--head').clientHeight + 'px';
    }else {
      // document.querySelector('.bank-table--head').classList.remove('fix-table');
      // document.querySelector('.bank-table-head').style.marginTop = '0px';
      document.querySelector('.bank-table--head--fix').classList.remove('visible');
    }
    // slider navigation
    if (scrollTop >  bottOFF ) {
      document.querySelector('.table-next').style.display = 'none';
      document.querySelector('.table-prev').style.display = 'none';
    }else {
      document.querySelector('.table-next').style.display = 'block';
      document.querySelector('.table-prev').style.display = 'block';
    }
    if( scrollTop > headTable - 200 ){
      document.querySelector('.table-next').style.top = scrollTop + window.innerHeight/2 + 'px';
      document.querySelector('.table-prev').style.top = scrollTop + window.innerHeight/2 + 'px';
    } else {
      document.querySelector('.table-next').style.top = headTable - 200 +'px';
      document.querySelector('.table-prev').style.top = headTable - 200 +'px';
    }
    // slider navigation
  }
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
// rait
function infowindow(obj) {
  for (var i=0; i < document.querySelectorAll('.info-box').length; i++ ) {
    document.querySelectorAll('.info-box')[i].style.display = 'none';
  }
  var _thisWindow = obj,
      _thisWindowTOP = _thisWindow.parentNode.offsetTop;
  _thisWindow.nextElementSibling.style.display = 'block';
  _thisWindow.nextElementSibling.style.top =_thisWindowTOP  + 'px';
}
function closeinfo(obj) {
  var _thisClose = obj;
  _thisClose.parentNode.style.display = 'none';
}
// height table
function heightTable() {
  var winH = window.innerHeight;
  document.querySelector('.bank-table-box').style.height = winH - 80 + 'px';
}
// heaight table
function lhBlock() {
  $('.bank-table__row .tbl-slider-1').each(function(){
    var heightBL = 0;
    $(this).find('._height').css('line-height', '');
    $(this).find('._height').each(function(){
      currentHeight = $(this).height();
      if(currentHeight > heightBL) {
          heightBL = currentHeight;
      }
    });
    $(this).find('._height').css('line-height',heightBL + 20 + 'px');
  });
}
function hBlock() {
  $('.bank-table__row').each(function(){
    var heightBL = 0;
    $(this).find('._height').css('height', '');
    $(this).find('._height').each(function(){
      currentHeight = $(this).height();
      if(currentHeight > heightBL) {
          heightBL = currentHeight;
      }
    });
    $(this).find('._height').height(heightBL);
  });
}

$(document).ready(function() {
});


