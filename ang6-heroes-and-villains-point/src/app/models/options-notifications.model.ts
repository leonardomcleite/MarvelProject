export type TypesNotification = 'success' |'warning' | 'error' | 'information';

export class OptionsNotification {
    message: string;
    type: TypesNotification;
    action: string;
    showAction: boolean;
    verticalPosition: 'top' | 'bottom';
    horizontalPosition: 'start' | 'center' | 'end' | 'left' | 'right';
    time: number;

    /**
     * Opções para notificação
     * @param message - Mensagem a ser mostrada, aceita tanto uma string simples, como um código HTML lembrando que deve estar entre duas crases
     * @param type - tipo de mensagem, sucesso, alerta, erro, informação
     * @param action - botão de ação, aceita tanto uma string simples, como um código HTML lembrando que deve estar entre duas crases
     * @param verticalPosition - posicao vertical da notificaçao: parte superior ou inferior da tela
     * @param horizontalPosition - posicao horizontal da notificaçao: começo, meio ou fim
    */
    constructor(message: string, type: any, action: string, showAction: boolean, verticalPosition: any, horizontalPosition: any, time: number) {
        this.message = message;
        this.type = type;
        this.action = action;
        this.showAction = showAction;
        this.verticalPosition = verticalPosition;
        this.horizontalPosition = horizontalPosition;
        this.time = time;
    }
}
