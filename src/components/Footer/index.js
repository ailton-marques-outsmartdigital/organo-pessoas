import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="clearfix">
        <div className="img-container">
          <img className='facebook' src='./images/fb.png' alt='' />
          <img className='twitter' src='./images/tw.png' alt='' />
          <img className='instagram' src='./images/ig.png' alt='' />
        </div>
        <div className="img-container">
          <img className='logo' src="./images/logo.png" alt="" />
        </div>
        <div className="img-container">
          <p className='label'>Desenvolvido por Alura.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
