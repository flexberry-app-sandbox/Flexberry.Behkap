import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  визита: DS.attr('number'),
  время: DS.attr('date'),
  код: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-behkap-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-behkap-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  визита: {
    descriptionKey: 'models.i-i-s-behkap-визит.validations.визита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-behkap-визит.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-behkap-визит.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-behkap-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-behkap-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-behkap-визит', {
    визита: attr('Визита', { index: 0 }),
    код: attr('Код', { index: 1 }),
    время: attr('Время', { index: 2 }),
    клиент: belongsTo('i-i-s-behkap-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-behkap-запись-визита', 'Запись визита', {
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
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-behkap-визит', {
    визита: attr('Визита', { index: 0 }),
    код: attr('Код', { index: 1 }),
    время: attr('Время', { index: 2 }),
    клиент: belongsTo('i-i-s-behkap-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
