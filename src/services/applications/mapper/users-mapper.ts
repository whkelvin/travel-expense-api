import {
  PostUserResponse,
  PostUserRequest,
} from '../../../controllers/models/users-models';
import { NewUserDto, UserDto } from '../../data/database/models/users-models';

export function postUserRequestToCreateUserDto(
  postUserRequest: PostUserRequest
): NewUserDto {
  const newUserDto: NewUserDto = {
    username: postUserRequest.username,
  };
  return newUserDto;
}

export function userDtoToPostUserResponse(dto: UserDto): PostUserResponse {
  const res: PostUserResponse = {
    username: dto.username,
    userId: dto.id,
  };
  return res;
}
