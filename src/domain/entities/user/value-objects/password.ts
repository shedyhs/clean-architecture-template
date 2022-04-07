import bcrypt from 'bcrypt';
import { DomainError } from '@/shared/domain/domain-error';
import { ValueObject } from '../../value-object';

export class Password extends ValueObject<string> {
  private salts = 8;
  private minPasswordLength = 8;

  constructor(password: string, hashed = false) {
    super(password);
    this.validate();
    if (!hashed) {
      this.setValue(this.hashPassword(password));
    }
  }

  validate(): void {
    if (this.value.length < this.minPasswordLength) {
      throw new DomainError(
        `Password must be at least ${this.minPasswordLength} characters long`,
      );
    }
  }
  
  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, this.salts);
  }

  compare(password: string): boolean {
    return bcrypt.compareSync(password, this.value);
  }
}
