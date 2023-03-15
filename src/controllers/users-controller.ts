import { NextFunction, Request, Response } from 'express';
import { PostUserRequest, PostUserResponse } from './models/users-models';
import * as yup from 'yup';
import * as userService from '../services/applications/users-service';

async function parsePostUserRequest(data: unknown): Promise<PostUserRequest> {
  const schema = yup.object().shape({
    username: yup.string().required(),
  });
  await schema.validate(data, { strict: true });
  return data as PostUserRequest;
}

export async function postUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const body = req.body;
    const postUserRequest: PostUserRequest = await parsePostUserRequest(body);

    const response: PostUserResponse | null = await userService.createUser(
      postUserRequest
    );

    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send('Error');
  }
}
