// create your App component here

import React, { useEffect, useState } from "react";
import { handlers } from "../mocks/handlers";

function App () {

const [newData, setNewdata] = useState([]);
const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setNewdata(data)
            setPageLoaded(!pageLoaded)}
    )}, []);

    console.log(newData)

    if (!pageLoaded) return <p>Loading...</p>

    return (
    <div>
        <span><img src={newData.message} alt="A Random Dog"/></span>
    </div>
    )
}

export default App;