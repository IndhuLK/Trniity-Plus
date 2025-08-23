import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-800 py-10 px-6 md:px-16 font-family">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Column 1 - Brand + Address */}
        <div>
          <h2 className="text-xl font-bold mb-4">Trinityplus</h2>
          <h3 className="font-semibold mb-2">Office Address</h3>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-5 h-5 mt-1 text-gray-700" />
            <p>Trinity Plus Social Trust Office, <br /> Tiruchirappalli, Tamilnadu</p>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Projects</a></li>
            <li><a href="#" className="hover:text-green-600">Services</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">Donate</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-700" />
              <a href="mailto:trinityplussocial@gmail.com" className="hover:text-green-600">
                trinityplussocial@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="w-5 h-5 text-gray-600" />
              <a href="tel:+919514222122" className="hover:text-green-600">+91 95142 22122</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-700" />
              <a href="tel:+919514222122" className="hover:text-green-600">+91 95142 22122</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t pt-4">
        © {new Date().getFullYear()} Trinityplus. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
