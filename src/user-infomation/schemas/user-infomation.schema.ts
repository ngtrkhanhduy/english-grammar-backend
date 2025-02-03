import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserInfomation {
    @Prop({ required: true })
    fullname: string;

    @Prop({ required: true })
    age: string;

    @Prop({ required: true })
    sex: string;

    @Prop({ required: false })
    avataUrl: string;
}

export const UserInfomationSchema = SchemaFactory.createForClass(UserInfomation);
