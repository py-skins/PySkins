import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Layout from "../../Layout/Layout";
import styles from "./MarketPlace.module.scss";
import { DummyData } from "../marketData";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { useNavigate } from "react-router-dom";

const formatCurrency = (value) => {
  return (
    <p>
      Starting at:{" "}
      <span className={styles.price}>
        {value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </p>
  );
};

const MarketPlace = () => {
  const navigate = useNavigate();

  const [skins, setSkins] = useState(DummyData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    if (selectedProduct === null || selectedProduct === undefined) {
      return;
    }
    navigate(`/marketplace/${selectedProduct.id}`);
  }, [selectedProduct]);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" style={{ marginLeft: "2px" }} />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
        <p style={{ alignSelf: "end" }}>{`In total there are ${
          skins ? skins.length : 0
        } products.`}</p>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className={styles.container_section}>
      <Layout>
        <DataTable
          value={skins}
          paginator
          rows={5}
          dataKey="id"
          filters={filters}
          globalFilterFields={["name"]}
          header={header}
          loading={loading}
          removableSort
          selectionMode="single"
          selection={selectedProduct}
          onSelectionChange={(e) => {
            setSelectedProduct(e.value);
          }}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column
            field="name"
            header="Name"
            sortable
            body={(skin) => (
              <div className={styles.productInfo}>
                <img
                  className={styles.productImage}
                  style={{
                    border: `2px solid ${skin.rarity_color}`,
                  }}
                  src={skin.main_image_url}
                  alt={skin.main_image_url}
                />
                <p className={styles.productName}>{skin.name}</p>
              </div>
            )}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            sortable
            body={(skin) => skin.quantity}
          ></Column>
          <Column
            field="price"
            header="Price"
            sortable
            body={(skin) => formatCurrency(skin.price)}
          ></Column>
        </DataTable>
      </Layout>
    </div>
  );
};

export default MarketPlace;
