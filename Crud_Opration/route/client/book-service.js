const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const ServiceBooking = require("../../model/admin/service-booking");

//customer service booking
router.post("/service-booking", authMiddleware, async (req, res) => {
  try {
    const newBooking = await ServiceBooking.create({
      ...req,
      body,
      serviceId: req.body.serviceId,
      user: req.userId,
    });
    return res.send({
      success: true,
      msg: "Your booking has confirmed",
      newBooking,
    });
  } catch (err) {
    return res.send({ success: false, msg: `error:${err.message}` });
  }
});

//individual user bookings history
router.post("/user-bookings", authMiddleware, async (req, res) => {
  try {
    const allBookings = await serviceBooking.find({ userId: req.userId });
    return res.send({ success: true, list: allBookings });
  } catch (err) {
    return res.send({ success: false, msg: `error:${err.message}` });
  }
});

// ADMIN
router.post("/all-bookings", async (req, res) => {
  try {
    const allBookings = await ServiceBooking.find({});
    return res.send({ success: true, list: allBookings });
  } catch (err) {
    return res.send({ success: false, msg: `error:${err.message}` });
  }
});

module.exports = router;
