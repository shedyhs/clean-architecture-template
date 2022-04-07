import { IUpdateUser } from '@/application/usecases/user/interfaces/update-user-interface';
import { RequiredFieldValidator } from '@/application/validations/required-field-validator';
import { IValidator } from '@/application/validations/validator-interface';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { BaseController } from '../base-controller';

export class UpdateUserController extends BaseController {
  constructor(private readonly updateUserUseCase: IUpdateUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;
    const { email, name, password } = request.body;
    const response = await this.updateUserUseCase.execute(id, {
      email,
      name,
      password,
    });
    return { data: response, statusCode: 200 };
  }

  override buildValidators(request: HttpRequest): IValidator[] {
    return [new RequiredFieldValidator(request.params.id, 'userId')];
  }
}
