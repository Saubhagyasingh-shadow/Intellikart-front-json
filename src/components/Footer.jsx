import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Company logo or text */}
            <h1 className="text-xl font-bold">Intellikart</h1>
          </div>
          <div>
            {/* Social media icons or links */}
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  {/* Icon for Facebook */}
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  {/* Icon for Twitter */}
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  {/* Icon for Instagram */}
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">
          {/* Footer text or links */}
          <p>&copy; {new Date().getFullYear()} Intellikart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
