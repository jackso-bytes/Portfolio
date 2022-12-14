export type ImageObjectType = {
  id: number;
  attributes: {
    url: string;
  };
};

export type ImageArray = {
  data: ImageObjectType[];
};

export type Image = {
  data: ImageObjectType;
};

export type PortfolioAttributesType = {
  title: string;
  description?: string;
  address?: string;
  demo?: string;
  host?: string;
  defaultLink: string;
  image: ImageArray;
  altText: string;
};
export type PortfolioItemType = {
  id?: number;
  attributes: PortfolioAttributesType;
};

export type PortfolioItemsResType = {
  data: PortfolioItemType[];
};

export type ArticleAttributesType = {
  title: string;
  url: string;
  image: Image;
  altText: string;
};
export type ArticleItemType = {
  id?: number;
  attributes: ArticleAttributesType;
};

export type ArticleItemsResType = {
  data: PortfolioItemType[];
};

export type LinkType = {
  name: string;
  link: string;
};
