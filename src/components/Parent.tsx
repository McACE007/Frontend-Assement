'use client'
import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

type Props = {}

export default function Parent({ }: Props) {
  const [money, setMoney] = useState(0);

  function handleMoneyChange(num: number) {
    setMoney(prev => prev + num);
  }

  return (
    <>
      <h2>Money: {money}</h2>
      <Child1 handleMoneyChange={handleMoneyChange} />
      <Child2 handleMoneyChange={handleMoneyChange} />
    </>
  )
}
