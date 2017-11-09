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
// 爬楼
$(function(){
	$(window).on("scroll", function(){
		// 获取页面中滚动高度
		var _scrollTop = $(this).scrollTop();
		// 获取1L楼层前布局结构的高度
		var _top = $(".floor").offset().top;
		// 判断，显示/隐藏菜单
		if (_scrollTop > _top) {
			$("#menu").show();
		} else {
			$("#menu").hide();
		}
		// 切换菜单中楼层汉字的显示隐藏
		$(".floor").each(function(index, element){
			if (_scrollTop > $(element).offset().top) {
				$("#menu li").eq(index)
							 .addClass("current")
							 .children("span").show().end()
							 .siblings()
							 .removeClass("current")
							 .children("span").hide();
			}
		});
	});

	// 处理菜单中 li 的点击事件
	$("#menu").on("click", "li", function(){
		// 获取当前点击的 li 索引
		var _index = $(this).index();
		// 查找对应楼层，获取在文档中距离顶部的定位
		var _top = $(".floor").eq(_index).offset().top + 1;
		// 向指定楼层滚动
		$("html,body").animate({scrollTop: _top}, 2000);
	});

	// 鼠标移入/移出 li 显示/隐藏汉字
	$("#menu li").hover(function(){
		$(this).children("span").show();
	}, function(){
		if (!$(this).is(".current"))
			$(this).children("span").hide();
	});
});
// 返回顶部
$(function(){
	$("#fh_top").click(function(){
		$(window).scrollTop(0);
	});
});

			