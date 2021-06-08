const multer = require('multer');
const path = require('path');

module.exports = () => {
  const storage = multer.diskStorage({
    destination: (_request, _file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (request, _file, callback) => callback(null, `${request.params.id}.jpeg`),
  });
  const upload = multer({ storage });
  return upload.single('image');
};
