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
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  public async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.userService.getUsersById(id)))
      throw new NotFoundException('User not found');
    await this.userService.deleteUserById(id);
    return { success: true };
  }
}
