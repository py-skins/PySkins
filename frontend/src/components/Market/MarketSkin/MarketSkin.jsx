import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Layout from "../../Layout/Layout";
import styles from "./MarketSkin.module.scss";
import { DummyData } from "../marketData";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";

const formatCurrency = (value) => {
  return (
    <p>
      <span className={styles.price}>
        {value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </p>
  );
};

const MarketSkin = () => {
  const { id } = useParams();

  const [skins, setSkins] = useState(null);
  const [product, setProduct] = useState(null);

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Find product by ID
    const foundProduct = DummyData.find((item) => item.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
      setSkins(foundProduct.skins);
    } else {
      setProduct(null);
      setSkins(null);
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

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

  return (
    <div className={styles.container_section}>
      <Layout>
        {product && (
          <div className={styles.productInfo}>
            <h2>{product?.name || "Product"}</h2>
            <div style={{ width: "80%", padding: "20px" }} className="card">
              <Chart type="line" data={chartData} options={chartOptions} />
            </div>
          </div>
        )}
        <DataTable
          value={skins}
          paginator
          rows={3}
          dataKey="marketId"
          filters={filters}
          globalFilterFields={["name"]}
          loading={loading}
          removableSort
          selectionMode="single"
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column
            field="name"
            header="Name"
            sortable
            body={(skin) => (
              <div className={styles.skinInfo}>
                <img
                  className={styles.skinImage}
                  style={{
                    border: `2px solid ${skin.skin.rarity_color}`,
                  }}
                  src={skin.skin.main_image_url}
                  alt={skin.skin.main_image_url}
                />
                <p className={styles.skinName}>{skin.skin.name}</p>
              </div>
            )}
          ></Column>
          <Column
            field="skin.owner"
            header="Owner"
            sortable
            body={(skin) => skin.skin.owner}
          ></Column>
          <Column
            field="skin.price"
            header="Price"
            sortable
            body={(skin) => formatCurrency(skin.skin.price)}
          ></Column>
          <Column
            field="buy"
            body={(skin) => <Button label="Buy"></Button>}
          ></Column>
        </DataTable>
      </Layout>
    </div>
  );
};

export default MarketSkin;
