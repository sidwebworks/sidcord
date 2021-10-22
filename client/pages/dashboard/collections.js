import CollectionCard from "components/collection/CollectionCard";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    link: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    link: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    src: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    link: "#",
  },
];

const CollectionsPage = () => {
  return (
    <>
      <div className="w-full max-h-screen min-h-screen mx-auto overflow-auto sm:px-3 ">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:max-w-none sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Your Collections
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((el) => (
              <CollectionCard
                key={el}
                name={el.name}
                description={el.description}
                image={el.src}
                link={el.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsPage;

CollectionsPage.Layout = DashboardLayout;
