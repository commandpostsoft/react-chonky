import { Nullable, Undefinable } from 'tsdef';
import { ChonkyIconName } from './icons.types';
export interface FileData {
    id: string;
    name: string;
    ext?: string;
    isDir?: boolean;
    isHidden?: boolean;
    isSymlink?: boolean;
    isEncrypted?: boolean;
    openable?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    droppable?: boolean;
    dndOpenable?: boolean;
    size?: number;
    modDate?: Date | string;
    childrenCount?: number;
    color?: string;
    icon?: ChonkyIconName | string | any;
    thumbnailUrl?: string;
    folderChainIcon?: Nullable<ChonkyIconName | string | any>;
    [property: string]: any;
}
export type FileArray<FT extends FileData = FileData> = Nullable<FT>[];
export type FileFilter = (file: Nullable<FileData>) => boolean;
export type FileMap<FT extends FileData = FileData> = {
    [fileId: string]: FT;
};
export type FileIdTrueMap = {
    [fileId: string]: Undefinable<true>;
};
