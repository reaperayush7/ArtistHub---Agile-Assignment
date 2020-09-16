

$(function () {
    let tblBody1 = $("#myprofile");
    let tblBody = $("#tblbody");
    let tblBodyuser = $("#userpost");
    let tblupdate = $("#tblbodys");
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    
    $.ajaxSetup({
  xhrFields:{
     withCredentials: true
  }
    });
 
    tblBodyuser.on('click', '.delete', function () {
      $.ajax({
          type: 'DELETE',
          url: base_url + 'post/' + $(this).attr('hero_id'),
          success: function () {
              location.reload();
          }
      })
  });
  
  tblupdate.on('click', '.update', function () {
      alert($("#descriptions-update").val());

      
   alert($(this).attr('post_id'));
   let user = {
   
    description: $("#descriptions-update").val(),
 };
 $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/post/'+ $(this).attr('post_id'),
    data: user,

    success: function (user) {
        alert("update Successful");
        location.reload();    
    },
    error: function () {
        alert("Registration unSuccessful");
       //  window.location.href = '/Post events.html'; 
    }
});
});
  function rowTemplate1(hero) {
      let oneRow = "<tr><td>"+hero.description + 
      "</td>";
     
      oneRow += '<td><p><button type="button" class="btn btn-danger delete" hero_id=' + hero._id + '>Del</button></td> <hr>';
      oneRow += '<td><p><button type="button" class="btn btn-danger view" data-toggle="modal" data-target="#modalLRForm" post_id=' + hero._id + ' id="updstemodslform">update</button></tr></tr>';
      
      return oneRow;
  }
  
  $.ajax({
      type: 'GET',
      url: base_url + 'post/findmyonlydata',
      success: function (heroes) {
          let myRows = [];
          $.each(heroes, function (index, hero) {
              myRows.push(rowTemplate1(hero));
          });
          tblBodyuser.append(myRows);
      },
      error: function () {
          alert('Something went wrong!');
      }
  });

function rowTemplate2(hero) {
    let oneRow = hero.description ; 
     return oneRow;
}


tblBodyuser.on('click', '.view', function () {

    
$.ajax({
    type: 'GET',
    url: base_url + 'post/' + $(this).attr('post_id'),
    success: function (heroes) {
        let myRows = [];
        $.each(heroes, function (index, hero) {
            myRows.push(rowTemplate2(hero));
        });
        tblupdate.append(myRows);
    },
    error: function () {
        alert('Something went wrong!');
    }
})
});




tblBodyuser.on('click', '#updstemodslform', function () {

    alert("hhhhhhhhhhhhhhhhhh"+$(this).attr('post_id'));
    
    $.ajax({
        type: 'GET',
        url: base_url + 'post/' + $(this).attr('post_id'),
        success: function (heroes) {

            console.log("??????????????????????????????????????????????????????");

            console.log(heroes);

            console.log("??????????????????????????????????????????????????????");

 
{/* <label for="textareaPrefix">Job Description <small> ( Min 120 words required)</small></label> <br>
                <textarea type="text" id="description" class="form-control md-textarea" rows="8" minlength="120" required="required" name="jobdescription">hello</textarea> */}
             

                let asdad='<label for="textareaPrefix">Job Description <small> ( Min 120 words required)</small></label> <br>'+
                '<textarea type="text" id="descriptions-update" class="form-control md-textarea" rows="8" minlength="120" required="required" name="jobdescription">'+heroes.description+'</textarea>'
 +'  <button type="button"  id="update-post" class="btn btn-danger update"  post_id=' + heroes._id + ' id="updatemeppsot">Submit</button>'
                  


    $( "#tblbodys" ).append(asdad );

    
    $( "#updatemeppsot" ).append(heroes._id );


        },
        error: function () {
            alert('Something went wrong!');
        }
    })
    });
   

});

 