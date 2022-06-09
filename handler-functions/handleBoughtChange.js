async function handleBoughtChange(req, res, client) {
  const { bought, id } = req.body;

  client.query(`UPDATE shopping_list SET bought = $1 WHERE id = $2`, [bought, id]);
  res.status(200).json({ response: "Bought changed!" });
}

module.exports = { handleBoughtChange };
