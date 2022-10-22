import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//设置这个后，将我们不需要的属性给自动剥离和删除
    forbidNonWhitelisted:true,//开启后，存在不在白名单里面的属性会停止处理请求，并且返回错误信息
    transform:true,//全局开启将dto约束的参数转为它的实例
  }))
  await app.listen(3000);
}
bootstrap();
