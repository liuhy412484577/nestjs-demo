import * as fs from 'fs';
import * as path from 'path';

const isProd = process.env.NODE_ENV === 'prod';

const getEnvFilePath = () => {
    const localEnv = path.resolve('.env');
    const prodEnv = path.resolve('.prod.env');
    if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
        throw new Error('缺少环境配置文件');
    }
    const envFilePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
    console.debug('==envFilePath==', envFilePath);
    return { path: envFilePath };
};

export default getEnvFilePath();
