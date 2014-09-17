	var quest_ori = {
		'time' : '',
		'client' : '',
		'title' : '',
		'stars' : '',
		'category' : '',
		'area' : '',
		'time_limit' : '',
		'contents' : '',
		'city' : '',
		'lat' : '',
		'lag' : ''
	}
	function insertQuest() {
		quest_ori.time = $("#quest_insert_time").val();
		quest_ori.client =  $("#quest_insert_client").val();
		quest_ori.title =  $("#quest_insert_title").val();
		quest_ori.stars =  $("#quest_insert_stars").val();
		quest_ori.category =  $("#quest_insert_category").val();
		quest_ori.area =  $("#quest_insert_area").val();
		quest_ori.time_limit =  $("#quest_time_limit").val();
		quest_ori.contents =  $("#quest_insert_contents").val();
		quest_ori.city =  $("#quest_insert_city").val();
		quest_ori.lat =  // 넣줘
		quest_ori.lag =  // 넣줘
		var sendData = JSON.stringify(quest_ori);
		$.ajax({
	         type : "post",
	         url : "http://192.168.0.25:8080/Soscon/context/insertQuest.json",
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
	
	function updateQuest() {
		quest_ori.time = $("#quest_update_time").val();
		quest_ori.client =  $("#quest_update_client").val();
		quest_ori.title =  $("#quest_update_title").val();
		quest_ori.stars =  $("#quest_update_stars").val();
		quest_ori.category =  $("#quest_update_category").val();
		quest_ori.area =  $("#quest_update_area").val();
		quest_ori.time_limit =  $("#quest_update_limit").val();
		quest_ori.contents =  $("#quest_update_contents").val();
		quest_ori.city =  $("#quest_update_city").val();
		var sendData = JSON.stringify(quest_ori);
		quest_ori.lat =  // 넣줘
		quest_ori.lag =  // 넣줘
		$.ajax({
			type : "post",
			url : "http://192.168.0.25:8080/Soscon/context/updateQuest.json",
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
	
	function deleteQuest() {
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/context/deleteQuest",
			dataType:"text", 
			data : "client=" + 여기다Client 값 뜯은거,
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}
	
	function selectQuestByAreaNCity() {
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/context/selectQuestByAreaNCity",
			dataType:"json", 
			data : "Area=" + 여기다 Area 값 뜯은거 + "&" "City=" + 여기다 City 값 뜯은거, 
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}
	
	function selectQuestByCategory() {
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/context/selectQuestByCategory",
	        dataType:"json", 
			data : "Category=" + 여기다 Category 값 뜯은거, 
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}
	
	function selectAllQuest() {
		$.ajax({
			type : "get",
			url : "http://192.168.0.25:8080/Soscon/context/selectAllQuest",
			dataType:"json", 
			success : function(data){
				console.log(data);
			},
			error: function(e) {
				alert("실패 너");
			}
		});   
	}