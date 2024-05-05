import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UserService],
  imports: [PrismaModule],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
