import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const notesRouters = Router();

notesRouters.get('/notes', getAllNotes);

notesRouters.get('/notes/:noteId', getNoteById);

notesRouters.post('/notes', createNote);

notesRouters.delete('/notes/:noteId', deleteNote);

notesRouters.patch('/notes/:noteId', updateNote);

export default notesRouters;
