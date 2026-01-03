import { Router } from 'express';
import { upload } from '../config/multer';
import { UploadController } from '../controllers/UploadController';

const router = Router();

// Upload Route
router.post('/upload', upload.single('file'), UploadController.uploadFile);

// Stream/View File Route
router.get('/files/:filename', UploadController.getFile);

export default router;
