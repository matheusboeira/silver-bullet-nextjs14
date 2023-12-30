import { Link } from '@nextui-org/react'

export const AuthFooter = () => {
  return (
    <footer className="flex flex-col items-center md:flex-row md:items-start md:justify-between mx-10">
      <small className="text-center text-xs">Privacy Policy</small>
      <small className="text-center text-xs flex flex-wrap justify-center gap-0.5">
        <span>Copyright &copy;</span>
        <Link
          href="https://lesse.com.br/site/"
          className="text-xs"
          color="foreground"
          underline="hover"
          isExternal
        >
          Silver Bullet, {new Date().getFullYear()}.
        </Link>
        <span className="text-center">All rights reserved.</span>
      </small>
    </footer>
  )
}
