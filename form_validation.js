<script type = "text/javascript"></script>
   // Form validation code will come here.

   function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}



const password = document.getElementById("password");
password.addEventListener("input", (event) => {
  const value = event.target.value;
  
  updateRequirement('length', value.length >= 8)
  updateRequirement('lowercase', /[a-z]/.test(value))
  updateRequirement('uppercase', /[A-Z]/.test(value))
  updateRequirement('number', /\d/.test(value))
  updateRequirement('characters', /[#.?!@$%^&*-]/.test(value))
});
 