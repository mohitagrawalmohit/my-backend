// backend/index.js

import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import productRoutes from './routes/products.js';
import categoryRoutes from './routes/categories.js';
import leadRoutes from './routes/leads.js';
import specificationsRoute from "./routes/specifications.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // frontend origin
  credentials: true,
}));
app.use(express.json());

// Serve static files (image uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/leads', leadRoutes);
app.use("/api/specifications", specificationsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at: http://localhost:${PORT}`);
});
