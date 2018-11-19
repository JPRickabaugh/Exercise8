$(document).ready(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var data = [];

  $.ajax({
    type:'GET',
    url:url,
    dataType:'json',
    aysnc:true,
    data:data,
    success:function(data){
      console.log(data);
    }
  });

});
