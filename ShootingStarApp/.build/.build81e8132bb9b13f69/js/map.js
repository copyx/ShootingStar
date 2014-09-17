var StreetViewPanorama = new function(){};

var globalMap;
var globalMarker;
var globalGeocoder;

var ObjectStorage = {
	      
		   "setItem" : function(key , obj){
		      sessionStorage.setItem( key , JSON.stringify(obj));
		   },
		   "getItem" : function(key){
		      return JSON.parse(sessionStorage.getItem(key));
		   },
		      
		   "clear" : function() {
		      sessionStorage.clear();
		   },
		   
		   "removeItem" : function(key) {
		      sessionStorage.removeItem(key);
		   }
		};


// 맵 초기화
function initialize(x, y) { 

	// 입력된 좌표가 없으면 기본좌표를 삼성동으로 설정.
    if(x==0){ x=37.5139850; }
    if(y==0){ y=127.0565210; }
 
    globalGeocoder = new google.maps.Geocoder();

    var latlng = new google.maps.LatLng(x, y);

    var myOptions = { 
        zoom: 16, 

        //disableDoubleClickZoom:false,
        center: latlng, 
        
        navigationControl: false,    // 눈금자 형태로 스케일 조절하는 컨트롤 활성화 선택.
        navigationControlOptions: { 
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.NavigationControlStyle.DEFAULT // ANDROID, DEFAULT, SMALL, ZOOM_PAN
        },
        
        streetViewControl: false,

        scaleControl: false,    // 지도 축적 보여줄 것인지.
        //scaleControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT },
        
        mapTypeControl: false, // 지도,위성,하이브리드 등등 선택 컨트롤 보여줄 것인지
        mapTypeId: google.maps.MapTypeId.ROADMAP  // HYBRID, ROADMAP, SATELLITE, TERRAIN
    }; 

    globalMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    google.maps.event.addListener(globalMap, 'dragend', function(){    // 드래그시 이벤트 추가
        showMapPos();
        showMapAddr();
    });
    google.maps.event.addListener(globalMap, 'click', function(event){        // 지도클릭시 마커이동
        console.log("event.latLng x = " + event.latLng.lat());
        console.log("event.latLng y = " + event.latLng.lng());
        console.log("select yes !!!");
        
        ObjectStorage.setItem("lat",event.latLng.lat());
        ObjectStorage.setItem("lag",event.latLng.lng());
        
        setMarker2("나좀 도와줘용", event.latLng.lat(), event.latLng.lng(), "chu");
        //window.open("makequest.html");
        
  
        
       //cdy 걍 이동하지마!!!!
    	//moveMarker(event.latLng); 
    });
    
    //cdy 일단 자기 좌표기준으로 뿌려줌
    goSearch();
    //cdy 처음열었을때 마크 잡아줌
    //setMark();
}
 
// 맵 드래그할 때 맵 중앙 좌표 보여주기
function showMapPos(){
    var pos=globalMap.getCenter();

    //alert(pos.lat()+"/"+pos.lng());
    //return {x:pos.lat(), y:pos.lng()};
   
    //cdy 중앙 좌표 보여줄필요가..
    //document.getElementById("centerX").value = pos.lat();
    //document.getElementById("centerY").value = pos.lng();
}

// 드래그할 때 맵 중앙 좌표의 주소
function showMapAddr(){
    globalGeocoder.geocode( { 'location': globalMap.getCenter()}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            /*
            var str="";
            for(var i=0; i<results[0].address_components.length; i++){
                str += "/"+results[0].address_components[0].long_name
            }
            document.getElementById("txtAddress").innerHTML=str;

            document.getElementById("txtAddress").innerHTML=results[0].address_components[0].types;
            */

            
            var str="";
            for(var i=3; i>=0; i--){
                str += " "+results[0].address_components[i].short_name;
            }
            //cdy 일단 주석// document.getElementById("txtAddress").innerHTML=str;
            //document.getElementById("txtAddress").innerHTML=results[0].address_components[0].long_name;
            

        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

// 맵 중앙에 마크찍기
function setMark(){
    var myOptions = {
        position: globalMap.getCenter(),
        draggable: true,
        map: globalMap,
        //icon: "http://sstatic.naver.net/search/img2/ico_bal_a.gif", // 아이콘 설정할 때
        visible: true
    };

    globalMarker = new google.maps.Marker(myOptions);
}

// 마크 삭제하기
function removeMark(){
    globalMarker.setOptions({
        map: null,
        visible: false
    });
    globalMarker = null;
}

// 마크좌표 가져오기
function getMarkPos(){
    var pos=globalMarker.getPosition();

    //alert(pos.lat()+"/"+pos.lng());
    //return {x:pos.lat(), y:pos.lng()};

    document.getElementById("markerX").value = pos.lat();
    document.getElementById("markerY").value = pos.lng();
}

// 특정좌표로 이동하기
function setMapByCoord(x, y){
    var loc = new google.maps.LatLng(x, y);

    globalMap.setCenter(loc);
}

// 주소값으로 찾기
function codeAddress() {
    var address = document.getElementById("address").value;
    if(address=='검색할 주소를 입력하십시오.' || address==''){
        alert('검색할 주소를 입력하십시오.');
        document.getElementById("address").value='';
        document.getElementById("address").focus();
        return;
    }

    globalGeocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            globalMap.setCenter(results[0].geometry.location);

            //var marker = new google.maps.Marker({
          //cdy 이거 마커래서 일단 주석
            /*
            globalMarker = new google.maps.Marker({
                map: globalMap, 
                position: results[0].geometry.location,
                draggable: true
            });
            */
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
    
    
}

// 정보창 마크 찍기
function setInfoMark(){
    //var html = "<div><a href='http://www.findall.co.kr' target='_blank'>www.findall.co.kr</a></div>";
    //var html = "<div><iframe src='http://www.findall.co.kr' style='width:300px;height:120px;'></iframe></div>";

    var html = "";
    html += "<div>";
    html += "    <a href='http://www.findall.co.kr' target='_blank'>";
    html += "        <img src='http://image.findall.co.kr/FANew/Topmain/summer_logo.gif' border='0'>";
    html += "    </a>";
    html += "</div>";

    var infoWin = new google.maps.InfoWindow({content: html, maxWidth:1000});
    var loc = new google.maps.LatLng(37.500061375296184,127.03099206089973);
    
    var myOptions = {
        position: loc,
        draggable: false,
        map: globalMap,
        //icon: "http://sstatic.naver.net/search/img2/ico_bal_a.gif", // 아이콘 설정할 때
        visible: true
    };

    // 마커 생성
    globalMarker = new google.maps.Marker(myOptions);

    // 마커에 이벤트리스너 추가
    google.maps.event.addListener(globalMarker, 'click', function(){
        infoWin.open(globalMap, globalMarker);
    });

    // 지도 중심좌표 이동
    globalMap.setCenter(loc);
}

// 지도 위의 마크 모두 삭제 - Refresh 말고 방법 없을까?
function clearMark(){
    var loc = globalMap.getCenter(); // 현재의 지도의 위치를 가져온다.

    globalMap = null;
    globalMarker = null;
    globalGeocoder = null;

    initialize(loc.lat(), loc.lng());
}


var arrMarker = new Array();

// 지도 클릭시 마커 이동
function moveMarker(loc){
    //alert(loc);
    globalMarker.setPosition(loc);
    console.log("이동한 x = " + loc.lat());
    console.log("이동한 y = " + loc.lng());
    
}

//검색결과 보여주기
function goSearch(){
 var sch = [
  {name: '애완견밥주기', x:37.50788752008941, y:127.06199169158936, id:'kim' },
  {name: '드릴대여', x:37.50547039707959, y:127.06173419952393, id:'kim' },
  {name: '새차', x:37.508636471899976, y:127.06488847732544, id:'kim' },
  {name: '식당 줄서주기', x:37.51081519807655, y:127.06357955932617, id:'kim' },
  {name: '개 돌보기', x:37.508568385682274, y:127.06042528152466, id:'kim' }
 ];
 //alert(sch.length);
 
 for(var i=0; i<sch.length; i++){
  setMarker(sch[i].name, sch[i].x, sch[i].y, sch[i].id);
 }
}

//좌표 받아서 마크 찍기     //이건 초기에 화면 열어서 디비에서 들고 올때
function setMarker(name,x,y, id){
 var myOptions = {
  position: new google.maps.LatLng(x, y),
  draggable: false,
  map: globalMap,
  title: name,
  //icon: "http://sstatic.naver.net/search/img2/ico_bal_a.gif", // 아이콘 설정할 때
  visible: true
 };
 
 var marker = new google.maps.Marker(myOptions);
 arrMarker.push(marker);
 
 var date = getTimeStamp(); 
// console.log("date = " + date);
 
 // 정보창 처리
	 var html = "";
	 html += "<div class='chu' id=" + date + "style='width:200;height:70;'> <button>";
	 html += name;
	 html += "</button>";
	 html += "</div>";
 
 //html += "</button> <button class=" + "chu" + " onclick='delete_mark(chu);'>delete</button></div>";
 
 var infoWin = new google.maps.InfoWindow({content: html});
 infoWin.open(globalMap, marker);
 
 google.maps.event.addListener(marker, 'click', function(){
  infoWin.open(globalMap, marker);
  
 });
 
}


//cdy 내가 입력할때!
function setMarker2(name,x,y, id){
 
	var myOptions = {
	  position: new google.maps.LatLng(x, y),
	  draggable: false,
	  map: globalMap,
	  title: name,
	  //icon: "http://sstatic.naver.net/search/img2/ico_bal_a.gif", // 아이콘 설정할 때
	  visible: true
	 };
	 
	 var marker = new google.maps.Marker(myOptions);
	 arrMarker.push(marker);
	 
	 var date = getTimeStamp(); 
	 
	 console.log("date = " + date);
	 
	 ObjectStorage.setItem("date",date);
	 var html = "";
	 html += "<div style='width:200;height:70;'> <a href='makequest.html'><button>";
	 html += "OK";
	 html += "</button></a>"; 
	 html += "<button class=" + "chu"+ " id=" + date + ">delete</button></div>";
		 
//	 // 정보창 처리
//	var html = "";
//	html += "<div style='width:200;height:70;'> <button>";
//	html += name;
//	html += "</button> <button class=" + "chu"+ " id=" + date + ">delete</button></div>";
//	 
	 var infoWin = new google.maps.InfoWindow({content: html});
	 infoWin.open(globalMap, marker);
	 
	 google.maps.event.addListener(marker, 'click', function(){
	  infoWin.open(globalMap, marker);
	 
	 });
	 
	 $("." + "chu").bind("click", function(e){
			var id = e.target.getAttribute('id');
		    //if ( ( id != '') && (id != null))  
		       //alert(id);		      
		    var date = id.substring(0,10) + " " + id.substring(10,18);
		   // console.log("===>" + date);   
		    delete_mark(id);	    
	});	
}

function delete_mark(id) {
	
	location.href='index.html';	
}



function getTimeStamp() {
	  var d = new Date();

	  var s =
	    leadingZeros(d.getFullYear(), 4) + '-' +
	    leadingZeros(d.getMonth() + 1, 2) + '-' +
	    leadingZeros(d.getDate(), 2) + 

	    leadingZeros(d.getHours(), 2) + ':' +
	    leadingZeros(d.getMinutes(), 2) + ':' +
	    leadingZeros(d.getSeconds(), 2);

	  return s;
	}

	function leadingZeros(n, digits) {
	  var zero = '';
	  n = n.toString();

	  if (n.length < digits) {
	    for (i = 0; i < digits - n.length; i++)
	      zero += '0';
	  }
	  return zero + n;
	}