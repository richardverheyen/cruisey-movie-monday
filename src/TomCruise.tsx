import tomCruise from "./assets/tom-cruise2.png";

export default function TomCruise({tomVisible}: {tomVisible: Boolean}) {

    const searchRect = document.getElementById("search-wrapper")?.getBoundingClientRect();
    const offset = tomVisible && searchRect ? searchRect?.top + searchRect?.height - 40 : 0

    return (
        <img 
            src={tomCruise} 
            alt="Tom Cruise" 
            style={{
                position: "fixed",
                top: "0",
                right: "0",
                width: "50vw",
                transform: `translateY(calc(-100% + ${offset}px))`,
                transitionProperty: "transform",
                transitionDuration: "1s",
                transitionTimingFunction: "cubic-bezier(.41,1.02,.84,.93)",
                pointerEvents: "none"
            }}/>
    )
}