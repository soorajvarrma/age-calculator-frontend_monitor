



function getInputValue() { 
  let day = document.getElementsByTagName("input")[0].value;
  let monthnumber = document.getElementsByTagName("input")[1].value;
  let year = document.getElementsByTagName("input")[2].value;
  let today = new Date();
  var dob =  new Date(monthnumber+"-"+day+"-"+year);


  var diffDay = Math.abs(dob.getDate() - today.getDate())

  if(dob.getMonth()>today.getMonth()){
    var yearif = today.getFullYear() -1;
    var diffYear = yearif - dob.getFullYear();
    var diffMonth = (11 + today.getMonth() - dob.getMonth())+1;
  }
  else if(dob.getMonth()<today.getMonth()){
    var yearif = today.getFullYear();
    var diffYear = yearif - dob.getFullYear();
    var diffMonth = (11 - today.getMonth() + dob.getMonth())+1;
  }
  else{

    if(today.getDate()< dob.getDate()){

      var yearif = today.getFullYear() -1;
      var diffYear = yearif - dob.getFullYear();

      var diffMonth = (11 + today.getMonth() - dob.getMonth());

    }else if(today.getDate()>=dob.getDate()){

      var yearif = today.getFullYear();
      var diffYear = yearif - dob.getFullYear();
      var diffMonth = 0;
    }
  }
  if(today<dob || dob.getDate>31 || dob.getMonth > 12){
    return alert("Invalid DOB");

  }
  

  document.getElementById("years").innerHTML = diffYear+" ";
  document.getElementById("months").innerHTML = diffMonth+" ";
  document.getElementById("days").innerHTML = diffDay+" ";

  }






      // var date = new Date(`${monthnumber-1}-${day}-${year}`);
    // var month_diff = Date.now() - date.getTime();

    // var age_dt = new Date(month_diff);

    // var years = age_dt.getUTCFullYear();

    // var diffYear = Math.abs(years - 1970);
    // var today = new Date();

    // const todayMonth = today.getMonth()+1;
    // const todayDate = today.getDate();

    // var diffMonth =Math.abs(todayMonth-monthnumber);