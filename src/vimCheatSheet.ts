import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider(
    "vimCheatSheet",
    new TreeDataProvider()
  );
}

class TreeDataProvider implements vscode.TreeDataProvider<TreeItem> {
  onDidChangeTreeData?: vscode.Event<TreeItem | null | undefined> | undefined;

  data: TreeItem[];

  constructor() {
    this.data = [
      new TreeItem("Baby Steps", "", [
        new TreeItem("h", "Move cursor to left", []),
        new TreeItem("j", "Move down", []),
        new TreeItem("k", "Move up", []),
        new TreeItem("l", "Move right", []),
        new TreeItem("i", "Go to inser mode", []),
        new TreeItem("<ESC>, <CTRL-C>, <CTRL-[>", "Go to normal Mode", []),
      ]),
      new TreeItem("Move fast word by word", "", [
        new TreeItem("w", "Beginning of next word", []),
        new TreeItem("b", "Beginning of previous word", []),
        new TreeItem("e", "End of the next word", []),
        new TreeItem("ge", "End of the previous word", []),
        new TreeItem("W", "Beginning of next Word", []),
        new TreeItem("B", "Beginning of previous Word", []),
        new TreeItem("E", "End of the next Word", []),
        new TreeItem("gE", "End of the previous Word", []),
      ]),
      new TreeItem("Move fast word by word", "", [
        new TreeItem("0", "First character of the line", []),
        new TreeItem("^", "First non-blank character of the line", []),
        new TreeItem("$", "End of the line", []),
        new TreeItem("g_", "Non-blank character at the end of the line", []),
      ]),
      new TreeItem("Move faster vertically", "", [
        new TreeItem("}", "Entire paragraphs downwards", []),
        new TreeItem("{", "Equal but upwards", []),
        new TreeItem("CTRL-D", "Half down a page", []),
        new TreeItem("CTRL-D", "Half up a page", []),
      ]),
      new TreeItem("High precision vertical motions with search", "", [
        new TreeItem("/{pattern}", "Search for pattern", []),
        new TreeItem("?{pattern}", "Equal but backwards", []),
        new TreeItem("/", "Repeat last search forward", []),
        new TreeItem("?", "Repeat last search backwards", []),
        new TreeItem("n", "Go to next match", []),
        new TreeItem("N", "Go to previous match", []),
      ]),
      new TreeItem("Move faster with counts", "", [
        new TreeItem("{count}{motion}", "Repeat {motion} {count} times", []),
        new TreeItem("2w", "Jump to second word", []),
        new TreeItem('4f"', 'Jump to first occurrence of the " character', []),
        new TreeItem("3/cucumber", "Jump to third match of cucumber", []),
      ]),
      new TreeItem("More nifty core motions", "", [
        new TreeItem("gg", "Go to top of the file", []),
        new TreeItem("{line}gg", "Go to {line}", []),
        new TreeItem("G", "Go to the end of the file", []),
        new TreeItem("%", "Jump to matching ({[]})", []),
      ]),
      new TreeItem("Edit like magic", "", [
        new TreeItem("d", "delete", []),
        new TreeItem("c", "change", []),
        new TreeItem("y", "yank (copy)", []),
        new TreeItem("p", "paste", []),
        new TreeItem("g~", "switch case", []),
        new TreeItem(">", "shift right", []),
        new TreeItem("<", "shift left", []),
        new TreeItem("=", "format", []),
      ]),
      new TreeItem("Linewise operators", "", [
        new TreeItem("dd", "delete a line", []),
        new TreeItem("cc", "change a line", []),
        new TreeItem("yy", "yank (copy) a line", []),
        new TreeItem("g~~", "switch case of a line", []),
        new TreeItem(">>", "shift line right", []),
        new TreeItem("<<", "shift line left", []),
        new TreeItem("==", "format line", []),
      ]),
      new TreeItem("Capital Case Operators", "", [
        new TreeItem("D", "delete from cursor to the end of the line", []),
        new TreeItem("C", "change from cursor to the end of the line", []),
        new TreeItem("Y", "yank (copy) a line, like yy", []),
        new TreeItem("P", "put (paste) before the cursor", []),
      ]),
      new TreeItem("Text objects", "", [
        new TreeItem(
          "{operator}a{text-object}",
          "Apply operator to all text-object including trailling whitespace",
          []
        ),
        new TreeItem(
          "{operator}i{text-object}",
          "Apply operator inside text-object",
          []
        ),
        new TreeItem("diw", "Delete inner word", []),
        new TreeItem("daw", "delete a word", []),
        new TreeItem("dis", "delete inner sentence", []),
        new TreeItem("das", "delete a sentence", []),
        new TreeItem("dip", "delete inner paragraph", []),
        new TreeItem("dap", "delete a paragraph", []),
        new TreeItem("di(", "delete inside parentheses", []),
        new TreeItem("di{", "delete inside braces", []),
        new TreeItem("da{", "delete inside braces (including braces)", []),
        new TreeItem("dit", "delete inside tag", []),
      ]),
      new TreeItem("Character editing commands", "", [
        new TreeItem("x", "delete a character", []),
        new TreeItem("X", "delete a character before the cursor", []),
        new TreeItem("s", "change a character", []),
        new TreeItem("~", "switch a case of a character", []),
      ]),
      new TreeItem("Inserting text", "", [
        new TreeItem("i", "go to insert mode before the cursor", []),
        new TreeItem("a", "go into insert mode after the cursor", []),
        new TreeItem(
          "I",
          "go into insert mode at the beginning of the line",
          []
        ),
        new TreeItem("A", "go into insert mode at the end of the line", []),
        new TreeItem(
          "o",
          "insert new line below current line and go into insert mode",
          []
        ),
        new TreeItem("gi", "go to the last place you left insert mode", []),
      ]),
      new TreeItem("Visual Mode", "", [
        new TreeItem("v", "go into character-wise visual mode", []),
        new TreeItem("V", "go into line-wise visual mode", []),
        new TreeItem("CTRL-V", "go into block-wise visual mode", []),
        new TreeItem("A", "go into insert mode at the end of the line", []),
        new TreeItem(
          "o",
          "insert new line below current line and go into insert mode",
          []
        ),
        new TreeItem(
          "O",
          "insert new line bellow current line and go into insert mode",
          []
        ),
        new TreeItem("gi", "go to the last place you left insert mode", []),
      ]),
      new TreeItem("Copying and pasting", "", [
        new TreeItem("y{motion}", "copy text covered by motion", []),
        new TreeItem("p", "put (paste) after cursor", []),
        new TreeItem("P", "paste before cursor", []),
        new TreeItem("ddp", "swap lines", []),
      ]),
    ];
  }

  getTreeItem(element: TreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }

  getChildren(
    element?: TreeItem | undefined
  ): vscode.ProviderResult<TreeItem[]> {
    if (element === undefined) {
      return this.data;
    }
    return element.children;
  }
}

class TreeItem extends vscode.TreeItem {
  children: TreeItem[] | undefined;
  description: string | "";

  constructor(label: string, description: string, children?: TreeItem[]) {
    super(
      label,
      children === undefined || children.length === 0
        ? vscode.TreeItemCollapsibleState.None
        : vscode.TreeItemCollapsibleState.Collapsed
    );
    this.children = children;
    this.description = description;
  }
}
