async function handleUpdateGarden(req, res) {
  const id = req.params.id;
  const { name, location } = req.body;
  try {
    client.query(`UPDATE gardens SET garden_name = $1, location = $2 WHERE id = $3`, [name, location, id]);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
  res.status(200).json("Garden updated!");
}

module.exports = { handleUpdateGarden };
