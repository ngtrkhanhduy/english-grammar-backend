import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { CreateUserDto } from './dto/create-user-information.dto';
import { UpdateUserDto } from './dto/update-user-information.dto';
import { UserInformationDto } from './dto/user-information.dto';

@Controller('user-information')
export class UserInformationController {
    constructor(private readonly userService: UserInformationService) {}

    // Create or Update user by username
    @Post()
    async createOrUpdate(@Body() createUserDto: CreateUserDto): Promise<UserInformationDto> {
        const user = await this.userService.createOrUpdate(createUserDto);
        return user.toObject(); // Convert Mongoose document to plain object
    }

    // Get all users
    @Get()
    async findAll(): Promise<UserInformationDto[]> {
        const users = await this.userService.findAll();
        return users.map((user) => user.toObject()); // Map Mongoose documents to plain objects
    }

    // Get user by username
    @Get(':username')
    async findOne(@Param('username') username: string): Promise<UserInformationDto> {
        const user = await this.userService.findOneByUsername(username);
        return user.toObject(); // Return user data
    }

    // Update user by username
    @Put(':username')
    async update(
        @Param('username') username: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserInformationDto> {
        const updatedUser = await this.userService.updateByUsername(username, updateUserDto);
        return updatedUser.toObject(); // Return updated user
    }

    // Delete user by username
    @Delete(':username')
    async delete(@Param('username') username: string): Promise<UserInformationDto> {
        const deletedUser = await this.userService.deleteByUsername(username);
        return deletedUser.toObject(); // Return deleted user
    }
}
