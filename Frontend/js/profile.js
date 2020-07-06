$(function () {
    let tblBody1 = $("#myprofile");
    let tblBody = $("#tblbody");
    let tblBodyuser = $("#userpost");
    let tblupdate = $("#update-job");
    let tblupdatesss = $("#update-job");  
    
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    $.ajaxSetup({
  xhrFields:{
     withCredentials: true
  }
    });
    $("#uploadimage").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            
            
            image: imageFile
         };
         console.log(user);
         $.ajax({
             type: 'PUT',
             url: 'http://localhost:3000/user/updatemydata',
             data: user,
     
             success: function (user) {
                 alert("update Successful");
                location.reload();   
             },
             error: function () {
                 alert("regis");
             }
         });
     });
  
      
     $("#btnclick").on('click', function () {

      
        
        $.ajax({
            type: 'GET',
            url: base_url + 'user/findmyonlydata',
            success: function (heroes) {
    
                $("#defaultForm-email").val(heroes.FirstName);
                $("#defaultForm-pass").val(heroes.LastName);
                $("#defaultForm-emails").val(heroes.email);
                $("#defaultForm-dob").val(heroes.dob);
                $("#defaultForm-number").val(heroes.contactnumber);
                $("#description").val(heroes.Description);
              
                      },
            error: function () {
                alert('Something went wrong!');
            }
        })
        });  
 
      $("#user-update").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            FirstName : $("#defaultForm-email").val(),
            LastName: $("#defaultForm-pass").val(),
            email: $("#defaultForm-emails").val(),
            dob: $("#defaultForm-dob").val(),
            contactnumber: $("#defaultForm-number").val(),
            Description: $("#description").val(),
                
            
          
         };
         console.log(user);
         $.ajax({
             type: 'PUT',
             url: 'http://localhost:3000/user/updatemydata',    
             data: user,
     
             success: function (user) {
                 alert("update Successful");
                 location.reload();
             },
             error: function () {
                 alert("try again");
             }
         });
     });
  
  
  });