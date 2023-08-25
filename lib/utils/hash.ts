import * as crypto from 'crypto';

const secret = process.env.SECRET || 'MY_SECRET';

export class HashService {
  static md5(val: string): string {
    return crypto.createHmac('md5', secret).update(val).digest('hex');
  }

  static sha256(val: string): string {
    return crypto.createHmac('sha256', secret).update(val).digest('hex');
  }
}
