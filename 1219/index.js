var routes = [
	{path:'/',component:{template:'#list'}},
	{path:'/list1',component:{template:'#list1'}},
	{path:'/list2',component:{template:'#list2'}},
	{path:'/list3',component:{template:'#list3'}},
	{path:'/list4',component:{template:'#list4'}}
]
var router = new VueRouter({
	routes
})
var mySwiper = new Swiper('.swiper-container', {
	loop:true,
	autoplay:{delay: 1000},
	pagination: {
		el: '.swiper-pagination',
	},
});
$(".list a").click(function (){
　　$(this).addClass("active").siblings().removeClass("active");
　　var index = $(this).index();
　　$(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
});
new Vue({
	el: "#box",
	router
})
