

const Hero = (props) => {
  let isMobile = props.isMobile

  return (
      <div className='header_top'>
      <div className='landing_bread_container'>
        <img className='landing_bread_img1' src='/images/landing_bread4.jpg' alt='' />
        <img className='landing_bread_img2' src='/images/landing_bread5.jpg' alt='' />
        {!isMobile && <img className='landing_bread_img3' src='/images/landing_bread6.jpg' alt='' />}
      </div>
      <div className='slogan_container'>
        <p className='slogan'>Authentic.</p>
        <p className='slogan'>Housemade.</p>
        <p className='slogan'>American desserts, pastries, and bread in the heart of Larnaca.</p>
      </div>
    </div>
  )
}

export default Hero