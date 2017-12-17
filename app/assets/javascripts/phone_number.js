$(document).ready(function() {
  $.ajax({
      type: 'GET',
      url: "/phone_numbers/get_number_list?page%5Blimit%5D=10&page%5Boffset%5D=0",
      dataType: 'json',
      async:false,
      success: function(data) {
        var phone_number = JSON.parse(data); // Assume it return a JSON string
        console.log(phone_number);
        var jsonData = phone_number.data
        html_to_insert = "<table border='1'><tr><th>name</th><th>mobile</th></tr>";
        for (var i in jsonData){
          html_to_insert = html_to_insert + "<tr><td>" + jsonData[i]['attributes']['name'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['mobile'] + "</td>";
        }
        html_to_insert = html_to_insert + "</table><br><br>";
        $(".phone_info").append(html_to_insert);
      }
  });

});