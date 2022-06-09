async function handleGetShopping(req, res, client) {
  const userID = req.params.user;
  const response = (
    await client.query(
      `SELECT * FROM shopping_list JOIN gardens ON gardens.id = shopping_list.garden_id WHERE user_id = $1 ORDER BY plant_info_id`,
      [userID]
    )
  ).rows;

  res.status(200).json(response);
}

module.exports = { handleGetShopping };
