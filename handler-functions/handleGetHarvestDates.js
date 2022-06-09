export default async function handleGetHarvestDates(req, res) {
  const userID = req.params.user;

  const plants = (
    await client.query(
      `SELECT name, garden_name, estimated_harvest_date, harvested 
      FROM plants_in_garden 
      JOIN gardens 
      ON plants_in_garden.garden_id = gardens.id
      JOIN plant_info
      ON plants_in_garden.plant_info_id = plant_info.id
      WHERE user_id = $1
      ORDER BY estimated_harvest_date 
      ASC`,
      [userID]
    )
  ).rows;

  const harvestDateInfo = [];
  for (const plant of plants) {
    if (plant.harvested || !plant.estimated_harvest_date) continue;
    const plantInfo = {
      name: plant.name,
      garden: plant.garden_name,
      estimatedHarvestDate: plant.estimated_harvest_date,
    };
    harvestDateInfo.push(plantInfo);
  }

  res.status(200).json(harvestDateInfo);
}
