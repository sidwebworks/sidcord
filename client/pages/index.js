import { useRouter } from "next/router";
import Link from "next/link";
import { AuthForm } from "../components/forms/AuthForm";
import { SlideOver } from "../components/ui/SlideOver";
import HomeLayout from "../components/layouts/HomeLayout";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Button from "components/ui/buttons/Button";
import { useUser } from "lib/hooks/use-user";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();

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
            <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase text-primary title-font">
              a great header right here
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-neutral-100 sm:text-5xl title-font">
              {" "}
              A centered <br className="md:hidden" /> medium length headline.{" "}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-neutral-400 lg:w-2/3">
              You're about to launch soon and must be 100% focused on your
              product. Don't loose precious days designing, coding the landing
              page and testing .{" "}
            </p>
          </div>
          <div className="flex gap-6 justify-left lg:justify-center">
            {user ? (
              <Link href="/dashboard">
                <a className="items-center block px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-primary focus:outline-none focus:ring-2 focus:ring-primary ">
                  Go to App
                </a>
              </Link>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                className="flex items-center px-6 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-primary focus:outline-none focus:ring-2 focus:ring-primary "
              >
                Sign In
              </Button>
            )}
            <Button className="flex items-center px-6 py-2 mt-auto mr-3 font-medium transition duration-500 ease-in-out transform rounded-lg text-primary ring-primary focus:outline-none focus:ring-2">
              Why this project?
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center px-10 pb-24 mx-auto rounded-lg lg:-mt-12 lg:px-40">
          <img
            className="object-cover object-center w-full shadow-xl rounded-xl"
            alt="hero"
            src="/home-screen.jpg"
          />
        </div>
      </section>
      <div className="max-w-screen-lg pt-12 mx-auto pb-28 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
              Transactions
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-neutral-100 sm:text-4xl">
              A better way to send money
            </p>
            <p className="max-w-2xl mt-4 text-xl text-neutral-400 lg:mx-auto">
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
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-400">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
