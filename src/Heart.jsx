const Heart = ({ left, top }) => {
  const style = {
    position: "absolute",
    left: `${left}px`,
    top: `${top}px`,
    // Add more styles for the heart shape
    color: "red",
    // ... other styles ...
  };

  return <div style={style}>❤️</div>;
};

export default Heart;
