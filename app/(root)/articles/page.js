import Articles from "@/app/(root)/articles/components/articles";

export const metadata = {
  title: "Articles"
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen">
      <Articles />
    </main>
  )
}