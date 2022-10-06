import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Layout from '../components/Layout/index'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Layout children={undefined}/>
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
