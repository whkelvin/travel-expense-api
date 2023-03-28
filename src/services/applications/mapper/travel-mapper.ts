import {
  PostTravelResponse,
  PostTravelRequest,
} from '../../../controllers/models/travel-models';
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
    /*
    date: postTravelRequest.date,
    */
    country: postTravelRequest.country,
    /*
    city: postTravelRequest.city,
    category: postTravelRequest.category,
    subcategory: postTravelRequest.subcategory,
    description: postTravelRequest.description,
    cost: postTravelRequest.cost,
    paidOption: postTravelRequest.paidOption,
    note: postTravelRequest.note,
    */
  };
  return newTravelDto;
}

export function travelDtoToPostTravelResponse(
  dto: TravelDto
): PostTravelResponse {
  const res: PostTravelResponse = {
    itemId: dto.itemId,
    /*
    date: dto.date,
    */
    country: dto.country,
    /*
    city: dto.city,
    category: dto.category,
    subcategory: dto.subcategory,
    description: dto.description,
    cost: dto.cost,
    paidOption: dto.paidOption,
    note: dto.note,
    */
  };
  return res;
}
