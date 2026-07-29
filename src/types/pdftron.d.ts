
declare module "@pdftron/react-native-pdf" {
  import type { Component } from "react";
  import type { ViewProps } from "react-native";

  export interface DocumentViewProps extends ViewProps {
    document: string;
    source?: string;
    password?: string;
    initialPageNumber?: number;
    page?: number;
    pageNumber?: number;
    customHeaders?: Record<string, string>;
    documentExtension?: string;
    leadingNavButtonIcon?: string;
    enableAntialiasing?: boolean;
    showLeadingNavButton?: boolean;
    onLeadingNavButtonPressed?: () => void;
    zoom?: number;
    scale?: number;
    longPressMenuEnabled?: boolean;
    topToolbarEnabled?: boolean;
    bottomToolbarEnabled?: boolean;
    hideToolbarsOnTap?: boolean;
    documentSliderEnabled?: boolean;
    downloadDialogEnabled?: boolean;
    pageIndicatorEnabled?: boolean;
    keyboardShortcutsEnabled?: boolean;
    readOnly?: boolean;
    thumbnailViewEditingEnabled?: boolean;
    fitPolicy?: number;
    padStatusBar?: boolean;
  }

  export class DocumentView extends Component<DocumentViewProps> {}

  export const RNPdftron: {
    enableJavaScript(enabled: boolean): void;
  };
}
