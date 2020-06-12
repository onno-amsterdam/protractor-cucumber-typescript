export class Logger {    
    private static log(message: string) {
        console.log(`    ${message};`);
    };

    static info(message: string) {
        Logger.log(`[INFO] ${message}`);
    }

    static result(message: string) {
        Logger.log(`[RESULT] ${message}`);
    }

    static initiate(message: string) {
        Logger.log(`[INITIATE] ${message}`);
    }

    static tearDown(message: string) {
        Logger.log(`[TEARDOWN] ${message}`);
    }
}