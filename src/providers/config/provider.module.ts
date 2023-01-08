import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from 'src/config.schema';

/**
 * Import and provide base typeorm (mysql) related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
    }),
  ],
})
export class ConfigProviderModule {}
