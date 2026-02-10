import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:batybelite12@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-10">Contacts</h1>

      <div className="flex gap-5 mb-12 flex-wrap">
        <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-4 flex-1 min-w-[250px]">
          <Phone size={24} className="text-primary" />
          <div>
            <span className="font-bold">Phone: </span>
            <span>+250788775608</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-4 flex-1 min-w-[250px]">
          <Mail size={24} className="text-primary" />
          <div>
            <span className="font-bold">Email: </span>
            <a href="mailto:batybelite12@gmail.com" className="text-primary hover:underline">
              batybelite12@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-4 mb-12">
        <MapPin size={24} className="text-primary" />
        <div>
          <span className="font-bold">Address: </span>
          <span>KIGALI CITY, KICUKIRO, Rwanda</span>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 lg:p-10">
        <h2 className="text-2xl font-medium mb-8">Send Me a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 bg-dark text-white border-none px-4 py-4 rounded-xl text-base"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 bg-dark text-white border-none px-4 py-4 rounded-xl text-base"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-dark text-white border-none px-4 py-4 rounded-xl text-base mb-5"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-dark text-white border-none px-4 py-4 rounded-xl text-base h-40 resize-none mb-5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
