import React from 'react'

const TextEditor = () => {
  return (
    <div>TextEditor</div>
  )
}
export default TextEditor

// import React, { Component } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// // import "./TextEditor.css";
// import draftToHtml from "draftjs-to-html";

// export default class TextEditor extends Component {
//   state = {
//     editorState: EditorState.createEmpty(),
//   };

//   onEditorStateChange = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
//     console.log(convertToRaw(editorState.getCurrentContent()));

//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           toolbarClassName="toolbarClassName"
//           wrapperClassName="wrapperClassName"
//           editorClassName="editorClassName"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//       </div>
//     );
//   }
// }
