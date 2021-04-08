(function ($) {
	$.fn.numberAnimate = function (setting) {
		var defaults = {
			speed: 1000 * 10, //动画速度
			num: "", //初始化值
			iniAnimate: true, //是否要初始化动画效果
			symbol: '', //默认的分割符号，千，万，千万
			dot: 0 //保留几位小数点
		}
		//如果setting为空，就取default的值
		var setting = $.extend(defaults, setting);

		//如果对象有多个，提示出错
		if ($(this).length > 1) {
			alert("just only one obj!");
			return;
		}
		//如果未设置初始化值。提示出错
		if (setting.num === "") {
			alert("must set a num!");
			return;
		}
		var nHtml = '<div class="mt-number-animate-dom" data-num="{{num}}">\
			<div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">0</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">1</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">2</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">3</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">4</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">5</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">6</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">7</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">8</div></div>\
            <div class="mt-number-animate-span border-module">\
			<span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">9</div></div>\
            <div class="mt-number-animate-span border-module"><span class="border-span2 top-left2"></span>\
			<span class="border-span2 top-right2"></span>\
			<span class="border-span2 bottom-left2"></span>\
			<span class="border-span2 bottom-right2"></span><div class="num-flex">.</div></div>\
          </div>';

		//数字处理
		var numToArr = function (num) {
			num = parseFloat(num).toFixed(setting.dot);
			if (typeof (num) == 'number') {
				var arrStr = num.toString().split("");
			} else {
				var arrStr = num.split("");
			}
			//console.log(arrStr);
			return arrStr;
		}

		//设置DOM symbol:分割符号
		var setNumDom = function (arrStr) {
			var shtml = '<div class="mt-number-animate">';
			for (var i = 0, len = arrStr.length; i < len; i++) {
				if (i != 0 && (len - i) % 3 == 0 && setting.symbol != "" && arrStr[i] != ".") {
					shtml += '<div class="mt-number-animate-dot border-module"><span class="border-span2 top-left2"></span>';
					shtml += '<span class="border-span2 top-right2"></span><span class="border-span2 bottom-left2"></span>';
					shtml += '<span class="border-span2 bottom-right2"></span><div class="num-flex">' + setting.symbol + '</div></div>' + nHtml.replace("{{num}}", arrStr[i]);
				} else {
					shtml += nHtml.replace("{{num}}", arrStr[i]);
				}
			}
			shtml += '</div>';
			return shtml;
		}

		//执行动画
		var runAnimate = function ($parent) {
			
			$parent.find(".mt-number-animate-dom").each(function () {
				var num = $(this).attr("data-num");
				num = (num == "." ? 10 : num);
				var spanHei = $(this).height() / 11; //11为元素个数
				var thisTop = (-num * spanHei) + "px";
				if (thisTop != $(this).css("top")) {
					if (setting.iniAnimate) {
						//HTML5不支持
						if (!window.applicationCache) {
							$(this).animate({
								top: thisTop
							}, setting.speed);
						} else {
							$(this).css({
								'transform': 'translateY(' + thisTop + ')',
								'-ms-transform': 'translateY(' + thisTop + ')',
								/* IE 9 */
								'-moz-transform': 'translateY(' + thisTop + ')',
								/* Firefox */
								'-webkit-transform': 'translateY(' + thisTop + ')',
								/* Safari 和 Chrome */
								'-o-transform': 'translateY(' + thisTop + ')',
								'-ms-transition': setting.speed / 1000 + 's',
								'-moz-transition': setting.speed / 1000 + 's',
								'-webkit-transition': setting.speed / 1000 + 's',
								'-o-transition': setting.speed / 1000 + 's',
								'transition': setting.speed / 1000 + 's'
							});
						}
					} else {
						setting.iniAnimate = true;
						$(this).css({
							top: thisTop
						});
					}
				}
			});
		}

		//初始化
		var init = function ($parent) {
			//初始化
			$parent.html(setNumDom(numToArr(setting.num)));
			runAnimate($parent);
		};

		//重置参数
		this.resetData = function (num) {
			var newArr = numToArr(num);
			var $dom = $(this).find(".mt-number-animate-dom");
			if ($dom.length < newArr.length) {
				$(this).html(setNumDom(numToArr(num)));
			} else {
				$dom.each(function (index, el) {
					$(this).attr("data-num", newArr[index]);
				});
			}
			runAnimate($(this));
		}
		//init
		init($(this));
		return this;
	}
})(jQuery);