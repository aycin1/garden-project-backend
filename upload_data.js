import { Client } from "https://deno.land/x/postgres@v0.11.3/mod.ts";

const client = new Client("postgres://ykwcpoaf:6xDkZhVpuLgvSLqxW-wJSfs_mkVQeyqt@surus.db.elephantsql.com/ykwcpoaf");
await client.connect();

const data = [
  {
    FIELD1: "Name",
    FIELD2: "sowInstructions",
    FIELD3: "spaceInstructions",
    FIELD4: "harvestInstructions",
    FIELD5: "compatiblePlants",
    FIELD6: "avoidInstructions",
    FIELD7: "culinaryHints",
    FIELD8: "culinaryPreservation",
    FIELD9: "image",
    FIELD10: "url",
  },
  {
    FIELD1: "Amaranth, also Love-lies-bleeding",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 inches apart",
    FIELD4: "Harvest in 7-8 weeks.",
    FIELD5: "Compatible with (can grow beside): Onions, corn, peppers, egg plant, tomatoes",
    FIELD6: "",
    FIELD7: "Both leaves and seeds can be used. Excessive intake is not recommended.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/1/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Amaranth",
  },
  {
    FIELD1: "Beans - dwarf, also French beans, Bush beans",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 2 - 6 inches apart",
    FIELD4: "Harvest in 7-10 weeks. Pick often to encourage more flower production.",
    FIELD5:
      "Compatible with (can grow beside): Sweetcorn, spinach, lettuce, summer savory, dill, carrots, brassicas, beets, radish, strawberry and cucumbers, tagates minuta (wild marigold)",
    FIELD6: "Avoid growing close to: Alliums (Chives, leek, garlic, onions) Sunflower",
    FIELD7: "Can be used in salads when young, blanched and cooled.",
    FIELD8: "Will freeze well.",
    FIELD9: "http://gardenate.com/image/43/thumb/150/150; http://gardenate.com/image/62/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Beans%2B-%2Bdwarf",
  },
  {
    FIELD1: "Sweet corn, also maize",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 11-14 weeks.",
    FIELD5: "Compatible with (can grow beside): All beans, cucumber, melons, peas, pumpkin, squash, amaranth",
    FIELD6: "Avoid growing close to: Celery.",
    FIELD7:
      "Piick and cook within an hour. Remove the silks and outer leaves. Best flavour if microwave about 4 minutes per cob. Can be barbequed wrapped in foil. Cook large amounts in a stock pot until test soft. Sprinkle with black pepper and dip in butter.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/40/thumb/150/150; http://gardenate.com/image/34/thumb/150/150; http://gardenate.com/image/85/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Sweet%2Bcorn",
  },
  {
    FIELD1: "Cowpeas, also Black eye peas, Southern peas",
    FIELD2:
      "Easy to grow. When soil begins to warm up. After frosts finish.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: Rows 1 Metre apart",
    FIELD4: "Harvest in 11-14 weeks.",
    FIELD5: "",
    FIELD6: "",
    FIELD7: "Young leaves can be cooked and used like spinach and are very high in protein. The young pods are edible.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Cowpeas",
  },
  {
    FIELD1: "Corn Salad, also Lamb's lettuce or Mache",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 6 inches apart",
    FIELD4: "Harvest in 5-8 weeks.",
    FIELD5: "Compatible with (can grow beside): Onions",
    FIELD6: "",
    FIELD7: "Pick individual leaves or harvest the whole plant as required",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/130/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Corn%2BSalad",
  },
  {
    FIELD1: "Chives, also Garden chives",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 2 inches apart",
    FIELD4: "Harvest in 7-11 weeks.",
    FIELD5: "Compatible with (can grow beside): Carrots, Tomatoes, Parsley, Apples",
    FIELD6: "",
    FIELD7: "Use raw in salads or as a mild onion flavour in cooked dishes.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/69/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Chives",
  },
  {
    FIELD1: "Coriander, also Cilantro, Chinese parsley",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: Thin to 18 inches",
    FIELD4: "Harvest in 30-45 days.",
    FIELD5: "Compatible with (can grow beside): Dill, Chervil, Anise, Cabbages, Carrots",
    FIELD6: "Avoid growing close to: Fennel",
    FIELD7: "Use the leaves to flavour hot meals or add fresh to salads.",
    FIELD8: "The seeds can be dried and ground up for curries.",
    FIELD9: "http://gardenate.com/image/52/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Coriander",
  },
  {
    FIELD1: "Collards, also Collard greens, Borekale",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 20 inches apart",
    FIELD4: "Harvest in 8-11 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chili, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7: "Slice and steam or use in stir-fry",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/147/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Collards",
  },
  {
    FIELD1: "Choko/Chayote, also Chayote squash, christophene, chouchou, mirliton",
    FIELD2:
      "Easy to grow. Plant whole mature fruit when one produces a shoot at one end.. Best planted at soil temperatures between 59°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 39 inches apart",
    FIELD4: "Harvest in approximately 17 weeks. Best when fruit is light green and not more than 6cm long.",
    FIELD5: "Compatible with (can grow beside): Cucumbers",
    FIELD6: "",
    FIELD7:
      "Chokos can be peeled and chopped to use in stews, soup or as a stir fry vegetable. Cooked or raw, it has a very mild flavour and is commonly served with seasonings e.g., salt, butter and pepper or in a dish with other vegetables and/or flavourings. It can also be boiled, stuffed, mashed or pickled",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/99/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Choko~Chayote",
  },
  {
    FIELD1: "Burdock, also Gobo (Japanese Burdock)",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 24 inches apart",
    FIELD4: "Harvest in 17-18 weeks.",
    FIELD5: "Compatible with (can grow beside): Best grown in separate bed.",
    FIELD6: "",
    FIELD7:
      "Harvest in the first year when the burdock root is very crisp and has a sweet, mild, and pungent flavour with a little muddy harshness that can be reduced by soaking julienne/shredded roots in water for five to ten minutes. Immature flower stalks may also be harvested in late spring, before flowers appear; the taste resembles that of artichoke, to which the burdock is related. It is a key ingredient in the traditional Dandelion and Burdock beer.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Burdock",
  },
  {
    FIELD1: "Chinese cabbage, also Wong bok, wong nga pak",
    FIELD2:
      "Easy to grow. Sow direct in the garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Harvest whole head or you can take a few leaves at a time.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile, coriander), lettuce, potatoes",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chilli, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "Use in stir-fry . Has a milder flavour than regular cabbage.Shred the inner leaves and stems to use in coleslaw salad.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Chinese%2Bcabbage",
  },
  {
    FIELD1: "Chilli peppers, also Hot peppers",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 20 inches apart",
    FIELD4: "Harvest in 9-11 weeks. Wear gloves to pick 'hot' chilies.",
    FIELD5:
      "Compatible with (can grow beside): Best grown in a separate bed as chillis need plenty of light and air circulation.",
    FIELD6: "",
    FIELD7:
      "Wash, dry, and free whole. Use them direct from the freezer (no need to defrost). Wear plastic gloves or wash your hands thoroughly after handling and cutting to avoid accidentally rubbing chilli juice onto your mouth or eyes!",
    FIELD8: "Will freeze well.",
    FIELD9: "http://gardenate.com/image/129/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Chilli%2Bpeppers",
  },
  {
    FIELD1: "Cabbage",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 41°F and 64°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 - 30 inches apart",
    FIELD4: "Harvest in 11-15 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile, thyme)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chili, capsicum), eggplant (aubergine), strawberry, mustard, parsnip",
    FIELD7:
      "Young spring cabbage can be chopped and added to salad greens. Steaming preserves the goodness and flavour of cabbage. Can also be used in stir-fry. Red cabbage chopped and cooked with brown sugar, red wine, onions, vinegar and stock is served with boiled bacon or pork.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/71/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Cabbage",
  },
  {
    FIELD1: "Celery",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 54°F and 70°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 12 inches apart",
    FIELD4: "Harvest in 17-18 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Not applicable as celery needs to be close together to encourage blanching.",
    FIELD6: "Avoid growing close to: Sweetcorn",
    FIELD7: "Chop and use raw in salad or braised in hot dishes.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/128/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Celery",
  },
  {
    FIELD1: "Chicory, also Witloof, Belgian endive",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 10 - 12 inches apart",
    FIELD4: "Harvest in 16-24 weeks. Will need forcing before final harvest.",
    FIELD5: "Compatible with (can grow beside): Carrots, onions, Florence fennel, tomatoes.",
    FIELD6: "",
    FIELD7: "Good in salads. Grill lightly with butter. Bake with ham and cheese.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/105/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Chicory",
  },
  {
    FIELD1: "Cauliflower",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 24 - 39 inches apart",
    FIELD4: "Harvest in 15-22 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chili, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "Cauliflower can be steamed. Young ones can be broken into small pieces and added raw to salad. Cook briefly and add to curry mix. Traditionally served with cheese sauce. Add tomato slices for colour.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/126/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Cauliflower",
  },
  {
    FIELD1: "Celeriac",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 70°F. (Show °C/cm)",
    FIELD3: "Space plants: 18 - 31 inches apart",
    FIELD4: "Harvest in 14-28 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Beans, brassicas, carrots, leeks, lettuce, peas, sage, tomatoes, onions",
    FIELD6: "",
    FIELD7: "Cook whole, scrubbed and peeled. Or slice or dice.Tastes like celery.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/127/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Celeriac",
  },
  {
    FIELD1: "Cape Gooseberry, also Golden Berry, Inca Berry",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 inches apart",
    FIELD4: "Harvest in 14-16 weeks.",
    FIELD5: "Compatible with (can grow beside): Will happily grow in a flower border",
    FIELD6: "",
    FIELD7:
      "The berry is the size of a cherry tomato, is very aromatic and full of tiny seeds. They are delicious eaten fresh or can be made into jam. They can be added to salads, desserts and cooked dishes, they are delicious stewed with other fruit, especially apples. They also go well in savoury dishes with meat or seafood.",
    FIELD8: "Can be preserved dried.",
    FIELD9:
      "http://gardenate.com/image/56/thumb/150/150; http://gardenate.com/image/54/thumb/150/150; http://gardenate.com/image/59/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Cape%2BGooseberry",
  },
  {
    FIELD1: "Cardoon",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 55°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 - 59 inches apart",
    FIELD4: "Harvest in 34-35 weeks.",
    FIELD5: "Compatible with (can grow beside): Best grown in separate bed.",
    FIELD6: "",
    FIELD7:
      "Cut off the base and leaves, then cut the stalks into pieces. Boil the stalks for around 20 minutes until tender: drain, and peel off the surface of the stalks. Add precooked cardoons to a variety of dishes, they go well with mushrooms.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/120/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Cardoon",
  },
  {
    FIELD1: "Carrot",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 2 - 12 inches apart",
    FIELD4: "Harvest in 12-18 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Onions, Leeks, Lettuce, Sage, Peas, Radishes, Tomatoes, Beans, Celery, Rosemary",
    FIELD6: "Avoid growing close to: Parsnips, Beetroot, Dill, Brassicas, Fennel",
    FIELD7:
      "Steamed or raw carrots are tasty. Cook them in a small amount of water until nearly dry then add a pat of butter and teasp of brown sugar to glaze. They can be added to most casserole-type dishes. Grate raw carrots and add to salads",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/65/thumb/150/150; http://gardenate.com/image/160/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Carrot",
  },
  {
    FIELD1: "Capsicum, also Bell peppers, Sweet peppers",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 20 inches apart",
    FIELD4: "Harvest in 10-12 weeks. Cut fruit off with sharp knife.",
    FIELD5: "Compatible with (can grow beside): Egg plant (Aubergine), Nasturtiums, Basil, Parsley, Amaranth",
    FIELD6: "",
    FIELD7:
      "Can be sliced and seeded and used raw in salads. Or brush with olive oil, roast at a high temperature until the skin changes colour then put in a covered dish until cool and rub off the skin and remove seeds.",
    FIELD8: "Will freeze successfully without blanching if seeded and sliced.",
    FIELD9: "http://gardenate.com/image/47/thumb/150/150; http://gardenate.com/image/46/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Capsicum",
  },
  {
    FIELD1: "Angelica",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 18 inches apart",
    FIELD4: "Harvest in approximately 18 months. Angelica archangelica has slightly dull leaves, not shiny..",
    FIELD5: "Compatible with (can grow beside): Any herbs that like damp, shady areas - mint, lemon balm",
    FIELD6: "",
    FIELD7: "The stems can be candied and used to decorate cakes and pastries. Pick the stems in the second year.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/124/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Angelica",
  },
  {
    FIELD1: "Artichokes (Globe)",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 64°F. (Show °C/cm)",
    FIELD3: "Space plants: 63 - 79 inches apart",
    FIELD4: "Harvest in 42-57 weeks.",
    FIELD5: "Compatible with (can grow beside): Needs a lot of space. Best in separate bed",
    FIELD6: "",
    FIELD7:
      "Pick buds before scales develop brown tips. If you have lots of small buds, they can be fried in olive oil and eaten whole. Rinse in plenty of cold water to remove earwigs or other insects.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/109/thumb/150/150; http://gardenate.com/image/14/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Artichokes%2B(Globe)",
  },
  {
    FIELD1: "Cucumber",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 24 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Cut fruit off with scissors or sharp knife.",
    FIELD5:
      "Compatible with (can grow beside): Nasturtiums, Beans, Celery, Lettuce, Sweet Corn, Cabbages, Sunflowers, Coriander, Fennel, Dill, Sunflowers",
    FIELD6: "Avoid growing close to: Potato, Tomatoes",
    FIELD7: "Pick frequently before the fruit become too big. Use raw in salads, peeled if preferred.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/13/thumb/150/150; http://gardenate.com/image/83/thumb/150/150; http://gardenate.com/image/84/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Cucumber",
  },
  {
    FIELD1: "Asparagus",
    FIELD2: "Easy to grow. Plant as crowns. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 16 inches apart",
    FIELD4: "Harvest in 2-3 years. Plant 'crowns' to harvest earlier .",
    FIELD5: "Compatible with (can grow beside): Parsley, Basil, Nasturtiums, Lettuce",
    FIELD6: "Avoid growing close to: Garlic, Onions, and root vegetables",
    FIELD7:
      "Steaming is traditional, then coating with melted butter or hollandaise sauce. Alternatively break in short lengths, and cook quickly in hot oil in a wok and sprinkle with soy sauce or balsamic vinegar. NOTE: The asparagus berries are poisonous. Only the young shoots are edible.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/66/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Asparagus",
  },
  {
    FIELD1: "Asparagus Pea, also Winged bean",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 10 inches apart",
    FIELD4: "Harvest in 8-11 weeks. Pick early, pick often.",
    FIELD5: "Compatible with (can grow beside): Best grown in separate bed",
    FIELD6: "",
    FIELD7:
      "Cook quickly by steaming and serve with just a touch of butter and they are said to taste like their namesake .",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/111/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Asparagus%2BPea",
  },
  {
    FIELD1: "Basil",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 10 inches apart",
    FIELD4: "Harvest in 10-12 weeks. Pick before flowering.",
    FIELD5: "Compatible with (can grow beside): Tomato",
    FIELD6: "",
    FIELD7:
      "Basil is commonly used fresh in cooked recipes. It is generally added at the last moment, as cooking quickly destroys the flavour. Tear rather than chop. The fresh herb can be kept for a short time in plastic bags in the refrigerator, or for a longer period in the freezer, after being blanched quickly in boiling water.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/22/thumb/150/150; http://gardenate.com/image/23/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Basil",
  },
  {
    FIELD1: "Beans - broad beans, fava beans, also Fava bean",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 43°F and 75°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 10 inches apart",
    FIELD4: "Harvest in 12-22 weeks. Pick frequently to encourage more pods.",
    FIELD5: "Compatible with (can grow beside): Dill, Potatoes",
    FIELD6: "",
    FIELD7:
      "The fresh beans are eaten steamed or boiled. As the beans mature it is better to remove their tough outer skins after cooking. The leafy top shoots of the adult plants can be picked and steamed after flowering. Small beans can be eaten whole in the pods.\n",
    FIELD8: "Will freeze well. Remove from pods and blanch.",
    FIELD9:
      "http://gardenate.com/image/158/thumb/150/150; http://gardenate.com/image/93/thumb/150/150; http://gardenate.com/image/159/thumb/150/150; http://gardenate.com/image/92/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Beans%2B-%2Bbroad%2Bbeans%2C%2Bfava%2Bbeans",
  },
  {
    FIELD1: "Beans - climbing, also Pole beans, Runner beans, Scarlet Runners",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 8 inches apart",
    FIELD4: "Harvest in 9-11 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Sweetcorn, spinach, lettuce, summer savory, dill, carrots, brassicas, beets, radish, strawberry, cucumbers, zucchini, tagates minuta (wild marigold)",
    FIELD6: "Avoid growing close to: Alliums (Chives, leek, garlic, onions), Florence fennel",
    FIELD7: "Use young in salads - blanch and cool.",
    FIELD8: "Will freeze well.",
    FIELD9: "http://gardenate.com/image/42/thumb/150/150; http://gardenate.com/image/38/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Beans%2B-%2Bclimbing",
  },
  {
    FIELD1: "Beetroot, also Beets",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 7-10 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Onions, Silverbeet (Swiss Chard), Lettuce, Cabbage, Dwarf Beans, Dill, Peas. Strawberries",
    FIELD6: "Avoid growing close to: Asparagus, Carrots, Sweetcorn, Spinach",
    FIELD7:
      "Apart from boiling whole for salads, beetroot roast well, cut in wedges. They also make a tasty salad grated raw with carrot and a little fresh orange juice.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/67/thumb/150/150; http://gardenate.com/image/113/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Beetroot",
  },
  {
    FIELD1: "Borage, also Burrage, Bugloss",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Use leaves before flowers appear, otherwise they will be 'hairy'. .",
    FIELD5: "Compatible with (can grow beside): Strawberry, tomatoes, zucchini/squash. Deters pests from many plants.",
    FIELD6: "",
    FIELD7:
      "Has a slight cucumber taste which goes well in salads and when cooked with silver beet or cabbage. The flowers make a pretty drink decoration when frozen in an iceblock.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/53/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Borage",
  },
  {
    FIELD1: "Broccoli",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 14 - 20 inches apart",
    FIELD4: "Harvest in 10-16 weeks. Cut flowerhead off with a knife..",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile, oregano)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chilli, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "The stem (peeled), leaves, and flowerhead are all edible. Steam for best flavour. Peel large stalks, slice and steam. Goes well with blue cheese sauce.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/20/thumb/150/150; http://gardenate.com/image/19/thumb/150/150; http://gardenate.com/image/21/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Broccoli",
  },
  {
    FIELD1: "Brussels sprouts",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 18 - 24 inches apart",
    FIELD4: "Harvest in 14-28 weeks. Pick sprouts when small. .",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chili, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "Remove any discoloured outer leaves. Cut in half and steam with other vegetables. Do not overcook as that produces the distinctive smell that puts people off eating Brussels sprouts! They go well with a chopped tomato and onion mix.Traditionally served with roasted chestnuts for Xmas dinner in UK.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/125/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Brussels%2Bsprouts",
  },
  {
    FIELD1: "Pumpkin",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 90°F. (Show °C/cm)",
    FIELD3: "Space plants: 35 - 47 inches apart",
    FIELD4: "Harvest in 15-20 weeks.",
    FIELD5: "Compatible with (can grow beside): Sweet Corn",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Cut up, remove the skin and roast with other vegetables or meat. Young crisp shoots with young leaves can be cooked and eaten - stewed in coconut milk they are popular in Melanesia. Remove any strings and tough parts and stew until tender, or cook as a vegetable in boiling water 3-5 minutes.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/140/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Pumpkin",
  },
  {
    FIELD1: "Potato",
    FIELD2: "Plant tuber. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 - 16 inches apart",
    FIELD4: "Harvest in 15-20 weeks. Dig carefully, avoid damaging the potatoes.",
    FIELD5: "Compatible with (can grow beside): Peas, Beans, Brassicas, Sweetcorn, Broad Beans, Nasturtiums, Marigolds",
    FIELD6: "Avoid growing close to: Cucumber, Pumpkin, Sunflowers, Tomatoes, Rosemary",
    FIELD7:
      "Peeled or unpeeled and scrubbed, potatoes can be boiled, baked, fried and roasted. - The only way they are not used is raw. Keep in a pot of cold water after peeling, otherwise they will discolour.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/151/thumb/150/150; http://gardenate.com/image/16/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Potato",
  },
  {
    FIELD1: "Peas",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 8°C and 24°C. (Show °F/in)",
    FIELD3: "Space plants: 5 - 8 cm apart",
    FIELD4: "Harvest in 9-11 weeks. Pick the pods every day to increase production.",
    FIELD5: "Compatible with (can grow beside): Potatoes",
    FIELD6: "",
    FIELD7:
      "Raw straight from the pod in the garden is best! Raw in salads. Steamed lightly. Small pods can be steamed whole.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/94/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Peas",
  },
  {
    FIELD1: "Parsnip",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 43°F and 70°F. (Show °C/cm)",
    FIELD3: "Space plants: 3 - 4 inches apart",
    FIELD4: "Harvest in 17-20 weeks. Best flavour if harvested after a frost..",
    FIELD5:
      "Compatible with (can grow beside): Swiss Chard (Silverbeet), Capsicum, Peas, Potatoes, Beans, Radishes, Garlic",
    FIELD6: "Avoid growing close to: Carrot, Celery, Brassicas",
    FIELD7: "Peel and roast with vegetables or meat. The sweetish flavour of parsnips enhances most other vegetables.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/60/thumb/150/150; http://gardenate.com/image/61/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Parsnip",
  },
  {
    FIELD1: "Parsley, also curly leaf parsley or flat leaf (Italian) parsley",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 9-19 weeks. Cut stalks from outer part of plant.",
    FIELD5: "Compatible with (can grow beside): Carrots, Chives, Tomatoes, Asparagus",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Use the leaves and stems to add flavour and colour. Can be cooked in dishes such as ratatouille, Traditionally used in white sauce.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/36/thumb/150/150; http://gardenate.com/image/58/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Parsley",
  },
  {
    FIELD1: "Pak Choy, also Pak choi",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 - 16 inches apart",
    FIELD4: "Harvest in 6-11 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile, coriander), lettuce, potatoes",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chili, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      'You can treat Pak Choy as "cut and come again " or use the whole plant in one go, whichever suits your needs.',
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/121/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Pak%2BChoy",
  },
  {
    FIELD1: "Oregano, also Pot Marjoram",
    FIELD2:
      "Sow in garden, or start in seed trays. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 inches apart",
    FIELD4: "Harvest in 6-8 weeks. When flowers appear.",
    FIELD5: "Compatible with (can grow beside): Broccoli",
    FIELD6: "",
    FIELD7: "Used to flavour tomato dishes, soups, sauces and Greek dishes like moussaka",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/57/thumb/150/150; http://gardenate.com/image/139/thumb/150/150; http://gardenate.com/image/30/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Oregano",
  },
  {
    FIELD1: "Onion",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 2 - 4 inches apart",
    FIELD4: "Harvest in 25-34 weeks. Allow onions to dry before storing.",
    FIELD5: "Compatible with (can grow beside): Lemon Balm, Borage, Carrots, Beets, Silverbeet, Lettuce, Amaranth",
    FIELD6: "Avoid growing close to: Peas, Beans",
    FIELD7:
      "Brown onions roasted whole with other vegetables are delicious. Red onions add colour to salads or stir-fry.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/115/thumb/150/150; http://gardenate.com/image/114/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Onion",
  },
  {
    FIELD1: "Okra, also Ladyfinger, gumbo",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 14 - 24 inches apart",
    FIELD4: "Harvest in 11-14 weeks.",
    FIELD5: "Compatible with (can grow beside): Peppers (Capsicum, Chili), Eggplant (Aubergine)",
    FIELD6: "",
    FIELD7: "Use pods fresh or dried in soups or casseroles or as a boiled vegetable.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/138/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Okra",
  },
  {
    FIELD1: "NZ Spinach, also Warrigal greens",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 18 - 24 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Pick the tips.",
    FIELD5: "Compatible with (can grow beside): Does better if alone.",
    FIELD6: "",
    FIELD7:
      "Can be used as a substitute for real spinach in cooking. Pick the growing tips at about 8-10cm (4-6 in). To remove oxalates it's a good idea to blanch the leaves for 3 minutes or so, then rinse the leaves in cold water before using them in salads or for cooking.(ABC TV)",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/137/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/NZ%2BSpinach",
  },
  {
    FIELD1: "Mustard greens, also gai choy",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 14 - 24 inches apart",
    FIELD4: "Harvest in 5-8 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, camomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chilli, capsicum), eggplant (aubergine), strawberry",
    FIELD7: "Use young leaves in salad for a 'spicy kick'. Add to stir fry.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/96/thumb/150/150; http://gardenate.com/image/95/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Mustard%2Bgreens",
  },
  {
    FIELD1: "Mizuna, also Japanese Greens, Mitzuna, Mibuna",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 8 inches apart",
    FIELD4: "Harvest in 35-50 days.",
    FIELD5: "Compatible with (can grow beside): Radish, lettuce",
    FIELD6: "",
    FIELD7: "Leaves used raw, stir-fried, in soups. Young flowering stems can be cooked like broccoli.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/136/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Mizuna",
  },
  {
    FIELD1: "Mint, also Garden mint",
    FIELD2:
      "Easy to grow. Grow in trays and plant out or start from cuttings. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 75°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 inches apart",
    FIELD4: "Harvest in 8-12 weeks. Cut leaves from top with scissors.",
    FIELD5: "Compatible with (can grow beside): Cabbages, Tomatoes",
    FIELD6: "",
    FIELD7:
      "Mint adds a fresh flavour if chopped and sprinkled over salads. And is traditionally used mixed with vinegar and sugar to make mint sauce for lamb.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/135/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Mint",
  },
  {
    FIELD1: "Marrow",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 35 - 47 inches apart",
    FIELD4: "Harvest in 12-17 weeks.",
    FIELD5: "Compatible with (can grow beside): Peas, Beans, Onions, Sweetcorn",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Good, cut in thick slices, seeds removed and stuffed with mince or spicy vegetable mix then baked in the oven",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/134/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Marrow",
  },
  {
    FIELD1: "Luffa, also Loofah, plant sponge",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 18 - 30 inches apart",
    FIELD4: "Harvest in 11-12 weeks. Use as a back scratcher.",
    FIELD5: "Compatible with (can grow beside): Peas, Beans, Onions, Sweetcorn",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "The luffa flowers and fruits are soft and edible when young and are sometimes cooked and eaten like squash or okra. Loofah has been an important food source in many Asian cultures. The leaves and vines should not be eaten.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/133/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Luffa",
  },
  {
    FIELD1: "Lettuce",
    FIELD2:
      "Easy to grow. Sow in garden, or start in seed trays and plant out in 4-6 weeks.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 8°C and 27°C. (Show °F/in)",
    FIELD3: "Space plants: 20 - 30 cm apart",
    FIELD4: "Harvest in 8-12 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Carrots, Onions, Strawberries, Beets, Brassicas, Radish, Marigold, Borage, Chervil, Florence fennel, leeks.",
    FIELD6: "Avoid growing close to: Parsley, Celery",
    FIELD7: "Wash well, spin or shake dry and use in salads and sandwiches",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/31/thumb/150/150; http://gardenate.com/image/32/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Lettuce",
  },
  {
    FIELD1: "Lemon Balm, also Sweet balm,",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 10 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Cut back tall stems to prevent flowering.",
    FIELD5: "Compatible with (can grow beside): Good to attract bees",
    FIELD6: "",
    FIELD7:
      "As a herb tea or added to fruit punch. Can be used to replace lemon, used sparingly, in desserts and with stewed fruit. Chop leaves into salad. Better used fresh than dried.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/49/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Lemon%2BBalm",
  },
  {
    FIELD1: "Kale, also Borecole",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 - 39 inches apart",
    FIELD4: "Harvest in 7-9 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Dwarf (bush) beans, beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, camomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chilli, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "Strong flavoured and nutritious vegetable. Wash well and chop finely then steam. A tomato or cheese sauce will mask the flavour if too strong.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/155/thumb/150/150; http://gardenate.com/image/156/thumb/150/150; http://gardenate.com/image/90/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Kale",
  },
  {
    FIELD1: "Kohlrabi",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 10 inches apart",
    FIELD4: "Harvest in 7-10 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Beets, celery, cucumber, onions, marigold, nasturtium, rhubarb, aromatic herbs (sage, dill, chamomile)",
    FIELD6:
      "Avoid growing close to: Climbing (pole) beans, tomato, peppers (chilli, capsicum), eggplant (aubergine), strawberry, mustard",
    FIELD7:
      "Use when young. Scrub well, cut off leaf stalks, roots and woody parts. Young ones do not need peeling. Can be grated raw for salads or cut in pieces and steam. Use in casseroles.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/132/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Kohlrabi",
  },
  {
    FIELD1: "Leeks",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 8 inches apart",
    FIELD4: "Harvest in 15-18 weeks. Loosen with a fork rather than pull by hand..",
    FIELD5: "Compatible with (can grow beside): Carrots",
    FIELD6: "",
    FIELD7:
      "Trim off the roots and any damaged leaves. Young ones can be used whole with some of the green leaves. Wash thoroughly as the earth tends to get inside. Chop and fry in butter (or olive oil) until tender. Can be added to casserole meals, allowing time to cook through. Leek and mushroom make a tasty combination for a tart filling.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/41/thumb/150/150; http://gardenate.com/image/75/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Leeks",
  },
  {
    FIELD1: "Jerusalem Artichokes, also Sunchoke",
    FIELD2:
      'Easy to grow. Plant tubers about 5cm (1.5") deep.. Best planted at soil temperatures between 46°F and 59°F. (Show °C/cm)',
    FIELD3: "Space plants: 12 - 18 inches apart",
    FIELD4: "Harvest in 15-20 weeks.",
    FIELD5: "Compatible with (can grow beside): Tomatoes, cucumbers",
    FIELD6: "",
    FIELD7:
      "Scrape clean or peel (add a tsp of lemon or vinegar to the water to stop the tubers browning). Steam, boil, or use in artichoke soup (make with artichokes and some stock). Caution - because they contain 'resistent starch' Jerusalem Artichokes are a great promoter of flatulence in some individuals.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/97/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Jerusalem%2BArtichokes",
  },
  {
    FIELD1: "Daikon, also Japanese radish, Lo Bok",
    FIELD2:
      "Easy to grow. Direct in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Dig daikon carefully. They are rather brittle..",
    FIELD5: "Compatible with (can grow beside): Chervil, cress,lettuce, leeks, spinach, strawberries, tomatoes",
    FIELD6: "Avoid growing close to: Gherkins, hyssop",
    FIELD7:
      "Daikon radish can be eaten simmered, stir fried, grated, pickled or baked. Its leaves are also edible and can be used in recipes that call for turnip greens, and its seeds make sprouts to eat in salads or in sandwiches.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/122/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Daikon",
  },
  {
    FIELD1: "Dill",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 inches apart",
    FIELD4: "Harvest in 8-12 weeks. Use leaves before flowering.",
    FIELD5: "Compatible with (can grow beside): Cabbage, Coriander, Fennel, tomatoes, broccoli",
    FIELD6: "",
    FIELD7:
      "Dill leaves can be used fresh or dried in salads, meats, vegetable dishes and soups. Freshly cut leaves enhance the flavour of dips, herb butter, soups, salads, fish dishes, and salads. Both the flowering heads and seeds are used in flavoured vinegars and oils. Used whole or ground, the seeds add zest to bread, cheese, and salad dressing.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/131/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Dill",
  },
  {
    FIELD1: "Eggplant, also Aubergine",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 75°F and 90°F. (Show °C/cm)",
    FIELD3: "Space plants: 24 - 30 inches apart",
    FIELD4: "Harvest in 12-15 weeks. Cut fruit with scissors or sharp knife.",
    FIELD5: "Compatible with (can grow beside): Beans, capsicum, lettuce, amaranth, thyme",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Cut and use the same day if possible. Slice, no need to peel, and fry in olive oil.  Brush with oil and grill or bake. Or microwave,plain, for about 4 minutes on high. Makes a good substitute for pasta in lasagne or moussaka. Can be smoked over a gas ring or barbecue, cooled and peeled and used to make dips.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/24/thumb/150/150; http://gardenate.com/image/116/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Eggplant",
  },
  {
    FIELD1: "Endive",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 10-11 weeks.",
    FIELD5: "Compatible with (can grow beside): beans, brassicas, carrots, cucumbers, chervil, sage.",
    FIELD6: "Avoid growing close to: Alliums (garlic and onions)",
    FIELD7:
      "Very tasty topped with grated swiss cheese and grilled for a couple of minutes to crisp up the cheese and wilt the leaves. Can use in salads additional to lettuce, but needs a flavoursome dressing if you aren't overly fond of bitterness.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/148/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Endive",
  },
  {
    FIELD1: "Fennel, also Bronze fennel",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: Thin to 12 inches",
    FIELD4: "Harvest in 14-15 weeks.",
    FIELD5: "Compatible with (can grow beside): Best grown away from vegetables",
    FIELD6: "",
    FIELD7:
      "Cut off leaves as required Use leaves fresh or dried . Particularly good with fish. The seeds can be used in pickling mixes.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/50/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Fennel",
  },
  {
    FIELD1: "French tarragon",
    FIELD2: "Plant cuttings or root division. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 24 inches apart",
    FIELD4: "Harvest in 30-40 days. Pick leaves when young for best flavour.",
    FIELD5: "Compatible with (can grow beside): Aubergine (Eggplant) and Capsicum (Peppers)",
    FIELD6: "",
    FIELD7:
      "Tarragon goes well with fish, pork, beef, poultry, game, potatoes, tomatoes, carrots, and most vegetables.Â Tarragon can be used in cream sauces, herbed butters and vinegars, soups, sour creams, and yogurt. However, it can be overpowering in large amounts.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/39/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/French%2Btarragon",
  },
  {
    FIELD1: "Garlic",
    FIELD2: "Easy to grow. Plant cloves. Best planted at soil temperatures between 50°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 5 inches apart",
    FIELD4: "Harvest in 17-25 weeks.",
    FIELD5: "Compatible with (can grow beside): Beets, Carrots, Cucumbers, Dill, Tomatoes, Parsnips",
    FIELD6: "Avoid growing close to: Asparagus, Beans, Brassicas, Peas, Potatoes",
    FIELD7: "Cut the growing shoots or use the entire young garlic plants as 'garlic greens' in stirfry.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/72/thumb/150/150; http://gardenate.com/image/73/thumb/150/150; http://gardenate.com/image/91/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Garlic",
  },
  {
    FIELD1: "Ginger",
    FIELD2:
      "Plant pieces of fresh root showing signs of shoots. Best planted at soil temperatures between 20°C and 30°C. (Show °F/in)",
    FIELD3: "Space plants: 15 cm apart",
    FIELD4: "Harvest in approximately 25 weeks. Reduce water as plant dies back to encourage rhizome growth.",
    FIELD5: "Compatible with (can grow beside): Grow in separate bed",
    FIELD6: "",
    FIELD7:
      "Use in any recipes requiring fresh ginger. Widely used in Asian cooking, it is hot without the 'burn' of chilli.  \n",
    FIELD8:
      " Ginger root freezes well either whole or grated, and can be used direct from the freezer in most recipes requiring fresh ginger.",
    FIELD9: "http://gardenate.com/image/74/thumb/150/150; http://gardenate.com/image/154/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Ginger",
  },
  {
    FIELD1: "Horseradish",
    FIELD2: "Easy to grow. Plant root pieces. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 inches apart",
    FIELD4: "Harvest in 16-24 weeks. Some improvement in flavour if left till after frost..",
    FIELD5: "Compatible with (can grow beside): Best kept separate",
    FIELD6: "",
    FIELD7:
      "Strong, spicy flavour traditionally used with roast beef. Used grated for horseradish sauce or horseradish cream",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/123/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Horseradish",
  },
  {
    FIELD1: "Zucchini, also Courgette/Marrow, Summer squash",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 - 35 inches apart",
    FIELD4: "Harvest in 6-9 weeks. Cut the fruit often to keep producing.",
    FIELD5: "Compatible with (can grow beside): Corn, beans, nasturtiums, parsley, Silverbeet, Tomatoes",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Zucchini are best picked or cut off the stem at about 15cm / 6 inches.Pick frequently to keep the plant producing new flowers.",
    FIELD8: "",
    FIELD9:
      "http://gardenate.com/image/28/thumb/150/150; http://gardenate.com/image/29/thumb/150/150; http://gardenate.com/image/33/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Zucchini",
  },
  {
    FIELD1: "Yam/Oka, also Oca",
    FIELD2:
      'Plant tubers about 5cm (1.5") deep covered with soil. Best planted at soil temperatures between 63°F and 95°F. (Show °C/cm)',
    FIELD3: "Space plants: 12 - 18 inches apart",
    FIELD4:
      "Harvest in 15-20 weeks. Leave in the ground until foliage has completely died down so tubers reach maximum size.",
    FIELD5: "Compatible with (can grow beside): Best in separate bed",
    FIELD6: "",
    FIELD7: "Scrub and boil or roast with other vegetables.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/161/thumb/150/150; http://gardenate.com/image/6/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Yam~Oka",
  },
  {
    FIELD1: "Yacon, also Sunroot",
    FIELD2:
      "Easy to grow. Plant sprouting root/tuber to a depth of about 4cm and mulch to cover. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 39 inches apart",
    FIELD4: "Harvest in approximately 25 weeks. You can collect a few at a time without digging out the whole plant..",
    FIELD5: "Compatible with (can grow beside): Best in separate bed",
    FIELD6: "",
    FIELD7:
      "The large roots can be used raw in salads peel and chop. Sprinkle with lemon juice to prevent browning. 'In the Andes, they are grated and squeezed through a cloth to yield a sweet refreshing drink. The juice can also be boiled down to produce a syrup. In South America the juice is concentrated to form dark brown blocks of sugar called chancaca.' (Green Harvest)",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/2/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Yacon",
  },
  {
    FIELD1: "Watermelon",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 24 - 30 inches apart",
    FIELD4: "Harvest in 12-17 weeks.",
    FIELD5: "Compatible with (can grow beside): Sweetcorn, Sunflowers",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7: "Cut up and eat in slices. Use to make fruit drinks. Use in fruit salads.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/118/thumb/150/150; http://gardenate.com/image/119/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Watermelon",
  },
  {
    FIELD1: "Turnip",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 12°C and 30°C. (Show °F/in)",
    FIELD3: "Space plants: 12 - 20 cm apart",
    FIELD4: "Harvest in 6-9 weeks.",
    FIELD5: "Compatible with (can grow beside): Peas, Beans, Chives, Spinach, Carrots, Chicory",
    FIELD6: "Avoid growing close to: Potatoes, Tomatoes",
    FIELD7: "Grate young turnips and use raw in salads. Use older turnips in casseroles and stews.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/146/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Turnip",
  },
  {
    FIELD1: "Tomato",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 24 inches apart",
    FIELD4: "Harvest in 8-17 weeks.",
    FIELD5: "Compatible with (can grow beside): Asparagus, Chervil,Carrot, Celery, Chives, Parsley, Marigold, Basil",
    FIELD6: "Avoid growing close to: Rosemary, Potatoes, Fennel",
    FIELD7: "Use in sauces, with fried meals, in sandwiches.",
    FIELD8: "Can be frozen whole or in pieces.",
    FIELD9:
      "http://gardenate.com/image/26/thumb/150/150; http://gardenate.com/image/27/thumb/150/150; http://gardenate.com/image/37/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Tomato",
  },
  {
    FIELD1: "Tomatillo",
    FIELD2:
      "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 81°F. (Show °C/cm)",
    FIELD3: "Space plants: 28 inches apart",
    FIELD4: "Harvest in 10-14 weeks. Husk splits when fruit is ripe..",
    FIELD5: "Compatible with (can grow beside): Will happily grow in a flower border",
    FIELD6: "",
    FIELD7: "Use in spicy sauces with or to replace tomatoes. They are the base of salsa verde in Mexican cookery.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/79/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Tomatillo",
  },
  {
    FIELD1: "Thyme, also Common thyme",
    FIELD2:
      "Grow in seed trays and plant out 6-8 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 10 - 12 inches apart",
    FIELD4: "Harvest in 42-52 weeks. Root divisions ready in 3 months.",
    FIELD5: "Compatible with (can grow beside): Dry-environment herbs (oregano,sage), Eggplant, Cabbage",
    FIELD6: "",
    FIELD7:
      "Common, lemon, orange and caraway thyme are used in cooking. Thyme is mainly used with meat and fish but also tastes good with vegetables such as mushrooms, beans and carrots. The flavour can be very intense so thyme is best used sparingly.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/162/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Thyme",
  },
  {
    FIELD1: "Taro, also Dasheen, cocoyam",
    FIELD2:
      "Plant small pieces of tuber or suckers, 5-8cm deep. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 31 inches apart",
    FIELD4: "Harvest in approximately 28 weeks. When the leaves begin to die down. .",
    FIELD5: "Compatible with (can grow beside): Best in separate bed",
    FIELD6: "",
    FIELD7: "Taro can be cooked like potatoes, boiled, roasted, fried or steamed. It is not eaten raw.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/104/thumb/150/150; http://gardenate.com/image/101/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Taro",
  },
  {
    FIELD1: "Sweet Potato, also Kumara",
    FIELD2: "Plant shoots or cuttings (Slips). Best planted at soil temperatures between 63°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 24 inches apart",
    FIELD4: "Harvest in 15-17 weeks.",
    FIELD5: "Compatible with (can grow beside): Best in Separate bed",
    FIELD6: "",
    FIELD7: "Use mashed, boiled, roasted, baked or fried. Or use in soups, pies, casseroles, curries and salads.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/48/thumb/150/150; http://gardenate.com/image/82/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Sweet%2BPotato",
  },
  {
    FIELD1: "Sweet Marjoram, also Knotted marjoram",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 inches apart",
    FIELD4: "Harvest in 8-10 weeks. Best flavour if picked before flowering.",
    FIELD5: "Compatible with (can grow beside): Peppers (Capsicums, Chilis), Sage,",
    FIELD6: "",
    FIELD7:
      "Sweet Marjoram has a mild oregano flavor with a hint of balsam. Sweet Marjoram can be used as a substitute for oregano in sauces for mediterranean style pizza, lasagna, and eggplant parmigiana.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Sweet%2BMarjoram",
  },
  {
    FIELD1: "Sunflower",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 10-11 weeks.",
    FIELD5: "Compatible with (can grow beside): Cucumbers, Melons, Sweetcorn, Squash",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7: "Use seeds fresh or toasted",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/80/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Sunflower",
  },
  {
    FIELD1: "Strawberry Plants",
    FIELD2:
      "Easy to grow. Plant with crown (of roots) just covered.. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 - 39 inches apart",
    FIELD4:
      "Harvest in approximately 11 weeks. Strawberries bruise easily when ripe, handle carefully. Pick with a small piece of stem attached..",
    FIELD5: "Compatible with (can grow beside): Better in a bed on their own to allow good sun and air circulation",
    FIELD6:
      "Avoid growing close to: If you are using rotation beds, avoid putting strawberries where you have grown tomatoes, potatoes, peppers or eggplant",
    FIELD7:
      "Pick strawberries and eat them straight from the garden - warm from the sunshine, delicious! Strawberries can be used in any dessert needing soft fruit or berries. Summer pudding which also has raspberries and blackberries or boysenberries, mousse, trifle, dipped in melted chocolate or just with cream. Sprinkle a bowl of strawberries with balsamic vinegar and a little sugar to enhance the flavour and colour.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/150/thumb/150/150; http://gardenate.com/image/145/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Strawberry%2BPlants",
  },
  {
    FIELD1: "Strawberries (from seeds)",
    FIELD2:
      "Start inside in pots or trays after chilling seeds.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 - 39 inches apart",
    FIELD4:
      "Harvest in approximately 1 years. Seedlings need to grow for about a year before fruiting. Remove first flowers. .",
    FIELD5: "Compatible with (can grow beside): Better in a bed on their own to allow good sun and air circulation",
    FIELD6:
      "Avoid growing close to: If you are using rotation beds, avoid putting strawberries where you have grown tomatoes, potatoes, peppers or eggplant",
    FIELD7:
      "Strawberries can be used in any dessert needing soft fruit or berries. Summer pudding with raspberries and blackberries or boysenberries, mousse, trifle, dipped in melted chocolate or just with cream. Sprinkle a bowl of strawberries with balsamic vinegar and a little sugar to enhance the flavour and colour.Straight from the garden, warmed by the sun is best.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/152/thumb/150/150; http://gardenate.com/image/144/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Strawberries%2B(from%2Bseeds)",
  },
  {
    FIELD1: "Squash, also Crookneck, Pattypan, Summer squash",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
    FIELD3: "Space plants: 24 - 31 inches apart",
    FIELD4: "Harvest in 7-8 weeks.",
    FIELD5: "Compatible with (can grow beside): Sweet corn",
    FIELD6: "",
    FIELD7: "Use whole or sliced. Steam or fry.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/64/thumb/150/150; http://gardenate.com/image/63/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Squash",
  },
  {
    FIELD1: "Spring onions, also Scallions, Bunching onions, Welsh onion",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: close together",
    FIELD4: "Harvest in 8-12 weeks.",
    FIELD5: "Compatible with (can grow beside): Lemon Balm, Borage, Carrots, Beets, Silverbeet, Lettuce, Amaranth",
    FIELD6: "Avoid growing close to: Peas, Beans",
    FIELD7: "Can be eaten raw in salads. Often used chopped and sprinkled on Asian stir-fry.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/143/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Spring%2Bonions",
  },
  {
    FIELD1: "Spinach, also English spinach",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 8 - 12 inches apart",
    FIELD4: "Harvest in 5-11 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Broad beans (fava), cabbage, cauliflower, celery, eggplant (aubergine), onion, peas, strawberry, santolina",
    FIELD6: "",
    FIELD7: "Use young leaves in salad. Steam and add to other vegetables.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/87/thumb/150/150; http://gardenate.com/image/88/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Spinach",
  },
  {
    FIELD1: "Snow Peas, also Sugar Peas, Mangetout, Chinese Peas",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 3 - 4 inches apart",
    FIELD4: "Harvest in 12-14 weeks.",
    FIELD5: "Compatible with (can grow beside): Carrots, Endive, Florence fennel, Winter lettuce, Brassicas.",
    FIELD6: "Avoid growing close to: Chives, Alliums, Tomatoes",
    FIELD7: "Cook whole or eat raw in salads",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Snow%2BPeas",
  },
  {
    FIELD1: "Silverbeet, also Swiss Chard or Mangold",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 12 inches apart",
    FIELD4: "Harvest in 7-12 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Beans, brassica sp. (cabbage, cauliflower, etc), tomato, allium sp. (onion, garlic, chives), lavender, parsnip",
    FIELD6: "Avoid growing close to: Corn, melon, cucurbit (cucumbers, squash, melons, gourds), most herbs, potato.",
    FIELD7:
      "Wash thoroughly and inspect the back of the leaves for insects. Chop and put in a saucepan with very little water ( or just what is on the leaves). Cover and cook over a low to medium heat until the leaves collapse. A small amount of nutmeg enhances the flavour.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/98/thumb/150/150; http://gardenate.com/image/70/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Silverbeet",
  },
  {
    FIELD1: "Shallots, also Eschalots",
    FIELD2:
      "Easy to grow. Plant small bulblets, with stem just showing above ground. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 8 inches apart",
    FIELD4: "Harvest in 12-15 weeks. Keep a few for your next planting.",
    FIELD5: "Compatible with (can grow beside): Lemon Balm, Borage, Carrots, Beets, Silverbeet, Lettuce, Amaranth",
    FIELD6: "Avoid growing close to: Peas, Beans",
    FIELD7: "Use in any recipe instead of onions. Can be cooked whole, braised gently with other vegetables.",
    FIELD8: "Can be pickled.",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Shallots",
  },
  {
    FIELD1: "Savory - winter savory, also Savory",
    FIELD2:
      "Easy to grow. Start in trays. Cover seed lightly.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 12 - 16 inches apart",
    FIELD4: "Harvest in 6-10 weeks. Use the leaves fresh..",
    FIELD5: "Compatible with (can grow beside): Beans",
    FIELD6: "",
    FIELD7: "Can be used as seasoning for beans and other green vegetables.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/110/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Savory%2B-%2Bwinter%2Bsavory",
  },
  {
    FIELD1: "Savory - summer savory, also 'Bean Herb'",
    FIELD2:
      "Easy to grow. Sow in Garden. Lightly cover.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 10 inches apart",
    FIELD4: "Harvest in 6-10 weeks. Cut before flowers form for best flavour.",
    FIELD5: "Compatible with (can grow beside): Beans, Onions",
    FIELD6: "",
    FIELD7: "Usually added to peas, beans or lentils. It has a slightly spicy flavour.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Savory%2B-%2Bsummer%2Bsavory",
  },
  {
    FIELD1: "Radish",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 1 - 2 inches apart",
    FIELD4: "Harvest in 5-7 weeks.",
    FIELD5: "Compatible with (can grow beside): Chervil, cress,lettuce, leeks, spinach, strawberries, tomatoes",
    FIELD6: "Avoid growing close to: Hyssop, gherkins",
    FIELD7: "Wash well and remove leaves and roots. Use raw in salads or on their own with bread and butter.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/117/thumb/150/150; http://gardenate.com/image/51/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Radish",
  },
  {
    FIELD1: "Rhubarb",
    FIELD2:
      "Easy to grow. Plant pieces of rhizome or roots 8 - 10 cm (3 - 4 in.) deep. Best planted at soil temperatures between 41°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 35 inches apart",
    FIELD4:
      "Harvest in approximately 1 years. You will have a stronger plant if you leave it for about a year before using..",
    FIELD5: "Compatible with (can grow beside): Brassicas (Cabbage, Broccoli, Cauliflower, etc)",
    FIELD6: "",
    FIELD7:
      "Pick stems about the thickness of your finger. Large stems will have tough 'strings' down the length of them. Use in pies, crumbles, fools and jams. Rhubarb goes well with orange. Will usually need sweetener.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/141/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Rhubarb",
  },
  {
    FIELD1: "Rocket, also Arugula/Rucola",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 8 inches apart",
    FIELD4: "Harvest in 21-35 days.",
    FIELD5: "Compatible with (can grow beside): Lettuce",
    FIELD6: "",
    FIELD7: "Use in salads and stir-fry",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/164/thumb/150/150; http://gardenate.com/image/35/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Rocket",
  },
  {
    FIELD1: "Rockmelon, also Canteloupe",
    FIELD2:
      "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 90°F. (Show °C/cm)",
    FIELD3: "Space plants: 16 - 24 inches apart",
    FIELD4: "Harvest in 10-16 weeks.",
    FIELD5: "Compatible with (can grow beside): Sweetcorn, Sunflowers",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7: "Cut in half and scoop out and discard the seeds. Sprinkle with some ground ginger or serve plain.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/153/thumb/150/150; http://gardenate.com/image/86/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Rockmelon",
  },
  {
    FIELD1: "Rosella, also Queensland Jam Plant, Roselle",
    FIELD2:
      "Sow in garden, or start in seed trays. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 20°C and 35°C. (Show °F/in)",
    FIELD3: "Space plants: 140 cm apart",
    FIELD4: "Harvest in 21-25 weeks.",
    FIELD5: "Compatible with (can grow beside): Feverfew, Coriander, Nasturtium and Hyssop",
    FIELD6: "",
    FIELD7:
      "The large flowers produce a crimson enlarged calyx. Use the fleshy red calyx, without the green seed pod to make jam or jelly.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/108/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Rosella",
  },
  {
    FIELD1: "Rosemary",
    FIELD2: "Easy to grow. Plant cuttings . Best planted at soil temperatures between 59°F and 68°F. (Show °C/cm)",
    FIELD3: "Space plants: 39 - 59 inches apart",
    FIELD4: "Harvest in approximately 1 years. In warmer areas, harvest time might be shorter.",
    FIELD5: "Compatible with (can grow beside): Beans, Carrots, Cabbages, Sage",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7:
      "Leaves sprinkled on roast potatoes, meat and barbeque food make them extra tasty. Rosemary can also be used to add flavour to vinegars and oils.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/44/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Rosemary",
  },
  {
    FIELD1: "Rutabaga, also Swedes",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 4 - 8 inches apart",
    FIELD4: "Harvest in 10-14 weeks.",
    FIELD5: "Compatible with (can grow beside): Peas, Beans, Chives",
    FIELD6: "Avoid growing close to: Potatoes",
    FIELD7: "Use when about the size of a tennis ball. The leaves can be cooked like cabbage when young.",
    FIELD8: "",
    FIELD9: "",
    FIELD10: "http://gardenate.com/plant/Rutabaga",
  },
  {
    FIELD1: "Salsify, also Vegetable oyster",
    FIELD2:
      "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
    FIELD3: "Space plants: 6 - 8 inches apart",
    FIELD4: "Harvest in 14-21 weeks.",
    FIELD5:
      "Compatible with (can grow beside): Beans, Brassicas, Carrots, Celeriac, Endive, Kohl-rabi, Leeks, Lettuce, Alliums, Spinach",
    FIELD6: "",
    FIELD7:
      "Wash and scrape the roots then boil before frying or roasting. They can also be used to make a creamed soup.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/142/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Salsify",
  },
  {
    FIELD1: "Sage, also Common Sage",
    FIELD2:
      "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
    FIELD3: "Space plants: 20 inches apart",
    FIELD4: "Harvest in approximately 18 months. Time reduced if grown from cuttings.",
    FIELD5: "Compatible with (can grow beside): Broccoli, Cauliflower, Rosemary, Cabbage and Carrots",
    FIELD6: "",
    FIELD7: "The leaves are used to flavour stuffing and meat dishes. Sage keeps well if dried.",
    FIELD8: "",
    FIELD9: "http://gardenate.com/image/3/thumb/150/150; http://gardenate.com/image/25/thumb/150/150",
    FIELD10: "http://gardenate.com/plant/Sage",
  },
];

for (const object of data) {
  await client.queryObject(
    `INSERT INTO plant_info
  (name, sow_instructions, space_instructions, harvest_instructions, compatible_plants, avoid_instructions, culinary_hints, image)
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
    object.FIELD1,
    object.FIELD2,
    object.FIELD3,
    object.FIELD4,
    object.FIELD5,
    object.FIELD6,
    object.FIELD7,
    object.FIELD9
  );
}
