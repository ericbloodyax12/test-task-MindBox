import {FC} from 'react';
import {observer} from "mobx-react-lite";
import {Dialog} from "@/components";
import {useStores} from "@/providers";

import './index.scss';

type TDialogsProps = {

};

export const DialogContainer: FC<TDialogsProps> = observer(({}) => {

  const {dialogStore} = useStores();
  const dialogState = dialogStore.DialogState

  if (dialogState === null) return <></>
  {/** ВНИМАНИЕ !!! ПРАВИЛА ХУКОВ !!!**/}

  return (
    <Dialog
      className={'dialog-root-container'}
      header={dialogState.headerTitle}
      visible={dialogState.isVisible}
      appendTo={"self"}

      onHide={() => dialogStore.closeDialog()}
    >
      {dialogState.dialogContent()}
    </Dialog>
  );
})
