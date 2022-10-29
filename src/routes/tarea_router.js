const { Router } = require("express");
const controllerTarea =  require("../controller/tarea_controller")
const router = Router();


router.get('/',controllerTarea.getTarea);



module.exports = router;