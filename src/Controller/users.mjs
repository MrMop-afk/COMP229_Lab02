import createError from 'http-errors';
import Contact from '../Model/users.mjs';

export const getAll = async (_req, res, next) => {
  try { res.json(await Contact.find()); }
  catch (e) { next(e); }
};

export const getById = async (req, res, next) => {
  try {
    const doc = await Contact.findById(req.params.id);
    if (!doc) throw createError(404, 'Contact not found');
    res.json(doc);
  } catch (e) { next(e); }
};

export const create = async (req, res, next) => {
  try {
    const created = await Contact.create(req.body);
    res.status(201).json(created);
  } catch (e) { next(e); }
};

export const update = async (req, res, next) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) throw createError(404, 'Contact not found');
    res.json(updated);
  } catch (e) { next(e); }
};

export const removeOne = async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) throw createError(404, 'Contact not found');
    res.json({ message: 'Contact deleted' });
  } catch (e) { next(e); }
};

export const removeAll = async (_req, res, next) => {
  try {
    await Contact.deleteMany();
    res.json({ message: 'All contacts deleted' });
  } catch (e) { next(e); }
};