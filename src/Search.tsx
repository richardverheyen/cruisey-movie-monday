import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from "@mui/material/Button";
import computer from "./assets/cruise-computer.png";
import { ChangeEventHandler } from "react";
import TomCruise from "./TomCruise";
import { Button } from "@mui/material";

export default function Search({
  handleQuery,
  query,
  loading,
}: {
  handleQuery: ChangeEventHandler<HTMLInputElement>;
  query: String;
  loading: Boolean;
}) {
  const [tomVisible, setTomVisible] = useState(false);

  return (
    <section id="search" style={{ backgroundImage: `url(${computer})` }}>
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
            endAdornment: loading && <InputAdornment position="end"><CircularProgress size="24px" /></InputAdornment>,
          }}
        />
        <Button variant="outlined" fullWidth>
          Just Tom Cruise
        </Button>
      </div>
    </section>
  );
}
