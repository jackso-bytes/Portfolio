export interface AttributesType {
  title?: string;
  description?: string;
  address?: string;
  demo?: string;
  host?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface PortfolioItemType {
  id: number;
  attributes: AttributesType;
}

export interface PortfolioItemsResType {
  data: PortfolioItemType[];
}
