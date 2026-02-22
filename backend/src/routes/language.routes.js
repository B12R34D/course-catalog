const router = require('express').Router();
const languageController = require('../controllers/language.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');

router.use(authMiddleware, adminMiddleware);

router.get('/', languageController.getAllLanguages);
router.get('/:id', languageController.getLanguageById);
router.post('/', languageController.createLanguage);
router.put('/:id', languageController.updateLanguage);
router.delete('/:id', languageController.deleteLanguage);

module.exports = router;