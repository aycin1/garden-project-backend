async function handleAddGarden(req, res, client) {
  const { location, garden_name, sessionID } = req.body;
  const id = (
    await client.query(`SELECT user_id FROM sessions WHERE uuid = $1`, [
      sessionID,
    ])
  ).rows[0]["user_id"];

  await client.query(
    `INSERT INTO gardens (user_id, garden_name, location)
  VALUES ($1, $2, $3)`,
    [id, garden_name, location]
  );
  res.status(200).json({ response: "Added" });
}

module.exports = { handleAddGarden };
