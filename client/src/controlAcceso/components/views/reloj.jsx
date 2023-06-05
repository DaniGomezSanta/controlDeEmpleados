import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Actualizar el tiempo cada segundo
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  // Formatear el tiempo en horas, minutos y segundos
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;