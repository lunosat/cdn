import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

export class UploadController {
    static uploadFile(req: Request, res: Response): void {
        if (!req.file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }

        // Construct the view URL
        // Forcing HTTPS as requested
        const protocol = 'https';
        const host = req.get('host');
        const filename = req.file.filename;
        const url = `${protocol}://${host}/files/${filename}`;

        res.json({
            message: 'File uploaded successfully',
            filename: filename,
            originalName: req.file.originalname,
            url: url,
            size: req.file.size,
            mimetype: req.file.mimetype,
        });
    }

    static getFile(req: Request, res: Response): void {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, '../../uploads', filename);

        if (!fs.existsSync(filePath)) {
            res.status(404).json({ error: 'File not found' });
            return;
        }

        res.sendFile(filePath);
    }
}
