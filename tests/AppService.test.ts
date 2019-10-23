import { AppService } from '../src/services/AppService';

test('exists', () => {
  const appService = new AppService();
  expect(AppService).toBeTruthy();
  expect(appService).toBeTruthy();
});
