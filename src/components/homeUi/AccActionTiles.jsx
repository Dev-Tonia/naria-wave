// eslint-disable-next-line react/prop-types
export default function Tiles({ title }) {
  return (
    <div
      className=" rounded  d-inline-block mx-1
     px-2 py-1 border-1 custom-shadow "
    >
      <span style={{ fontSize: "15px" }}>{title}</span>
    </div>
  );
}
