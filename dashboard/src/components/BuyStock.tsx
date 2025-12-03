import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import type { watchListType } from "../types/types";
import { useBuyContext } from "../Context/Provider";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const BuyStock = ({ itemDetails }: { itemDetails: watchListType }) => {
  const buyContext = useBuyContext();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<Number | null>(null);
  const [price, setPrice] = useState<Number | null>(null);

  function handleCancelButton() {
    buyContext.updateData(null);
  }

  async function handleBuyButton() {
    try {
      await axios.post("http://localhost:3000/orders", {
        quantity: quantity,
        price: price,
        name: itemDetails.name,
        mode: "buy",
      });

      navigate("/holdings");
    } catch (error) {
      console.error(error);
    }

    buyContext.updateData(null);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen absolute top-0 z-10">
      <div className="p-15 border border-black rounded textPrimary w-[30%] bg-white">
        <h1 className="text-xl font-bold mb-10">{itemDetails.name}</h1>

        <div className="pb-3">
          <TextField
            id="outlined-basic"
            label="Qty."
            variant="outlined"
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
            type="Number"
          />
        </div>

        <div className="pb-3">
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="Number"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
        </div>

        <div className="pt-3">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button sx={{ textTransform: "none" }} onClick={handleBuyButton}>
              Buy
            </Button>
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

export default BuyStock;
