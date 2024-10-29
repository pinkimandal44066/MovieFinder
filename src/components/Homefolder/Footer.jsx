const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-4 justify-between items-start px-6">
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4">
            <h1 className="text-3xl font-bold text-yellow-400">Movie </h1>
            <p className="text-sm mt-2 opacity-70">
              Discover the best movies tailored for you.
            </p>
          </div>

          <div className="mb-6 w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className=" transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className=" transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className=" transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" transition-colors duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors duration-300">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Subscribe</h2>
            <p className="text-sm opacity-70">
              Get updates on new movies and recommendations.
            </p>
            <div className="flex flex-col md:flex-row items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2
       mb-2 md:mb-0 md:mr-2"
              />
              <button className="bg-yellow-400  hover:bg-white hover:text-black text-white p-2 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm opacity-70">
            © 2024 MovieFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
