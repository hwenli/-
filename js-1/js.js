$(document).ready(function(){
		$('.nav_f').hover(function(){
			$(this).addClass('nav_f_h').find('.nav_h').stop(true,true).slideDown(200);
		},function(){
			$(this).removeClass('nav_f_h').find('.nav_h').slideUp(200);
		})
		$('.nav2_f').hover(function(){
			$(this).addClass('nav2_f_h').find('.nav2_h').stop(true,true).slideDown(200);
			
		},function(){
			$(this).removeClass('nav2_f_h').find('.nav2_h').slideUp(200);
		})
		

		x_tab($('.bao_nav_img'),$('.bao_nav_s a'),'hover');

		$('.join_flow_box li').hover(function(){
			$(this).addClass('click');
		},function(){
			$(this).removeClass('click');
		})
		
		
		$('.xiangqing_t').click(function(){
			if(!$(this).hasClass('click')){
			$(this).addClass('click');
			 $(".zi_xiangqing_s").show("slow");
			}
			else
			{
				$(this).removeClass('click');
				 $(".zi_xiangqing_s").hide("slow");
				
				}
		})
		
		$('.xiangqing_t2').click(function(){
			if(!$(this).hasClass('click')){
			$(this).addClass('click');
			 $(".zi_xiangqing_s2").show("slow");
			}
			else
			{
				$(this).removeClass('click');
				 $(".zi_xiangqing_s2").hide("slow");
				
				}
		})

		/*选项卡*/
		  function x_tab(obj,btn,add_class){
				obj.eq(0).show();
				btn.eq(0).addClass(add_class);
				btn.eq(0).siblings().removeClass(add_class);
				btn.mouseover(function(){
						if(!$(this).hasClass(add_class)){
							$(this).addClass(add_class);
							$(this).siblings().removeClass(add_class);
							obj.hide();
							obj.eq(	$(this).index()).show(1000);
							}
							
					})
		 }  
	

	

})		