import { Browser } from "puppeteer";

declare global {
    namespace Express {
        export interface Request {
            user: object;
            browser: Browser;
        }
    }
}
