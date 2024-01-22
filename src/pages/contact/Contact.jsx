import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { BsEnvelopeFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsEnvelopeFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <form
                  action="https://formspree.io/f/xzbllqjw"
                  method="POST"
                  className="contact-inputs"
                >
                  <div>
                    <input
                      required
                      name="name"
                      className="inputName"
                      type={"text"}
                    />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <input
                      required
                      name="email"
                      className="inputEmail"
                      type={"text"}
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <textarea
                      required
                      name="description"
                      className="inputDescription"
                      type={"text"}
                      rows="5"
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                  <br />
                  <br />
                  <br />
                  <input className="button" type="submit" value="Send" />
                </form>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577315214!2d78.04042158065874!3d9.917826796721695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701529316448!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
