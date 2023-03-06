import { HeaderStyle } from './HeaderStyle'

function Header() {
  return (
    <>
      <HeaderStyle>
        <header className="container">
          <div className="container_header">
            <h1>Star Wars Characters</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
      </HeaderStyle>
    </>
  )
}

export default Header
