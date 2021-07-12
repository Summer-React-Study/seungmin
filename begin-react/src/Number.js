import React, { useState } from "react";

function Number() {
    const [ number, setNumber ] = useState(1);

    return (
        <div className="number">
            now state is : {number}
        </div>
    )
}

export default Number;