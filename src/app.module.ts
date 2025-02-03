import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ExercisesQuestionModule } from './exercises-question/exercises-question.module';
import { UserInfomationModule } from './user-infomation/user-infomation.module';
import { UserLessonProcessModule } from './user-lesson-process/user-lesson-process.module';
import { UserExercisesProcessModule } from './user-exercises-process/user-exercises-process.module';
import { LessonQuestionModule } from './lesson-question/lesson-question.module';

@Module({
    imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    // ignoreTLS: true,
                    // secure: false,
                    auth: {
                        user: 'ngtrkhanhduy1308@gmail.com',
                        pass: 'mvgrhswbleonkaku',
                    },
                },
                defaults: {
                    from: '"No Reply" <no-reply@localhost>',
                },
                // preview: true,
                template: {
                    dir: process.cwd() + '/src/mail/templates/',
                    adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                    options: {
                        strict: true,
                    },
                },
            }),
            inject: [ConfigService],
        }),
        ExercisesQuestionModule,
        UserInfomationModule,
        UserLessonProcessModule,
        UserExercisesProcessModule,
        LessonQuestionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
