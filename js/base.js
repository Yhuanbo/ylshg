$(function(){
	//点击导航
	$("header nav ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	//点击菜单按钮
	$("header .menu_icon").click(function(){
		$(this).toggleClass("active")
		$("header nav").toggleClass("active")
	})
	
	//表单验证
	$(".sub").click(function(){
		$(".detail").removeClass("active")
		check();
		$(".detail").show();
		setTimeout(function(){
			$(".detail").hide()
		},2000)
		return false;
	})
	function check(){
		var name = document.getElementById("txt").value;
		var num = document.getElementById("num").value;
		if($("#txt").val()==""){
			$(".detail").text("请填写您的姓名")
		}else if(!name.match(/^[\u4e00-\u9fa5]{0,}$/g)){
			$(".detail").text("请正确输入姓名")
		}else if($("#num").val()==""){
			$(".detail").text("请输入手机号码")
		}else if(!num.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g)){
			$(".detail").text("请输入正确的手机号码")
		}else{
			$(".detail").addClass("active")
			$(".detail").text("提交成功")
			$(".sub").css({
				"opacity":0.5,
				"cursor":"no-drop"
			})
			return false
		}
	}
	
	//开关在线留言
	$(".close_btn").click(function(){
		$(this).toggleClass("active").parent().toggleClass("active");
	})
	
	//点击回到顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$(".backtop").addClass("active")
			$('.backtop').click(function(){
				$("html,body").stop().animate({"scrollTop":0},500)
			})
		}else{
			$(".backtop").removeClass("active")
		}
		var scrollTop = $(window).scrollTop();
		if($(".sub_banner").length > 0){
		    $(".sub_banner").css({"-webkit-transform": "translateY(" + scrollTop * 0.5 + "px)"})
		}
	})
	
	
})