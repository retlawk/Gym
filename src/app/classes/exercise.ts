export class Exercise {
    constructor(name, exerType, nrOfSets) {
        this.name = name;
        this.exerType = exerType;
        this.nrOfSets = nrOfSets;
        this.checked = false;   
    }

    name: string;
    exerType: ExerType
    nrOfSets: number;
    checked: boolean;
}

export enum ExerType {
    Strenght,
    Mass,
    Endurance,
    SuperSet,
}
