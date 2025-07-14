export default function sortListByDate(list) {
  return list.sort((a, b) => {
    return new Date(b.endDate) - new Date(a.endDate);
  });
}
