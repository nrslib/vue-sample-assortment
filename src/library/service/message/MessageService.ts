import {MessageType} from "@/library/service/message/MessageType";
import {Message} from "@/library/service/message/Message";

export class MessageService {
    private _messages: Message[] = [];
    private _reserved: Message[] = [];

    public get hasAnyMessage(): boolean {
        return this._messages.length > 0;
    }

    public get headMessage(): string {
        if (this.hasAnyMessage) {
            return this._messages.map((x) => x.message)[0];
        } else {
            return '';
        }
    }

    public get tailMessages(): string[] {
        return this._messages.filter((u, i) => i >= 1).map((x) => x.message);
    }

    public addMessage(type: MessageType, msg: string) {
        const message = new Message(type, msg);
        this._messages.push(message);
    }

    public clearMessage() {
        this._messages = [];
        this._reserved = [];
    }

    public reserve(type: MessageType, msg: string) {
        const message = new Message(type, msg);
        this._reserved.push(message);
    }

    public next() {
        this._messages = this._reserved;
        this._reserved = [];
    }
}
