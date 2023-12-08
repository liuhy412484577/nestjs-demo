import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    userProfile() {
        return {
            name: 'eric',
            age: 18,
        };
    }
}
