export interface NewTravelDto {
  date: Date;

  country: string;

  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: number;
  paidOption: string;
  note: string | null;
}

export interface TravelDto {
  itemId: number;

  date: Date;

  country: string;
  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: number;
  paidOption: string;
  note: string | null;
}
