const router = require("express").Router();
const Service = require("../../model/admin/services");

router.post("/add-service", async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    return res.send({ success: true, service: newService });
  } catch (err) {
    return res.send({ success: false, msg: `error:${err.message}` });
  }
});

module.exports = router;
