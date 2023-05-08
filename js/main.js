// jQuery
$(document).ready(function () {
    //모바일메뉴
    const mobileMenu = $('.mobile-menu'),
        mobileBt = $('.mb-bt'),
        mMenu = $('.m-menu'),
        mMenuLi = $('.m-menu > li'),
        mMainMenu = $('.m-mainmenu'),
        mSubMenu = $('.m-submenu')

    mobileBt.click(function (e) {
        e.preventDefault();
        let windowWidth = window.innerWidth;
        if (windowWidth > 1100) {
            return;
        }
        mMainMenu.removeClass('m-mainmenu-active')
        mSubMenu.hide();
        mobileMenu.toggleClass('mobile-menu-active')
        let temp = mobileMenu.hasClass('mobile-menu-active')
        if (temp) {
            // $('html').css('overflow', 'hidden')
            // $(this).find('img').attr('src', 'images/search_close.png')

        } else {
            // $('html').css('overflow-y', 'auto')
            // $(this).find('img').attr('src', 'images/main_allmenu.png')
        }
    })

    //댑스1 - li메뉴 클릭
    $.each(mMenuLi, function (index, item) {
        console.log(index)
        let depth1 = $(this).find('.m-mainmenu')
        depth1.click(function (event) {
            console.log('click')
            event.preventDefault();
            //현재 포커스가 있는지 없는지 확인
            let temp = $(this).hasClass('m-mainmenu-active')
            if (temp) {

                // /댑스2가 열린상태 여서 리무브 
                $(this).removeClass('m-mainmenu-active')
                $(this).next().stop().slideUp();
            } else {
                mMainMenu.removeClass('m-mainmenu-active')
                $(this).addClass('m-mainmenu-active')
                mSubMenu.stop().slideUp();
                $(this).next().stop().slideDown();
            }
        })
    })

})






$(document).ready(function () {
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        console.log(st)
        if (st > 717) {
            $('.header').addClass('hide')
            $('.mb-bt').addClass('hide')
            // $('.header .inner .logo img').addClass('hide')


        } else {
            $('.header').removeClass('hide')
            $('.mb-bt').removeClass('hide')
            // $('.logo').addClass('hide')

        }

    })



})

// 헤더 색상 변경
let HeaderHeight = $('.header').outerHeight();
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= HeaderHeight) {
        $('.header').addClass('active');
        $('.header .inner .logo img').attr('src', 'images/logo1_230106.png')
        $('.icon .login img').attr('src', 'images/블랙로그인.png')
        $('.icon .join img').attr('src', 'images/블랙회원가입.png')
        // $('.nav .main-nav  .sub-menu li a').addClass('active');
    } else {
        $('.header').removeClass('active');
        // $('.header .inner .logo img').attr('src', 'images/main-logo.png')
        $('.header .inner .logo img').attr('src', 'images/logo1_230106.png')
        // $('.icon .login img').attr('src', 'images/login-icon.png')
        $('.icon .login img').attr('src', 'images/블랙로그인.png')
        // $('.icon .join img').attr('src', 'images/join-icon.png')
    }
})

//모바일 메뉴 
$('.mb-bt').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('mb-bt-open')
    //   $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
    //   $('.mb-nav').toggleClass('mb-nav-open')banner01
    //   $('.mb-menu>li').height(54)
})


//배너슬라이더
var swiper = new Swiper(".sw-visual", {
    autoplay: true,
    loop: true,
    // spaceBetween : -30,
    // mode : 'fade',
    loopFillGroupWithBlank: false,
    delay: 7000,
    speed: 2000,
    // disableOnInteraction : false,
    // centeredSlides : true ,
    // spaceBetween: 1,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },

    on: {
        slideChange: function () {
            if ($('.swiper-slide01').hasClass('swiper-slide-active')) {
                $('.nav .main-nav li a').css('color', 'black')
                $('.icon .login a').css('color', 'black')
                $('.icon .join a').css('color', 'black')
                $('.header .inner .logo img').attr('src', 'images/logo1_230106.png')
                $('.icon .login img').attr('src', 'images/블랙로그인.png')
                $('.icon .join img').attr('src', 'images/블랙회원가입.png')
                // $('nav .sub li a').css('color','black')  
            }
            else {
                $('.nav .main-nav li a').css('color', 'white')
                $('.icon .login a').css('color', 'white')
                $('.icon .join a').css('color', 'white')
                $('.header .inner .logo img').attr('src', 'images/main-logo.png')
                $('.icon .login img').attr('src', 'images/login-icon.png')
                $('.icon .join img').attr('src', 'images/join-icon.png')
                // $('.icon .join img').attr('src','images/블랙회원가입.png')
                // $('nav .sub li a').css('color','white')
            }
        },

        slideChangeTransitionStart: function () {
            $('.visual-box').hide(0);

        },
        slideChangeTransitionEnd: function () {
            $('.visual-box').show(0);

        }
    }
});





// 주요프로그램 슬라이더
var swiper = new Swiper(".sw-basic", {
    autoplay: true,
    loop: true,
    // spaceBetween : 0,
    // loopFillGroupWithBlank: false,
    loopFillGroupWithBlank: true,
    delay: 6000,
    disableOnInteraction: false,
    // centeredSlides : true ,
    // spaceBetween: 1,
    // slidesPerView: 2.5,
    breakpoints: {
        800: {
            slidesPerView: 2.5
        },
        590: {
            slidesPerView: 1.5
        }

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// 청년프로그램
var swiper = new Swiper(".sw-item", {
    spaceBetween: 35,

    loop: true,
    // centeredSlides: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        // disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    slidesPerView: 1.5,
    breakpoints: {
        // 1100: {
        //     slidesPerView: 3
        // },
        800: {
            slidesPerView: 3
        },

        590: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 1.5
        },



    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});

//매칭영역
var swiper = new Swiper(".sw-matching", {
    spaceBetween: 5,
    loop: true,
    // centeredSlides: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    slidesPerView: 2,
    breakpoints: {
        // 1100: {
        //     slidesPerView: 3
        // },
        800: {
            slidesPerView: 3
        },



    },

    pagination: {
        el: ".s-pagination",
        clickable: true,
    }



    // navigation: {
    //     nextEl: ".btn-next",
    //     prevEl: ".btn-prev",
    // },
});



// 게시판배너영역
var swiper = new Swiper(".sw-banner", {
    // spaceBetween: 60,

    loop: true,
    // centeredSlides: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 6000,
    //     speed: 500,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    slidesPerView: 1,
    breakpoints: {
        // 1100: {
        //     slidesPerView: 3
        // },
        700: {
            slidesPerView: 2
        },



    },

    navigation: {
        nextEl: ".bullet-next",
        prevEl: ".bullet-prev",
    },
});




