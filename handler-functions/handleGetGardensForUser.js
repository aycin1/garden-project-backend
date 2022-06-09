async function handleGetGardensForUser(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "No id found" });
  const query = `SELECT id, location, garden_name FROM gardens WHERE user_id = $1;`;
  const gardens = (await client.query(query, [id])).rows;
  res.json(gardens);
}

module.exports = { handleGetGardensForUser };
