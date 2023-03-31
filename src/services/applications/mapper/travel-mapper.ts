/* eslint-disable @typescript-eslint/consistent-type-imports */
import { number } from 'yup';
import {
  PostTravelResponse,
  PostTravelRequest,
} from '../../../controllers/models/travel-models';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
  NewTravelDto,
  TravelDto,
} from '../../data/database/models/travel-models';

export function postTravelRequestToCreateItemDto(
  postTravelRequest: PostTravelRequest
): NewTravelDto {
  // hge
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newTravelDto: NewTravelDto = {
    date: new Date(postTravelRequest.date),

    country: postTravelRequest.country,

    city: postTravelRequest.city,
    category: postTravelRequest.category,
    subcategory: postTravelRequest.subcategory,
    description: postTravelRequest.description,
    cost: Number(postTravelRequest.cost),
    paidOption: postTravelRequest.paidOption,
    note: postTravelRequest.note,
  };
  return newTravelDto;
}

export function travelDtoToPostTravelResponse(
  dto: TravelDto
): PostTravelResponse {
  const res: PostTravelResponse = {
    itemId: dto.itemId,

    date: String(dto.date),

    country: dto.country,

    city: dto.city,
    category: dto.category,
    subcategory: dto.subcategory,
    description: dto.description,
    cost: String(dto.cost),
    paidOption: dto.paidOption,
    note: dto.note,
  };
  return res;
}
