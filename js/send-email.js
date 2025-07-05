document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const note = document.getElementById("note").value.trim();
  const msg = document.getElementById("errorMessage");

  // Clear previous errors
  msg.textContent = "";

  // Validation
  if (fullname === "" || email === "" || phone === "") {
    msg.textContent = "נא למלא את שדות החובה";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    msg.textContent = "נא להזין כתובת אי-מייל תקנית";
    return;
  }

  const phonePattern = /^[0-9]{10,}$/;
  if (!phonePattern.test(phone)) {
    msg.textContent = "נא להזין מספר נייד תקני בן 10 ספרות";
    return;
  }

  // Data to send
  const formData = {
    fullname,
    email,
    phone,
    note,
  };

  // Create message string
  const message = `
    שם מלא: ${formData.fullname}
    כתובת מייל: ${formData.email}
    טלפון: ${formData.phone}
    הערות: ${formData.note}
    `;

  const service_id = "service_vlsm0cu";
  const template_id = "template_berr0tx";

  emailjs.init("E_b9SUuHaxvjoOIwO");

  emailjs
    .send(service_id, template_id, {
      title: "Interviews",
      to_name: "John",
      from_name: "You",
      email: "micbs64@gmail.com",
      message: message,
    })
    .then(
      (response) => {
        msg.textContent = "תודה, נחזור אליך בהקדם.";
        document.getElementById("contactForm").reset();
      },
      (error) => (msg.textContent = error.text)
    );
});
