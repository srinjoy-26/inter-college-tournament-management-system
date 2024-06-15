

const Footer = () => {
  return (
    <div className="footer py-4 bg-purple-950 h-[20vh]">
    
    <div className="text-center space-y-5">
      <p className="text-xl text-white font-light pt-5">Manage your tournaments efficiently 🚀</p>
      <!-- <p className="text-white"><i className="bi bi-list"></i></p> -->
      <p className="text-white text-md">Connect with us :</p>
      <div className="flex gap-4 items-center justify-center">
        <p className="text-blue-500 hover:scale-105 cursor-pointer"><i className="bi bi-linkedin"></i></p>
        <p className="text-white hover:scale-105 cursor-pointer"><i className="bi bi-github"></i></p>
        <p className="text-white hover:scale-105 cursor-pointer"><i className="bi bi-twitter-x"></i></p>
      </div>
      
    </div>
  </div>
  )
}

export default Footer
