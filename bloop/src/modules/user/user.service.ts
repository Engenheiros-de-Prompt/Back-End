import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "./user.dto";

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
    async createUser(body: { name: string; manager: string; teamIds: number[]; }) {
        return this.prismaService.user.create({
            data: {
                name: body.name,
                manager: body.manager,
                teamIds: body.teamIds,
            }
        });
    }

}