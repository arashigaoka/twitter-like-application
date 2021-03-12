type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="bg-green-400 hover:bg-green-700 text-white p-2 rounded"
    >
      {label}
    </button>
  );
}
