const { Router } = require('express');

const router = Router();

const Controller = require('../controllers/user.controller')

router.post('/save-devis', Controller.devisGenerateur);
router.post('/save-facture', Controller.factureGenerateur);
router.post('/save-contrat', Controller.contratGenerateur);




module.exports = router;