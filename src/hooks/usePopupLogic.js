import { useState, useEffect } from "react";

const usePopupLogic = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      setPopup(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [popup]);

  return {
    popup,
    setPopup
  }
}

export default usePopupLogic;