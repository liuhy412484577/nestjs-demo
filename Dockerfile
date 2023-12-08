# # 设置基础镜像源
# FROM node:latest

# #设置工作目录
# WORKDIR /usr/src/app

# # copy package.json package-lock.json
# COPY package*.json ./

# # 安装依赖
# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD [ "npm", "run", "start:prod" ]

FROM node:latest

# 设置时区
ENV TZ=Asia/Shanghai \
  DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata && rm -rf /var/lib/apt/lists/*

# 创建工作目录
RUN mkdir -p /app

# 指定工作目录
WORKDIR /app

# 复制当前代码到/app工作目录
COPY . ./

# npm 源，选用国内镜像源以提高下载速度
RUN npm config set registry https://registry.npm.taobao.org/

# npm 安装依赖
COPY package.json /app/package.json
COPY .env /app/.env
RUN rm -rf /app/package-lock.json
RUN cd /app && rm -rf /app/node_modules &&  npm install

RUN ls
# 打包
RUN cd /app && rm -rf /app/dist &&  npm run build

# 启动服务
# "start:prod": "cross-env NODE_ENV=production node ./dist/src/main.js",
CMD npm run start:dev

EXPOSE 3000