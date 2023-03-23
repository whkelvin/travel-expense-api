export interface PostUserRequest {
  date: string ;
  country: string ;
  city: string ;
  category: string ;
  subcategory: string ;
  description: string ;
  cost: number ;
  paidOption: string ;
  note: string;
}

export interface PostUserResponse {
  itemId: number;
  date: string ;
  country: string ;
  city: string ;
  category: string ;
  subcategory: string ;
  description: string ;
  cost: Int ;
  paidOption: string ;
  note: string;
}
