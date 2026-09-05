import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, focusWindow } from "#store/windowSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const windows = useSelector((store) => store.window);
    const dispatch = useDispatch();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const ele = ref.current;
      if (!ele || !isOpen) return;

      ele.style.display = "block";

      gsap.fromTo(
        ele,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.inOut" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const ele = ref.current;
      if(!ele) return;

      const [instance] = Draggable.create(ele, {
        zIndexBoost: false, 
        onPress: () => dispatch(focusWindow(windowKey))
      });

      return () => instance.kill()
    }, [])

    useLayoutEffect(() => {
      const ele = ref.current;
      if (!ele) return;

      ele.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        onMouseDown={() => dispatch(focusWindow(windowKey))}
        className="absolute"
      >
        <Component
          {...props}
          onClose={() => dispatch(closeWindow(windowKey))}
        />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
