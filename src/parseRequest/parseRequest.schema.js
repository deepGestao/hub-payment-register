const schemaPhone = {
  type: 'object',
  additionalProperties: false,
  required: ['area_code', 'number'],
  properties: {
    area_code: { type: 'string', minLength: 1, maxLength: 255 },
    number: { type: 'string', minLength: 1, maxLength: 255 },
  },
};

const schemaAddress = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'zip_code', 'street_name', 'street_number', 'city'],
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 255 },
    zip_code: { type: 'string', minLength: 1, maxLength: 255 },
    street_name: { type: 'string', minLength: 1, maxLength: 255 },
    street_number: { type: 'number' },
    city: {
      type: 'object',
      required: ['name'],
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  },
};

const schemaIdentification = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'number'],
  properties: {
    type: { type: 'string', enum: ['CPF', 'CNPJ'] },
    number: { type: 'string', minLength: 1, maxLength: 255 },
  },
};

const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['email'],
  properties: {
    email: { type: 'string', minLength: 1, maxLength: 255 },
    name: { type: 'string', minLength: 1, maxLength: 255 },
    lastName: { type: 'string', minLength: 1, maxLength: 255 },
    identification: schemaIdentification,
    phone: schemaPhone,
    address: schemaAddress,
  },
};

export { schema };