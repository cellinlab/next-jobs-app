import { notificationsStore, Notification } from '../notifications';

const notification = {
  id: '1',
  type: 'info',
  title: 'Test',
  message: 'Test message',
} as Notification;

describe('Notifications store', () => {
  it('should show and dismiss notification', () => {
    expect(notificationsStore.getState().notifications.length)
      .toBe(0);

    notificationsStore.getState().showNotification(notification);

    expect(notificationsStore.getState().notifications)
      .toContainEqual(notification);

    notificationsStore.getState().dismissNotification(notification.id);

    expect(notificationsStore.getState().notifications)
      .not.toContainEqual(notification);
  })
});
