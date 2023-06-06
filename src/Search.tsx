import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import computer from "./assets/computer.png";
import { ChangeEventHandler } from 'react';
import TomCruise from './TomCruise';

export default function Search({handleQuery, query}: {handleQuery: ChangeEventHandler<HTMLInputElement>, query: String}) {

    const [tomVisible, setTomVisible] = useState(false);

    return (<>
            <div id="search-wrapper" 
                onMouseEnter={() => setTomVisible(true)}
                onMouseLeave={() => setTomVisible(false)}
                style={{
                    backgroundImage: `url(${computer})`,
                    width: "376px",
                    height: "380px",
                    padding: "34px 100px",
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                }}>
                <TextField 
                    id="search" 
                    variant="outlined" 
                    autoComplete="off"
                    size='small'
                    margin="dense"
                    label="Search Movies" 
                    onChange={handleQuery}
                    value={query} 
                    data-testid="search" />
                <Button 
                    variant="outlined" 
                    data-testid="lucky">
                    Search
                </Button>
            </div>
            <TomCruise tomVisible={tomVisible} />
        </>)
}