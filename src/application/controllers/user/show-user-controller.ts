import { IShowUser } from '@/application/usecases/user/interfaces/show-user-interface';
import { RequiredFieldValidator } from '@/application/validations/required-field-validator';
import { IValidator } from '@/application/validations/validator-interface';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { BaseController } from '../base-controller';

export class ShowUserController extends BaseController {
  constructor(private readonly showUserUseCase: IShowUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;
    const response = await this.showUserUseCase.execute(id);
    return { data: response, statusCode: 200 };
  }

  override buildValidators(request: HttpRequest): IValidator[] {
    return [new RequiredFieldValidator(request.params.id, 'userId')];
  }
}
