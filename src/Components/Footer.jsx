const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-20 text-gray-300 font-medium">
        <a className="hover:text-[#16a34a]" href="#">
          Home
        </a>
        <a className="hover:text-[#16a34a]" href="#">
          About
        </a>
        <a className="hover:text-[#16a34a]" href="#">
          Services
        </a>

        <a className="hover:text-[#16a34a]" href="#">
          Contact
        </a>
      </nav>

      <div className="flex justify-center space-x-10">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
            alt="Messenger"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt="Twitter"
          />
        </a>
      </div>
      <p className="text-center text-white font-medium cursor-default">
        &copy; 2023 <span className="text-[#16a34a] font-extrabold">AARA</span>{" "}
        Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
