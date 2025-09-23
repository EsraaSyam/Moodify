export class MoodResponse {
    id: number;
    name: string;


    constructor(mood: any) {
        this.id = mood.id;
        this.name = mood.name;
    }
}