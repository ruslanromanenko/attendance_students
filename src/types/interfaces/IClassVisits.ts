export interface IClassVisitsItem {
  Id?: number;
  Title?: string | undefined;
  SchoolboyId: number;
  ColumnId: number;
}

export interface IClassVisits {
  Items: IClassVisitsItem[];
  Quantity: number;
}
