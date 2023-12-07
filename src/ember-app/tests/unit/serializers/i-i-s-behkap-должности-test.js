import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behkap-должности', 'Unit | Serializer | i-i-s-behkap-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-behkap-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-behkap-пол',

    'model:i-i-s-behkap-визит',
    'model:i-i-s-behkap-должности',
    'model:i-i-s-behkap-запись-визита',
    'model:i-i-s-behkap-клиент',
    'model:i-i-s-behkap-состав-услуги',
    'model:i-i-s-behkap-сотрудник',
    'model:i-i-s-behkap-товар',
    'model:i-i-s-behkap-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
