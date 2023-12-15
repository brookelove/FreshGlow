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

router.post("/", async (req, res) => {
  try {
    const { orderItems } = req.body;

    const totalPrice = orderItems
      .reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0)
      .toFixed(2);

    console.log(totalPrice);

    const order = await Order.create({
      userId: req.session.userId,
      total_price: totalPrice,
    });

    orderItems.forEach(async (item) => {
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
      });
    });

    // mapping through each orderItems then spread it it then and grabing each orderItems id
    const productsInfo = orderItems.map((item) => ({
      ...item,
      orderId: order.id,
    }));

    await Product.bulkCreate(productsInfo);

    res.status(200).json(order);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
