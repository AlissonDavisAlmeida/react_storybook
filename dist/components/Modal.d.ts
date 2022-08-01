/// <reference types="react" />
export declare const TYPE_INPUTTEXT = "inputText";
export declare const TYPE_INPUTNUMBER = "inputNumber";
export declare const TYPE_DATEPICKER = "calendar";
export declare const TYPE_MONTHPICKER = "monthPicker";
export declare const TYPE_SEARCHBOX = "searchbox";
export declare const TYPE_SEARCHBOX_TEXTO = "searchboxTexto";
export declare const TYPE_SELECT = "select";
export declare const TYPE_EMAIL = "inputEmail";
export declare const TYPE_CHECKBOX = "checkbox";
export declare const MSG_EMAIL_INVALIDO = "usuarios.emailInvalido";
export declare const TYPE_SEARCHBOXPTIONGROUP = "searchboxOptionGroup";
interface ModalComponenteProps {
    id?: number;
    /**
     * Propriedade que define se o Modal vai ser exibido.
     */
    exibeModal?: boolean;
    tituloModalEdicao?: string;
    tituloModalIncluir?: string;
    typeModal?: string;
    typeSetItem?: string;
    typeSalvar?: string;
    item?: any;
    typeCancelar?: string;
    idioma?: string;
    typeIdSelecionadoSearchBox?: string;
    typeItensEdicao: string;
    typePreencherSelect?: string;
    typePreencherSearchbox?: any;
    listaCamposFormulario: any[];
}
declare function ModalComponente(props: ModalComponenteProps): JSX.Element;
export default ModalComponente;
