import express from "express";
import {
    getShoesTransaction,
    getShoesTransactionById,
    createShoesTransaction,
    updateShoesTransaction,
    deleteShoesTransaction
} from "../controllers/ShoesTransactionController.js";

const router = express.Router();

router.get('/shoes-transaction', getShoesTransaction);
router.get('/shoes-transaction/:id', getShoesTransactionById);
router.post('/shoes-transaction', createShoesTransaction);
router.put('/shoes-transaction/:id', updateShoesTransaction);
router.delete('/shoes-transaction/:id', deleteShoesTransaction);

export default router;