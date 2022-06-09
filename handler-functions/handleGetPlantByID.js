async function handleGetPlantByID(req, res, client) {
  const id = req.params.id;
  const query = `SELECT name FROM plant_info WHERE id = $1`;
  const nameOfPlant = (await client.query(query, [id])).rows;
  res.json(nameOfPlant);
}

module.exports = { handleGetPlantByID };
