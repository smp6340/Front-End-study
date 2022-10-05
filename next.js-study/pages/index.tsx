import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
        <div>
          <Link href={"/about"}>
            <a>소개</a>
          </Link>
        </div>
      <Footer />
    </>
  )
}

export default Home;
