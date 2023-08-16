import { Router } from 'express';
import { addLego, addLegoPage, allLegos, deleteLego, editLego, editLegoPage, oneLego } from '../controllers/legoController';

const router = Router();

router.get('/', allLegos);

router.get('/add', addLegoPage);

router.post('/add', addLego);

router.get('/edit/:id', editLegoPage);

router.post('/edit/:id', editLego);

router.post('/delete/:id', deleteLego);

router.get('/:id', oneLego);

export default router;