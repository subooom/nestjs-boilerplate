import { Module } from '@nestjs/common';
import { AuthModule } from './models/auth/auth.module';
import { MysqlDatabaseProviderModule } from './providers/database/mysql/provider.module';
import { ConfigProviderModule } from './providers/config/provider.module';
// import { ChatGateway } from './chat.gateway'

@Module({
  imports: [ConfigProviderModule, MysqlDatabaseProviderModule, AuthModule],

  //  Uncomment the ChatGateway provider for websocket boilerpate
  // requirements for websockets:
  // "@nestjs/platform-socket.io": "^9.2.1",
  // "@nestjs/websockets": "^9.2.1",
  //

  // providers: [ChatGateway]
})
export class AppModule {}
