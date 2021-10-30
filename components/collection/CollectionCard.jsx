const CollectionCard = ({ name, image, link, description }) => {
  return (
    <div key={name} className="relative group">
      <div className="relative w-full overflow-hidden transition-all duration-200 ease-in-out bg-white rounded-lg h-80 group-hover:opacity-70 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={image}
          alt={name}
          className="object-cover object-center w-full h-full transition-all duration-200 ease-in-out scale-105 group-hover:scale-125 "
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-100">
        <a href={link} className="font-medium text-primary">
          <span className="absolute inset-0" />
          {name}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">{description}</p>
    </div>
  );
};

export default CollectionCard;
