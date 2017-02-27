"use strict";

$(document).ready(function () {

	$('.Mycarousel').slick({

		prevArrow: "<img class='a-left control-c prev slick-prev' src='images/back.png'>",
		nextArrow: "<img class='a-right control-c next slick-next' src='images/right.png'>"

	});

	$('.Mycarousel2').slick({

		prevArrow: "<img class='a-left control-c prev slick-prev' src='images/back.png'>",
		nextArrow: "<img class='a-right control-c next slick-next' src='images/right.png'>",

		slidesToShow: 5,
		slidesToScroll: 1

	});

	$(".button-collapse").sideNav();

	var orderButton = function orderButton(elem) {
		elem.innerHTML = 'Заказать товар и уточнить наличие на складе и прочие подробности можно по телефонам: <b><br>+375 (29) 641-46-13<br>+375 (232) 75-80-87</b>';
		elem.removeAttribute('id');
	};

	var clickable = function clickable() {
		var target;
		$('.preview, .position h5').click(function () {
			target = '#' + $(this).parent().attr('id') + ' .modal-market';
			$(target).fadeIn('normal', function () {
				$(target).css('display', 'block');
			});
		});

		$('.close').click(function () {
			$(target).fadeOut('normal', function () {
				$(target).css('display', 'none');
			});
		});
	};

	var print = function print() {
		$('#results').append('<div id="u' + i + '" class="position"><img class="preview" src=' + json_a[value].img + ' alt="' + json_a[value].name + '" /><h5>' + json_a[value].name + '</h5><div class="modal-market"><div><span class="close">X</span>' + '<img src=' + json_a[value].img + ' alt="' + json_a[value].name + '" /><h6>' + json_a[value].name + '</h6><p>' + json_a[value].descr + '</p><p id="button" class="hover-board" onclick="orderButton(this);">Заказать</p></div></div></div>');
	};

	$(document).ready(function () {
		$.getJSON('../mylist.json', {}, function (json) {
			// загрузка JSON данных из файла .json
			json_a = json;
		});
		i = 1;j = 1;j_flag = 1;
		/*
  			$('#results').animate({opacity: 'toggle'},200, function () {
  			$('#results').html('');
  				for (value in json_a) {
  							print();
  						i++;
  						}
  						i=1;
  				clickable();
  						});
  			$('#results').animate({opacity: 'toggle'}, 200);
  */clickable();
		id_tag = '', id_brand = '';

		$(".sort li").click(function (e) {
			e.preventDefault();
			var id = $(this).attr('id');

			if (id.length == 3) {
				$('#' + $('.active').attr('id')).removeClass('active');
				$('#' + id).addClass('active');
			} else {
				$('#' + $('.active_brand').attr('id')).removeClass('active_brand');
				$('#' + id).addClass('active_brand');
			}

			if (id.length == 3) id_tag = id;else id_brand = id;

			if (id_tag == 'all') id_tag = '';
			if (id_brand == 'all_brand') id_brand = '';

			if (id_brand != '' && id_tag == '') {

				$('#results').animate({ opacity: 'toggle' }, 200, function () {
					$('#results').html('');
					for (value in json_a) {
						if (id_brand == json_a[value].brand) print();
						i++;
					}
					i = 1;
					clickable();
				});
				$('#results').animate({ opacity: 'toggle' }, 200);
			};

			if (id_brand == '' && id_tag != '') {

				$('#results').animate({ opacity: 'toggle' }, 200, function () {
					$('#results').html('');
					for (value in json_a) {
						if (json_a[value].tag == id_tag) print();
						i++;
					}
					j_flag = j;
					i = 1;
					clickable();
				});
				$('#results').animate({ opacity: 'toggle' }, 200);
			};

			if (id_brand != '' && id_tag != '') {

				$('#results').animate({ opacity: 'toggle' }, 200, function () {
					$('#results').html('');
					for (value in json_a) {
						if (id_brand == json_a[value].brand && id_tag == json_a[value].tag) {
							print();j++;
						}
						i++;
					}
					j_flag = j;
					if (j_flag == 1) $('#results').html('').append('<h5 class="noresults">Извините, но поиски прошли безрезультатно</h5>');
					i = 1;j = 1;
					clickable();
				});
				$('#results').animate({ opacity: 'toggle' }, 200);
			};

			if (id_brand == '' && id_tag == '') {

				$('#results').animate({ opacity: 'toggle' }, 200, function () {
					$('#results').html('');
					for (value in json_a) {
						print();
						i++;
					}
					i = 1;
					clickable();
				});
				$('#results').animate({ opacity: 'toggle' }, 200);
			};
		});
	});
});
//# sourceMappingURL=main.js.map
