$(document).ready(function(){
    let base_url = 'http://localhost:3000/';
    let tblBody = $("#tblbody");
    let imageFile = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
    $("#Register-seekerbtn").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
        
         let user = {
             username: $("#user").val(),
             password: $("#pass-repeat").val(),
             FirstName: $("#firstname").val(),
             LastName: $("#lastname").val(),
             contactnumber: $("#contactno").val(),
             email: $("#email").val(),
             Country: $("#country").val(),
            
             Address: $("#Address").val(),
            
             image: imageFile
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/users/signup',
             data: user,
     
             success: function (user) {
                 alert("Registration Successful");
                 window.location.href = '/index.html';    
             },
             error: function () {
                 alert("fill all form ");
             }
         });
     });
    
    