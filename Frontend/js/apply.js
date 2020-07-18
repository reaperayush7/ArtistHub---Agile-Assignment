$(function () {

    let tblBody = $("#tblbody");
    let base_url = 'http://localhost:3000/';
    let imageFiles = '';
    let imageFilees = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
 
   
    $("#applyjob").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            number: $("#names").val(),
            eventpost: $("#postid").val(),
       
            cv:imageFilees
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/apply',
             data: user,
     
             success: function (user) {
                 alert("Registration Successful");
                 location.reload();   
             },
             error: function () {
                 alert("try again");
                //  window.location.href = '/Post events.html'; 
             }
         });
     });

  
     
   
});