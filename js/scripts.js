$(document).ready(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var url2= 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=10.7505&lon=-176.7655' //10.7505, -176.7655 are coordinates at time of coding
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
      $('#coordinates').html(html);
    }
  });
  $.ajax({
    type:'GET',
    url:url2,
    dataType:'json',
    async:true,
    data:data,
    success:function(data){
      var geocodeResult = '';
      var msg = geocodeResult + '.';
      var i = '';
      console.log(msg);
      if (msg = '.') {
        msg = 'The ISS was over the ocean at the time of coding this.';
        console.log(msg);
        $('#results').html(msg);
      }
    },
  });

});
