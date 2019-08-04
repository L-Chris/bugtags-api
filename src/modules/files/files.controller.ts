import { Controller, Post, Body } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post()
    async save(@Body() body) {
        const res = await this.filesService.save(body)
        return res.data
    }
}