import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

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
                // template: {
                //   dir: process.cwd() + '/template/',
                //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                //   options: {
                //     strict: true,
                //   },
                // },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
