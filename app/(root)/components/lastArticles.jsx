import Article from "@/app/(root)/articles/components/article";

export default function LastArticles() {
  const data = {
    title: "Titlu articol",
    body: "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend congue cursus nunc phasellus blandit elit. Mi ridiculus vehicula donec, diam venenatis sollicitudin potenti. Finibus donec adipiscing auctor quam penatibus et. Orci facilisis sodales lectus viverra netus."
  }
  return(
    <section className="flex flex-col items-center container mx-auto">
      <h2 className="text-[35px] font-medium mb-[30px]">Last articles</h2>
      <div className="flex justify-center flex-wrap gap-[50px]">
        <Article data={data} />
        <Article data={data} />
        <Article data={data} />
      </div>
    </section>
  )
}