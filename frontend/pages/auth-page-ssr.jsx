import { tokenService } from "../src/services/auth/tokenService"
import nookies from 'nookies'

export default function authPageSsr(props) {


  return (
    <div>
      <h1>Auth page server Side Render</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  
  const cookies = nookies.get(ctx)
  console.log('cookies', cookies)

  return {
    props: {
      token:tokenService.get(ctx)
      }
  }
}