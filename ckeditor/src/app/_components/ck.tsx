import React from "react"
import { useMultiRootEditor } from "@ckeditor/ckeditor5-react"
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { MultiRootEditor } from "@ckeditor/ckeditor5-editor-multi-root"

const multiRootEditorData = {
    intro:
        "<h2>Sample</h2><p>This is an instance of the " +
        '<a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor">multi-root editor build</a>.</p>',
    content: "<p>This is some example content</p>",
    outro:
        "<p>You can use this sample to validate whether your " +
        '<a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html">custom build</a> works fine.</p>',
}

const Ck = () => {
    const editorConfig = {
        editor: MultiRootEditor,

        onReady: () => {},
    }

    return (
        <div>
            <div>Ck</div>
            {/* <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor)
                }}
                onChange={(event) => {
                    console.log(event)
                }}
                onBlur={(event, editor) => {
                    console.log("Blur.", editor)
                }}
                onFocus={(event, editor) => {
                    console.log("Focus.", editor)
                }}
            /> */}
        </div>
    )
}

export default Ck
