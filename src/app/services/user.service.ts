import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'smith@james.com',
            drinkPreference: 'café',
            hobbies: [
                'coder',
                'peindre'
            ]
        }
    ];
    userSubject = new Subject<User[]>();
    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}