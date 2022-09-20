export type PortfolioAttributesType = {
  title?: string;
  description?: string;
  address?: string;
  demo?: string;
  host?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
export type PortfolioItemType = {
  id?: number;
  attributes: PortfolioAttributesType;
};

export type PortfolioItemsResType = {
  data: PortfolioItemType[];
};

export type LinkType = {
  name: string;
  link: string;
};
