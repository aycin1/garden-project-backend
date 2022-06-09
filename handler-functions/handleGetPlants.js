async function handleGetPlants(req, res) {
  const queryParams = req.url.split("?")[1];
  const queryObj = new URLSearchParams(queryParams);

  let tempArr = [];
  let parameterNames = ["name", "classification", "sowingSeason"];

  for (let i = 0; i < parameterNames.length; i++) {
    const parameterName = parameterNames[i];
    const parameterValue = queryObj.has(parameterName) ? queryObj.get(parameterName) : undefined;
    tempArr.push(parameterValue);
  }

  let [name, classification, sowingSeason] = tempArr;

  const replacementFields = ["$1", "$2", "$3"];
  const replacementValues = [];
  const totalPossibleFields = replacementFields.length;

  let dbQuery = "SELECT * FROM plant_info";
  if (name) {
    dbQuery += ` WHERE (name ILIKE '%' || ${replacementFields.shift()} || '%')`;
    replacementValues.push(name);
  }
  if (classification) {
    if (replacementFields.length < totalPossibleFields) dbQuery += ` AND`;
    else dbQuery += ` WHERE`;
    dbQuery += ` classification ILIKE '%' || ${replacementFields.shift()} || '%'`;
    replacementValues.push(classification);
  }
  if (sowingSeason) {
    if (replacementFields.length < totalPossibleFields) dbQuery += ` AND`;
    else dbQuery += ` WHERE`;
    dbQuery += ` (sowingTimes ILIKE '%' || ${replacementFields.shift()} || '%')`;
    replacementValues.push(sowingSeason);
  }

  dbQuery += ` ORDER BY name`;
  const results = (await client.query(dbQuery, replacementValues)).rows;

  // "timeFromSowToHarvest", "spacing"
  let filteredResults = [];

  if (queryObj.has("timeUntilHarvest")) {
    results.forEach(plant => {
      let queriedTime = queryObj.get("timeUntilHarvest");

      const weeksQueriedAsMinimum = queriedTime.includes("g");
      if (weeksQueriedAsMinimum) queriedTime = queriedTime.replace("g", "");
      const DesiredWeeks = Number(queriedTime);

      let instructions = plant.harvest_instructions;

      if (instructions.includes("weeks")) instructions = instructions.split("weeks")[0];
      if (instructions.includes("-")) instructions = instructions.split("-")[0];
      let maxHarvestWeeks = Number(instructions.replace(/[^0-9]/g, ""));

      if (plant.harvest_instructions.includes("days")) maxHarvestWeeks /= 7;
      if (plant.harvest_instructions.includes("years")) maxHarvestWeeks *= 52;

      if (!weeksQueriedAsMinimum && maxHarvestWeeks < DesiredWeeks) filteredResults.push(plant);
      if (weeksQueriedAsMinimum && maxHarvestWeeks > DesiredWeeks) filteredResults.push(plant);
    });
  }

  if (queryObj.has("spacing")) {
    resultsToFilter = queryObj.has("timeUntilHarvest") ? filteredResults : results; // So that results are nor reintroduced
    resultsToFilter.forEach(plant => {
      let queriedSpacing = queryObj.get("spacing");

      const spacingQueriedAsMinimum = queriedSpacing.includes("g");
      if (spacingQueriedAsMinimum) queriedSpacing = queriedSpacing.replace("g", "");
      const DesiredSpacing = Number(queriedSpacing);

      let instructions = plant.space_instructions;
      if (instructions.includes("-")) instructions = instructions.split("-")[0];

      let maxSpacing = instructions.replace(/[^0-9]/g, "");
      if (instructions.includes("Metre")) maxSpacing *= 39;

      if (!spacingQueriedAsMinimum && maxSpacing <= DesiredSpacing) filteredResults.push(plant);
      if (spacingQueriedAsMinimum && maxSpacing >= DesiredSpacing) filteredResults.push(plant);
    });
  }

  if (!queryObj.has("timeUntilHarvest") && !queryObj.has("spacing")) filteredResults = results;

  res.json(filteredResults);
}

module.exports = { handleGetPlants };
