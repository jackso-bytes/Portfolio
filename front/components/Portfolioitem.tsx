import { IconLink } from "./IconLink";
import { PortfolioItemType } from "../types";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = ({ attributes }: PortfolioItemType) => {
  const { title, description, address, demo, host, defaultLink } = attributes;

  return (
    <div>
      <img
        className="relative z-10 object-cover w-full rounded-md h-96"
        src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      ></img>
      <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
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
