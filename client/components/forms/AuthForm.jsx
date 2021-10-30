import { InformationCircleIcon } from "@heroicons/react/solid";
import { GithubAuthButton } from "@components/ui/buttons/SocialButtons";
import { GoogleAuthButton } from "@components/ui/buttons/SocialButtons";
import { signin, signOut } from "next-auth/client";

export const AuthForm = () => {
  return (
    <div className="flex w-full px-4 md:max-w-md lg:max-w-full md:mx-auto items-left justify-left">
      <div className="w-full lg:h-100">
        <h1 className="my-2 mt-12 text-primary text-3xl font-bold tracking-tighter text-black-700 sm:text-[2.5rem] ">
          Sign in
        </h1>

        <p className="pt-1 pb-8 leading-tight text-neutral-300">
          No need to create an account <br /> We'll do that automatically.
        </p>

        <div className="flex justify-center">
          <GoogleAuthButton
            onClick={() =>
              signin("google", {
                redirect: true,
                callbackUrl: "http://localhost:3000/dashboard/",
              })
            }
          />
        </div>
        <p className="my-6 text-center">
          or if you're a <strong className="text-gray-100">Developer</strong>
        </p>
        <div className="flex justify-enter">
          <GithubAuthButton
            onClick={() =>
              signin("github", {
                redirect: true,
                callbackUrl: "http://localhost:3000/dashboard/",
              })
            }
          />
        </div>
        <div className="flex items-center gap-2 my-1 mt-12">
          <InformationCircleIcon className="w-6 h-6" />
          <h1 className="text-lg font-semibold tracking-tighter text-black-700 sm:text-xl title-font">
            We value your privacy.
          </h1>
        </div>
        <p className="text-[0.9rem]  text-neutral-300">
          That's why this project is{" "}
          <span className="font-semibold text-primary">open-source</span> on
          Github. Feel free to have a look at the source code.
        </p>
      </div>
    </div>
  );
};
