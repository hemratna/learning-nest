import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [FacilityModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
