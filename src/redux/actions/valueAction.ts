export interface ISetValueAction {
    readonly type: 'GET_VALUE';
    year_value: any
}

export type ValueActions =
| ISetValueAction