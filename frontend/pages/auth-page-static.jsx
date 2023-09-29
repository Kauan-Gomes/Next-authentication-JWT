

export default function authPageStatic(props) {
  return (
    <div>
       <h1>Auth page Static</h1>
       <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
    </div>
  )
}
