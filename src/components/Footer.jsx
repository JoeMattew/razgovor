import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className="">
        <div
          className="max-w-lg px-4 pt-24 py-8 mx-auto text-center md:max-w-none"
        >
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight text-white sm:leading-none md:text-6xl lg:text-7xl"
          >
            {/* Ensure this part stays centered */}
            {/* <span className="block">Группа в</span> */}
            {/* This will still be block on small screens and become inline-block on larger ones */}
            <span
              className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 block md:inline-block"
            >
              {/* In&nbsp; */}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-400 to-purple-300"
              >
                Telegram
              </span>
            </span>
          </h1>
          <div
            className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
          >
            <a
              href="https://t.me/marat5686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tkb border text-sm text-white py-3 px-7 rounded-full"
            >
              Teacher
            </a>
          </div>
        </div>
      </section>
      <hr className="text-white mx-5" />
      <footer className="footer footer-center w-full p-4 bg-gray-300 text-gray-800">
        <div className="text-center">
          <p>
            Copyright &copy; 2024 -
            <a
              className="font-semibold"
              href="https://t.me/marat5686"
            >
              MaratSaitov
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
