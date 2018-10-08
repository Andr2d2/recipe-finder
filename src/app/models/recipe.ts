export class Recipe {
    
    id: number;
    name: string;
    category: string;
    area: string;
    instructions: string;
    thumbnail: string;

    constructor() { }
    
    public parseFromJson(json: any) {
        const instance = new Recipe();

        instance.id = json.idMeal;
        instance.name = json.strMeal;
        instance.category = json.strCategory;
        instance.area = json.strArea;
        instance.instructions = json.strInstructions;
        instance.thumbnail = json.strMealThumb;
        
        return instance;
    }
}
