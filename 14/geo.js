if ("geolocation" in navigator) {
  /* 지오로케이션 사용 가능 */

  console.log("success");
} else {
  /* 지오로케이션 사용 불가능 */
  console.log("fail");
}


// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
// });


function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>사용자의 브라우저는 지오로케이션을 지원하지 않습니다.</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var nameTag = "일터"
    output.innerHTML = '<p>위도 : ' + latitude + '° <br>경도 : ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://map.daum.net/link/map/" + nameTag + "," + latitude + "," + longitude;
    console.log(img.src);

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "사용자의 위치를 찾을 수 없습니다.";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
