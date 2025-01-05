import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    // Get the port and corsOrigin from config or use defaults
    const port = configService.get<number>('PORT') ?? 3000;
    const corsOrigin = configService.get<string>('CORS_ORIGIN') ?? 'http://localhost:3000'; // You can set this in your configuration or hard-code

    app.enableCors({
        origin: corsOrigin, // Use the corsOrigin variable here
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true, // Allow cookies to be sent with requests
    });

    // Start the application
    await app.listen(port);
}

bootstrap();
