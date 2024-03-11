export default function Banner() {
  return (
    <section className="container mx-auto">
      <div
        className="flex flex-col justify-center items-center sm:items-start gap-[30px] p-[40px_50px] min-h-[300px]
                   sm:min-h-[500px] shadow-md rounded-[10px] bannerBackground"
      >
        <h1 className="text-white text-[25px] sm:text-[45px] text-center sm:text-left font-medium">
          Welcome to my technology BLOG.
        </h1>
        <p className="hidden sm:block text-white text-[25px] max-w-[750px]">
          Discover the latest trends, reviews, and tutorials covering a wide range of tech topics.
          Join us as we navigate the digital world together!
        </p>
        <button className="text-white text-[20px] sm:text-[23px] w-fit bg-red-500 p-[15px_20px] rounded-[10px]">
          Subscribe newsletter
        </button>
      </div>
    </section>
  )
}