// src/team/team.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async createTeam(dto: CreateTeamDto) {
    const team = await this.prisma.team.create({
      data: {
        name: dto.name,
        managerId: dto.managerId,
      },
    });

    if (dto.userIds?.length) {
      await Promise.all(
        dto.userIds.map((userId) =>
          this.prisma.teamUser.create({
            data: {
              teamId: team.id,
              userId,
            },
          }),
        ),
      );
    }

    return this.prisma.team.findUnique({
      where: { id: team.id },
      include: {
        users: {
          include: { user: true },
        },
        manager: true,
      },
    });
  }

  async getAllTeams() {
    return this.prisma.team.findMany({
      include: {
        users: {
          include: { user: true },
        },
        manager: true,
      },
    });
  }

  async getTeamById(id: number) {
    return this.prisma.team.findUnique({
      where: { id },
      include: {
        users: {
          include: { user: true },
        },
        manager: true,
      },
    });
  }

  async getTeamsByManagerId(managerId: number) {
    return this.prisma.team.findMany({
      where: { managerId },
      include: {
        users: {
          include: { user: true },
        },
        manager: true,
      },
    });
  }
}
