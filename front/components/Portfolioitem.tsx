import { IconLink } from "./IconLink";
import { PortfolioItemType } from "../types";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = ({ attributes }: PortfolioItemType) => {
  const {
    title,
    description,
    address,
    demo,
    host,
    defaultLink,
    image,
    altText,
  } = attributes;
  return (
    <div>
      <img
        className="relative z-10 object-cover w-full rounded-md h-96"
        src={image.data[0].attributes.url}
        alt={altText}
      ></img>
      <div className="relative z-20 w-full p-6 mx-auto my-7 bg-white rounded-md dark:bg-gray-900">
        <a href={defaultLink}>
          <h2 className="font-semibold text-gray-800 dark:text-white md:text-xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {description}
          </p>
        </a>
        {host && (
          <IconLink
            link={host}
            icon={faServer}
            iconColorClass="text-purple-500"
            text={"Hosted version"}
          />
        )}
        {address && (
          <IconLink link={address} icon={faGithub} text={"GitHub repo"} />
        )}
        {demo && (
          <IconLink
            link={demo}
            icon={faYoutube}
            iconColorClass="text-red-500"
            text={"Demo"}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
