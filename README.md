# GRDN API

# Overview

This is the GRDN garden data API. From here you can access data pertaining to a variety of crops and garden plants; additionally this API supports the GRDN website (https://garden-project-website.sigmalabs.co.uk) and can be used to interface with the GRDN database, where users' garden information is stored. This API can be queried at https://garden-project.sigmalabs.co.uk.

# Functionality

## Accessing Plant Info

For information pertaining to the various plant species known to the GRDN API, queries can be made to the /plants endpoint (found at https://garden-project.sigmalabs.co.uk/plants).

Specifically, the data which can be accessed are as follows:

- The plant's various names
- Instructions for sowing the plant
- Instructions for spacing plants for the best growth results
- Instructions for the harvest (including the length of time the plant needs to grow)
- A list of plants which are compatible with the plant in question (meaning they should be grown close by)
- A list of plants which are incompatible with the plant in question (meaning they should not be grown close to the plant in question)
- Some "culinary hints", tips for cooking and otherwise preparing the crop once harvested
- A link to a png image of the plant

By default, queries to the /plants endpoint will return information for all of the types of plant known to the GRDN API. These data can be filtered according to the following:

- The plant's name
- The family to which it belongs
- The amount of time the plant takes to grow to harvestable state (in weeks), and the amount of space which needs to be left between crops when initially sowing. These filters can be applied by adding query parameters to the request as described below:

<ins>Search a plant by its name:</ins>

- Use the "name" query parameter, e.g. https://garden-project.sigmalabs.co.uk/plants?name=garlic
- Name requests are case insensitive
- In cases where a plant has multiple names, only one needs to be specified, e.g. name=bell%20pepper will match the name "Capsicum, also Bell peppers, Sweet peppers" in the database

<ins>Search a plant by its family:</ins>

- Use the "classification" query parameter, e.g. https://garden-project.sigmalabs.co.uk/plants?classification=brassica
- Classification requests are case insensitive
- The searchable families are as follows:
  {Araceae, Aizoaceae, Alliums, Legumes, Poaceae, Polygonaceae, Zingiberaceae, Caprifoliaceae, Boraginaceae, Solanaceae, Rosaceae, Liliaceae, Umbelliferae, Raphanus, Amaranthaceae, Lamiaceae, Cucurbitaceae, Cruciferae (Brassicas), Oxalis, Malvaceae, Cichorium, Convolvulaceae, Asteraceae}

<ins>Search a plant by its spacing:</ins>

- Use the "spacing" query parameter, e.g. https://garden-project.sigmalabs.co.uk/plants?spacing=5
- The value passed through should be the maximum desired spacing in inches; plants will be returned which can be planted closer to one another than the distance supplied
- If instead, you wish to see plants which must be planted further apart than the value supplied, prefix the value with the character 'g', e.g. https://garden-project.sigmalabs.co.uk/plants?spacing=g32

<ins>Search a plant by the time it takes to grow:</ins>

- Use the "timeUntilHarvest" query parameter, e.g. https://garden-project.sigmalabs.co.uk/plants?timeUntilHarvest=12
- The value passed through should be the maximum desired time until harvest in weeks; plants will be returned which can be harvested after a shorter period of time than the value specified
- If instead, you wish to see plants which take longer to grow than the duration specified, prefix the value supplied with the character 'g', e.g. https://garden-project.sigmalabs.co.uk/plants?timeUntilHarvest=g30

The info is returned as a json object with keys "id" (an integer) and "name", "sow_instructions", "space_instructions", "harvest_instructions", "compatible_plants", "avoid_instructions", "culinary_hints", "image", "sowing_times" and "classification" (all strings).

# Dependencies

Node Express
Express Body Parser
Express cors
Express Cookie Parser
