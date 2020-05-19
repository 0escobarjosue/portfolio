const submit = document.querySelector("#form-submit");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
submit.addEventListener("click", sendMail);

// // function sendEmail(e) {
// //   window.location.href("mailto:0escobarjosue@gmail.com");
// // }

function sendMail() {
  document.location.href =
    `mailto:0escobarjosue@gmail.com?subject=${subject.nodeValue}` +
    `&body=` +
    encodeURIComponent(message.nodeValue);
}

// <button type="submit" id="form-submit" class="btn"></button>

// <a href="mailto:customer@email.com?subject=Information
// Requested&body=Here's more information.
// http://www.website.com/info/info.pdf">Send More Info</a>
