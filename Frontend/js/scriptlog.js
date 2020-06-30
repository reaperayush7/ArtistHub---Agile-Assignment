$(document).ready(function(){
    let base_url = 'http://localhost:3000/';
    let tblBody = $("#tblbody");
    let imageFile = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
    $("#login-btn").on('click', function (e) {
   
        e.preventDefault();
        console.log("hello");
        console.log("username");
         let user = {
             username: $("#username").val(),
             password: $("#pass").val(),
             
             
         };
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/users/login',
             data: user,
     
             success: function (user) {
                 if(user.publisher == true){
                 alert("welcome publisher,you are login in");
                 window.location.href = 'post.html';  
                
             }
             
             else  {
                 alert("welcome seeker, you are logged in");
     window.location.href = 'Home.html'; 
             }
             },
             error: function () {
                 alert("either username or password is incorrect");
             }
         });
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
    
     $("#submit-post").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            description: $("#description").val(),
             
             
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/post',
             data: user,
     
             success: function (user) {
                 alert("post uploaded");
                 location.reload(); 
             },
             error: function () {
                 alert("write clearly");
             }
         });
     });
        function rowTemplate(hero) {
            let oneRow = '<div class="card-body">'+ ' <h6 class="card-title">Job name:&nbsp;'+hero.description + 
            '</h6>' +'</div><hr>';
           
            return oneRow;
        }
    
        $.ajax({
            type: 'GET',
            url: base_url + 'post',
            success: function (heroes) {
                let myRows = [];
                $.each(heroes, function (index, hero) {
                    myRows.push(rowTemplate(hero));
                });
                tblBody.append(myRows);
            },
            error: function () {
               
            }
        });
    
    
    });
    