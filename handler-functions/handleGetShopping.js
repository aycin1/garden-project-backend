async function handleGetShopping(req, res, client) {
  const response = (await client.query(`SELECT * FROM shopping_list ORDER BY plant_info_id`)).rows;

  res.status(200).json(response);
}

module.exports = { handleGetShopping };
