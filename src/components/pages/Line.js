export default function Line({
  width,
  height = 0.5,
  backgroundColor = "grey",
  opacity,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        opacity,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }}
    />
  );
}
