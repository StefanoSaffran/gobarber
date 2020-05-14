import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '122312313',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('122312313');
  });

  it('should not be able to create a two appointment on the same time', async () => {
    const appointmentDate = new Date();

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '122312313',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '122312313',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
