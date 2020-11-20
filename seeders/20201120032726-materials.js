module.exports = {
  /*
  insert into materials (name) values
  ('Pom pom'),('Tub'),('Pitcher'),('Bin'),('Tweezer'),('Tong'),
  ('Muffin tin'),('Cake case'),('Baking cup'),
  ('Cup'),('Water bottle'),('Jar'),('Pumpkin pie spice'),('Flour')
  ,('Vegetable oil'),('Oil'),('Tray'),
  ('Mini pumpkin'),('Wooden scoop'),('Cookie cutter'),('Tablespoon')
  ,('Teaspoon'),('Spoon'),('Scoop'),
  ('Number candle'),('Candle'),('Felt ball'),('Flower'),('Leaf'),('Apple')
  ,('Cardboard'),('Contact paper'),
  ('Egg-box'),('Food coloring'),('Cocktail stick'),('Stick'),('Fork')
  ,('Knife'),('Water'),('Container'),
  ('Chia seed'),('Pearl'),('Hama bead'),('Play dough'),('Pipe cleaner')
  ,('Glitter'),('Q-tip'),('Paint'),
  ('Grapat Mandala piece'),('Dolly peg'),('Clay'),('Polymer clay'),('Air-dry clay'),('Zip-loc bag'),
  ('Silicone food bag'),('Matchstick'),('Paper'),('Scissors'),('Potato'),
  ('Ice cube tray'),('Pipette'),
  ('Dropper'),('Rice'),('Chalk'),('Grated chalk'),('Vanilla essence'),
  ('Sprinkle'),('Glue gun'),('Shoebox'),
  ('Cardboard box'),('Cocoa powder'),('Salt'),('Sand'),('Paint pen'),('Ice cube'),
  ('Baking soda'),('White vinegar'),('Squeezy bottle'),('Kinetic sand'),('Stone'),
  ('Building block'),('Oat'),('Corn'),('Powder paint'),('Instant snow'),('Shaving foam'),
  ('Cornflour'),('Cornstarch'),('Pasta'),('Cereal'),('Wheat'),('Cornflake'),
  ('Animal'),('Peg people'),('Peg'),('Artificial grass'),('Road'),('Railway track'),
  ('Vehicle'),('Car'),('Train'),('Bus'),('Truck'),('Glass pebble'),('Glass gem'),
  ('Glass nugget'),('Tree'),('Log slice'),('Shell'),('Pebble'),('Scarf'),('Bath toy'),
  ('Finger puppet'),('Bubble'),('Instrument'),('Fabric book'),('Wipe packet'),
  ('Rail tape'),('Water bead'),('Rolling pin'),('Stamper'),('Tissue paper'),
  ('Punch'),('Thermal laminator machine'),('Thermal laminating pouch'),
  ('Paint brush'),('Watercolor'),('Tape'),('Color tape'),('Masking tape'),
  ('Washi tape'),('Elastic band'),('Dried lavender'),('Lavender essential oil'),
  ('Spray bottle'),('Foam'),('Gelly'),('Figurine'),('Basket'),('Hammer'),
  ('Pumpkin'),('Golf tee'),('Construction paper'),('Brush'),('Glue'),('Canister'),('Tube')
  */
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Materials', [
      {
        name: 'Pom pom',
      },
      {
        name: 'Tub',
      },
      {
        name: 'Pitcher',
      },
      {
        name: 'Bin',
      },
      {
        name: 'Tweezer',
      },
      {
        name: 'Tong',
      },
      {
        name: 'Muffin tin',
      },
      {
        name: 'Cake case',
      },
      {
        name: 'Baking cup',
      },
      {
        name: 'Cup',
      },
      {
        name: 'Water bottle',
      },
      {
        name: 'Jar',
      },
      {
        name: 'Pumpkin pie spice',
      },
      {
        name: 'Flour',
      },
      {
        name: 'Vegetable oil',
      },
      {
        name: 'Oil',
      },
      {
        name: 'Tray',
      },
      {
        name: 'Mini pumpkin',
      },
      {
        name: 'Wooden scoop',
      },
      {
        name: 'Cookie cutter',
      },
      {
        name: 'Tablespoon',
      },
      {
        name: 'Teaspoon',
      },
      {
        name: 'Spoon',
      },
      {
        name: 'Scoop',
      },
      {
        name: 'Number candle',
      },
      {
        name: 'Candle',
      },
      {
        name: 'Felt ball',
      },
      {
        name: 'Flower',
      },
      {
        name: 'Leaf',
      },
      {
        name: 'Apple',
      },
      {
        name: 'Cardboard',
      },
      {
        name: 'Contact paper',
      },
      {
        name: 'Egg-box',
      },
      {
        name: 'Food coloring',
      },
      {
        name: 'Cocktail stick',
      },
      {
        name: 'Stick',
      },
      {
        name: 'Fork',
      },
      {
        name: 'Knife',
      },
      {
        name: 'Water',
      },
      {
        name: 'Container',
      },
      {
        name: 'Chia seed',
      },
      {
        name: 'Pearl',
      },
      {
        name: 'Hama bead',
      },
      {
        name: 'Play dough',
      },
      {
        name: 'Pipe cleaner',
      },
      {
        name: 'Glitter',
      },
      {
        name: 'Q-tip',
      },
      {
        name: 'Paint',
      },
      {
        name: 'Grapat Mandala piece',
      },
      {
        name: 'Dolly peg',
      },
      {
        name: 'Clay',
      },
      {
        name: 'Polymer clay',
      },
      {
        name: 'Air-dry clay',
      },
      {
        name: 'Zip-loc bag',
      },
      {
        name: 'Silicone food bag',
      },
      {
        name: 'Matchstick',
      },
      {
        name: 'Paper',
      },
      {
        name: 'Scissors',
      },
      {
        name: 'Potato',
      },
      {
        name: 'Ice cube tray',
      },
      {
        name: 'Pipette',
      },
      {
        name: 'Dropper',
      },
      {
        name: 'Rice',
      },
      {
        name: 'Chalk',
      },
      {
        name: 'Grated chalk',
      },
      {
        name: 'Vanilla essence',
      },
      {
        name: 'Sprinkle',
      },
      {
        name: 'Glue gun',
      },
      {
        name: 'Shoebox',
      },
      {
        name: 'Cardboard box',
      },
      {
        name: 'Cocoa powder',
      },
      {
        name: 'Salt',
      },
      {
        name: 'Sand',
      },
      {
        name: 'Paint pen',
      },
      {
        name: 'Ice cube',
      },
      {
        name: 'Baking soda',
      },
      {
        name: 'White vinegar',
      },
      {
        name: 'Squeezy bottle',
      },
      {
        name: 'Kinetic sand',
      },
      {
        name: 'Stone',
      },
      {
        name: 'Building block',
      },
      {
        name: 'Oat',
      },
      {
        name: 'Corn',
      },
      {
        name: 'Powder paint',
      },
      {
        name: 'Instant snow',
      },
      {
        name: 'Shaving foam',
      },
      {
        name: 'Cornflour',
      },
      {
        name: 'Cornstarch',
      },
      {
        name: 'Pasta',
      },
      {
        name: 'Cereal',
      },
      {
        name: 'Wheat',
      },
      {
        name: 'Cornflake',
      },
      {
        name: 'Animal',
      },
      {
        name: 'Peg people',
      },
      {
        name: 'Peg',
      },
      {
        name: 'Artificial grass',
      },
      {
        name: 'Road',
      },
      {
        name: 'Railway track',
      },
      {
        name: 'Vehicle',
      },
      {
        name: 'Car',
      },
      {
        name: 'Train',
      },
      {
        name: 'Bus',
      },
      {
        name: 'Truck',
      },
      {
        name: 'Glass pebble',
      },
      {
        name: 'Glass gem',
      },
      {
        name: 'Glass nugget',
      },
      {
        name: 'Tree',
      },
      {
        name: 'Log slice',
      },
      {
        name: 'Shell',
      },
      {
        name: 'Pebble',
      },
      {
        name: 'Scarf',
      },
      {
        name: 'Bath toy',
      },
      {
        name: 'Finger puppet',
      },
      {
        name: 'Bubble',
      },
      {
        name: 'Instrument',
      },
      {
        name: 'Fabric book',
      },
      {
        name: 'Wipe packet',
      },
      {
        name: 'Rail tape',
      },
      {
        name: 'Water bead',
      },
      {
        name: 'Rolling pin',
      },
      {
        name: 'Stamper',
      },
      {
        name: 'Tissue paper',
      },
      {
        name: 'Punch',
      },
      {
        name: 'Thermal laminator machine',
      },
      {
        name: 'Thermal laminating pouch',
      },
      {
        name: 'Paint brush',
      },
      {
        name: 'Watercolor',
      },
      {
        name: 'Tape',
      },
      {
        name: 'Color tape',
      },
      {
        name: 'Masking tape',
      },
      {
        name: 'Washi tape',
      },
      {
        name: 'Elastic band',
      },
      {
        name: 'Dried lavender',
      },
      {
        name: 'Lavender essential oil',
      },
      {
        name: 'Spray bottle',
      },
      {
        name: 'Foam',
      },
      {
        name: 'Gelly',
      },
      {
        name: 'Figurine',
      },
      {
        name: 'Basket',
      },
      {
        name: 'Hammer',
      },
      {
        name: 'Pumpkin',
      },
      {
        name: 'Golf tee',
      },
      {
        name: 'Construction paper',
      },
      {
        name: 'Brush',
      },
      {
        name: 'Glue',
      },
      {
        name: 'Canister',
      },
      {
        name: 'Tube',
      },
    ]);
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Material', null, {});
  },
};
