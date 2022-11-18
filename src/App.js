import { useState } from 'react';
import { marked } from 'marked';
import './App.css';


// a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
    const [text, setText] = useState(`
  # This is H1

  ## This is H2

  ### This is  H3

  \`This is code example\`
  
  [This is title](https://www.example.com)

  \`\`\`
  {
    "firstName": "Andriy",
    "lastName": "Shevchenko,
    "club": "AC Milan"
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > Lorem ipsum dolor sit amet consectetur adipisicing elit.

  ![This is alt text of img](logo192.png)

  **This is bold text**
  `);

    marked.setOptions({
        breaks: true,
    });
    return (
      <div className="App">
        <div className="editor-wraper">
          <div className='head'>Editor</div>
          <textarea
                    type='text'
                    id="editor"
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                    value={text}></textarea>
            </div>
        <div className="preview-wrapper">
          <div className='head'>Preview</div>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{
                        __html: marked(text),
                    }}></div>
            </div>
        </div>
    );
}

export default App;
