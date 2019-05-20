new Vue({
	el:"#app",
	data:{
		name: "mehrab Hossain",
		roll: 200,
		message: "hello vue Js"
	}
});



new Vue({
	el:"#app-2",
	cond:true
});


new Vue({
	el:"#app-3",
	con:true
});




new Vue({
	el:"#info",
	data:{
		c_info:[
			{course: 'html course'},
			{course: 'javascript course'},
			{course: 'bootstrap 4'},
			{course: "php tutorial"}
		]
	}
});



new Vue({
	el:"#event",
	data:{
		message:"this is default message",
		newMessage: ""
	},
	methods:{
		reverseMessage: function(){
			//this.message: "updated message";
			this.message = "updated message";
		},
		againMessage: function(){
			this.newMessage = "New Message";
		}
	}
});




new Vue({
	el:"#bind",
	data:{
		message: ""
	}
});




new Vue({
	el:"#list",
	data:{
		link1:{text:"Facebook",url:"http://www.facebook.com"},
		link2:{text:"Youtube",url:"http://www.youtube.com"},
		activeLink:"link2",
		link: '<a href="">Test Html</a>'
	}
});