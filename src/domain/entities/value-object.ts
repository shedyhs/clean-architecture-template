export abstract class ValueObject<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  protected setValue(value: T): void {
    this._value = value;
  }
}
