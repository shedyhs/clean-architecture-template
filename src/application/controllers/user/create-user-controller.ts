import { ICreateUser } from '@/application/usecases/user/interfaces/create-user-interface';
import { RequiredFieldValidator } from '@/application/validations/required-field-validator';
import { IValidator } from '@/application/validations/validator-interface';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { BaseController } from '../base-controller';

export class CreateUserController extends BaseController {
  constructor(private readonly createUserUseCase: ICreateUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const response = await this.createUserUseCase.execute(request.body);
    return { data: response, statusCode: 201 };
  }

  override buildValidators(request: HttpRequest): IValidator[] {
    return [
      new RequiredFieldValidator(request.body.email, 'email'),
      new RequiredFieldValidator(request.body.name, 'name'),
      new RequiredFieldValidator(request.body.password, 'password'),
    ];
  }
}
