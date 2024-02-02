use('Staging');

db.runCommand({
  collMod: 'firstCollection',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Updated FirstCollection Object Validation',
      required: ['x'],
      properties: {
        x: {
          bsonType: 'int',
          minimum: 0,
          maximum: 10,
          description: "'x' must be an integer between 0 & 10 and is required",
        },
        y: {
          bsonType: 'string',
          description: "'y' must be a string",
        },
      },
    },
  },
  validationAction: 'error',
});
