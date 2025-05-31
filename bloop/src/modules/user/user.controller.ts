import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // Define your user-related endpoints here
  // For example, you can add a method to get all users

  @Get('getAllUsers')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get('getUserById/:id')
  async getUserById(id: number) {
    return this.userService.getUserById(id);
  }

  @Get('getUsersByteamId/:teamId')
  async getUsersByTeamId(teamId: number) {
    return this.userService.getUsersByTeamId(teamId);
  }

  @Post('createUser')
  async createUser(@Body() body: UserDto) {
    return this.userService.createUser(body);
  }
}
