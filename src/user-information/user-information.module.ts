import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserInformation, UserInformationSchema } from './schemas/user-information.schema';
import { UserInformationService } from './user-information.service';
import { UserInformationController } from './user-information.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserInformation.name, schema: UserInformationSchema }])],
    providers: [UserInformationService],
    controllers: [UserInformationController],
})
export class UserInformationModule {}
