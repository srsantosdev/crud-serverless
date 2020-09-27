import { Handler } from 'aws-lambda';

import 'source-map-support/register';

export const hello: Handler = async (_event, _context) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello World',
  }),
});
