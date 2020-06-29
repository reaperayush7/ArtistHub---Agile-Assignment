
$(function () {

    let tblBody = $("#tblbody");
    let base_url = 'http://localhost:3000/';
    let imageFiles = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
    $("#add-job").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            name: $("#name").val(),
            JobType: $("#JobType").val(),
            Applicant: $("#Applicant").val(),
            Deadline: $("#Deadline").val(),
            Salary: $("#Salary").val(),
            Description: $("#description").val(),
            
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/eventposts',
             data: user,
     
             success: function (user) {
                 alert(" Successful added");
                 location.reload();     
             },
             error: function () {
                 alert("unSuccessful");
                //  window.location.href = '/Post events.html'; 
             }
         });
     });

