// Select the "Check Availability" button
const checkButton = document.getElementById("checkAvailability");

// Add a click event listener to the button
checkButton.addEventListener("click", () => {
    // Simulate flight availability randomly (true or false)
    const isAvailable = Math.random() < 0.5; // Adjust the threshold as needed

    if (isAvailable) {
        alert("Flights are available. Details will be displayed.");
        // Here you can display flight details as needed.
    } else {
        alert("Sorry, no flights are available at the moment.");
    }
})

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'Arial', 'sans-serif'],
        },
        screens: {
          xs: '370px',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  