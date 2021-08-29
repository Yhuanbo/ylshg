$(function(){
	$("#tj_btn").click(function(){
		$(".detail").removeClass("active")
		check();
		$(".detail").show();
		setTimeout(function(){
			$(".detail").hide()
		},1000)
		return false;
	})
	
	function check(){
		var name = document.getElementById("name").value;
		var tel = document.getElementById("tel").value;
		if(name==""){
			$(".detail").text("请填写您的姓名")
		}else if(!name.match(/^[\u4e00-\u9fa5]{0,}$/g)){
			$(".detail").text("请正确输入姓名")
		}else if(tel==""){
			$(".detail").text("请输入手机号码")
		}else if(!tel.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g)){
			$(".detail").text("请输入正确的手机号码")
		}else{
			$(".detail").addClass("active")
			$(".detail").text("提交成功")
			$("#tj_btn").css({
				"opacity":0.5,
				"cursor":"no-drop"
			})
			return false
		}
	}
})