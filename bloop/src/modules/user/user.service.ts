import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "./dto/user.dto";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllUsers() {
        return this.prismaService.user.findMany();
    }
    async getUserById(id: number) {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }
    async createUser(body: UserDto) {
        const teamsIds = body.teamIds || [];
        const teams = await Promise.all(
            teamsIds.map((teamId) =>
                this.prismaService.team.findUnique({
                    where: { id: teamId }
                })
            )
        );
        const validTeams = teams.filter(team => team !== null);
        const user = await this.prismaService.user.create({
            data: {
                name: body.name,
                Manager: Boolean(body.manager),
            }
        });
        await Promise.all(
            validTeams.map(team =>
                this.prismaService.teamUser.create({
                    data: {
                        teamId: team.id,
                        userId: user.id,
                    }
                })
            )
        );
        return this.prismaService.user.findUnique({
            where: { id: user.id },
            include: { teams: true }
        });
    }

}