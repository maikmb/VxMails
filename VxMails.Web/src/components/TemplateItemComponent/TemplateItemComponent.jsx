import React, { Component } from 'react';
import { TemplateImage, TemplateDisplayInfo, TemplateInfoTitle, TemplateInfoDetails, TemplateActions, TemplateActionItem, TempalteDisplayContent } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faTimes, faUpload, faEdit } from '@fortawesome/free-solid-svg-icons'

class TemplateItemComponent extends Component {

    render() {
        return (
            <div className="shadow-sm p-3 mb-3 bg-white rounded d-flex">
                <TemplateImage src={this.props.imageUrl} alt="Imagem do Template" className="rounded"></TemplateImage>
                <TempalteDisplayContent className="d-flex flex-column">
                    <TemplateDisplayInfo className="flex-grow-1">
                        <TemplateInfoTitle>{this.props.name}</TemplateInfoTitle>
                        <TemplateInfoDetails>Integrado AWS: {this.props.awsDeployed ? 'Integrado' : 'Não Integrado'}</TemplateInfoDetails>
                    </TemplateDisplayInfo>
                    <TemplateActions>
                        <TemplateActionItem title="Clonar tempalte">
                            <FontAwesomeIcon icon={faClone} size="lg" />
                        </TemplateActionItem>
                        <TemplateActionItem title="Editar tempalte">
                            <FontAwesomeIcon icon={faEdit} size="lg" />
                        </TemplateActionItem>
                        <TemplateActionItem title="Excluir tempalte">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </TemplateActionItem>
                        <TemplateActionItem title="Enviar para AWS">
                            <FontAwesomeIcon icon={faUpload} size="lg" />
                        </TemplateActionItem>
                    </TemplateActions>
                </TempalteDisplayContent>

            </div>
        );
    }
}

export default TemplateItemComponent;