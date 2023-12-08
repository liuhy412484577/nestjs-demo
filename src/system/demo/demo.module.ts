import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from './entities/demo.entity';
import { CounterMiddleware } from 'src/counter/counter.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([DemoEntity])],
    controllers: [DemoController],
    providers: [
        {
            provide: 'Demo',
            useClass: DemoService,
        },
        {
            provide: 'UserArray',
            useValue: ['老王', '老张', '老李'],
        },
        {
            provide: 'Factory',
            useValue: () => {
                console.log('====Factory===');
                return 'function';
            },
        },
    ],
})

// 实现局部中间件 for demo service
export class DemoModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CounterMiddleware).forRoutes('Demo');
    }
}
