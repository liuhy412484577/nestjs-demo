import { Injectable, NestMiddleware } from '@nestjs/common';

// nest g mi counter 生成中间件
@Injectable()
export class CounterMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.debug('===局部中间件===');
        next();
    }
}
