const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              About Softmax Online School
            </h3>
            <p className="text-sm text-gray-400">
              Softmax Online School offers top-notch online education with
              interactive courses and personalized learning experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/student-dashboard"
                  className="hover:text-gray-300 transition"
                >
                  Student Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/instructor-dashboard"
                  className="hover:text-gray-300 transition"
                >
                  Instructor Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/admin-dashboard"
                  className="hover:text-gray-300 transition"
                >
                  Admin Dashboard
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-gray-300 transition">
                  Browse Courses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@softmaxschool.com</li>
              <li>Phone:+88 09678677677 </li>
              <li>Address: Gazipur Dhaka</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Softmax Online School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
