import { RequestHandler } from "express";
import { Lego } from "../models/lego";

export const defaultLego: RequestHandler = (req, res, next) => {
    res.redirect('/legos');
}

export const allLegos: RequestHandler = async (req, res, next) => {
    let legoList: Lego[] = await Lego.findAll();
    res.render('all-legos', { legoList });
}

export const oneLego: RequestHandler = async (req, res, next) => {
    let legoId = req.params.id;
    let legoItem: Lego | null = await Lego.findByPk(legoId);

    if (legoItem) {
        res.render('lego-detail', { foundLego: legoItem });
    }
    else {
        res.status(404).render('error', { message: 'set not found' });
    }
}

export const addLegoPage: RequestHandler = (req, res, next) => {
    res.render('add-lego');
}

export const addLego: RequestHandler = async (req, res, next) => {
    let newLego: Lego = req.body;
    await Lego.create(newLego);
    res.redirect('/legos');
}

export const editLegoPage: RequestHandler = async (req, res, next) => {
    let legoId = req.params.id;
    let existingLegoItem: Lego | null = await Lego.findOne({
        where: { id: legoId }
    });

    if (existingLegoItem) {
        res.render('edit-lego', { foundLego: existingLegoItem });
    }
    else {
        res.status(404).render('error', { message: 'set not found' });
    }
}

export const editLego: RequestHandler = async (req, res, next) => {
    let legoId = req.params.id;
    let updatedLego: Lego = req.body;

    let [updated] = await Lego.update(updatedLego, {
        where: { id: legoId }
    });

    if (updated === 1) {
        res.redirect('/legos');
    }
    else {
        res.render('error', { message: 'Set could not be updated' });
    }
}

export const deleteLego: RequestHandler = async (req, res, next) => {
    let legoId = req.params.id;

    let deleted = await Lego.destroy({
        where: { id: legoId }
    });

    if (deleted) {
        res.redirect('/legos')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find set' });
    }
}