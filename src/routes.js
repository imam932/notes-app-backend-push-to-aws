/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-expressions */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line semi
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
