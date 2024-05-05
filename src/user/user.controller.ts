import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getAllUsers(): any {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userService.getUsersById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
