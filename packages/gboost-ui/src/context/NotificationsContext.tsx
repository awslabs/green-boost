import {
  createContext,
  type ReactNode,
  type ReactElement,
  useContext,
  useCallback,
} from "react";
import { type NotificationProps } from "../Notifications/Notification.js";
import { useQueue, randomId } from "@mantine/hooks";
import { Notifications } from "../Notifications/Notifications.js";

/**
 * @internal
 */
export interface ContextNotification
  extends Omit<NotificationProps, "removeNotification"> {
  /**
   * @default 5000
   */
  timeout?: number;
}
/**
 * @internal
 */
export interface QueueNotification extends ContextNotification {
  id: string;
}
interface INotificationsContext {
  notify: (notification: ContextNotification) => void;
  clearNotifications: () => void;
}
const NotificationsContext = createContext<INotificationsContext>({
  notify: () => {
    return; // just for initialization
  },
  clearNotifications: () => {
    return; // just for initialization
  },
});

interface NotificationsProviderProps {
  children: ReactNode;
}

/**
 * Notification Provider that allows use of useNotifications hook to create
 * notifications
 * @deprecated
 */
export function NotificationsProvider(
  props: NotificationsProviderProps
): ReactElement {
  const {
    add,
    cleanQueue,
    state: notifications,
    update,
  } = useQueue<QueueNotification>({
    initialValues: [],
    limit: 5,
  });
  const removeNotification = useCallback(
    (id: string) => update((state) => state.filter((s) => s.id !== id)),
    [update]
  );
  const contextValue: INotificationsContext = {
    notify: (notification: ContextNotification) => {
      add({ ...notification, id: randomId() });
    },
    clearNotifications: () => cleanQueue(),
  };

  return (
    <NotificationsContext.Provider value={contextValue}>
      {props.children}
      <Notifications
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </NotificationsContext.Provider>
  );
}

/**
 * Hook to create notifications
 * @deprecated
 */
export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
}
