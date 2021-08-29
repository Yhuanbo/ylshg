$(function(){
	$("main .branch .tab a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		var $index = $(this).index()
		var width = $(".swiper_2 .swiper-slide").width()
		var a = -($index * width) + "px";
		 $(".swiper_2 .swiper-wrapper").css({
			 "transform":"translateX(" + a + ")",
			 "transition-duration":"300ms"
		 })
	})
	
	//轮播图配置
	var swiper1 = new Swiper('.swiper-container.swiper_1', {
	  pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	   on: {
	      slideChangeTransitionStart: function(){
	        var $a = $(".swiper-pagination .swiper-pagination-current").text()
			if($a < 10){
	        $(".swiper-pagination .swiper-pagination-current").text("0" + $a)
			}
			var $b = $(".swiper-pagination .swiper-pagination-total").text()
			if($b < 10){
				$(".swiper-pagination .swiper-pagination-total").text("0" + $b)
			}
	      },
	    },
	});
	var $b = $(".swiper-pagination .swiper-pagination-total").text()
	if($b < 10){
		$(".swiper-pagination .swiper-pagination-total").text("0" + $b)
	}
	var $a = $(".swiper-pagination .swiper-pagination-current").text()
	if($a < 10){
	$(".swiper-pagination .swiper-pagination-current").text("0" + $a)
	}
	
	var swiper2 = new Swiper('.swiper-container.swiper_2', {
	  on: {
	      slideChangeTransitionStart: function(){
			$(".tab a").removeClass("active")
			$(".tab a").eq(this.activeIndex).addClass("active")
	      },
		 },
	});
	$(".city_nav span").css("display","inline-block")
	
	
	var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r) {
			if (this.getStatus() == BMAP_STATUS_SUCCESS) {
				var lat = r.address.lat //当前经度
				var lng = r.address.lng //当前纬度
				var province = r.address.province //返回当前省份
				var city = r.address.city //返回当前城市
				console.log(province,city)
				$(".city_nav span").first().children("select").children("option:contains(" + province+")").attr("selected",true)
				
				$(".city_nav span").last().children("select").children("option").eq(0).html(city)
			}
		})

	function pos(){
		var str = $(".city_nav span").first().find("select option:selected").text();
		if(str != "四川省"){
			$("main .error_tit").addClass("active")
			setTimeout(function(){
				$("main .error_tit").removeClass("active")
			},2000)
		}else{
			map.addOverlay(marker1);
			map.addOverlay(marker2);
			map.addOverlay(marker3);
			map.addOverlay(marker4);
		}
	}
	setTimeout(function(){
		pos()
	},5000)
})