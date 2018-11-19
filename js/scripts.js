$(document).ready(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var data = [];
  var html = '';

  $.ajax({
    type:'GET',
    url:url,
    dataType:'json',
    aysnc:true,
    data:data,
    success:function(data){
      console.log(data);
      console.log(data.iss_position.latitude); //
      console.log(data.iss_position.longitude); //
      html += '<p id=#resultstext>' + data.iss_position.latitude + ', ' + data.iss_position.longitude + '</p>';
      console.log(html);
      $('#results').html(html);
    }
  });

});
