/** @jsxImportSource @emotion/react */
import ReactQuill from "react-quill";
import * as s from "./style";

function BoardQuillComponent({value, onChange, height, ref}) {
    const modules = {
        toolbar : [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],        
            [{ 'color': [] }, { 'background': [] }],          
            [{ 'align': [] }],
            ['blockquote'],
            ['link', 'image', 'video'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],                                                
        ]
    }

    return (
        <div css={s.layout}>
            <ReactQuill
            modules={modules}
            onChange={onChange} 
            ref={ref}
            value={value}
            style={{
                width: "100%",
                height: height,
                borderRadius: 20,
                border: "none"
            }}
            />
        </div>
        
    )
}

export default BoardQuillComponent;