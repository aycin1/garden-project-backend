async function handleQuantityChange(req, res) {
  const { quantity, id } = req.body;

  client.query(`UPDATE shopping_list SET quantity = $1 WHERE id = $2`, [quantity, id]);
  res.status(200).json({ response: "Quantity changed!" });
}

module.exports = { handleQuantityChange };
