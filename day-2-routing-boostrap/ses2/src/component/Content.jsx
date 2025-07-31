import React from "react";

function Content() {
  return (
    <>
      <section id="contact" class="py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-8">
              <h2 class="mb-4">Contact Us</h2>
              <p class="mb-4">
                Feel free to reach out to us through the following contact
                details. We’re here to help you with all your event-related
                queries.
              </p>

              <div class="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </div>

              <div class="mb-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>

              <div class="mb-3">
                <strong>Address:</strong>
                Mumbai, India
              </div>

              <div>
                <a href="mailto:info@example.com" class="btn btn-primary mt-3">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
