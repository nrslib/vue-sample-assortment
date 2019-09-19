import {MessageType} from "@/library/service/message/MessageType";

export class Message {
    public constructor(
        public readonly type: MessageType,
        public readonly message: string)
    {}
}
