import "./Layout.css";

function Layout({ children, hasDetectedMood }) {
  return (
    <div className={`app-layout ${hasDetectedMood ? "app-layout--has-results" : ""}`}>
      <div className="aura-layer" />
      <div className="app-layout-inner">
        {children}
      </div>
    </div>
  );
}

export default Layout;