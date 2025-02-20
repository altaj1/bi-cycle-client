import React, { useEffect, useRef } from "react";

interface OutsideClickProps {
  children: React.ReactNode;
  onOutsideClick: () => void;
  className?: string;
}

const OutsideClick: React.FC<OutsideClickProps> = ({
  children,
  onOutsideClick,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // onOutsideClick();
      console.log(wrapperRef?.current?.contains(event.target as Node));
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <section ref={wrapperRef} className={className}>
      {children}
    </section>
  );
};

export default OutsideClick;
