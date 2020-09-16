$(document).ready(function(){
    let base_url = 'http://localhost:3000/';
   
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });


$("#message").on('click', function (e) {
   

    e.preventDefault();
 
    console.log("hello");
 
     let user = {
        name: $("#defaultContactFormName").val(),
        
        email: $("#defaultContactFormEmail").val(),
        type: $("#type").val(),
        message: $("#exampleFormControlTextarea2").val(),
        
     };
     console.log(user);
     $.ajax({
         type: 'POST',
         url: 'http://localhost:3000/message',
         data: user,
 
         success: function (user) {
             alert(" Successfully send");
             window.location.href = '/index.html';    
         },
         error: function () {
             alert("fill form ");
         }
     });
 });

});
