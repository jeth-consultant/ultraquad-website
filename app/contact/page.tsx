import Footer from "@/components/footer/footer";
import { FaPhone, FaEnvelope, FaLandmark } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header section */}
      <div className="bg-black bg-opacity-80 text-white py-16 text-center">
        <h1 className="text-5xl font-serif">Contact us</h1>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg">
            Contact us about anything related to our company or services. <br />
            We'll do our best to get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name *</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="text"
                  defaultValue="+254"
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Company</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block mb-1">Subject *</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Question *</label>
              <textarea
                className="w-full border p-2 rounded"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-6">
          <h2 className="text-2xl font-serif mb-4">My Company</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="flex items-center gap-2 font-semibold">
                <FaLandmark />
                3575 MayFair westlands Nairobi
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2 font-semibold">
                <FaPhone />
                +254 724 070 629
              </span>{" "}
            </li>
            <li>
              <span className="flex item-center  gap-2 font-semibold">
                <FaEnvelope />
                info@ultraquad.com
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
