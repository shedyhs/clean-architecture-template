import { IDeleteUser } from '@/application/usecases/user/interfaces/delete-user-interface';
import { RequiredFieldValidator } from '@/application/validations/required-field-validator';
import { IValidator } from '@/application/validations/validator-interface';
import { HttpRequest, HttpResponse } from '@/shared/interfaces/http';
import { BaseController } from '../base-controller';

export class DeleteUserController extends BaseController {
  constructor(private readonly deleteUserUseCase: IDeleteUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;
    await this.deleteUserUseCase.execute(id);
    return { data: undefined, statusCode: 204 };
  }

  override buildValidators(request: HttpRequest): IValidator[] {
    return [new RequiredFieldValidator(request.params.id, 'userId')];
  }
}
