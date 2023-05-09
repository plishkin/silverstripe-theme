import IWsResponse from "./IWsResponse";

export default interface IWsTimerResponse extends IWsResponse {
    countdown: number,
}
