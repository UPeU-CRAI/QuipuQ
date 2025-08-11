import { AuthModule } from "./modules/auth/auth.module";
import { QueuesModule } from "./modules/queues/queues.module";
import { OperatorsModule } from "./modules/operators/operators.module";
import { MonitorsModule } from "./modules/monitors/monitors.module";
import { KioskModule } from "./modules/kiosk/kiosk.module";
import { StatsModule } from "./modules/stats/stats.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { ReniecModule } from "./modules/reniec/reniec.module";

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, QueuesModule, OperatorsModule, MonitorsModule, KioskModule, StatsModule, NotificationsModule, ReniecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
