import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.behkap.caption'),
          title: i18n.t('forms.application.sitemap.behkap.title'),
          children: [{
            link: 'i-i-s-behkap-услуга-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-услуга-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-behkap-визит-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-визит-l.title'),
            children: null
          }, {
            link: 'i-i-s-behkap-товар-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-товар-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-behkap-должности-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-должности-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-behkap-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-сотрудник-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-behkap-клиент-l',
            caption: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.behkap.i-i-s-behkap-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-клиентов.caption'),
          title: i18n.t('forms.application.sitemap.справочник-клиентов.title'),
          children: [{
            link: 'i-i-s-behkap-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник-клиентов.i-i-s-behkap-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-клиентов.i-i-s-behkap-клиент-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-behkap-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-behkap-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-behkap-услуга-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})