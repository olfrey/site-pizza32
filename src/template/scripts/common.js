$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');
	$('.input_date .input__wrap').mask('00/00/2000');
	$('.input_time .input__wrap').mask('00:00');

	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});

	$('.slider__list').slick({
		arrows: false, 
		dots: true,
		fade: true,
		appendDots: $('.slider__nav')
	})


	$('.increment__input input').onkeypress = function(e) {
	  e = e || event;

	  if (e.ctrlKey || e.altKey || e.metaKey) return;

	  var chr = getChar(e);

	  // с null надо осторожно в неравенствах,
	  // т.к. например null >= '0' => true
	  // на всякий случай лучше вынести проверку chr == null отдельно
	  if (chr == null) return;

	  if (chr < '0' || chr > '9') {
	    return false;
	  }
	}

	var productPrice = $('.product__price span'),
			productCount = $('.product__count-wrap .increment__input input');



	function sumProduct() {
		var value = productCount.val(),
				productPriceSum = Number(productPrice.attr('data-price')),
				productPriceTotal = productPriceSum * value;

		console.log(productPriceTotal);
		productPrice.html(productPriceTotal);
	}

	$('.increment__btn').click(function(event) {
		var increment = $(this).parents('.increment');
				arrea = increment.find('.increment__input input'),
				value = Number(arrea.val());

		if (value > 0 && value < 100) {
			if ($(this).hasClass('increment__btn_plus')) {
				if (value < 9) {
					arrea.val(value + 1);
				}
				arrea.val(value + 1);
			} else{
				if (value > 1) {
					arrea.val(value - 1);
				}
			}
		}
		sumProduct();

	});

	productCount.change(function(event) {
		sumProduct();
	});


	var nav = $('.nav ul'),
			mobileBtn = $('.mobile-btn');

	mobileBtn.click(function(event) {
		if ($(window).width() < 768) {
			$(this).toggleClass('mobile-btn_toggle');
			nav.slideToggle(300);
		} else {
			$(this).removeClass('mobile-btn_toggle');
			nav.removeAttr('style');
		}
	});
});
