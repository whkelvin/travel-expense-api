export interface PostTravelRequest {
  date: string;

  country: string;

  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: string;
  paidOption: string;
  note: string | null;
}

export interface PostTravelResponse {
  itemId: number;

  date: string;

  country: string;

  city: string;
  category: string;
  subcategory: string;
  description: string;
  cost: string;
  paidOption: string;
  note: string | null;
}
