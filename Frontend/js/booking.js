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
    let oneRow = "<tr><td>"+hero.user.username + 
    "</td><td>"  +hero.cv +"</td><td>"+hero.number;
    oneRow += '<td><p><a class="btn btn-danger btn-sm view" href='+base_url + "uploads/"  + hero.cv + ' >View</a></td> <hr>';
    
    return oneRow;
}



$.ajax({
    type: 'GET',
    url: base_url + 'apply/findmyonlydata',
        
    success: function (heroes) {
        console.log(heroes);
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





});
