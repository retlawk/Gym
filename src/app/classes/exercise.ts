export class Exercise {
    constructor(name, exerType, nrOfSets) {
        this.name = name;
        this.exerType = exerType;
        this.nrOfSets = nrOfSets;
        this.checked = false;   
    }

    name: string;
    exerType: string
    nrOfSets: number;
    checked: boolean;
}
