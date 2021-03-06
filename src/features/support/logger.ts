/**
 * Custom logger that allows for the logging of information in the console while running the tests.
 */

export class Logger {    

    private static log(message: string) {
        console.log(`[${Logger.currentTime()}] ${message};`);
    }
    
    // returns the current time in HH:MM:SS
    static currentTime(): string {
        const date = new Date();
        const time = `${date.getHours().toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`;
        
        return time;
    }

    /**
     * Logger logs message in console with the following line of code: 
     * console.log(`[${Logger.currentTime()}] ${message};`);
     * 
     * @param message text to log in the console
     */
    static info(message: string) {
        Logger.log(`[INFO] ${message}`);
    }

    static result(message: string) {
        Logger.log(`[RESULT] ${message}`);
    }

    static error(message: string) {
        Logger.log(`[ERROR] ${message}`);
    }

    static exception(message: string) {
        Logger.log(`[EXCEPTION] ${message}`);
    }

    static initiate(message: string) {
        Logger.log(`[INITIATE] ${message}`);
    }

    static tearDown(message: string) {
        Logger.log(`[TEARDOWN] ${message}`);
    }
};