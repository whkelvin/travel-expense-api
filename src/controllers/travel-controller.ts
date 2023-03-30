import { type NextFunction, type Request, type Response } from 'express';
import {
  type PostTravelRequest,
  type PostTravelResponse,
} from './models/travel-models';
import * as yup from 'yup';
import * as travelService from '../services/applications/travel-service';

// check data type
async function parsePostTravelRequest(
  data: unknown
): Promise<PostTravelRequest> {
  const schema = yup.object().shape({
    /*
    date: yup.string().required(),
    */
    country: yup.string().required(),

    city: yup.string().required(),
    category: yup.string().required(),
    subcategory: yup.string().required(),
    description: yup.string().required(),
    cost: yup.number().required().positive(),
    paidOption: yup.string().required(),
    note: yup.string().required(),
  });
  await schema.validate(data, { strict: true });
  return data as PostTravelRequest;
}

export async function postItem(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // catch from frontend information
    const body = req.body;

    // function to check datatype
    const postTravelRequest: PostTravelRequest = await parsePostTravelRequest(
      body
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response: PostTravelResponse | null = await travelService.createItem(
      postTravelRequest
    );

    res.status(200).end();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).send('Error');
  }
}
