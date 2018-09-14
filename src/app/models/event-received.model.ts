export class EventReceived {
    public type: string;
    public status: boolean;

    constructor()

    constructor(type?: string, status?: boolean) {
        this.type = type;
        this.status = status;
    }
}
