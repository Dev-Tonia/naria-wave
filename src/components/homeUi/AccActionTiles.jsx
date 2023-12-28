// eslint-disable-next-line react/prop-types
export default function Tiles({ title }) {
  return (
    <div
      className=" rounded  d-inline-block mx-1
     px-1 py-2 border-1 custom-shadow "
    >
      <span style={{ fontSize: "15px" }}>{title}</span>
    </div>
  );
}
