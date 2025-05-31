import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller("user/")
export class UserController {
    constructor(private readonly userService: UserService) {}
    // Define your user-related endpoints here
    // For example, you can add a method to get all users

    @Get("listaUSUARIOS/")
    async getAllUsers() {
         return this.userService.getAllUsers();
}
    @Get("getUserById/:id")
    async getUserById(id: number) {
        return this.userService.getUserById(id);
    }

    @Post("createUser/")
    async createUser(@Body() body: { name: string; manager: string; teamIds: number[] }) {
        return this.userService.createUser(body);
    }
}