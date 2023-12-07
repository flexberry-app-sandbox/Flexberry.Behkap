import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behkap-услуга', 'Unit | Model | i-i-s-behkap-услуга', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
