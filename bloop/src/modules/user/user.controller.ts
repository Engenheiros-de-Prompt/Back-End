import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAllUsers')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('getUserById/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id); // Convertendo para número
  }

  @Get('getUsersByteamId/:teamId')
  async getUsersByTeamId(@Param('teamId') teamId: string) {
    return this.userService.getUsersByTeamId(+teamId);
  }

  @Post('createUser')
  async createUser(@Body() body: UserDto) {
    return this.userService.createUser(body);
  }
}
