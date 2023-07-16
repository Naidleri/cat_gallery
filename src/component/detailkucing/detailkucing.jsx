import React from "react";
import { useParams } from "react-router-dom";

const Detailkucing = () => {
  const { jenis } = useParams();

  const getImage = (jenis) => {
    switch (jenis) {
      case "persia":
        return (
            <div>
                <h1>b</h1>
            </div>
        )
      case "ragdoll":
        return (
          <div>
            <h1>a</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{getImage(jenis)}</h1>
    </div>
  );
};
export default Detailkucing;
