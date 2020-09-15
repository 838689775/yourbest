/*加载头部代码*/
function initDlHref() {
	$(".hamburger").click(function() {
		if($(".left-nav-wrap .nav-left").hasClass("to-right")) {
			$(".left-nav-wrap .nav-left").removeClass("to-right");
			$(".main").removeClass("to-right");
			$("body").css("overflow-y", "auto");
			return false;
		} else {
			$(".left-nav-wrap .nav-left").addClass("to-right");
			$(".main").addClass("to-right");
			$("body").css("overflow-y", "hidden");
			return false;
		}
	})
	$(".main").on("click", function() {
		$(".left-nav-wrap .nav-left").removeClass("to-right");
		$(".main").removeClass("to-right");
		$("body").css("overflow-y", "auto");
	})
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top > 20) {
			$("#header").addClass("active");
		} else {
			$("#header").removeClass("active");
		}
	})
	$(".close-left-btn").on("click", function() {
		$(".left-nav-wrap .nav-left").removeClass("to-right");
		$("body").css("overflow-y", "auto");
		$(".main").removeClass("to-right");
	})
	$(".add-btn").click(function() {
		$(this).parent().find(".dorpdown").slideToggle(300);
		$(".add-btn").hide();
		$(".reduce-btn").show();
	});
	$(".reduce-btn").click(function() {
		$(this).parent().find(".dorpdown").slideToggle(300);
		$(".reduce-btn").hide();
		$(".add-btn").show();
	});
	$(".left-nav-wrap").load("left-nav-wrap.html", function() {
		$(".close-left-btn").on("click", function() {
			$(".left-nav-wrap .nav-left").removeClass("to-right");
			$("body").css("overflow-y", "auto");
			$(".main").removeClass("to-right");
		})
		$(".add-btn").click(function() {
			$(this).parent().find(".dorpdown").slideToggle(300);
			$(".add-btn").hide();
			$(".reduce-btn").show();
		});
		$(".reduce-btn").click(function() {
			$(this).parent().find(".dorpdown").slideToggle(300);
			$(".reduce-btn").hide();
			$(".add-btn").show();
		});
	})
}

$(document).ready(function() {
	initDlHref();
})