import { createParamDecorator } from '@nestjs/common';

export const Browser = createParamDecorator((data, req) => {
  return req.browser;
});