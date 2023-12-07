import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-behkap-визит-l');
  this.route('i-i-s-behkap-визит-e',
  { path: 'i-i-s-behkap-визит-e/:id' });
  this.route('i-i-s-behkap-визит-e.new',
  { path: 'i-i-s-behkap-визит-e/new' });
  this.route('i-i-s-behkap-должности-l');
  this.route('i-i-s-behkap-должности-e',
  { path: 'i-i-s-behkap-должности-e/:id' });
  this.route('i-i-s-behkap-должности-e.new',
  { path: 'i-i-s-behkap-должности-e/new' });
  this.route('i-i-s-behkap-клиент-l');
  this.route('i-i-s-behkap-клиент-e',
  { path: 'i-i-s-behkap-клиент-e/:id' });
  this.route('i-i-s-behkap-клиент-e.new',
  { path: 'i-i-s-behkap-клиент-e/new' });
  this.route('i-i-s-behkap-сотрудник-l');
  this.route('i-i-s-behkap-сотрудник-e',
  { path: 'i-i-s-behkap-сотрудник-e/:id' });
  this.route('i-i-s-behkap-сотрудник-e.new',
  { path: 'i-i-s-behkap-сотрудник-e/new' });
  this.route('i-i-s-behkap-товар-l');
  this.route('i-i-s-behkap-товар-e',
  { path: 'i-i-s-behkap-товар-e/:id' });
  this.route('i-i-s-behkap-товар-e.new',
  { path: 'i-i-s-behkap-товар-e/new' });
  this.route('i-i-s-behkap-услуга-l');
  this.route('i-i-s-behkap-услуга-e',
  { path: 'i-i-s-behkap-услуга-e/:id' });
  this.route('i-i-s-behkap-услуга-e.new',
  { path: 'i-i-s-behkap-услуга-e/new' });
});

export default Router;
