import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // UseRef Hook Example
  // const value = usernameInputRef.current.value;
  // const usernameInputRef = React.useRef();
  // <input ref={usernameInputRef} id="usernameInput" type="text" />

  const [username, setUsername] = React.useState('');

  function handleSubmit (event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange (event) {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
