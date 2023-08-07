document.getElementById("studentForm").onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("https://your-server-url/submit_form", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Form submitted successfully!");
          clearForm();
        } else {
          alert("Form submission failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  
  function clearForm() {
    const form = document.getElementById("studentForm");
    form.reset();
  }
  