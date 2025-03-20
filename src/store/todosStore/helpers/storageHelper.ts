import {Todo} from "@/models-view";


export type TDataType<T> = Extract<StorageType, { name: T }>['data'];
export enum StorageTypeName {
    todos = "todos",
}
export type StorageType =
    { name: StorageTypeName.todos, data: Todo[] | undefined }

// кастомный helper для урощенной работы с local storage
export class StorageHelper {
    private static get _storage() {
        if (typeof window !== "undefined") {
            return window.localStorage;
        }
        throw new Error("localStorage недоступен");
    }
    static getData<K extends StorageTypeName>(type: K): TDataType<K> | null;

    static getData(type: StorageTypeName) {
        let data: string | null = null;
        data = this._storage.getItem(type);
        return data ? JSON.parse(data) : null;
    }

    static setData<T>(type: { name: StorageTypeName, data: TDataType<T> }): void {
        if (type.data === undefined)
            throw new Error("Необходимо задать данные при работе с localStorage");
        this._storage.setItem(type.name, JSON.stringify(type.data));
    }

    static remove(name: StorageTypeName) {
        this._storage.removeItem(name);
    }
}