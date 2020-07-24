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
  
  