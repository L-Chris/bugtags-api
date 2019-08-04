import { Injectable, HttpService } from "@nestjs/common";

@Injectable()
export class FilesService {
    constructor(private httpService: HttpService) {}

    save(body): Promise<any> {
        return this.httpService.post('/files/', body).toPromise()
    }
}