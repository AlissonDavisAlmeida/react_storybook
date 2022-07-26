

export const TYPE_INPUTTEXT = "inputText";
export const TYPE_INPUTNUMBER = "inputNumber";
export const TYPE_DATEPICKER = "calendar";
export const TYPE_MONTHPICKER = "monthPicker";
export const TYPE_SEARCHBOX = "searchbox";
export const TYPE_SEARCHBOX_TEXTO = "searchboxTexto";
export const TYPE_SELECT = "select";
export const TYPE_EMAIL = "inputEmail";
export const TYPE_CHECKBOX = "checkbox";
export const MSG_EMAIL_INVALIDO = "usuarios.emailInvalido";
export const TYPE_SEARCHBOXPTIONGROUP = "searchboxOptionGroup";

//interfaces Locais
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

function ModalComponente(props: ModalComponenteProps) {
  

 
  return(
        <div>
            Modal
            <span></span>
        </div>
  )
  
}
export default ModalComponente;
