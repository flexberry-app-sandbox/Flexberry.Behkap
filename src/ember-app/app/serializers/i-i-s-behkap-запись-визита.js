import { Serializer as ЗаписьВизитаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-behkap-запись-визита';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьВизитаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
