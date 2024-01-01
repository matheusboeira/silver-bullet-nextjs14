import dynamic from 'next/dynamic'

const Root = dynamic(() => import('./Form').then((m) => m._Root))
const Input = dynamic(() => import('./Input').then((m) => m._FormInput))

export const Form = {
  Root,
  Input
}
