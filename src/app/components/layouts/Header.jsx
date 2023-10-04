import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between px-8 py-4 text-xl'>
      <h1 className='--card'>Nordic Rose</h1>
      <nav>
        <ul className='space-x-4'>
          <Link className='cursor-pointer' href='/'>Blog</Link>
          <Link className='cursor-pointer' href='/'>About</Link>
          <Link className='cursor-pointer' href='/'>Links</Link>
          <Link  className='cursor-pointer' href='/'>Projects</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header