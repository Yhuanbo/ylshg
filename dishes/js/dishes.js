$(function(){
	//选项卡
	$(".tab li").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".tab_con .con").hide()
		$(".tab_con .con").eq(index).show()
	})
})