import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  mail: DS.attr('string'),
  дата: DS.attr('date'),
  код: DS.attr('number'),
  номер: DS.attr('number'),
  пол: DS.attr('i-i-s-behkap-пол'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  mail: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-behkap-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-behkap-клиент', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    пол: attr('Пол', { index: 4 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-behkap-клиент', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    пол: attr('Пол', { index: 4 })
  });
};
