
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