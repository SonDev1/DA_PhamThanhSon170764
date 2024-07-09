import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UpdateUserDto } from '../dto/update-user.Dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepository.findUserToUpdate(userId);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    try {
      const userUpdate = await this.userRepository.saveUserByUserId(
        userId,
        updateUserDto,
      );
      return {
        message: 'Update user successfully',
        user: userUpdate,
      };
    } catch (err) {
      throw new HttpException('Update error', HttpStatus.BAD_REQUEST);
    }
  }
}
