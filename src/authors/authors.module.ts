import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [PrismaModule],
})
export class AuthorsModule {}
