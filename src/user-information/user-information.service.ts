import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInformation } from './schemas/user-information.schema';
import { CreateUserDto } from './dto/create-user-information.dto';
import { UpdateUserDto } from './dto/update-user-information.dto';

@Injectable()
export class UserInformationService {
    constructor(@InjectModel(UserInformation.name) private userModel: Model<UserInformation>) {}

    // Create or Update user by username
    async createOrUpdate(userData: CreateUserDto): Promise<UserInformation> {
        // Check if username already exists
        const existingUser = await this.userModel.findOne({ username: userData.username }).exec();

        if (existingUser) {
            // If user exists, update their information
            return this.updateByUsername(userData.username, userData);
        } else {
            // If user does not exist, create new user
            return this.create(userData);
        }
    }

    // Create new user
    async create(userData: CreateUserDto): Promise<UserInformation> {
        const createdUser = new this.userModel(userData);
        return createdUser.save();
    }

    // Update user by username
    async updateByUsername(username: string, userData: UpdateUserDto): Promise<UserInformation> {
        return this.userModel
            .findOneAndUpdate(
                { username: username },
                userData,
                { new: true }, // Return the updated document
            )
            .exec();
    }

    // Find all users
    async findAll(): Promise<UserInformation[]> {
        return this.userModel.find().exec();
    }

    // Find one user by username
    async findOneByUsername(username: string): Promise<UserInformation> {
        return this.userModel.findOne({ username }).exec();
    }

    // Delete user by username
    async deleteByUsername(username: string): Promise<UserInformation> {
        return this.userModel.findOneAndDelete({ username }).exec();
    }
}
