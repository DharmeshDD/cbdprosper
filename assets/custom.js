$( document ).ready(function() {
$('#announcement-bar').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }   
});

$('#home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }   
});

$('#shop-bestseller').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:2
        },
        1000:{
            items:4
        }
    }   
});

$('#customer-review').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    stagePadding: 200,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0
        },
        768:{
            items:1,
            stagePadding: 100
        },
        992:{
            items:1,
            stagePadding: 90
        },
        1000:{
            items:1,            
        },
        1200:{
            items:1,
            margin: 20,
            stagePadding: 90
        },
        1366:{
            items:1,            
            stagePadding: 150
        }
    }   
});

$('#cbd-use-slider').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    touchDrag  : false,
    mouseDrag  : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:2
        },
        1000:{
            items:5
        },
        1200:{
            items:5,
            margin: 20,            
        },
        1366:{
            items:5,            
        }
    }   
});


$(".phoneno").click(function(){
    $(".phoneno").toggleClass('phoneicon');
    $(".contact-numbers").toggleClass('display');
 });
});

$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass('greenicon');    
 });

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 20,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});



// Search
$('.search-icon-link, .search-close-icon').click(function () {
    if ($('.inputSearch').hasClass('active')) {
        $('body').removeClass('search-open');
        $('.inputSearch').hide();
        $('.inputSearch').removeClass('active');
        $('.search.float-right').removeClass('active');
   } else {
        $('body').addClass('search-open');
        $('.inputSearch').addClass('active');
        $('.search.float-right').addClass('active');
        $('.inputSearch').show();
        $('.inputSearch').focus();
   }
})

$('.close-icon-mobile a').click(function (){
    $('.mobile-search').toggleClass('active');
})

$('#SortBy').click(function (){
    $('#SortBy').toggleClass('select-active');
})

// Header Height 

function headerTop(){
    var header = document.getElementsByClassName("announcement")[0];
    var header_height = header.offsetHeight + "px";
    $( '.header' ).css( {
        'top': header_height
    });
}

headerTop();
$(window).on("load",function () {
    headerTop();
})
$(window).resize(function () {
    headerTop();
})

$(".announcement-close-icon").click(function(){
    $( '.header' ).css( {
        'top': '0px'
    });
    $(".announcement").addClass('d-none');
 });