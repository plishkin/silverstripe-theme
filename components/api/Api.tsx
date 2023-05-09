import IWsResponse from "../models/IWsResponse";

interface IWsMessage {
    authorization: string,
    handler: string,
    action: string,
    data: {},
}

const buildMessage = (action: string, data: {}) => {
    const path = action.split('/');
    return JSON.stringify({
        handler: path[0],
        action: path[1],
        data:{data}
    });
}

const host = 'ws://localhost:8082';
let socket: WebSocket;

const Api = {
    open: (action: string, data: {}, callback: (data: any) => void) => {
        socket = new WebSocket(host);
        const message = buildMessage(action, data);
        socket.onopen = e => socket.send(message);
        socket.onmessage = e => {
            const resp = JSON.parse(e.data) as IWsResponse;
            callback(resp);
        }
    }
}

export default Api;




