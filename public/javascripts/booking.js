/* http://localhost:8081/api/nhacungcap */

/* http://localhost:8080/api/xemdonhang */

function get_allService(callback) {
  var array = [];
  GET('http://localhost:8080/api/xemdonhang').then(res =>
    res.json().then(data => {
    
      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data});
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function Register_account_Customer(id, name, username, pass, phone, email, address, area) {
  POST('http://localhost:8081/api/khachhang', {
      "id": id,
      "Hoten": name,
      "Tendangnhap": username,
      "Matkhau": pass,
      "Sdt": phone,
      "Email": email,
      "Diachi": address,
      "Mavung": area
  }).then(res =>
      res.json().then(data => {
          console.log(data);
          console.log("cac");

      })
  );
}



function getServices() {
  var listdata;
  fetch('https://backendsundara.herokuapp.com/service/get-all', {
  method: 'GET',
  headers: {
       Accept: 'application/json',
     },
   }).then(res =>
     res.json().then(data => {
       document.getElementById("services").innerHTML = data.data;
       listdata = data.data;
        console.log(listdata);
        return listdata;
     })
  );   
}

function get_allbooking(callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/booking/get-all').then(res =>
      res.json().then(data => {
          var template = $('#booking-table').html();
          var compiled = Handlebars.compile(template);
          var contextualHtml = compiled({ allservices: data.data });
          $('#allbooking').html(contextualHtml);
          array = data.data;
          return callback(array);
      })
  );
}

function get_detailbooking(id_booking, callback) {
  GET('https://backendsundara.herokuapp.com/booking/get-detail?id_booking=' + id_booking).then(res =>
      res.json().then(data => {
          var template = $('#booking-table').html();
          var compiled = Handlebars.compile(template);
          var contextualHtml = compiled({ allservices: data });
          $('#allbooking').html(contextualHtml);
          return callback(data);
      })
  );
}

function get_bookingbyphone(phone, callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/booking/get-by-phone?phone=' + phone).then(res =>
      res.json().then(data => {
          var template = $('#booking-table').html();
          var compiled = Handlebars.compile(template);
          var contextualHtml = compiled({ allservices: data.data });
          $('#allbooking').html(contextualHtml);
          array = data.data;
          return callback(array);
      })
  );
}





  