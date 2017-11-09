$(function(){ 
	$(".h_class span").click(function(){
		$(".h_class ul").stop(true,true).slideToggle();
	});
	
	$(".h_class ul li").last().css({'border':'none'});
	
	/*banner自适应屏幕*/
	//var w_img = window.screen.width
	//$(".slideBox .bd").find("img").width(w_img);
	/*banner自适应屏幕*/
	/*回顶部*/
	$("#totop").click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
        return false;
    });
	/*回顶部*/
	$('#erweima').hover(function(){
		$(this).find('div').show();
	},function(){
		$(this).find('div').hide();
	});
});

/*input提示*/
/*value="关键词" defaultval="关键词" onblur="blurInputEle(this)" onfocus="focusInputEle(this)"*/
function getAttributeValue(o, key) {
if (!o.attributes) return null;
var attr = o.attributes;
for (var i = 0; i < attr.length; i++){
if (key.toLowerCase() == attr[i].name.toLowerCase())
return attr[i].value;
}
return null;
}
function focusInputEle(o) {
if (o.value == getAttributeValue(o, 'defaultVal')){
o.value = '';
// o.style.color = "#3b8dd0";
}
}
function blurInputEle(o) {
if (o.value == '') {
o.value = getAttributeValue(o, 'defaultVal');
// o.style.color = "#3b8dd0";
}
}
/*input提示*/
/*setTimeout(function(){
alert(msg);
},1000);*/

function addToFavorite(){var a="http://99ax2.gz9.hostadm.net",b="枫叶爱心";document.all?window.external.AddFavorite(a,b):window.sidebar&&window.sidebar.addPanel?window.sidebar.addPanel(b,a,""):alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。")}

