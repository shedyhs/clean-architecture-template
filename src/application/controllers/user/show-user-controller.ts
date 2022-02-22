import { HttpRequest, HttpResponse } from '../../../shared/interfaces/http';
import { IShowUser } from '../../usecases/user/interfaces/show-user-interface';
import { BaseController } from '../base-controller';

export class ShowUserController extends BaseController {
  constructor(private readonly showUserUseCase: IShowUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.body;
    console.log('ShowUserController - id :', id);
    const show = await this.showUserUseCase.execute(id);
    return { data: show, statusCode: 200 };
  }
}
