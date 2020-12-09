export interface ISetDisplayAction {
    readonly type: 'SET_DISPLAY';
    payload: any;
}

export type DisplayActions =
| ISetDisplayAction