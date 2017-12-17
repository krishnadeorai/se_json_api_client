$(document).ready(function() {
  $.ajax({
      type: 'GET',
      url: "/contacts/get_contact_list?page%5Blimit%5D=10&page%5Boffset%5D=0",
      dataType: 'json',
      async:false,
      success: function(data) {
        var contacts = JSON.parse(data); // Assume it return a JSON string
        console.log(contacts);
        var jsonData = contacts.data
        html_to_insert = "<table border='1'><tr><th>name-first</th><th>name-last</th><th>email</th><th>city</th><th>state</th><th>country</th></tr>";
        for (var i in jsonData){
          html_to_insert = html_to_insert + "<tr><td>" + jsonData[i]['attributes']['name-first'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['name-last'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['email'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['city'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['state'] + "</td>";
          html_to_insert = html_to_insert + "<td>" + jsonData[i]['attributes']['country'] + "</td>";
        }
        html_to_insert = html_to_insert + "</table><br><br>";
        $(".contact_info").append(html_to_insert);
      }
  });

});