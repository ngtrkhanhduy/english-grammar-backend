import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserInformation extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    fullname: string;

    @Prop({ required: true, default: '1900/01/01' })
    birthday: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: false, default: 'https://github.com/github.png?size=40' })
    avataUrl: string;
}

export const UserInformationSchema = SchemaFactory.createForClass(UserInformation);
