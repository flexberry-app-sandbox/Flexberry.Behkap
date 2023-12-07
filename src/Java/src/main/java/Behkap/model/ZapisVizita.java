package Behkap.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Behkap.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаписьВизита
 */
@Entity(name = "IISBehkapЗаписьВизита")
@Table(schema = "public", name = "ЗаписьВизита")
public class ZapisVizita {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "записи")
    private Integer записи;

    @Column(name = "услуги")
    private Integer услуги;

    @Column(name = "визита")
    private Integer визита;

    @Column(name = "сотрудника")
    private Integer сотрудника;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "sotrudnik")
    @Convert("sotrudnik")
    @Column(name = "сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sotrudnik", insertable = false, updatable = false)
    private sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vizit")
    @Convert("Vizit")
    @Column(name = "Визит", length = 16, unique = true, nullable = false)
    private UUID _vizitid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vizit", insertable = false, updatable = false)
    private Vizit vizit;


    public ZapisVizita() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getзаписи() {
      return записи;
    }

    public void setзаписи(Integer записи) {
      this.записи = записи;
    }

    public Integer getуслуги() {
      return услуги;
    }

    public void setуслуги(Integer услуги) {
      this.услуги = услуги;
    }

    public Integer getвизита() {
      return визита;
    }

    public void setвизита(Integer визита) {
      this.визита = визита;
    }

    public Integer getсотрудника() {
      return сотрудника;
    }

    public void setсотрудника(Integer сотрудника) {
      this.сотрудника = сотрудника;
    }


}