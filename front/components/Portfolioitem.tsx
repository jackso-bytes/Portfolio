import { PortfolioItemType } from "../types";

const PortfolioItem = ({ attributes }: PortfolioItemType) => {
  const {
    title,
    description,
    address,
    demo,
    host,
    createdAt,
    updatedAt,
    publishedAt,
  } = attributes;

  console.log(attributes);
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      <div>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        ></img>
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <h2 className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
            {title}
          </h2>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {description}
          </p>

          <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
