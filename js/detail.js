// mid_banner 
$(function(){
	var $divs = $("._page"),
		len = $divs.length,
		currentIndex = 0,
		nextIndex = 1;
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
		currentIndex = nextIndex;
		nextIndex++;
		if (nextIndex >= len)
			nextIndex = 0;
	}
});