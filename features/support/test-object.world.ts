import { Logger } from './logger';
Logger.info('TestObject initiated!');

export class TestObject {
    private static objectName: string = 'initialExperienceName';
    public static created: boolean = false;

    static setRandomName() {
        return TestObject.objectName = 'random' + Math.floor(Math.random() * 10000);
    };

    static setName(name: string) {
        Logger.info(`test-object name set to: ${name}`);
        return TestObject.objectName = name;
    };

    static getName() {
        return TestObject.objectName;
    }

    static setTestObjectCreatedTrue() {
        return TestObject.created = true;
    }
};