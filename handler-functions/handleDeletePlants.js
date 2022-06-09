async function handleDeletePlants(req, res, client) {
  const id = req.params.id;
  const query = `DELETE FROM plants_in_garden WHERE id = $1`;
  await client.query(query, [id]);
  res.status(200).json({ response: "Deleted successfully" });
}

module.exports = { handleDeletePlants };
