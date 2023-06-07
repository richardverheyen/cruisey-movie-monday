import { useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";
import computer from "./assets/cruise-computer.png";
import TomCruise from "./TomCruise";
import { Button } from "@mui/material";

type Props = {
  setQuery: Dispatch<SetStateAction<any>>;
  query: String;
  loading: Boolean;
  setCruiseOnly: Dispatch<SetStateAction<any>>;
};

export default function Search({
  setQuery,
  setCruiseOnly,
  query,
  loading,
}: Props) {
  const [tomVisible, setTomVisible] = useState(false);

  function handleQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setCruiseOnly(false);
  }

  return (
    <section id="search">
      <div
        className="computer"
        style={{ backgroundImage: `url(${computer})` }}
      />

      <TomCruise tomVisible={tomVisible} />

      <div className="gutters">
        <TextField
          id="search-input"
          variant="outlined"
          autoComplete="off"
          size="small"
          margin="dense"
          label="Search Movies"
          onChange={handleQuery}
          onMouseEnter={() => setTomVisible(true)}
          onMouseLeave={() => setTomVisible(false)}
          value={query}
          data-testid="search-input"
          fullWidth
          InputProps={{
            endAdornment: loading && (
              <InputAdornment position="end">
                <CircularProgress size="24px" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{marginBottom: "80px"}}
          onClick={() => setCruiseOnly(true)}
          variant="outlined"
          fullWidth
        >
          Just Cruise
        </Button>
      </div>
    </section>
  );
}
