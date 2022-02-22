import { DomainError } from '../../../../shared/domain/domain-error';
import { ValueObject } from '../../value-object';

export class Name extends ValueObject<string> {
  constructor(name: string) {
    super(name);
    this.validate();
  }

  validate(): void {
    if (this.value.length < 3) {
      throw new DomainError('Name is invalid');
    }

    const hasNumbers = /\d/;
    if (hasNumbers.test(this.value)) {
      throw new DomainError('Name must not contain numbers');
    }
  }
}
