import Head from "next/head";
import { useState } from "react";
import { AuthForm } from "../components/forms/authForm";
import { SlideOver } from "../components/ui/SlideOver";
import HomeLayout from "../components/layouts/HomeLayout";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];
  return (
    <HomeLayout>
      <SlideOver isOpen={isOpen} setIsOpen={setIsOpen} width="max-w-md">
        <AuthForm />
      </SlideOver>
      <section className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              a great header right here
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
              {" "}
              A centered <br className="md:hidden" /> medium length headline.{" "}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              You're about to launch soon and must be 100% focused on your
              product. Don't loose precious days designing, coding the landing
              page and testing .{" "}
            </p>
          </div>
          <div className="flex justify-left lg:justify-center ">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
              Button
            </button>
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Button
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center px-10 pb-24 mx-auto rounded-lg lg:-mt-12 lg:px-40">
          <img
            className="object-cover object-center w-full shadow-xl rounded-xl"
            alt="hero"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
      </section>
      <div className="max-w-screen-lg pt-12 mx-auto bg-white ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <section className="text-blueGray-700 ">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <p className="mb-12 text-base font-medium leading-relaxed text-blueGray-700 ">
              {" "}
              "Something that really cooks. Alright, alright this is an oldie,
              but uh, it's an oldie where I come from. Alright guys, let's do
              some blues riff in b, watch me for the changes, and uh, try and
              keep up, okay. Nothing, nothing, nothing, look tell her destiny
              has brought you together, tell her that she's the most beautiful
              you have ever seen. Girls like that stuff. What, what are you
              doing George?"{" "}
            </p>
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
              {" "}
              Rasmus Doe{" "}
              <span
                href="#"
                className="font-semibold text-blueGray-500 lg:mb-0"
              >
                Acme's HR{" "}
              </span>
            </h2>
            <span className="inline-flex justify-start sm:mt-0">
              <a className="text-blue-500 hover:text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-blue-500 hover:text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-500 hover:text-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-blue-500 hover:text-black">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
