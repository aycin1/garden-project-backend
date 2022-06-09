async function handlePlanted(req, res, client) {
  const { plantID, quantity, date } = req.body;

  const harvest_instructions = (
    await client.query(
      `SELECT harvest_instructions FROM plants_in_garden
  JOIN plant_info
  ON plants_in_garden.plant_info_id = plant_info.id
  WHERE plants_in_garden.id = $1`,
      [plantID]
    )
  ).rows[0].harvest_instructions;

  let avgWeeks;
  if (harvest_instructions.includes("weeks")) {
    weeksStr = harvest_instructions.split("weeks")[0];
    if (weeksStr.includes("-")) {
      const weeks = weeksStr.split("-").map(str => Number(str.replace(/[^0-9]/g, "")));
      const minWeek = weeks[0];
      const maxWeek = weeks[1];
      avgWeeks = (minWeek + maxWeek) / 2;
    } else avgWeeks = Number(harvest_instructions.replace(/[^0-9]/g, ""));
  }

  // add some validation for the date
  const planted_at = new Date(date);
  const estimated_harvest_date = new Date(date);
  estimated_harvest_date.setDate(estimated_harvest_date.getDate() + avgWeeks * 7);

  client.query(
    `UPDATE plants_in_garden SET quantity = $1, planted_at = $2, estimated_harvest_date = $3 WHERE id = $4`,
    [quantity, planted_at, estimated_harvest_date, plantID]
  );
  res.status(200).json({ response: "Planted!" });
}

module.exports = { handlePlanted };
