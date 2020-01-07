import React, { Component } from 'react';
import EmailEditor from 'react-email-editor'
import { PageContainer, EditorHeader, TemplateInputName, EditorAction } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEye } from '@fortawesome/free-solid-svg-icons'

class TemplateEditorPage extends Component {
    render() {
        return (
            <PageContainer>
                {/* <div>
                    <button onClick={this.exportHtml}>Export HTML</button>
                </div> */}
                <EditorHeader>
                    <TemplateInputName type="text"></TemplateInputName>
                    <div>
                        <EditorAction>
                            <FontAwesomeIcon style={{ margin: '0px 10px' }} icon={faEye} /> Visualizar
                        </EditorAction>
                        <EditorAction>
                            <FontAwesomeIcon style={{ margin: '0px 10px' }} icon={faSave} /> Salvar
                        </EditorAction>
                    </div>
                </EditorHeader>
                <EmailEditor style={{ height: 'calc(100vh - 119px)' }} appearance={{
                    theme: 'dark',
                    panels: {
                        tools: {
                            dock: 'left'
                        }
                    }
                }} ref={editor => this.editor = editor} />
            </PageContainer>
        );
    }

    saveTemplate = () => {

    }

    previewTemplate = () => {

    }

    exportHtml = () => {
        this.editor.exportHtml(data => {
            const { design, html } = data
            console.log('exportHtml', html)
        })
    }
}

export default TemplateEditorPage;