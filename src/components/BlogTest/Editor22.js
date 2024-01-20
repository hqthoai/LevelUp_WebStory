// import React, { Component } from 'react';
// import ReactQuill, { Quill } from 'react-quill';
// // #1 import quill-image-uploader
// import ImageUploader from 'quill-image-uploader';

// // #2 register module
// Quill.register('modules/imageUploader', ImageUploader);

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { editorHtml: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.textInput = React.createRef();
//   }

//   handleChange(html) {
//     this.setState({ editorHtml: html });
//   }

//   handleSubmit() {
//     const editor = this.reactQuillRef.getEditor();
//     this.setState({
//       editorHtml: editor,
//     });
//   }
//   modules = {
//     // #3 Add "image" to the toolbar
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
//       ['link', 'image'],
//       ['clean'],
//     ],
//     // # 4 Add module and upload function
//     imageUploader: {
//       upload: (file) => {
//         return new Promise((resolve, reject) => {
//           const formData = new FormData();
//           formData.append('image', file);

//           fetch('https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265', {
//             method: 'POST',
//             body: formData,
//           })
//             .then((response) => response.json())
//             .then((result) => {
//               console.log(result);
//               resolve(result.data.url);
//             })
//             .catch((error) => {
//               reject('Upload failed');
//               console.error('Error:', error);
//             });
//         });
//       },
//     },
//   };

//   formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'image',
//     'imageBlot', // #5 Optinal if using custom formats
//   ];

//   render() {
//     return (
//       <>
//         {<div dangerouslySetInnerHTML={{ __html: this.state.editorHtml }} />}

//         <ReactQuill
//           onChange={this.handleChange}
//           theme="snow"
//           style={{
//             minHeight: '25vh',
//           }}
//           modules={this.modules}
//           formats={this.formats}
//           value={this.state.editorHtml}
//         />
//       </>
//     );
//   }
// }

// export default MyComponent;

import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
Quill.register('modules/imageUploader', ImageUploader);

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.reactQuillRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleSubmit() {
    // Handle the submission logic here, e.g., send the content to a server
    console.log('Submitted Content:', this.state.editorHtml);
  }

  render() {
    return (
      <>
        <ReactQuill
          onChange={this.handleChange}
          theme="snow"
          style={{
            minHeight: '25vh',
          }}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
              ['link', 'image'],
              ['clean'],
            ],
            imageUploader: {
              upload: (file) => {
                return new Promise((resolve, reject) => {
                  const formData = new FormData();
                  formData.append('image', file);

                  fetch('https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265', {
                    method: 'POST',
                    body: formData,
                  })
                    .then((response) => response.json())
                    .then((result) => {
                      console.log(result);
                      resolve(result.data.url);
                    })
                    .catch((error) => {
                      reject('Upload failed');
                      console.error('Error:', error);
                    });
                });
              },
            },
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'indent',
            'link',
            'image',
          ]}
          value={this.state.editorHtml}
          ref={(el) => (this.reactQuillRef = el)}
        />
        <button className="text-white" onClick={this.handleSubmit}>
          Post
        </button>
        <div dangerouslySetInnerHTML={{ __html: this.state.editorHtml }} />
      </>
    );
  }
}

export default MyComponent;
