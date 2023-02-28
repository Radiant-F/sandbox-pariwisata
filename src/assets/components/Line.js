export default function Line({
  width = "100%",
  height = 1,
  backgroundColor = "grey",
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }}
    />
  );
}
