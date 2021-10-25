/** @format */

import { useEffect, useRef } from "react";

export const CreateUser = ({ active, setActive }) => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    console.log(active);
    if (active) {
      if (ref.current.contains(e.target)) {
        console.log("clicked inside");
        return;
      }
      console.log("clicked outside");
      setActive(false);
    }
  };

  return (
    <div>
      {active && (
        <div>
          <div className="blocker"></div>
          <div className="createuser-modal" ref={ref}>
            <h2>Register</h2>
            <h5>We'll only need your email</h5>
            <form>
              <input type="email" placeholder="Enter your email" name="email" />
              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
