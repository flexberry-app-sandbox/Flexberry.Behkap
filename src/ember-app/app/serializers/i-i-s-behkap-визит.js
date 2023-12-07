import { Serializer as ВизитSerializer } from
  '../mixins/regenerated/serializers/i-i-s-behkap-визит';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВизитSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
