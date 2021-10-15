import GithubIcon from "../svgs/github-icon.svg";

export const AuthForm = () => {
  return (
    <div className="flex w-full px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto items-left justify-left">
      <div className="w-full lg:h-100">
        <h1 className="my-2 mt-12 text-3xl font-semibold tracking-tighter text-black-700 sm:text-4xl title-font">
         Sign in 
        </h1>
      
        <p className="pb-8 ">No need to create an account <br/> We'll do that automatically.</p>

        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          >
            <div className="flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4"> Sign in with Google </span>
            </div>
          </button>
        </div>
        <p className="my-6 text-center">or if you're a <strong>Developer</strong></p>
        <div className="flex justify-enter">
          <button
            type="button"
            className="inline-flex w-full px-4 py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-black border rounded-lg hover:bg-white group border-blueGray-300 hover:text-black focus:bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          >
            <div className="flex items-center justify-center mx-auto text-white group-hover:text-black">
              <GithubIcon className="w-6 h-6 fill-current" />
              <span className="ml-4"> Sign in with Github </span>
            </div>
          </button>
        </div>
        <h1 className="my-2 mt-12 text-xl font-semibold tracking-tighter text-black-700 sm:text-2xl title-font">
          We value your privacy.
        </h1>
        <p className="pb-1 text-sm">
          That's why this project is open-source on Github.
        </p>
        <p className="pb-8 text-sm">Feel free to have a look at the source.</p>

      </div>
      
    </div>
  );
};
