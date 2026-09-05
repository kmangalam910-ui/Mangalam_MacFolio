import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Popup = () => {
  const ref = useRef(null)
  
  useGSAP(() => {
    const ele = ref.current;

    gsap.fromTo(ele, {scale: 1.2}, {scale: 1})
  }, [])
  
  return (
    <div
    ref={ref}
    role="status"
    aria-live="polite"
    className="p-1 fixed right-2 bottom-4"
    >
      <p className="font-semibold text-red-500 text-sm">
        This functionality will be added soon
      </p>
    </div>
  );
};

export default Popup;