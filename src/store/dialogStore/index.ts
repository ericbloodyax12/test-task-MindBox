import {makeAutoObservable} from "mobx";
import {ReactNode} from "react";

type TDialogState = {
    isVisible: boolean;
    headerTitle?: string;
    dialogContent: () => ReactNode;
}
export class DialogStore {
    private _dialogState: TDialogState | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    public get DialogState() {
        return this._dialogState;
    }

    openNewDialog(value: TDialogState) {
        this._dialogState = value;
    }

    closeDialog() {
        this._dialogState = null;
    }
}