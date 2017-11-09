$(document).ready(function(){
	$("#totop").click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
        return false;
    });
	


	/*banner*/
	banner('.banner_btn a','click','.banner_f .banner_s','.banner',10000,'.banner_l','.banner_r');



	
	        function banner(btn,className,son,box,time,left,right){
            var now_page = 0;
            var page_num = $(son).length;
            $(son).eq(now_page).css({zIndex:5}).show();
            var timer = null;
            $(btn).eq(now_page).addClass(className);
            $(btn).mouseover(function(){
                    if($(this).index()!=now_page&&!$(son).is(":animated")){
                            $(son).eq(now_page).fadeOut(500,function(){
                                    $(this).css({zIndex:3});
                                })
                            $(son).eq($(this).index()).css({zIndex:5}).fadeIn(500);
                            $(btn).removeClass(className);
                            $(btn).eq($(this).index()).addClass(className);
                            now_page = $(this).index();
                        }
                })
            function bannerAuto(){
                        if(!$(son).is(":animated")){
                            if(now_page<page_num-1){
                                $(son).eq(now_page).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(now_page+1).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(now_page+1).addClass(className);
                                now_page++
                            }else{
                                $(son).eq(page_num-1).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(0).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(0).addClass(className);
                                now_page=0;
                            }
                        }
                }

            $(left).click(function(){
                        if(!$(son).is(":animated")){
                            if(now_page==0){
                                $(son).eq(0).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(page_num-1).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(page_num-1).addClass(className);
                                now_page=page_num-1
                            }else{
                                $(son).eq(now_page).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(now_page-1).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(now_page-1).addClass(className);
                                now_page--;
                            }
                        }

            })
            $(right).click(function(){
                        if(!$(son).is(":animated")){
                            if(now_page<page_num-1){
                                $(son).eq(now_page).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(now_page+1).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(now_page+1).addClass(className);
                                now_page++
                            }else{
                                $(son).eq(page_num-1).fadeOut(500,function(){
                                        $(this).css({zIndex:3});
                                    })
                                $(son).eq(0).css({zIndex:5}).fadeIn(500);
                                $(btn).removeClass(className);
                                $(btn).eq(0).addClass(className);
                                now_page=0;
                            }
                        }

                })

            timer= setInterval(bannerAuto,time);
            $(box).hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(bannerAuto,time);
            })
         }

	/*sy_tab*/
	hover_tab($('.k_nav'),$('.k_li li'),'hover');
	hover_tab($('.gz_k_nav'),$('.yhzx_k li'),'hover');
	hover_tab($('.hy_k_nav'),$('.hy_li'),'hover');
	 function hover_tab(obj,btn,add_class){
				obj.eq(0).show();
				btn.eq(0).addClass(add_class);
				btn.eq(0).siblings().removeClass(add_class);
				btn.mouseover(function(){
						if(!$(this).hasClass(add_class)){
							$(this).addClass(add_class);
							$(this).siblings().removeClass(add_class);
							obj.hide();
							obj.eq(	$(this).index()).show();
							}
							
					})
		 } 

	$('.conts2_conts ul li:last').css('border-bottom','none');	 
	/*sy_tab滚动*/
	Imgslide($('#tab_k1 .k_tu1 ul'),$('#tab_k1 .k_tu1 ul li'),$('#tab_k1 .k_tu_l1'),$('#tab_k1 .k_tu_r1'),5,'','');
	Imgslide($('#tab_k2 .k_tu1 ul'),$('#tab_k2 .k_tu1 ul li'),$('#tab_k2 .k_tu_l2'),$('#tab_k2 .k_tu_r2'),5,'','');
	Imgslide($('#tab_k3 .k_tu1 ul'),$('#tab_k3 .k_tu1 ul li'),$('#tab_k3 .k_tu_l3'),$('#tab_k3 .k_tu_r3'),5,'','');
	Imgslide($('#tab_k4 .k_tu1 ul'),$('#tab_k4 .k_tu1 ul li'),$('#tab_k4 .k_tu_l4'),$('#tab_k4 .k_tu_r4'),5,'','');
	Imgslide($('#tab_k7 .k_tu1 ul'),$('#tab_k7 .k_tu1 ul li'),$('#tab_k7 .k_tu_l7'),$('#tab_k7 .k_tu_r7'),5,'','');

	Imgslide($('#gz_tab_k1 .k_tu1 ul'),$('#gz_tab_k1 .k_tu1 ul li'),$('#gz_tab_k1 .k_tu_l1'),$('#gz_tab_k1 .k_tu_r1'),5,'','');
	Imgslide($('#gz_tab_k2 .k_tu1 ul'),$('#gz_tab_k2 .k_tu1 ul li'),$('#gz_tab_k2 .k_tu_l1'),$('#gz_tab_k2 .k_tu_r1'),5,'','');
	Imgslide($('#gz_tab_k3 .k_tu1 ul'),$('#gz_tab_k3 .k_tu1 ul li'),$('#gz_tab_k3 .k_tu_l1'),$('#gz_tab_k3 .k_tu_r1'),5,'','');

	Imgslide($('#tab_k5 .k_tu1 ul'),$('#tab_k5 .k_tu1 ul li'),$('#tab_k5 .k_tu_l1'),$('#tab_k5 .k_tu_r1'),4,'','');
	Imgslide($('#tab_k6 .k_tu1 ul'),$('#tab_k6 .k_tu1 ul li'),$('#tab_k6 .k_tu_l1'),$('#tab_k6 .k_tu_r1'),6,'','');

	function Imgslide(father,son,leftBtn,rightBtn,num,left_no,right_no){
					var page = 1;
					father.css({width:son.outerWidth(true)*son.length});
					var pageNum = Math.ceil(son.length/num);
					leftBtn.addClass(left_no);
					rightBtn.click(function(){
						if(page<pageNum){
								father.animate({marginLeft:'-='+son.outerWidth(true)*num},500);
								leftBtn.removeClass(left_no);
								page++;
								if(page==pageNum){
									rightBtn.addClass(right_no);
								}
						}
					})
					leftBtn.click(function(){
						if(page>1){
								father.animate({marginLeft:'+='+son.outerWidth(true)*num},500);
								rightBtn.removeClass(right_no);
								page--;
								if(page==1){
									leftBtn.addClass(left_no);
								}
							}
					})
				};	
	/*首页*/			
	$('.k_tu li').hover(function(){
		$('.k_tu li').removeClass('current');
		$(this).addClass('current');
		$(this).find('.k_tu_li').addClass('current');
	},function(){});
	/*鼠标经过效果*/
	$('.item_list li').hover(function(){
		$(this).addClass('hover');

	},function(){
		$(this).removeClass('hover');
	});		

	/*产品列表*/
	$('.th_item').hover(function(){
		$(this).addClass('hover');

	},function(){
		$(this).removeClass('hover');
	});	

	/*抢购页面鼠标经过效果*/
	$('.qg_item').hover(function(){
		$(this).addClass('hover');

	},function(){
		$(this).removeClass('hover');
	});		

	
	/*隐藏所有分类*/
	
	$('#all_cat').hover(function(){
		  	if($(this).hasClass('header_b_title2')){
		  		$('.index_class').stop(true,true).slideDown(500);
		  	}
		  },function(){
		  	
		  	if($(this).hasClass('header_b_title2')){
		  		$('.index_class').slideUp(500);
		  	}
		  	
		  })

	/*数量增加减少*/
	/*数量加*/
		 $('.th_item_add').click(function(){
		 	var num =parseInt($(this).parents('.th_itemk').find('.th_itme_txt').val());
		 	var txt =$(this).parents('.th_itemk').find('.th_itme_txt');
		 	txt.val(num+1);
		 	if(txt.val()>1){
		 		txt.prev().removeClass('disable');
		 	}
		 })

		 /*数量减*/
		 $('.th_item_reduce').click(function(){
		 	if(!$(this).hasClass('disable')){
		 		var num =parseInt($(this).parents('.th_itemk').find('.th_itme_txt').val());
		 		var txt =$(this).parents('.th_itemk').find('.th_itme_txt');
		 		if(txt.val()<=1){
		 		}else{
		 			txt.val(num-1);
		 		}
		 	}
		 })	 

		 /*产品内页*/
		  Imgslide($('.detail_l_box_c ul'),$('.detail_l_box_c li'),$('.detail_l_box_l'),$('.detail_l_box_r'),4,"detail_l_box_l_no","detail_l_box_r_no");
		  /*图片滑动*/
				function Imgslide(ul,li,leftBtn,rightBtn,num,left_no,right_no){
						var page = 1;
						ul.css({width:li.outerWidth(true)*li.length});
						var pageNum = Math.ceil(li.length/num);
						leftBtn.addClass(left_no);
						rightBtn.click(function(){
							if(page<pageNum){
									ul.animate({marginLeft:'-='+li.outerWidth(true)*num},500);
									leftBtn.removeClass(left_no);
									page++;
									if(page==pageNum){
										rightBtn.addClass(right_no);
									}
							}
						})
						leftBtn.click(function(){
							if(page>1){
									ul.animate({marginLeft:'+='+li.outerWidth(true)*num},500);
									rightBtn.removeClass(right_no);
									page--;
									if(page==1){
										leftBtn.addClass(left_no);
									}
								}
						})
					}

		 // x_tab($('.detail_f .detail_s'),$('.detail_l_box_c li'),'click');
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
							obj.eq(	$(this).index()).show();
							}
							
					})
		 }  			

})		