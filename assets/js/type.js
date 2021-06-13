$(document).ready(function () {
  $(".ziehharmonika").ziehharmonika({
    collapsible: true,
  });
  $.ajax({
    url:"https://baconipsum.com/api/?type=all-meat/?rapidapi-key=40daeb0035mshe68bf59f968a5b6p13313bjsnce52ffff1fd7",    dataType:"json",
    type:"GET",
    success:function (data){
      for (var i=1;i<6;i++){
        $("#data"+i+"").append(data[i-1]);
      }
    },
    error(){
      console.log("Connection Failed");
    }
  })
});
