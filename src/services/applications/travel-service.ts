import {
  PostTravelRequest,
  PostTravelResponse,
} from '../../controllers/models/travel-models';
import { TravelDto } from '../data/database/models/travel-models';

import * as db from '../data/database/travel-db-service';
import * as mapper from './mapper/travel-mapper';

export async function createItem(
  postTravelRequest: PostTravelRequest
): Promise<PostTravelResponse | null> {
  const travelDto: TravelDto | null = await db.createItem(
    mapper.postTravelRequestToCreateItemDto(
      mapper.postTravelRequestToCreateItemDto(postTravelRequest)
    )
  );

  if (travelDto == null) return null;

  return mapper.travelDtoToPostTravelResponse(travelDto);
}
