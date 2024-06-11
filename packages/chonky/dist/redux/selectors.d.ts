import FuzzySearch from 'fuzzy-search';
import { Nilable, Nullable } from 'tsdef';
import { FileArray, FileData, FileFilter } from '../types/file.types';
import { RootState } from '../types/redux.types';
import { SortOrder } from '../types/sort.types';
export declare const selectInstanceId: (state: RootState) => string;
export declare const selectExternalFileActionHandler: (state: RootState) => Nullable<import("..").GenericFileActionHandler<import("..").FileAction>>;
export declare const selectFileActionMap: (state: RootState) => import("../types/action.types").FileActionMap;
export declare const selectFileActionIds: (state: RootState) => string[];
export declare const selectFileActionData: (fileActionId: string) => (state: RootState) => import("..").FileAction;
export declare const selectToolbarItems: (state: RootState) => import("../types/action-menus.types").FileActionMenuItem[];
export declare const selectContextMenuItems: (state: RootState) => import("../types/action-menus.types").FileActionMenuItem[];
export declare const selectFolderChain: (state: RootState) => FileArray;
export declare const selectCurrentFolder: (state: RootState) => Nullable<FileData>;
export declare const selectParentFolder: (state: RootState) => Nullable<FileData>;
export declare const selectRawFiles: (state: RootState) => any;
export declare const selectFileMap: (state: RootState) => import("../types/file.types").FileMap;
export declare const selectCleanFileIds: (state: RootState) => string[];
export declare const selectFileData: (fileId: Nullable<string>) => (state: RootState) => FileData | null;
export declare const selectHiddenFileIdMap: (state: RootState) => import("../types/file.types").FileIdTrueMap;
export declare const selectHiddenFileCount: (state: RootState) => number;
export declare const selectFocusSearchInput: (state: RootState) => Nullable<() => void>;
export declare const selectSearchString: (state: RootState) => string;
export declare const selectSelectionMap: (state: RootState) => import("../types/file.types").FileIdTrueMap;
export declare const selectSelectedFileIds: (state: RootState) => string[];
export declare const selectSelectionSize: (state: RootState) => number;
export declare const selectIsFileSelected: (fileId: Nullable<string>) => (state: RootState) => boolean;
export declare const selectSelectedFiles: (state: RootState) => FileData[];
export declare const selectSelectedFilesForAction: (fileActionId: string) => (state: RootState) => FileData[] | undefined;
export declare const selectSelectedFilesForActionCount: (fileActionId: string) => (state: RootState) => number | undefined;
export declare const selectDisableSelection: (state: RootState) => boolean;
export declare const selectForceEnableOpenParent: (state: RootState) => boolean;
export declare const selectHideToolbarInfo: (state: RootState) => boolean;
export declare const selectFileViewConfig: (state: RootState) => import("../types/file-view.types").FileViewConfig;
export declare const selectSortActionId: (state: RootState) => Nullable<string>;
export declare const selectSortOrder: (state: RootState) => SortOrder;
export declare const selectOptionMap: (state: RootState) => import("../types/options.types").OptionMap;
export declare const selectOptionValue: (optionId: string) => (state: RootState) => any;
export declare const selectThumbnailGenerator: (state: RootState) => Nullable<import("..").ThumbnailGenerator>;
export declare const selectDoubleClickDelay: (state: RootState) => number;
export declare const selectIsDnDDisabled: (state: RootState) => boolean;
export declare const selectClearSelectionOnOutsideClick: (state: RootState) => boolean;
export declare const selectContextMenuMounted: (state: RootState) => boolean;
export declare const selectContextMenuConfig: (state: RootState) => Nullable<import("../types/context-menu.types").ContextMenuConfig>;
export declare const selectContextMenuTriggerFile: (state: RootState) => FileData | null;
export declare const selectors: {
    getFileActionMap: (state: RootState) => import("../types/action.types").FileActionMap;
    getOptionMap: (state: RootState) => import("../types/options.types").OptionMap;
    getFileMap: (state: RootState) => import("../types/file.types").FileMap;
    getFileIds: (state: RootState) => Nullable<string>[];
    getCleanFileIds: (state: RootState) => string[];
    getSortActionId: (state: RootState) => Nullable<string>;
    getSortOrder: (state: RootState) => SortOrder;
    getSearchString: (state: RootState) => string;
    _getLastClick: (state: RootState) => Nullable<{
        index: number;
        fileId: string;
    }>;
    getSortedFileIds: ((state: RootState) => Nullable<string>[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[];
        memoizedResultFunc: ((resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => Nullable<string>[];
        dependencies: [(state: RootState) => Nullable<string>[], (state: RootState) => SortOrder, ((state: RootState) => FileArray) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => FileArray;
            dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }, ((state: RootState) => import("..").FileAction | null) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => import("..").FileAction | null;
            dependencies: [(state: RootState) => import("../types/action.types").FileActionMap, (state: RootState) => Nullable<string>];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }, ((state: RootState) => any) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => any;
            dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    getSearcher: ((state: RootState) => FuzzySearch<FileData>) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: FileArray) => FuzzySearch<FileData>;
        memoizedResultFunc: ((resultFuncArgs_0: FileArray) => FuzzySearch<FileData>) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => FuzzySearch<FileData>;
        dependencies: [((state: RootState) => FileArray) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => FileArray;
            dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    getSearchFilteredFileIds: ((state: RootState) => string[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[];
        memoizedResultFunc: ((resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => string[];
        dependencies: [(state: RootState) => string[], (state: RootState) => string, ((state: RootState) => FuzzySearch<FileData>) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: FileArray) => FuzzySearch<FileData>;
            memoizedResultFunc: ((resultFuncArgs_0: FileArray) => FuzzySearch<FileData>) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => FuzzySearch<FileData>;
            dependencies: [((state: RootState) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => FileArray;
                dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    getHiddenFileIdMap: ((state: RootState) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: string[], resultFuncArgs_1: FileArray, resultFuncArgs_2: any) => any;
        memoizedResultFunc: ((resultFuncArgs_0: string[], resultFuncArgs_1: FileArray, resultFuncArgs_2: any) => any) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => any;
        dependencies: [((state: RootState) => string[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[];
            memoizedResultFunc: ((resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[]) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => string[];
            dependencies: [(state: RootState) => string[], (state: RootState) => string, ((state: RootState) => FuzzySearch<FileData>) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: FileArray) => FuzzySearch<FileData>;
                memoizedResultFunc: ((resultFuncArgs_0: FileArray) => FuzzySearch<FileData>) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => FuzzySearch<FileData>;
                dependencies: [((state: RootState) => FileArray) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                } & {
                    resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                    memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                        clearCache: () => void;
                        resultsCount: () => number;
                        resetResultsCount: () => void;
                    };
                    lastResult: () => FileArray;
                    dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                    recomputations: () => number;
                    resetRecomputations: () => void;
                    dependencyRecomputations: () => number;
                    resetDependencyRecomputations: () => void;
                } & {
                    memoize: typeof import("reselect").weakMapMemoize;
                    argsMemoize: typeof import("reselect").weakMapMemoize;
                }];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }, ((state: RootState) => FileArray) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => FileArray;
            dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }, ((state: RootState) => any) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
            memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => any;
            dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    getDisplayFileIds: ((state: RootState) => Nullable<string>[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: any) => Nullable<string>[];
        memoizedResultFunc: ((resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: any) => Nullable<string>[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => Nullable<string>[];
        dependencies: [((state: RootState) => Nullable<string>[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[];
            memoizedResultFunc: ((resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[]) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => Nullable<string>[];
            dependencies: [(state: RootState) => Nullable<string>[], (state: RootState) => SortOrder, ((state: RootState) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => FileArray;
                dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => import("..").FileAction | null) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => import("..").FileAction | null;
                dependencies: [(state: RootState) => import("../types/action.types").FileActionMap, (state: RootState) => Nullable<string>];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => any;
                dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }, ((state: RootState) => any) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: string[], resultFuncArgs_1: FileArray, resultFuncArgs_2: any) => any;
            memoizedResultFunc: ((resultFuncArgs_0: string[], resultFuncArgs_1: FileArray, resultFuncArgs_2: any) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => any;
            dependencies: [((state: RootState) => string[]) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[];
                memoizedResultFunc: ((resultFuncArgs_0: string[], resultFuncArgs_1: string, resultFuncArgs_2: FuzzySearch<FileData>) => string[]) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => string[];
                dependencies: [(state: RootState) => string[], (state: RootState) => string, ((state: RootState) => FuzzySearch<FileData>) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                } & {
                    resultFunc: (resultFuncArgs_0: FileArray) => FuzzySearch<FileData>;
                    memoizedResultFunc: ((resultFuncArgs_0: FileArray) => FuzzySearch<FileData>) & {
                        clearCache: () => void;
                        resultsCount: () => number;
                        resetResultsCount: () => void;
                    };
                    lastResult: () => FuzzySearch<FileData>;
                    dependencies: [((state: RootState) => FileArray) & {
                        clearCache: () => void;
                        resultsCount: () => number;
                        resetResultsCount: () => void;
                    } & {
                        resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                        memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                            clearCache: () => void;
                            resultsCount: () => number;
                            resetResultsCount: () => void;
                        };
                        lastResult: () => FileArray;
                        dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                        recomputations: () => number;
                        resetRecomputations: () => void;
                        dependencyRecomputations: () => number;
                        resetDependencyRecomputations: () => void;
                    } & {
                        memoize: typeof import("reselect").weakMapMemoize;
                        argsMemoize: typeof import("reselect").weakMapMemoize;
                    }];
                    recomputations: () => number;
                    resetRecomputations: () => void;
                    dependencyRecomputations: () => number;
                    resetDependencyRecomputations: () => void;
                } & {
                    memoize: typeof import("reselect").weakMapMemoize;
                    argsMemoize: typeof import("reselect").weakMapMemoize;
                }];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => FileArray;
                dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => any;
                dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    getLastClickIndex: ((state: RootState) => number | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: Nullable<{
            index: number;
            fileId: string;
        }>, resultFuncArgs_1: Nullable<string>[]) => number | null;
        memoizedResultFunc: ((resultFuncArgs_0: Nullable<{
            index: number;
            fileId: string;
        }>, resultFuncArgs_1: Nullable<string>[]) => number | null) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => number | null;
        dependencies: [(state: RootState) => Nullable<{
            index: number;
            fileId: string;
        }>, ((state: RootState) => Nullable<string>[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        } & {
            resultFunc: (resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[];
            memoizedResultFunc: ((resultFuncArgs_0: Nullable<string>[], resultFuncArgs_1: SortOrder, resultFuncArgs_2: FileArray, resultFuncArgs_3: import("..").FileAction | null, resultFuncArgs_4: any) => Nullable<string>[]) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            };
            lastResult: () => Nullable<string>[];
            dependencies: [(state: RootState) => Nullable<string>[], (state: RootState) => SortOrder, ((state: RootState) => FileArray) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => FileArray;
                dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => import("..").FileAction | null) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => import("..").FileAction | null;
                dependencies: [(state: RootState) => import("../types/action.types").FileActionMap, (state: RootState) => Nullable<string>];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }, ((state: RootState) => any) & {
                clearCache: () => void;
                resultsCount: () => number;
                resetResultsCount: () => void;
            } & {
                resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
                memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
                    clearCache: () => void;
                    resultsCount: () => number;
                    resetResultsCount: () => void;
                };
                lastResult: () => any;
                dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
                recomputations: () => number;
                resetRecomputations: () => void;
                dependencyRecomputations: () => number;
                resetDependencyRecomputations: () => void;
            } & {
                memoize: typeof import("reselect").weakMapMemoize;
                argsMemoize: typeof import("reselect").weakMapMemoize;
            }];
            recomputations: () => number;
            resetRecomputations: () => void;
            dependencyRecomputations: () => number;
            resetDependencyRecomputations: () => void;
        } & {
            memoize: typeof import("reselect").weakMapMemoize;
            argsMemoize: typeof import("reselect").weakMapMemoize;
        }];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    makeGetAction: (fileActionSelector: (state: RootState) => Nullable<string>) => ((state: RootState) => import("..").FileAction | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null;
        memoizedResultFunc: ((resultFuncArgs_0: import("../types/action.types").FileActionMap, resultFuncArgs_1: Nullable<string>) => import("..").FileAction | null) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => import("..").FileAction | null;
        dependencies: [(state: RootState) => import("../types/action.types").FileActionMap, (state: RootState) => Nullable<string>];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    makeGetOptionValue: (optionId: string, defaultValue?: any) => ((state: RootState) => any) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: import("../types/options.types").OptionMap) => any;
        memoizedResultFunc: ((resultFuncArgs_0: import("../types/options.types").OptionMap) => any) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => any;
        dependencies: [(state: RootState) => import("../types/options.types").OptionMap];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
    makeGetFiles: (fileIdsSelector: (state: RootState) => Nullable<string>[]) => ((state: RootState) => FileArray) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray;
        memoizedResultFunc: ((resultFuncArgs_0: import("../types/file.types").FileMap, resultFuncArgs_1: Nullable<string>[]) => FileArray) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => FileArray;
        dependencies: [(state: RootState) => import("../types/file.types").FileMap, (state: RootState) => Nullable<string>[]];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import("reselect").weakMapMemoize;
        argsMemoize: typeof import("reselect").weakMapMemoize;
    };
};
export declare const getFileData: (state: RootState, fileId: Nullable<string>) => FileData | null;
export declare const getIsFileSelected: (state: RootState, file: FileData) => boolean;
export declare const getSelectedFiles: (state: RootState, ...filters: Nilable<FileFilter>[]) => FileData[];
export declare const getSelectedFilesForAction: (state: RootState, fileActionId: string) => FileData[] | undefined;
