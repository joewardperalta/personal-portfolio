import Grid from "./Grid";

export default function List({
  components = [],
  columns = 1,
  featured = false,
}) {
  return (
    <ul
      className={`
        ${
          featured && "p-3 border border-dashed border-tertiary-dark rounded-lg"
        } 
        `}
    >
      <Grid columns={columns}>{components}</Grid>
    </ul>
  );
}
