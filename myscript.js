var rollV, surnameV, firstnameV, middlenameV, addressV, contactV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  surnameV = document.getElementById("Surname").value;
  firstnameV = document.getElementById("Firstname").value;
  middlenameV = document.getElementById("Middlename").value;
  addressV = document.getElementById("Address").value;
  
  emailV = document.getElementById("Email").value;
  Swal.fire("Data Read Successful");
  console.log(rollV, surnameV, firstnameV, middlenameV, addressV, contactV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      surname: surnameV,
      firstname: firstnameV,
      middlename: middlenameV,
      address: addressV,
      
      email: emailV
    });
    Swal.fire("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("Address").value = "";
  
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("Surname").value = snap.val().surname;
      document.getElementById("Firstname").value = snap.val().firstname;
      document.getElementById("Middlename").value = snap.val().middlename;
      document.getElementById("Address").value = snap.val().address;
      
      document.getElementById("Email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      rollNo: rollV,
      surname: surnameV,
      firstname: firstnameV,
      middlename: middlenameV,
      address: addressV,
      
      email: emailV
    });
    Swal.fire("Data Updated");
    document.getElementById("roll").value = "";
    document.getElementById("Surname").value = "";
    document.getElementById("Firstname").value = "";
    document.getElementById("Middlename").value = "";
    document.getElementById("Address").value = "";
    
    document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted");
    document.getElementById("roll").value = "";
    document.getElementById("Surname").value = "";
    document.getElementById("Firstname").value = "";
    document.getElementById("Middlename").value = "";
    document.getElementById("Address").value = "";
    
    document.getElementById("Email").value = "";
};
