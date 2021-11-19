function CheckChoice(option)
{
  // Verify that the input is a number.
  if (typeof(option) != "number")
  {
   // Display an error dialog.
   alert("Please provide numeric input!");
   // Return without doing anything more.
   return;
  }
  // Ensure that option is actually an integer.
  var Select = Math.round(option);
  // Verify that the input is in range.
  if ((Select < 1) || (Select > 3))
  {
   // Display an error dialog.
   alert("The value supplied is out of range!");
   // Return without doing anything more.
   return;
  }
  // Make a selection.
  switch (Select)
  {
   case 1:
     document.getElementById("Result").innerHTML =
      "You chose Item A.";
     break;
   case 2:
     document.getElementById("Result").innerHTML =
      "You chose Item B.";
     break;
   case 3:
     document.getElementById("Result").innerHTML =
      "You chose Item C.";
     break;
  }
}
