async function handleGetGarden(req, res, client) {
  const id = req.params.id;
  const query = `SELECT plants_in_garden.id, plant_info_id, name, planted_at, harvested, estimated_harvest_date, quantity, location FROM plant_info JOIN plants_in_garden ON plant_info.id = plants_in_garden.plant_info_id JOIN gardens ON plants_in_garden.garden_id = gardens.id WHERE gardens.id = $1 ORDER BY plant_info.id`;
  const garden = (await client.query(query, [id])).rows;
  res.json(garden);
}

module.exports = { handleGetGarden };
