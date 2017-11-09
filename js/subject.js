// banner
$(function(){
	var $imgs = $("#container li"),
		len = $imgs.length,
		currentIndex = 0,
		nextIndex = 1,
		timer = null;
	// 鼠标移入移出div#container时的效果
	$("#container").hover(function(){
		// mouseenter
		clearInterval(timer);
		$("#prev, #next").show();
	},function(){
		// mouseleave
		timer = setInterval(move, 3000);
		$("#prev, #next").hide();
	}).trigger("mouseleave");

	// 绑定鼠标移入a的事件
	$("#pages").on("mouseover","a", function(){
		if (currentIndex == $(this).index())
			return;
		nextIndex = $(this).index();
		move();
	});
	// 向上
	$("#prev").click(function(){
		nextIndex = currentIndex - 1;
		if (nextIndex < 0)
			nextIndex = len - 1;
		move();
	});
	// 向下
	$("#next").click(move);

	function move(){
		$imgs.eq(currentIndex).fadeOut().end()
			 .eq(nextIndex).fadeIn();
		// a背景
		$("#pages a").eq(currentIndex).removeClass("current").end()
				     .eq(nextIndex).addClass("current");

		currentIndex = nextIndex;
		nextIndex++;
		if (nextIndex >= len)
			nextIndex = 0;
	}
});

// mid_banner 
$(function(){
	var $divs = $("._page"),
		len = $divs.length,
		currentIndex = 0,
		nextIndex = 1;

	// 绑定鼠标移入a的事件
	$("._pages").on("mouseover","a", function(){
		if (currentIndex == $(this).index())
			return;
		nextIndex = $(this).index();
		move();
	});
	// 向上
	$(".prev").click(function(){
		nextIndex = currentIndex - 1;
		if (nextIndex < 0)
			nextIndex = len - 1;
		move();
	});
	// 向下
	$(".next").click(move);

	function move(){
		$divs.eq(currentIndex).fadeOut().end()
			 .eq(nextIndex).fadeIn();
		// a背景
		$("._pages a").eq(currentIndex).removeClass("current").end()
					  .eq(nextIndex).addClass("current").end();

		currentIndex = nextIndex;
		nextIndex++;
		if (nextIndex >= len)
			nextIndex = 0;
	}
});

