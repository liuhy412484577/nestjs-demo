import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

// create global middleware
const GlobalMiddleware = (a: any, b: any, next: any) => {
    console.debug('===全局中间件===');
    next();
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.setGlobalPrefix(`api`);
    app.use(GlobalMiddleware);
    // swagger
    const options = new DocumentBuilder()
        .setTitle('nestjs demo')
        .setDescription('the nestjs demo with docker')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    const configService = app.get(ConfigService);
    const HOST = configService.get('HOST', 'localhost');
    const PORT = configService.get('PORT', 3000);
    await app.listen(PORT, () => {
        console.debug(`服务已经启动,接口请访问:http://wwww.${HOST}:${PORT}`);
    });
}

bootstrap();
