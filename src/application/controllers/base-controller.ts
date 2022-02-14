/* eslint-disable no-console */
import { ApplicationErrors } from '@/shared/application/application-error';
import { DomainError } from '@/shared/domain/domain-error';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { IValidator } from '../validations/validator-interface';

export abstract class BaseController {
  abstract perform(request: HttpRequest): Promise<HttpResponse>;

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validate(request);
      if (error) {
        return error;
      }
      const response = await this.perform(request);
      return response;
    } catch (error) {
      const err = error as Error;
      switch (err.constructor) {
        case DomainError:
          return { data: { error: err.message }, statusCode: 400 };
        case ApplicationErrors.UnauthorizedError:
          return { data: { error: err.message }, statusCode: 401 };
        case ApplicationErrors.ForbiddenError:
          return { data: { error: err.message }, statusCode: 403 };
        case ApplicationErrors.NotFoundError:
          return { data: { error: err.message }, statusCode: 404 };
        case ApplicationErrors.ConflictError:
          return { data: { error: err.message }, statusCode: 409 };
        default:
          console.log('Err', err);
          return { data: { error: 'Internal Server Error' }, statusCode: 500 };
      }
    }
  }

  buildValidators(request: HttpRequest): IValidator[] {
    return [];
  }

  private validate(request: HttpRequest): HttpResponse | undefined {
    const validators = this.buildValidators(request);
    const errors: string[] = [];
    validators.forEach((validator) => {
      const error = validator.validate();
      if (error) {
        errors.push(error.message);
      }
    });
    if (errors.length > 0) {
      return { data: { errors }, statusCode: 400 };
    }
    return undefined;
  }
}
