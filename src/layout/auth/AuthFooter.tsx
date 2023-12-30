import { Link } from '@nextui-org/react'

export const AuthFooter = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center sm:justify-between gap-3">
      <small className="text-center text-xs">Privacy Policy</small>
      <small className="text-center text-xs flex flex-wrap items-start justify-center gap-1">
        <span>Copyright &copy;</span>
        <Link
          href="https://lesse.com.br/site/"
          className="text-xs"
          color="foreground"
          underline="hover"
        >
          Silver Bullet, {new Date().getFullYear()}.{' '}
        </Link>
        <span>All rights reserved.</span>
      </small>
    </footer>
  )
}
