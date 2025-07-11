const directionClassMap = {
  column: "flex-col",
  row: "flex-row",
};

const justifyContentClassMap = {
  start: "justify-start",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignItemsClassMap = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
};

export default function Flex({
  direction = "row",
  justifyContent = "start",
  alignItems = "start",
  children,
}) {
  return (
    <div
      className={`flex ${justifyContentClassMap[justifyContent]} ${alignItemsClassMap[alignItems]} ${directionClassMap[direction]}`}
    >
      {children}
    </div>
  );
}
