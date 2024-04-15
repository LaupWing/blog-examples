import React, { useRef } from "react"
import { CKEditor, useMultiRootEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import Editor from "ckeditor5-custom-build"

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

const rootsAttributes = {
    intro: {
        order: 10,
    },
    content: {
        order: 20,
    },
    outro: {
        order: 30,
    },
}

const Ck = () => {
    const editor_ref = useRef(null)
    // const editorConfig = {
    //     editor: MultiRootEditor,
    //     data: multiRootEditorData,
    //     rootsAttributes,
    //     onReady: () => {},
    // }
    // const {
    //     editor,
    //     editableElements,
    //     toolbarElement,
    //     data,
    //     setData,
    //     attributes,
    //     setAttributes,
    // } = useMultiRootEditor(editorConfig)
    // console.log(MultiRootEditor.cre)
    // console.log(editor)

    // const renderEditor = () => {
    //     // Sorted elements based on order attribute.
    //     const sortedElements = editableElements.sort(
    //         (a, b) =>
    //             // @ts-ignore
    //             attributes[a.props.id].order - attributes[b.props.id].order
    //     )
    //     console.log(editableElements)
    //     return (
    //         <>
    //             {toolbarElement}

    //             <div className="row row-editor">
    //                 <div className="roots">{sortedElements}</div>

    //                 {/* <div ref={sidebarElementRef} className="sidebar"></div> */}
    //             </div>
    //         </>
    //     )
    // }

    return (
        <div>
            <div>Ck</div>
            <div ref={editor_ref}></div>
            {/* <CKEditor
                // @ts-expect-error
                editor={Editor}
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
