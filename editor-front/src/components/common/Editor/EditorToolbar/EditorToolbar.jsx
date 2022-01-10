import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';

import EditorTable from './EditorTable';

import { handleExportPdfFile, handleExportDocx } from './editorFunc';

const EditorToolbar = ({ value, editorRef, toolbarId }) => (
    <div id={toolbarId} style={{ marginBottom: '20px' }}>
        <span className="ql-formats">
            <select className="ql-font">
                <option value="arial" defaultValue="arial">
                    Arial
                </option>
                <option value="comic-sans">Comic Sans</option>
                <option value="courier-new">Courier New</option>
                <option value="georgia">Georgia</option>
                <option value="helvetica">Helvetica</option>
                <option value="lucida">Lucida</option>
            </select>
            <select className="ql-size" defaultValue="14px">
                <option value="1px">1</option>
                <option value="2px">2</option>
                <option value="3px">3</option>
                <option value="5px">4</option>
                <option value="5px">5</option>
                <option value="6px">6</option>
                <option value="7px">7</option>
                <option value="8px">8</option>
                <option value="10px">10</option>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
                <option value="24px">24</option>
                <option value="36px">36</option>
                <option value="50px">50</option>
                <option value="68px">68</option>
                <option value="100px">100</option>
            </select>
            <select className="ql-lineheight custom-control" defaultValue="1.5">
                <option value="1.0">1.0</option>
                <option value="1.2">1.2</option>
                <option value="1.5">1.5</option>
                <option value="1.8">1.8</option>
                <option value="2.0">2.0</option>
                <option value="2.4">2.4</option>
                <option value="2.8">2.8</option>
                <option value="3.0">2.0</option>
                <option value="4.0">2.4</option>
                <option value="5.0">2.8</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <IconButton className="ql-bold" />
            <IconButton className="ql-italic" />
            <IconButton className="ql-underline" />
            <IconButton className="ql-strike" />
        </span>

        <span className="ql-formats">
            <IconButton className="ql-list" value="ordered" />
            <IconButton className="ql-list" value="bullet" />
            <IconButton className="ql-indent" value="-1" />
            <IconButton className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <IconButton className="ql-script" value="super" />
            <IconButton className="ql-script" value="sub" />
            <IconButton className="ql-blockquote" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
        </span>
        <span className="ql-formats">
            <IconButton className="ql-link" />
            <IconButton className="ql-image" />
        </span>
        <span className="ql-formats">
            <IconButton className="ql-formula" />
            <IconButton className="ql-code-block" />
            <IconButton className="ql-clean" />
        </span>
        <span className="ql-formats">
            <IconButton className="ql-undo">
                <UndoIcon />
            </IconButton>
            <IconButton className="ql-redo">
                <RedoIcon />
            </IconButton>
        </span>
        <EditorTable editorRef={editorRef} />
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => handleExportPdfFile(editorRef, value)}>
            <PictureAsPdfIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => handleExportDocx(value)}>
            <InsertDriveFileIcon />
        </IconButton>
    </div>
);

EditorToolbar.propTypes = {
    value: PropTypes.string,
    editorRef: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    toolbarId: PropTypes.string,
};

export default EditorToolbar;
