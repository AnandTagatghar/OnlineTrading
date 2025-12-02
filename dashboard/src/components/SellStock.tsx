import Box from "@mui/material/Box";
import NumberField from "./NumberField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import type { watchListType } from "../types/types";
import { useSellContext } from "../Context/Provider";

const SellStock = ({ itemDetails }: { itemDetails: watchListType }) => {
  const sellContext = useSellContext();

  function handleCancelButton() {
    sellContext.updateSellData(null);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen absolute top-0 z-10">
      <div className="p-15 border border-black rounded textPrimary w-[30%] bg-white">
        <h1 className="text-xl font-bold mb-10">{itemDetails.name}</h1>

        <div className="pb-3">
          <Box sx={{ display: "grid", gap: 4 }}>
            <NumberField label="Qty." min={0} size="small" defaultValue={2} />
          </Box>
        </div>

        <div className="pb-3">
          <Box sx={{ display: "grid", gap: 4 }}>
            <NumberField
              label="Price"
              min={0}
              size="small"
              defaultValue={500}
            />
          </Box>
        </div>

        <div className="pt-3">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button sx={{ textTransform: "none" }}>Sell</Button>
            <Button
              color="inherit"
              sx={{ textTransform: "none" }}
              onClick={handleCancelButton}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SellStock;
