export interface IPattern {
  name: string
  src: string
  pattern?: boolean[][]
  close?: () => void
}
