$(function(){
	$("main .sec_one .tips").addClass("active")
	$("#get").click(function(){
		$(".detail").removeClass("active")
		checked();
		$(".detail").show();
		setTimeout(function(){
			$(".detail").hide()
		},1000)
		return false;
	})
	
	function checked(){
		var name = document.getElementById("your_name").value;
		var tel = document.getElementById("your_tel").value;
		if($("#your_name").val()==""){
			$(".detail").text("请填写您的姓名")
		}else if(!name.match(/^[\u4e00-\u9fa5]{0,}$/g)){
			$(".detail").text("请正确输入姓名")
		}else if($("#your_tel").val()==""){
			$(".detail").text("请输入手机号码")
		}else if(!tel.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g)){
			$(".detail").text("请输入正确的手机号码")
		}else{
			$(".detail").addClass("active")
			$(".detail").text("提交成功")
			$("#get").text("提交成功").css({
				"opacity":0.5,
				"cursor":"no-drop"
			})
			return false;
		}
	}
})