const express = require("express");
const router = express.Router();
const {
  assignOrderToDeliveryAgent,
  updateDeliveryStatus,
} = require("../controllers/DeliveryController");
const authenticateToken = require("../authMiddleware");

// Assign Order to Delivery Agent
router.post(
  "/assign-order-for-delivery",
  authenticateToken,
  assignOrderToDeliveryAgent
);

// Update delivery status
router.put("/orders/update-delivery-status", updateDeliveryStatus);

module.exports = router;
