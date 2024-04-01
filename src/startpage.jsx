import React, { useEffect } from "react";

export const Startpage = () => {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".parallax").forEach(function (move) {
        var moving_value = -2;
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="startpage">
      <span className="top-left">16-17 AUGUSTI</span>
      <span className="top-right">ÖRBYHUS SLOTT (ORANGERIET)</span>
      <span className="bottom-left">RSVP</span>
      <span className="bottom-right">Text</span>
      <header className="heading parallax floating">
        More info coming soon...
      </header>
    </div>
  );
};
