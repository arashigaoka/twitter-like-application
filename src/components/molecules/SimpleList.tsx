type SimpleListProps = {
  labelList: Array<string>;
};
export function SimpleList({ labelList }: SimpleListProps): JSX.Element {
  return (
    <ul className="mb-4">
      {labelList.map((label, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i} className="list-disc">
          {label}
        </li>
      ))}
    </ul>
  );
}
