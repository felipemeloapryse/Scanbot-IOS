/**
 * `@pdftron/react-native-pdf` (v3.0.4-27) ships no TypeScript declarations at
 * all (its `lib/` output has zero `.d.ts` files), so by default every import
 * from it resolves to `any`.
 *
 * This file declares the subset of the native `DocumentView` props and the
 * `RNPdftron` native module that this app actually uses, based on the real
 * `propTypes` found in `node_modules/@pdftron/react-native-pdf/lib/src/DocumentView/DocumentView.js`.
 *
 * IMPORTANT: the original JSX used `theme`, `showAnnotationToolbar` and
 * `showBottomToolbar` — none of those props exist on the native component.
 * The real prop names are `topToolbarEnabled` / `bottomToolbarEnabled`, and
 * there is no direct "theme" prop. `WebviewerModal.tsx` was updated to use
 * the real prop names; keeping the old (fake) prop names here would have
 * silently swallowed typos forever, which is the opposite of what typing
 * this module is for.
 *
 * Extend this interface if you start using more DocumentView features -
 * see the package's `API.md` for the full (untyped) prop list.
 */
declare module "@pdftron/react-native-pdf" {
  import type { Component } from "react";
  import type { ViewProps } from "react-native";

  export interface DocumentViewProps extends ViewProps {
    /** Path or URI of the document to display. Required. */
    document: string;
    source?: string;
    password?: string;
    initialPageNumber?: number;
    page?: number;
    pageNumber?: number;
    customHeaders?: Record<string, string>;
    documentExtension?: string;
    /** Icon shown for the leading (top-left) nav button. */
    leadingNavButtonIcon?: string;
    enableAntialiasing?: boolean;
    /** Shows the leading (top-left) nav/close button. */
    showLeadingNavButton?: boolean;
    /** Called when the leading nav button is pressed. */
    onLeadingNavButtonPressed?: () => void;
    zoom?: number;
    scale?: number;
    longPressMenuEnabled?: boolean;
    /** Shows/hides the top toolbar. */
    topToolbarEnabled?: boolean;
    /** Shows/hides the bottom toolbar. */
    bottomToolbarEnabled?: boolean;
    hideToolbarsOnTap?: boolean;
    documentSliderEnabled?: boolean;
    downloadDialogEnabled?: boolean;
    pageIndicatorEnabled?: boolean;
    keyboardShortcutsEnabled?: boolean;
    /** Disables editing/annotation tools when true. */
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
