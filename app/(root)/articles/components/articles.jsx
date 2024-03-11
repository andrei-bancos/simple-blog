import Article from "@/app/(root)/articles/components/article";

export default function Articles() {
  const data = {
    title: "Titlu articol",
    body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend congue cursus nunc phasellus blandit elit. Mi ridiculus vehicula donec, diam venenatis sollicitudin potenti. Finibus donec adipiscing auctor quam penatibus et. Orci facilisis sodales lectus viverra netus."
  }
  return (
    <section className="container mx-auto">
      <div className="flex items-center flex-col mb-[50px]">
        <h1 className="text-[35px] font-medium">Articles</h1>
        <form className="flex mt-[15px] w-full max-w-[450px] drop-shadow-md">
          <input
            className="text-[18px] w-full max-w-[300px] h-[50px] px-[15px] rounded-[15px_0_0_15px]"
            type="search"
            placeholder="Search article.."
          />
          <button
            className="text-white text-[20px] w-[150px] h-[50px] bg-black rounded-[0_10px_10px_0]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-center flex-wrap gap-[50px]">
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
      </div>
    </section>
  )
}