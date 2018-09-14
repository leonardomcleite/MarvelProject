export type NotificationPos = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'Center' | 'topLeft' | 'topCenter' | 'topRight';

export class NotificationButton {
    label: string;
    action: () => void;
    closeNotification?: boolean;
}

export class NotificationMessage {
    time?: number;
    message: string;
    title?: string;
    icon?: string;
    position?: NotificationPos;
    timeout?: boolean | number;
    keepOnRouteChange?: boolean | number;
    onDismiss?: (automatic: boolean) => void;
    buttons?: NotificationButton[];
}
