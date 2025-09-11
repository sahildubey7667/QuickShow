const timeFormat = (mintues)=>{
    const hours = Math.floor(mintues / 60);
    const mintuesRemainder = mintues % 60;
    return `${hours}h ${mintuesRemainder}m`
}

export default timeFormat;