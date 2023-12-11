import * as fs from 'fs';
import * as path from 'path';

const isProd = process.env.NODE_ENV === 'production';
console.debug('==NODE_ENV===', process.env.NODE_ENV);
const getEnvFilePath = () => {
    const localEnv = path.resolve('.env');
    const prodEnv = path.resolve('.env.prod');
    if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
        throw new Error('缺少环境配置文件');
    }
    const envFilePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
    console.debug('==envFilePath==', envFilePath);
    return { path: envFilePath };
};

export default getEnvFilePath();
