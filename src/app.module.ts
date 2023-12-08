import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { DemoModule } from './system/demo/demo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envConfig from './config/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from './system/demo/entities/demo.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [envConfig.path],
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'sql-demo',
            port: 3306,
            username: 'root',
            password: '12345678',
            database: 'demo-db',
            entities: [DemoEntity],
            // entities: ['dist/**/*.entity{.ts,.js}'],
            // entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
            migrations: ['dist/migrations/*.{ts,js}'],
            migrationsTableName: 'typeorm_migrations',
            timezone: '+08:00',
            synchronize: true,
            autoLoadEntities: true,
            retryAttempts: 6,
        }),
        // TypeOrmModule.forRootAsync({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     useFactory: async (configService: ConfigService) => {
        //         console.debug('==xxxxxxx==', configService);
        //         return {
        //             type: 'mysql',
        //             host: configService.get('DB_HOST', 'localhost'),
        //             port: configService.get('DB_PORT', 3306),
        //             username: configService.get('DB_USER', 'root'),
        //             password: configService.get('DB_PASSWD', '12345678'),
        //             database: configService.get('DB_DATABASE', 'demo-db'),
        //             entities: ['dist/**/*.entity{.ts,.js}'],
        //             // entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
        //             migrations: ['dist/migrations/*.{ts,js}'],
        //             migrationsTableName: 'typeorm_migrations',
        //             timezone: '+08:00',
        //             synchronize: false,
        //             autoLoadEntities: true,
        //         };
        //     },
        // }),
        DemoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
