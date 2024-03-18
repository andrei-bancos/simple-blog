export default function Newsletter() {
  return (
    <section className="container mx-auto">
      <div className="shadow-md p-[40px_50px] rounded-[10px] bannerBackground">
        <div className="text-white mb-[30px]">
          <h3 className="text-[35px] font-medium">Newsletter</h3>
          <p className="text-[18px]">Join us as we navigate the digital world together!</p>
        </div>
        <form className="flex gap-[15px]">
          <input
            className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
            type="text"
            placeholder="Email address"
          />
          <button className="text-white h-[50px] px-[10px] bg-red-500 shadow-md rounded-[10px]">Subscribe</button>
        </form>
      </div>
    </section>
  )
}