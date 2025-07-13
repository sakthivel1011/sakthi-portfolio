import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;

    const updateCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }

      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button"
      ) {
        setCursorType("pointer");
      } else if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("contenteditable") === "true"
      ) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className={`custom-cursor ${cursorType}`} ref={cursorRef}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        className="cursor-svg"
      >
        <path
          d="M2 2L30 16L18 18L20 30L2 2Z"
          fill="#00ffc3"
          stroke="#00ffc3"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
