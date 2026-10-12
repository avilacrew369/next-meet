import {  FormHTMLAttributes} from 'react'
import clsx from 'clsx'

type Props = FormHTMLAttributes<HTMLFormElement>

export  function Form(props: Props) {

    const { className } = props

  return (
    <form  {...props} className={clsx("mt-10 w-full space-y-3 p-5 shadow-2xl", className)}>
         {props.children}
    </form>

   
  )
}