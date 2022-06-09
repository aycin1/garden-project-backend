async function handleAddShopping(req, res, client) {
  const { plantInfoID, gardenID, quantity } = req.body;

  client.query(
    `INSERT INTO shopping_list (plant_info_id, garden_id, quantity)
  VALUES ($1, $2, $3)`,
    [plantInfoID, gardenID, quantity]
  );
  res.status(200).json({ response: "Added" });
}

module.exports = { handleAddShopping };
