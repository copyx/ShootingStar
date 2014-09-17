	var user_ori = {
		'e_mail' : '',
		'pass' : '',
		'city' : '',
		'area' : '',
		'stars' : '',
	}
	var log_ori = {
			'e_mail' : '',
			'pass' : '',
	}
	function loginUser() {
		log_ori.e_mail = $("#user_login_e_mail").val();
		log_ori.pass = $("#user_login_client").val();
		var sendData = JSON.stringify(log_ori);
		$.ajax({
	         type : "post",
	         url : "http://192.168.0.25:8080/Soscon/User/loginUser.json",
	         dataType:"text", 
	         contentType:"application/json",
	         data : sendData,
	         success : function(data){
	            console.log(data);
	         },
	         error: function(e) {
	            alert("실패 너");
	         }
	      });   
	}
	
	function insertUser() {
		user_ori.e_mail = $("#user_insert_e_mail").val();
		user_ori.pass = $("#user_insert_client").val();
		user_ori.city = $("#user_insert_city").val();
		user_ori.area = $("#user_insert_area").val();
		user_ori.stars = $("#user_insert_stars").val();
		console.log(user_ori);
		var sendData = JSON.stringify(user_ori);
		$.ajax({
	         type : "post",
	         url : "http://192.168.0.25:8080/Soscon/user/insertUser",
	         dataType:"text", 
	         contentType:"application/json",
	         data : sendData,
	         success : function(data){
	            console.log(data);
	         },
	         error: function(e) {
	            alert("실패 너");
	         }
	      });   
	}
	
	function updateUser() {
		user_ori.e_mail = $("#user_update_e_mail").val();
		user_ori.pass = $("#user_update_client").val();
		user_ori.city = $("#user_update_city").val();
		user_ori.area = $("#user_update_area").val();
		user_ori.stars = $("#user_update_stars").val();
		var sendData = JSON.stringify(user_ori);
		$.ajax({
			type : "post",
			url : "http://192.168.0.25:8080/Soscon/context/updateUser.json",
			dataType:"text", 
			contentType:"application/json",
			data : sendData,
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}
	
	function deleteUser() {
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/context/deleteUser",
	        dataType:"text", 
			data : "e_mail=" + 여기다 e_mail 값 뜯은거, 
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}
	
