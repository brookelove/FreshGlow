const router = require("express").Router();
const { Order, Product, User } = require("../../models");

// The `/api/orders` endpoint

//To DO Cant get orders with out AUTH
router.get("/", (req, res) => {
  Order.findAll({
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
      {
        model: User,
        attributes: ["id"],
      },
    ],
  })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
      {
        model: User,
        attributes: ["id"],
      },
    ],
  })
    .then((order) => res.json(order))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  Order.create(req.body)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
