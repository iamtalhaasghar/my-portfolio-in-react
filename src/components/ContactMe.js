function ContactMe() {
  return (
    <div className="d-flex flex-column m-5 p-5">
      <h3 className="text-center">Contact Me</h3>
      <form className="mt-5" action="#" id="contact-me">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName4"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputMsg">Message</label>
          <textarea
            class="form-control"
            id="inputMsg"
            placeholder="Type your message"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
