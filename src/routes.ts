import { Router, Request, Response } from 'express';
import { upload } from './config/multer';
import path from 'path';
import fs from 'fs-extra';

const router = Router();

// Upload Route
router.post('/upload', upload.single('file'), (req: Request, res: Response): void => {
    if (!req.file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
    }

    // Construct the view URL
    const protocol = req.protocol;
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
});

// Stream/View File Route
router.get('/files/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);

    if (!fs.existsSync(filePath)) {
        res.status(404).json({ error: 'File not found' });
        return;
    }

    res.sendFile(filePath);
});

export default router;
