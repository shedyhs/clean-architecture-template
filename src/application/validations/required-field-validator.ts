import { IValidator } from './validator-interface';

export class RequiredFieldValidator implements IValidator {
  constructor(
    private readonly value: unknown,
    private readonly fieldName: string,
  ) {}

  validate(): Error | undefined {
    if (this.value === undefined || this.value === null || this.value === '') {
      return new Error(`${this.fieldName} is required`);
    }
    return undefined;
  }
}
