export class Exercise {
    constructor(name, exerType, nrOfSets) {
        this.name = name;
        this.exerType = exerType;
        this.nrOfSets = nrOfSets;
        this.checked = false;
        this.url = "https://www.google.com/search?q=Fitness+" + this.name.split(' ').join('+');
    }

    name: string;
    exerType: string
    nrOfSets: number;
    checked: boolean;
    url: string;
}
