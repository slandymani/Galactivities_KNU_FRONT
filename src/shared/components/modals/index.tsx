import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@app/store';

import { Modal } from 'semantic-ui-react';

function ModalContainer() {
  const { modalStore } = useMobXStore();
  const {
    modal: { isOpen, body },
    closeModal,
  } = modalStore;

  return (
    <Modal open={isOpen} onClose={closeModal} size="mini" style={{ top: '40%' }}>
      <Modal.Content>{body}</Modal.Content>
    </Modal>
  );
}

export default observer(ModalContainer);
