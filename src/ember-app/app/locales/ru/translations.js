import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Behkap',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behkap',
          title: 'Behkap'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
