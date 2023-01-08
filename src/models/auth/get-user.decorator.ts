import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from './entities/user.entity';

export const GetUser = createParamDecorator(
  (_, ctx: ExecutionContext): Users => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
