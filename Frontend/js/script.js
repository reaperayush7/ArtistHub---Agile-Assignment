

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

    
  function rowTemplate(hero) {
    let oneRow = "<tr><td>"+hero.name + 
    "</td><td>"  +hero.JobType +"</td><td>"+hero.Applicant+"</td><td>"
    +hero.Deadline+"</td><td>"+hero.Salary +"</td><td>"+hero.Description+"</td>";
   
    oneRow += '<td><p><button type="button" class="btn btn-danger btn-sm delete" hero_id=' + hero._id + '>Delete</button></td> <hr>';
    // oneRow += '<p><button type="button" class="btn btn-danger view" data-toggle="modal" data-target="#modalLRForm" post_id=' + hero._id + '>view</button>';
    oneRow += '<td><p><button type="button" class="btn btn-danger btn-sm view" data-toggle="modal" data-target="#modalLRForm" post_id=' + hero._id + ' id="updatejobpost">update</button></tr>';
    return oneRow;
}

$.ajax({
    type: 'GET',
    url: base_url + 'eventposts/findmyonlydata',
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

tblBody.on('click', '.delete', function () {
    $.ajax({
        type: 'DELETE',
        url: base_url + 'eventposts/' + $(this).attr('hero_id'),
        success: function () {
            location.reload();
        }
    })
});

tblBody.on('click', '#updateeventpost', function () {

    alert("hhhhhhhhhhhhhhhhhh"+$(this).attr('post_id'));
    
    $.ajax({
        type: 'GET',
        url: base_url + 'eventposts/' + $(this).attr('post_id'),
        success: function (heroes) {

            console.log("??????????????????????????????????????????????????????");

            console.log(heroes);

            console.log("??????????????????????????????????????????????????????");

            $("#Salary").val(heroes.Salary);
            $("#name").val(heroes.name);
            $("#JobType").val(heroes.JobType);
            $("#Applicant").val(heroes.Applicant);
            $("#Deadline").val(heroes.Deadline);
            $("#description").val(heroes.Description);
            $("#update-job").attr("post_id",heroes._id);
            // $("#update-job").attr("post_id",heroes._id);
            // $("#update-job").val(heroes._id);


 
{/* <label for="textareaPrefix">Job Description <small> ( Min 120 words required)</small></label> <br>
                <textarea type="text" id="description" class="form-control md-textarea" rows="8" minlength="120" required="required" name="jobdescription">hello</textarea> */}
             
// let asdad='<input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">'+
// + '    <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Jobtype">'+
// '<input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="applicant">'+
// '<input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Salary">'
// +'<input type="text" id="name" class="form-control" required="required" name="jobname" >'+heroes.name+'</input><br>'+'  <button type="button"  id="update-post" class="btn btn-danger update"  post_id=' + heroes._id + ' id="updatemeppsot">Submit</button>'
                  


    // $( "#tblbodys" ).append(asdad );

    
    // $( "#updatemeppsot" ).append(heroes._id );


        },
        error: function () {
            alert('Something went wrong!');
        }
    })
    });

    tblupdatesss.on('click', function () {
        // alert($("#descriptions-update").val());
  
        
     alert($(this).attr('post_id'));
     let jobposts = {
     
        Description: $("#description").val(),
        name: $("#name").val(),
        JobType: $("#JobType").val(),
        Applicant: $("#Applicant").val(),
        Deadline: $("#Deadline").val(),
        Salary: $("#Salary").val(),
      
     
   };



   console.log(jobposts);
   $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/eventposts/'+ $(this).attr('post_id'),
      data: jobposts,
  
    //   {"Description":Description,"name":name,"JobType":JobType,"Applicant":Applicant,"Deadline":Deadline,"Salary":Salary}
      success: function (user) {
          alert("update Successful");
          location.reload();
      },
      error: function () {
          alert("update unSuccessful");
         //  window.location.href = '/Post events.html'; 
      }
  });
  
  });


});