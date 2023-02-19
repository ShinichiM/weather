export const Header = (): JSX.Element => {
  return (
    <header
      className="text-color-secondary header-container"
      style={{
        backgroundColor: "#262626",
        opacity: "75%",
      }}
    >
      <span className="header-content">Weather</span>
    </header>
  );
};
