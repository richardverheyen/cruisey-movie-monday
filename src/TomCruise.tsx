import tomCruise from "./assets/cruise-body.png";

export default function TomCruise({tomVisible}: {tomVisible: Boolean}) {
    return (
        <img 
            id="tom-cruise"
            src={tomCruise} 
            alt="Tom Cruise" 
            className={tomVisible ? "visible" : ""}/>
    )
}