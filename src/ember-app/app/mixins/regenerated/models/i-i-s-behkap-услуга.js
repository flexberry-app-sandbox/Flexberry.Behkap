import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('date'),
  у: DS.attr('number'),
  услуга: DS.attr('string'),
  цена: DS.attr('number'),
  составУслуги: DS.hasMany('i-i-s-behkap-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-behkap-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  у: {
    descriptionKey: 'models.i-i-s-behkap-услуга.validations.у.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-behkap-услуга.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-behkap-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-behkap-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-behkap-услуга', {
    у: attr('У', { index: 0 }),
    услуга: attr('Услуга', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительность: attr('Длительность', { index: 3 }),
    составУслуги: hasMany('i-i-s-behkap-состав-услуги', 'Состав услуги', {
      услуги: attr('Услуги', { index: 0 }),
      товара: attr('Товара', { index: 1 }),
      табл: attr('Табл', { index: 2 }),
      товар: belongsTo('i-i-s-behkap-товар', 'Товар', {
        товара: attr('Товара', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'товара' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-behkap-услуга', {
    у: attr('У', { index: 0 }),
    услуга: attr('Услуга', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительность: attr('Длительность', { index: 3 })
  });
};
