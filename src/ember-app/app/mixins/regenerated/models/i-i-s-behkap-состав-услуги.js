import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  табл: DS.attr('number'),
  товара: DS.attr('number'),
  услуги: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-behkap-товар', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-behkap-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  табл: {
    descriptionKey: 'models.i-i-s-behkap-состав-услуги.validations.табл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товара: {
    descriptionKey: 'models.i-i-s-behkap-состав-услуги.validations.товара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-behkap-состав-услуги.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-behkap-состав-услуги.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-behkap-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-behkap-состав-услуги', {
    услуги: attr('Услуги', { index: 0 }),
    товара: attr('Товара', { index: 1 }),
    табл: attr('Табл', { index: 2 }),
    товар: belongsTo('i-i-s-behkap-товар', 'Товар', {
      товара: attr('Товара', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'товара' })
  });
};
