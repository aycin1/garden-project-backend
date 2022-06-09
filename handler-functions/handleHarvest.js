async function handleHarvest(req, res, client) {
  const { plantID } = req.body;
  await client.query(`UPDATE plants_in_garden SET harvested = true WHERE id = $1`, [plantID]);

  res.status(200).json("Harvest registered!");
}

module.exports = { handleHarvest };
