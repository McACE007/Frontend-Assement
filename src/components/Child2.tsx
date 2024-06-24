type Props = {
  handleMoneyChange: (num: number) => void;
}

export default function Child2({ handleMoneyChange }: Props) {
  return (
    <button onClick={() => handleMoneyChange(-500)}>Decrease Money</button>
  )
}
