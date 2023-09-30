import { Injectable } from "@angular/core";

@Injectable() // it is recommended that we write Injectable() in all services
export class LoggerService {

    LogMessage(name: string, status: string) {
        console.log('A new user with username "' + name + '" with status ' + status + ' has been added.');
    }

}