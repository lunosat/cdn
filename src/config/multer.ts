import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs-extra';

const uploadDir = path.join(__dirname, '../../uploads');

// Ensure upload directory exists
fs.ensureDirSync(uploadDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = uuidv4();
        const ext = path.extname(file.originalname);
        cb(null, `${uniqueName}${ext}`);
    },
});

export const upload = multer({ storage });
