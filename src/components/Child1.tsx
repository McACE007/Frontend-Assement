type Props = {
  handleMoneyChange: (num: number) => void;
}

export default function Child1({ handleMoneyChange }: Props) {
  return (
    <button onClick={() => handleMoneyChange(1000)}>Increase Money</button>
  )
}
