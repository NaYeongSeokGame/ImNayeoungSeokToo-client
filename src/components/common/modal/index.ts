import ModalButton from '@/components/common/modal/ModalButton';
import ModalMainContent from '@/components/common/modal/ModalMainContent/ModalMainContent';
import {
  ModalSubContent,
  ModalSubContentWrapper,
  ModalSubTitle,
} from '@/components/common/modal/ModalSubContent/ModalSubContent';
import ModalTemplate from '@/components/common/modal/ModalTemplate';

const Modal = Object.assign(ModalTemplate, {
  MainContent: ModalMainContent,
  SubContentWrapper: ModalSubContentWrapper,
  SubContent: ModalSubContent,
  SubTitle: ModalSubTitle,
  Button: ModalButton,
});

export default Modal;
