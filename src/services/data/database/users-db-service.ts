import { PrismaClient, expense } from '@prisma/client';
import { NewUserDto, UserDto } from './models/users-models';
export * from './models/users-models';

const prisma = new PrismaClient();

export const createUser = async (
  newUser: NewUserDto
): Promise<UserDto | null> => {
  const user: expense | null = await prisma.expense.create({
    data: {
      username: newUser.username,
    },
  });

  if (user == null) return null;

  const userDto: UserDto = {
    id: user.userId,
    username: user.username,
  };
  return userDto;
};
