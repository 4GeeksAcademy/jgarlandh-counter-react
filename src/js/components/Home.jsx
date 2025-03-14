import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {

	const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

	return (
		<div className="text-center">

			<SecondsCounter seconds={seconds} />

		</div>
	);
};

export default Home;