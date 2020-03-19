import Header from "./Header";
import GlobalStyles from "../style/GlobalStyles";
import { initGA, logPageView } from "./utils/analytics";
import { useEffect } from "react";

function Layout(props) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <div>
      <div className="container">{props.children}</div>
      {GlobalStyles}
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Layout;
