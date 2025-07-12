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

const gapClassMap = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
};

export default function Flex({
  direction = "row",
  justifyContent = "start",
  alignItems = "start",
  gap = 2,
  children,
}) {
  return (
    <div
      className={`flex ${justifyContentClassMap[justifyContent]} ${alignItemsClassMap[alignItems]} ${directionClassMap[direction]} ${gapClassMap[gap]}`}
    >
      {children}
    </div>
  );
}
