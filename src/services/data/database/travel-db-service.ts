// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PrismaClient, expense } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NewTravelDto, TravelDto } from './models/travel-models';
export * from './models/travel-models';

const prisma = new PrismaClient();

export const createItem = async (
  newTravel: NewTravelDto
): Promise<TravelDto | null> => {
  const travel: expense | null = await prisma.expense.create({
    data: {
      date: newTravel.date,

      country: newTravel.country,

      city: newTravel.city,
      category: newTravel.category,
      subcategory: newTravel.subcategory,
      description: newTravel.description,
      cost: newTravel.cost,
      paidOption: newTravel.paidOption,
      note: newTravel.note,
    },
  });

  if (travel == null) return null;

  const travelDto: TravelDto = {
    itemId: travel.itemId,

    date: travel.date,

    country: travel.country,

    city: travel.city,
    category: travel.category,
    subcategory: travel.subcategory,
    description: travel.description,
    cost: travel.cost,
    paidOption: travel.paidOption,
    note: travel.note,
  };
  return travelDto;
};
