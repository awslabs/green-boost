import { cloneElement, ReactElement } from "react";
import type { QueueNotification } from "../context/NotificationsContext.jsx";
import { TransitionGroup } from "react-transition-group";
import { Portal } from "../Portal.jsx";
import { NotificationContainer } from "./NotificationContainer.jsx";

interface NotificationsProps {
  notifications: QueueNotification[];
  removeNotification: (id: string) => void;
}

export function Notifications(props: NotificationsProps): ReactElement {
  const { notifications, removeNotification } = props;
  return (
    <Portal>
      <TransitionGroup childFactory={(child) => cloneElement(child)}>
        {notifications.map((n, i) => (
          <NotificationContainer
            key={n.id}
            index={i}
            notification={n}
            removeNotification={removeNotification}
          />
        ))}
      </TransitionGroup>
    </Portal>
  );
}
