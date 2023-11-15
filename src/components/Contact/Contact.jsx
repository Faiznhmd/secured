import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form_container">
          <form>
            <h1>
              <span>Conatact</span>Us
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label>E-Mail</label>
              <input type="text" placeholder="Enter Your E-Mail" />
            </div>
            <div>
              <label>Name</label>
              <textarea rows="10" cols="50" placeholder="Enter Your Name" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
