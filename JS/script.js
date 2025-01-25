document
  .getElementById("akanform")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get user inputs
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    if (!birthday || !gender) {
      alert("Fill in all fields.");
      return;
    }

    // Parse the date
    const date = new Date(birthday);
    const dayOfWeek = date.getDay(); //Get day of the week (0 for sunday, 1 for Monday, etc.)

    //Akan Name Arrays
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];

    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    // Select the Akan name based on gender and day of the week
    const akanName =
      gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    // Display the result
    document.getElementById("result").textContent =
      "Your Akan name is ${akanName}";
  });
