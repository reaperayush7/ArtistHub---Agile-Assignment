
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

     function rowTemplate(hero) {
        let oneRow = '<div class="card-body">'+ ' <h6 class="card-title">Job name:&nbsp;'+hero.name + 
        '</h6>' + '<p><small class="ml-1">job type:&nbsp; '+hero.JobType + '</p>'+
        '<b>Preference Skills: </b>'+hero.Description+'<br><br><b>Total Applicant: </b>'+
        hero.Applicant+'<p class="card-text mt-3"><b>Deadline: </b>'+hero.Deadline +
        '<br><b>Salary: </b>'+hero.Salary+'</div>';
        oneRow += '<button type="button" class="btn btn-danger Applyjob" data-toggle="modal" data-target="#modalLRForms" apply_id=' + hero._id + ' id="applyform">Apply job</button><hr>';
      
        return oneRow;
    }

    $.ajax({
        type: 'GET',
        url: base_url + 'eventposts',
        success: function (heroes) {
            let myRows = [];
            $.each(heroes, function (index, hero) {
                myRows.push(rowTemplate(hero));
            });
            tblBody.append(myRows);
        },
        error: function () {
            alert('Something went wrong!');
        }
    });