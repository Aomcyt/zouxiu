window.onload = function() {
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
				swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper) {
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
		});
		/*var mySwiper = new Swiper('.banner', {
			pagination: '.swiper-pagination'
		});*/
	}
	//var infoApp = angular.module("infoApp",[]);
	//infoApp.controller("infoCtrl",function($scope){
	//	$scope.cloth = JSON.parse(localStorage.cloth);
	//	console.log(1)
	//})