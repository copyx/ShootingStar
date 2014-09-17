var user_ori = {
	'e_mail' : '',
	'pass' : '',
	'city' : '',
	'area' : '',
	'stars' : '',
};
var log_ori = {
	'e_mail' : '',
	'pass' : '',
};
var quest_ori = {
		'time' : '',
		'client' : 'test',
		'worker' : '',
		'title' : '',
		'stars' : '',
		'category' : '',
		'area' : 'qq',
		'time_limit' : 'qq',
		'contents' : '',
		'city' : 'qq',
		'lat' : '',
		'lag' : ''
	}


$(document).ready(function() {
	
	window.addEventListener('tizenhwkey', function(e) {
	    if (e.keyName == "back") {
	        //tizen.application.getCurrentApplication().exit();
	    	  parent.history.back();
	    }
	});
	
	$("#login_user").click(function(){
		//alert("login");
		log_ori.e_mail = $("#user_login_e_mail").val();
		log_ori.pass = $("#user_login_password").val();
		var senduser = JSON.stringify(log_ori);
		//alert(senduser);
		$.ajax({
			type : "post",
			url : "http://192.168.0.25:8080/Soscon/user/loginUser",
			dataType : "text",
			async: false,
			contentType : "application/json",
			data : senduser,
			success : function(data) {
				//console.log(data);
				//alert(data);
				//location.replace="http://127.0.0.1/index.html";
				if(data=="allow")
					{
					window.open("index.html");
					}
				else{
					alert("not correct");
				}
				
			},
			error : function(xhr, e, status) {
				alert("실패 너----" + xhr.status + "-- " + status );
			}
		});
	});
	
	$("#insert_user").click(function(){
		//alert("insert");
		user_ori.e_mail = $("#user_insert_e_mail").val();
		user_ori.pass = $("#user_insert_password").val();
		user_ori.city = $("#user_insert_city").val();
		user_ori.area = $("#user_insert_area").val();
		user_ori.stars = 5;
		var sendData = JSON.stringify(user_ori);
		//alert(sendData);
		$.ajax({
			type : "post",
			url : "http://192.168.0.25:8080/Soscon/user/insertUser",
	        dataType : "text",
	        async: false,
	        contentType : "application/json",
	        data : sendData,
	        success : function(data) {
	           //alert(data);
	           window.open("login.html");
	        },
	        error : function(xhr, e, status) {
				alert("실패 너----" + xhr.status + "-- " + status );
	        }
	        
	     });
	});

	

	$("#update_user").click(function(){
		alert("update");
		user_ori.e_mail = $("#user_insert_e_mail").val();
		user_ori.pass = $("#user_insert_password").val();
		user_ori.city = $("#user_insert_city").val();
		user_ori.area = $("#user_insert_area").val();
		user_ori.stars = $("#user_update_stars").val();
		var sendData = JSON.stringify(user_ori);
		$.ajax({
			type : "post",
			url : "http://192.168.0.25:8080/Soscon/user/updateUser",
			dataType : "text",
			async: false,
			contentType : "application/json",
			data : sendData,
			success : function(data) {
				alert(data);
			},
			error : function(e) {
				alert("실패 너");
			}
		});
		
	});

	$("#delete_user").click(function(){
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/User/deleteUser",
	        dataType:"text", 
	        async: false,
			data : "e_mail=",
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
	     });
	});
	
	$("#insert_quest").click(function(){
		alert("quest");
		quest_ori.time = ObjectStorage.getItem("date");
		//quest_ori.client =  $("#quest_insert_client").val();
		quest_ori.title =  $("#quest_insert_title").val();
		quest_ori.stars =  $("#quest_insert_stars").val();
		quest_ori.category =  $("#quest_insert_category").val();
		//quest_ori.area =  $("#quest_insert_area").val();
		//quest_ori.time_limit =  $("#quest_time_limit").val();
		quest_ori.contents =  $("#quest_insert_contents").val();
		//quest_ori.city =  $("#quest_insert_city").val();
		quest_ori.lat =  ObjectStorage.getItem("lat");// 넣줘
		quest_ori.lag =  ObjectStorage.getItem("lag");// 넣줘
		var sendData = JSON.stringify(quest_ori);
		alert(sendData);
		$.ajax({
	         type : "post",
	         url : "http://192.168.0.25:8080/Soscon/Quest/insertQuest",
	         async: false,
	         dataType:"text", 
	         contentType:"application/json",
	         data : sendData,
	         success : function(data){
	        	 alert(data);
	         },
	         error : function(xhr, e, status) {
					alert("실패 너----" + xhr.status + "-- " + status );
	         }
	      }); 
	});
	
	
	
	
});

