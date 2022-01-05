export interface CalculatedIndicators {
    name: string;
    description: string;
    enabled: boolean;
    operator?: Operators;
    calculatedField: CalculatedField;
}


export interface CalculatedField {
    operator: Operators;
    field: string;
    operand: Operand;
    type: 'profile'| 'activityIndicator' | 'calculatedIndicator' | 'entity' | 'group';
    operands: Array<CalculatedField>;
}

export interface Operand {
    type: 'number'| 'double'| 'long' | 'integer';
    value: number;
}

export enum Operators {
    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Divide = 'divide'
}
