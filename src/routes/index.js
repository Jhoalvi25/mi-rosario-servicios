const { Router } = require("express");
const { Deserts } = require("../Utils/cardDeserts");
const {login, register} = require("../controllers/auth")
const {sendOrder} = require("../controllers/order")
const {postDessert, getDessertName} = require("../controllers/dessert")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/api/desserts", async (req, res) => {
  try {
    return res.status(200).send(Deserts);
  } catch (error) {
    return { error: error.message };
  }
});


router.post('/api/register', register);
router.post('/api/login', login);
router.post('/api/order', sendOrder);
router.post('/api/post-dessert', postDessert);

module.exports = router;
