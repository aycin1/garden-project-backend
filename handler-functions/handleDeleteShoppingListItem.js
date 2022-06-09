async function handleDeleteShoppingListItem(req, res, client) {
  const id = req.params.id;
  const query = `DELETE FROM shopping_list WHERE id = $1`;
  await client.query(query, [id]);
  res.status(200).json({ response: "Deleted successfully" });
}

module.exports = { handleDeleteShoppingListItem };
