export class World {
    private static experienceName: string = 'initialExperienceName';
    public static experienceCreated: boolean = false;

    static setRandomExperienceName() {
        return World.experienceName = 'random' + Math.floor(Math.random() * 10000);
    };

    static setExperienceName(name: string) {
        return World.experienceName = name;
    };

    static getExperienceName() {
        return World.experienceName;
    }
};