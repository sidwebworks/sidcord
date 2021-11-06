import Announcement from "../../components/ui/Announcement";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Image from "next/image";
export default function Dashboard() {
  return (
    <>
      <div className="relative w-full max-h-screen overflow-auto">
        <Announcement />

        <div className="grid grid-cols-1 grid-rows-2 gap-4 my-5">
          <div className="relative grid w-full grid-cols-1 px-4 h-80">
            <Image
              className="object-cover rounded-xl"
              layout="responsive"
              height={500}
              width={700}
              src="/home-screen.jpg"
            />
          </div>
          <div className="relative grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 h-80">
            <Image
              className="object-cover rounded-xl"
              layout="responsive"
              height={500}
              width={700}
              src="https://i.imgur.com/lDTsTpo.png"
            />
            <Image
              className="object-cover rounded-xl"
              layout="responsive"
              height={500}
              width={700}
              src="/home-screen.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.Layout = DashboardLayout;
