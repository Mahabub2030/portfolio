import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("xjkyqbde");
      if (state.succeeded) {
        return <p>Thanks for joining!</p>;
      }
    
    return (
      <section id="contact" className="bg-gradient-to-r bg-gray-950 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
            Contact Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                  Let's Talk
                </h1>
                <p className="text-gray-300 my-5">
                  I’m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Have a project or
                  idea in mind? Let’s send to me and make it happen.!
                </p>
                <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
                <p className="text-gray-600 mt-2">
                  <a
                    href="mailto:youremail@example.com"
                    className="text-blue-500 hover:underline"
                  >
                    mahabubalam407557@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
                <p className="text-gray-600 mt-2">
                  <a
                    href="tel:+1234567890"
                    className="text-blue-500 hover:underline"
                  >
                    +960567065181
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-300">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mt-2">
                    <a
                      href="https://wa.me/960567065181"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      +960567000085
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
              <h3 className="text-3xl font-semibold text-gray-300 mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};


export default Contact;
