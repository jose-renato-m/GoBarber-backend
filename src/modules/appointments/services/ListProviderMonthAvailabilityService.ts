import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  user_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ user_id, year, month }: IRequest): Promise<IResponse> {
    const appointments = this.appointmentsRepository.findByDate();

    return [{ day: 1, available: false }];
  }
}

export default ListProviderMonthAvailabilityService;
