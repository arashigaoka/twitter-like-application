type ButtonProps = {
  label: string;
  clickHandler: () => void;
};

export function Button({ label, clickHandler }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="mt-1 bg-blue-400 hover:bg-blue-700 text-white p-2"
      onClick={() => clickHandler()}
    >
      {label}
    </button>
  );
}
