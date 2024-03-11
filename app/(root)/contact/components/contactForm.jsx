export default function ContactForm() {
  return(
    <form className="flex flex-col items-center w-full max-w-[350px] gap-[30px]">
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="Text"
        placeholder="Full name"
      />
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="Text"
        placeholder="Email address"
      />
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="Text"
        placeholder="Subject"
      />
      <textarea
        className="max-w-[350px] w-full h-[150px] p-[10px_15px] rounded-[10px] resize-none shadow-md"
        placeholder="Message.."
      ></textarea>
      <button
        className="text-white text-[20px] font-medium w-[150px] h-[50px] rounded-[10px] bg-black shadow-md"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}