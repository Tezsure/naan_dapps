import React from "react";

function Dapp({ dapp }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "15px",
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <img
            src={dapp.image}
            style={{ height: "60px", borderRadius: "10px" }}
            alt={dapp.name}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "5px",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: "bold" }}>
              {dapp.name}
            </span>
            <span style={{ color: "#958E99", fontSize: "12px" }}>
              {dapp.description}
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1E1C1F",
            borderRadius: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
            paddingTop: "8px",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => window.open(dapp.url, "_blank")}
        >
          <span style={{ color: "#958E99", fontWeight: "bold" }}>Launch</span>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          marginLeft: "85px",
          marginRight: "15px",
          backgroundColor: "#1E1C1F",
        }}
      />
    </div>
  );
}

export default Dapp;
