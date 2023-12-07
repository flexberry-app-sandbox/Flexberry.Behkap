package Behkap.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Behkap.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Визит
 */
@Entity(name = "IISBehkapВизит")
@Table(schema = "public", name = "Визит")
public class Vizit {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "визита")
    private Integer визита;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "время")
    private Date время;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "vizit", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapisVizita> zapisvizitas;


    public Vizit() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getвизита() {
      return визита;
    }

    public void setвизита(Integer визита) {
      this.визита = визита;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }

    public Date getвремя() {
      return время;
    }

    public void setвремя(Date время) {
      this.время = время;
    }


}