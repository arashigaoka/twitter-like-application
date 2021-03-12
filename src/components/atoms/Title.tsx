type TitleProps = {
  label: string;
};

export function Title({ label }: TitleProps): JSX.Element {
  return <h1 className="text-bold text-2xl">{label}</h1>;
}
