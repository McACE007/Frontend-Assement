import ColorPalette from '@/components/ColorPalette'
import Link from 'next/link';
import React from 'react'

type Props = {}

const initialColors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A8',
  '#FF8F33',
  '#8F33FF',
  '#33FFF1',
  '#F1FF33'
];

export default function ColorPage({ }: Props) {
  return (
    <>
      <Link href={'/'}>Home</Link>
      <ColorPalette initialColors={initialColors} />
    </>
  )
}
