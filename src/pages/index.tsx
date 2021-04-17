import Layout from '../components/Layout'
import Link from 'next/link'
import AllUsers from '../components/AllUsers'
import RequireLogin from '../components/RequireLogin'
import { useSession } from 'next-auth/client'

const App = () => {
  const [loading, session] = useSession()

  return (
    <Layout>
      <div className="page">
        <h1>Vacations</h1>
        <main>{!session && !loading ? <RequireLogin /> : <AllUsers />}</main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default App
