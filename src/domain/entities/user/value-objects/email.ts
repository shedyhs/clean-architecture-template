import validator from 'validator';
import { DomainError } from '../../../../shared/domain/domain-error';
import { ValueObject } from '../../value-object';

export class Email extends ValueObject<string> {
  constructor(email: string) {
    super(email);
    this.validate();
  }

  validate(): void {
    if (!validator.isEmail(this.value)) {
      throw new DomainError('Email is invalid');
    }
  }
}
