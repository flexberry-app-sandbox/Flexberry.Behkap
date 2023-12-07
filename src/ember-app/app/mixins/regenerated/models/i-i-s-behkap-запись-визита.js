import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  визита: DS.attr('number'),
  записи: DS.attr('number'),
  сотрудника: DS.attr('number'),
  услуги: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-behkap-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-behkap-услуга', { inverse: null, async: false }),
  визит: DS.belongsTo('i-i-s-behkap-визит', { inverse: 'записьВизита', async: false })
});

export let ValidationRules = {
  визита: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.визита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  записи: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.записи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудника: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.сотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  визит: {
    descriptionKey: 'models.i-i-s-behkap-запись-визита.validations.визит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВизитаE', 'i-i-s-behkap-запись-визита', {
    записи: attr('Записи', { index: 0 }),
    услуги: attr('Услуги', { index: 1 }),
    визита: attr('Визита', { index: 2 }),
    сотрудника: attr('Сотрудника', { index: 3 }),
    услуга: belongsTo('i-i-s-behkap-услуга', 'Услуга', {
      услуга: attr('Услуга', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'услуга' }),
    сотрудник: belongsTo('i-i-s-behkap-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' })
  });
};
