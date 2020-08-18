let selectedRow = null;

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

onFormSubmit = () => {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
    span.onclick();
  }
};

readFormData = () => {
  var formData = {};
  formData["number"] = document.getElementById("number").value;
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  return formData;
};
insertNewRecord = (data) => {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.number;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
};

resetForm = () => {
  document.getElementById("number").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  selectedRow = null;
};

validate = () => {
  isValid = true;
  if (document.getElementById("number").value == "") {
    isValid = false;
    document.getElementById("numberValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("numberValidationError")
        .classList.contains("hide")
    )
      document.getElementById("numberValidationError").classList.add("hide");
  }
  return isValid;
};
