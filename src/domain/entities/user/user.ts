import { Entity } from '../entity';
import { Email } from './value-objects/email';
import { Name } from './value-objects/name';
import { Password } from './value-objects/password';

type UserProps = {
  id?: string;
  email: string;
  name: string;
  password: string;
};

export class User extends Entity {
  private _email: Email;
  private _name: Name;
  private _password: Password;

  constructor(props: UserProps) {
    super(props.id);
    this._email = new Email(props.email);
    this._name = new Name(props.name);
    this._password = new Password(props.password);
  }

  get email(): string {
    return this._email.value;
  }

  set email(email: string) {
    this._email = new Email(email);
  }

  get name(): string {
    return this._name.value;
  }

  set name(name: string) {
    this._name = new Name(name);
  }

  get password(): string {
    return this._password.value;
  }

  set password(password: string) {
    this._password = new Password(password);
  }
}
