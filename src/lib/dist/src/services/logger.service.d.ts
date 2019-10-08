import { JoyrideOptionsService } from './joyride-options.service';
export declare class LoggerService {
    protected readonly optionService: JoyrideOptionsService;
    constructor(optionService: JoyrideOptionsService);
    debug(message?: string, data?: any): void;
    info(message?: string, data?: any): void;
    warn(message?: string, data?: any): void;
    error(message?: string, data?: any): void;
}
