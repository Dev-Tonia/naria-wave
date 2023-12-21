// eslint-disable-next-line react/prop-types
export default function Tiles({ title }) {
  return (
    <span
      className=" rounded-pill d-inline-block mx-1
     px-3 py-2 border-1 custom-shadow "
    >
      {title}
    </span>
  );
}
