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


    $.ajax({
        type: 'GET',
        url: base_url + 'user/findmyonlydata',
    
        success: function (user) {
            console.log(user);
            // $("#strongname").val(user.FirstName);
            $( "#strongname" ).append(user.FirstName );
            $( "#strongnames" ).append(user.LastName );
            $( "#dob" ).append(user.dob );
            $( "#number" ).append(user.contactnumber );
            $( "#email" ).append(user.email );
            $( "#address" ).append(user.Address );
            $( "#image" ).append(user.image );
            $( "#Uname" ).append(user.username );
            $( "#country" ).append(user.Country );
            $( "#descriptions" ).append(user.Description );
           
            $("#user_image").attr("src","http://localhost:3000/uploads/"+user.image);

 
        },
        error: function () {
            alert('Something went wrong!');
        }
    });

    $("#image-upload").on('change', function () {
        let formData = new FormData();
        let files = $("#image-upload").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/uploads',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFile = data.filename;
                // $("#add-hero").prop("disabled", false);
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
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