"use strict";

import * as vscode from "vscode";
import { activate as NewViewActivate } from "./vimCheatSheet";

export function activate(context: vscode.ExtensionContext) {
  // Samples of `window.registerTreeDataProvider`
  NewViewActivate(context);
}
