import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBehkapВизитLForm from './forms/i-i-s-behkap-визит-l';
import IISBehkapДолжностиLForm from './forms/i-i-s-behkap-должности-l';
import IISBehkapКлиентLForm from './forms/i-i-s-behkap-клиент-l';
import IISBehkapсотрудникLForm from './forms/i-i-s-behkap-сотрудник-l';
import IISBehkapТоварLForm from './forms/i-i-s-behkap-товар-l';
import IISBehkapУслугаLForm from './forms/i-i-s-behkap-услуга-l';
import IISBehkapВизитEForm from './forms/i-i-s-behkap-визит-e';
import IISBehkapДолжностиEForm from './forms/i-i-s-behkap-должности-e';
import IISBehkapКлиентEForm from './forms/i-i-s-behkap-клиент-e';
import IISBehkapсотрудникEForm from './forms/i-i-s-behkap-сотрудник-e';
import IISBehkapТоварEForm from './forms/i-i-s-behkap-товар-e';
import IISBehkapУслугаEForm from './forms/i-i-s-behkap-услуга-e';
import IISBehkapВизитModel from './models/i-i-s-behkap-визит';
import IISBehkapДолжностиModel from './models/i-i-s-behkap-должности';
import IISBehkapЗаписьВизитаModel from './models/i-i-s-behkap-запись-визита';
import IISBehkapКлиентModel from './models/i-i-s-behkap-клиент';
import IISBehkapСоставУслугиModel from './models/i-i-s-behkap-состав-услуги';
import IISBehkapсотрудникModel from './models/i-i-s-behkap-сотрудник';
import IISBehkapТоварModel from './models/i-i-s-behkap-товар';
import IISBehkapУслугаModel from './models/i-i-s-behkap-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-behkap-визит': IISBehkapВизитModel,
    'i-i-s-behkap-должности': IISBehkapДолжностиModel,
    'i-i-s-behkap-запись-визита': IISBehkapЗаписьВизитаModel,
    'i-i-s-behkap-клиент': IISBehkapКлиентModel,
    'i-i-s-behkap-состав-услуги': IISBehkapСоставУслугиModel,
    'i-i-s-behkap-сотрудник': IISBehkapсотрудникModel,
    'i-i-s-behkap-товар': IISBehkapТоварModel,
    'i-i-s-behkap-услуга': IISBehkapУслугаModel
  },

  'application-name': 'Behkap',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Behkap',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behkap',
          title: 'Behkap'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        behkap: {
          caption: 'Behkap',
          title: 'Behkap',
          'i-i-s-behkap-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-behkap-визит-l': {
            caption: 'Визит',
            title: ''
          },
          'i-i-s-behkap-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-behkap-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-behkap-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-behkap-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        'справочник-клиентов': {
          caption: 'Справочник клиентов',
          title: 'Справочник клиентов',
          'i-i-s-behkap-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-behkap-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-behkap-визит-l': IISBehkapВизитLForm,
    'i-i-s-behkap-должности-l': IISBehkapДолжностиLForm,
    'i-i-s-behkap-клиент-l': IISBehkapКлиентLForm,
    'i-i-s-behkap-сотрудник-l': IISBehkapсотрудникLForm,
    'i-i-s-behkap-товар-l': IISBehkapТоварLForm,
    'i-i-s-behkap-услуга-l': IISBehkapУслугаLForm,
    'i-i-s-behkap-визит-e': IISBehkapВизитEForm,
    'i-i-s-behkap-должности-e': IISBehkapДолжностиEForm,
    'i-i-s-behkap-клиент-e': IISBehkapКлиентEForm,
    'i-i-s-behkap-сотрудник-e': IISBehkapсотрудникEForm,
    'i-i-s-behkap-товар-e': IISBehkapТоварEForm,
    'i-i-s-behkap-услуга-e': IISBehkapУслугаEForm
  },

});

export default translations;
