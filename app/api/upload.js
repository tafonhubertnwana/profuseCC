import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public/uploads");

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Error: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));

apiRoute.post((req, res) => {
  res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
