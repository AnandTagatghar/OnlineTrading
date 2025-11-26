import { v4 as uuid } from "uuid";

const RightSection = ({ data }) => {
  const { title, description, descriptionLinks, imageLink } = data;

  return (
    <div className="container mx-auto py-10 flex justify-center items-center md:gap-15 sm:gap-8 gap-4">
      <div className="w-1/2">
        <h2 className="text-md sm:text-xl md:text-2xl mb-5">{title}</h2>
        <p className="textMuted text-sm sm:text-md mb-5">{description}</p>

        {descriptionLinks.length > 0 &&
          descriptionLinks.map((item) => {
            return (
              <a
                key={uuid()}
                className="text-blue-500 hover:text-gray-600 pr-5"
                href=""
              >
                {item}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            );
          })}
      </div>

      <div className="w-1/2 flex">
        <div className="flex-1"></div>
        <img
          className=""
          style={{ width: "70%" }}
          src={imageLink}
          alt={title}
        />
      </div>
    </div>
  );
};

export default RightSection;
