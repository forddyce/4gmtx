'use strict';

$(function(){
	var isHeaderLoaded = -1,
		isProductLoaded = -1,
		isStockistLoaded = -1,
		isSupportLoaded = -1,
		isFooterLoaded = -1,
		homeLoaded = -1;

	$('#sTop').load('header.html', function () { 
		isHeaderLoaded = 1;
		console.log('Header loaded.');
	});

	$('#product').load('product.html', function() {
		if ( $(window).width() > 854 ) {
			$('#hotSlider').owlCarousel({
				dots: false,
				nav: true,
				navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
				slideSpeed : 300,
				paginationSpeed : 400,
				items : 1, 
				itemsDesktop : false,
				itemsDesktopSmall : false,
				itemsTablet: false,
				itemsMobile : false
			});
		}

		$('.category-box a[data-color]').each(function () {
			var $this = $(this);
			var color = $this.data('color');
			$this.find('.fa').css('color', color);

			$this.hover(function(e) {
				$(this).css('border-color', e.type === 'mouseenter' ? '#f7f7f7 #f7f7f7 #e8e7e7 ' + color : '#f7f7f7 #ecebeb');
			});
		});

		$('.search-box select').easyDropDown();

		$('[data-toggle=tab]').on('click', function (e) {
			$('html, body').animate({
				scrollTop: $('#categoryTabPane').offset().top - 50
			}, 200);
		});

		isProductLoaded = 1;
		console.log('Product loaded.');
	});

	$('#stockist').load('stockist.html', function() {
		isStockistLoaded = 1;
		console.log('Stockist loaded.');
	});

	$('#support').load('support.html', function() {
		isSupportLoaded = 1;
		console.log('Support loaded.');
	});

	$('#footer').load('footer.html', function () {
		isFooterLoaded = 1;
		console.log('Footer loaded.');
	});

	$('#category').load('category.html', function() {
		$('.category-box a[data-color]').each(function () {
			var $this = $(this);
			var color = $this.data('color');
			$this.find('.fa').css('color', color);

			$this.hover(function(e) {
				$(this).css('border-color', e.type === 'mouseenter' ? '#f7f7f7 #f7f7f7 #e8e7e7 ' + color : '#f7f7f7 #ecebeb');
			});
		});
		console.log('Category loaded.');
	});

	$('#member').load('replikamember.html', function () {
		$('form select').easyDropDown();
		console.log('Web replika member loaded.');
	});

	$(window).on('scroll', function() {
		var i = $(window).scrollTop(),
		$header = $('#sTop');

		if (i > 200) {
			$header.addClass('bounce animated animation-done sticky');
			$('.back-to-top').show();
		}
		else {
			$header.removeClass('bounce animated animation-done sticky');
			$('.back-to-top').hide();
		}

		$('#main-slide').owlCarousel({
			slideSpeed : 300,
			paginationSpeed : 400,
			items : 1, 
			itemsDesktop : false,
			itemsDesktopSmall : false,
			itemsTablet: false,
			itemsMobile : false
		});
	});

	$('.back-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	var checkHomeTimeout = setTimeout(function() {
		checkHomeLoaded();
	}, 500);

	function checkHomeLoaded() {
		if (homeLoaded === 1) { clearTimeout(checkHomeTimeout); }
		else {
			if (
				isProductLoaded === 1 && 
				isStockistLoaded === 1 && 
				isSupportLoaded === 1
			) {
				$('#navMenu li a[data-toggle=scroll]').on('click', function (e) {
					var $dom = $(this).attr('href');

					$('html, body').animate({
						scrollTop: $($dom).offset().top - 50
					}, 500);

					if ($('.navbar-collapse').hasClass('in')) {
						$('.navbar-collapse').removeClass('in');
					}
				});
				// or other fullpage features
				homeLoaded = 1;
			}
		}
	}
});
