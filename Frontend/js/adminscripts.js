

$(function () {
    let tblBody1 = $("#myprofile");
    let tblBody = $("#tblbody");
    let tblBody5 = $("#tblbody5");
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    $.ajaxSetup({
  xhrFields:{
     withCredentials: true
  }
    });
  
      
    function rowTemplate(hero) {
      let oneRow = "<tr><td>"+hero.name + 
      "</td><td>"  +hero.JobType +"</td>"+"<td><img src= " + base_url + "uploads/" + hero.image + " width='60' /></td>"+'<td>'+hero.Applicant+"</td><td>"
      +hero.Deadline+"</td><td>"+hero.Salary +"</td><td>"+hero.Description+"</td>";
     
      oneRow += '<td><p><button type="button" class="btn btn-danger delete" hero_id=' + hero._id + '>Del</button></td> </tr><hr>';
      // oneRow += '<p><button type="button" class="btn btn-danger view" data-toggle="modal" data-target="#modalLRForm" post_id=' + hero._id + '>view</button>';
      
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
  function rowTemplates(hero) {
      
    let oneRow = "<tr><td>"+hero.description + 
    "</td>" ;
   
    oneRow += '<td><p><button type="button" class="btn btn-danger delete" hero_id=' + hero._id + '>Del</button></td> </tr>';
    // oneRow += '<p><button type="button" class="btn btn-danger view" data-toggle="modal" data-target="#modalLRForm" post_id=' + hero._id + '>view</button>';
    
    return oneRow;
}

$.ajax({
    type: 'GET',
    url: base_url + 'post',
    success: function (heroes) {
        let myRows = [];
        $.each(heroes, function (index, hero) {
            myRows.push(rowTemplates(hero));
        });
        tblBody5.append(myRows);
    },
    error: function () {
        alert('Something went wrong!');
    }
});
  });