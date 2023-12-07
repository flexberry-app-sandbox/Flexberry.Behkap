import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  пол: DS.attr('i-i-s-behkap-пол'),
  рож: DS.attr('date'),
  с: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-behkap-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рож: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.рож.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  с: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.с.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-behkap-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('сотрудникE', 'i-i-s-behkap-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    с: attr('С', { index: 2 }),
    рож: attr('Рож', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    должности: belongsTo('i-i-s-behkap-должности', 'Должности', {
      должность: attr('Должность', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('сотрудникL', 'i-i-s-behkap-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    с: attr('С', { index: 2 }),
    рож: attr('Рож', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    должности: belongsTo('i-i-s-behkap-должности', 'Должность', {
      должность: attr('Должность', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
