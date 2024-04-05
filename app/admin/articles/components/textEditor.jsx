'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {TextAlign} from "@tiptap/extension-text-align";
import {useEffect} from "react";

export default function TextEditor({currentHtmlContent, setHtmlContent}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4]
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      })
    ],
    content: currentHtmlContent,
    onUpdate({editor}) {
      setHtmlContent(editor.getHTML())
    }
  })

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(currentHtmlContent);
    }
  }, [currentHtmlContent]);

  if (!editor) {
    return null
  }

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent
        className="article p-[10px_15px] min-h-[150px] bg-white rounded-[10px] shadow-md"
        editor={editor}
      />
    </>
  )
}

const Toolbar = ({ editor }) => {
  const applyHeading = (level) => {
    editor.chain().focus().toggleHeading({ level: level }).run()
  }

  const applyBold = () => {
    editor.chain().focus().toggleBold().run()
  }

  const applyItalic = () => {
    editor.chain().focus().toggleItalic().run()
  }

  const applyStrike = () => {
    editor.chain().focus().toggleStrike().run()
  }

  const applyBr = () => {
    editor.chain().focus().setHardBreak().run()
  }

  const applyAlign = (position) => {
    editor.chain().focus().setTextAlign(position).run()
  }

  return (
    <div className="flex gap-[15px] p-[10px_15px] bg-white rounded-[10px] shadow-md">
      <button
        className={`text-[20px] font-medium ${editor.isActive('heading', {level: 2}) ? 'underline' : ''}`}
        onClick={() => applyHeading(2)}
      >
        H2
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive('heading', {level: 3}) ? 'underline' : ''}`}
        onClick={() => applyHeading(3)}
      >
        H3
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive('heading', {level: 4}) ? 'underline' : ''}`}
        onClick={() => applyHeading(4)}
      >
        H4
      </button>
      <button
        className={`text-[20px] font-bold ${editor.isActive('bold') ? 'underline' : ''}`}
        onClick={applyBold}
      >
        B
      </button>
      <button
        className={`text-[20px] font-bold italic ${editor.isActive('italic') ? 'underline' : ''}`}
        onClick={applyItalic}
      >
        I
      </button>
      <button
        className={`text-[20px] font-bold line-through ${editor.isActive('strike') ? 'text-red-500' : ''}`}
        onClick={applyStrike}
      >
        S
      </button>
      <button
        className="text-[20px] font-bold"
        onClick={applyBr}
      >
        Br
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'left' }) ? 'underline' : ''}`}
        onClick={() => applyAlign("left")}
      >
        Left
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'center' }) ? 'underline' : ''}`}
        onClick={() => applyAlign("center")}
      >
        Center
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'right' }) ? 'underline' : ''}`}
        onClick={() => applyAlign("right")}
      >
        Right
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'justify' }) ? 'underline' : ''}`}
        onClick={() => applyAlign("justify")}
      >
        Justify
      </button>
    </div>
  )
}