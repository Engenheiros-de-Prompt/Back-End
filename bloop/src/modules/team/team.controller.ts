import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Get('getTeamById/:id')
  async getTeamById(@Param('id') id: number) {
    return this.teamService.getTeamById(id);
  }

  @Get('getTeamsByManagerId/:managerId')
  async getTeamsByManagerId(@Param('managerId') managerId: number) {
    return this.teamService.getTeamsByManagerId(managerId);
  }

  @Post()
  async createTeam(@Body() body: CreateTeamDto) {
    return this.teamService.createTeam(body);
  }
}
