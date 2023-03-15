import {
  PostUserRequest,
  PostUserResponse,
} from '../../controllers/models/users-models';
import { UserDto } from '../data/database/models/users-models';

import * as db from '../data/database/users-db-service';
import * as mapper from './mapper/users-mapper';

export async function createUser(
  postUserRequest: PostUserRequest
): Promise<PostUserResponse | null> {
  const userDto: UserDto | null = await db.createUser(
    mapper.postUserRequestToCreateUserDto(
      mapper.postUserRequestToCreateUserDto(postUserRequest)
    )
  );

  if (userDto == null) return null;

  return mapper.userDtoToPostUserResponse(userDto);
}
