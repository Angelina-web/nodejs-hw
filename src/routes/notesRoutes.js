import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
  getAllNotesSchema,
} from '../validations/notesValidation.js';

const notesRouters = Router();

notesRouters.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

notesRouters.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

notesRouters.post('/notes', celebrate(createNoteSchema), createNote);

notesRouters.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

notesRouters.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRouters;
