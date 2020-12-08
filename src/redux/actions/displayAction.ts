export interface ISetDisplayAction {
    readonly type: 'SET_DISPLAY';
    display: any,
    payload: any;
}

export type DisplayActions =
| ISetDisplayAction