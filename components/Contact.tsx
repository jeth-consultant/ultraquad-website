"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfju73iznrVo5dWIBCezZb1vpbI7OukWz2viPx59sfDIuhytA/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.67668707", formData.name);
    formDataToSend.append("entry.185178097", formData.email);
    formDataToSend.append("entry.1557358080", formData.message);

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    });

    alert("✅ Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl setext-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project.
          </p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300"
                placeholder="Tell us about your project..."
              />
            </div>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg hover:shadow-sky-500/30 transition-all duration-300 font-semibold"
            >
              Send
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
