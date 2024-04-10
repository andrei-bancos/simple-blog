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
    if (editor && currentHtmlContent === null) {
      editor.commands.setContent("Write article content");
    }
  }, [editor, currentHtmlContent]);

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
        type="button"
        onClick={() => applyHeading(2)}
      >
        H2
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive('heading', {level: 3}) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyHeading(3)}
      >
        H3
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive('heading', {level: 4}) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyHeading(4)}
      >
        H4
      </button>
      <button
        className={`text-[20px] font-bold ${editor.isActive('bold') ? 'underline' : ''}`}
        type="button"
        onClick={applyBold}
      >
        B
      </button>
      <button
        className={`text-[20px] font-bold italic ${editor.isActive('italic') ? 'underline' : ''}`}
        type="button"
        onClick={applyItalic}
      >
        I
      </button>
      <button
        className={`text-[20px] font-bold line-through ${editor.isActive('strike') ? 'text-red-500' : ''}`}
        type="button"
        onClick={applyStrike}
      >
        S
      </button>
      <button
        className="text-[20px] font-bold"
        type="button"
        onClick={applyBr}
      >
        Br
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'left' }) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyAlign("left")}
      >
        Left
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'center' }) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyAlign("center")}
      >
        Center
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'right' }) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyAlign("right")}
      >
        Right
      </button>
      <button
        className={`text-[20px] font-medium ${editor.isActive({ textAlign: 'justify' }) ? 'underline' : ''}`}
        type="button"
        onClick={() => applyAlign("justify")}
      >
        Justify
      </button>
    </div>
  )
}