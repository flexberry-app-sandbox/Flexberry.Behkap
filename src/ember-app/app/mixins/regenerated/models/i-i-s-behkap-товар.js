import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  производитель: DS.attr('string'),
  товара: DS.attr('string')
});

export let ValidationRules = {
  производитель: {
    descriptionKey: 'models.i-i-s-behkap-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товара: {
    descriptionKey: 'models.i-i-s-behkap-товар.validations.товара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-behkap-товар', {
    товара: attr('Товара', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-behkap-товар', {
    товара: attr('Товара', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });
};
