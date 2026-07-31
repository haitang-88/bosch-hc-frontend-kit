// eslint-disable-next-line no-use-before-define
import * as React from "react";

import TileInteractiveDemonstrator from "./tileInteractiveDemonstrator";
import TileDemonstrator from "./tileDemonstrator";
import { variantsInteractive, variantsStatic } from "../tile";

const AllTilesDemonstrator: React.FunctionComponent = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(2, auto)",
        placeItems: "start start",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, fr)",
          gap: "1rem",
        }}
      >
        {variantsInteractive.map((variant) => {
          return (
            <>
              <div style={{ gridColumnStart: 1 }}>
                <TileInteractiveDemonstrator
                  name={variant}
                  variant={variant}
                  isInteractive
                ></TileInteractiveDemonstrator>
              </div>
              <div style={{ gridColumnStart: 2 }}>
                <TileInteractiveDemonstrator
                  name={variant}
                  variant={variant}
                  spacing="small"
                  isInteractive
                ></TileInteractiveDemonstrator>
              </div>
              {variant.startsWith("integrated-") && (
                <div style={{ gridColumnStart: 3 }}>
                  <TileInteractiveDemonstrator
                    name={variant}
                    variant={variant}
                    spacing="flat"
                    isInteractive
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: "1rem",
        }}
      >
        {variantsStatic.map((variant) => {
          return (
            <>
              <div style={{ gridColumnStart: 1 }}>
                <TileDemonstrator
                  name={variant}
                  variant={variant}
                ></TileDemonstrator>
              </div>
              <div style={{ gridColumnStart: 2 }}>
                <TileDemonstrator
                  name={variant}
                  variant={variant}
                  spacing="small"
                ></TileDemonstrator>
              </div>
              {[""].includes(variant) && (
                <div style={{ gridColumnStart: 3 }}>
                  <TileDemonstrator
                    name={variant}
                    variant={variant}
                    spacing="flat"
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllTilesDemonstrator;
