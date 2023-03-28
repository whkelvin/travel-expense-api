export interface NewTravelDto {
  /*
  date: string;
  */
  country: string;
  /*
  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: number;
  paidOption: string;
  note: string;
  */
}

export interface TravelDto {
  itemId: number;
  /*
  date: string;
  */
  country: string;
  /*
  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: number;
  paidOption: string;
  note: string | null;
  */
}
