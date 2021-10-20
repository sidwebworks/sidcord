const HomeLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      {children}
      <Footer/>
    </div>
  );
};

export default HomeLayout;

const Navigation = () => {
  return (
    <header class="border-b">
      <div class="container mx-auto items-center text-blueGray-700 transition duration-500 ease-in-out transform bg-white ">
        <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <nav class="flex flex-wrap items-center justify-start text-base ">
            <ul class="items-center inline-block list-none lg:inline-flex">
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  Now
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="/"
            class="justify-center focus:outline-none md:ml-auto md:mr-auto"
          >
            <div class="inline-flex items-center">
              <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
              <h2 class="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                {" "}
                wickedblocks{" "}
              </h2>
            </div>
          </a>
          <button class="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md lg:ml-auto focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-700 ">
            Button{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
  <div className="items-center bg-gray-100 ">
  <footer className="container text-blueGray-700">
    <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
      <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div className="inline-flex items-center">
          <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600" />
          <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
            wickedblocks
          </h2>
        </div>
      </a>
      <nav className="flex flex-wrap items-center justify-center mx-auto text-base md:ml-auto md:mr-auto">
        <a href="#" className="px-4 py-1 text-base transition duration-500 ease-in-out transform rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
          Pricing
        </a>
        <a href="#" className="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
          Contact
        </a>
        <a href="#" className="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
          Services
        </a>
        <a href="#" className="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
          Water
        </a>
        <a href="#" className="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
          Now
        </a>
      </nav>
      <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
        <a className="text-blue-500 hover:text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-blue-500 hover:text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-blue-500 hover:text-black">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-blue-500 hover:text-black">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </footer>
  <footer className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
    <div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
      <h2 className="mx-auto mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
        The world's best teams use Wickedtemplates to state theire presence.
      </h2>
    </div>
  </footer>
</div>

  );
};
