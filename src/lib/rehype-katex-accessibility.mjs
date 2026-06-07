function visit(node, callback) {
  callback(node);

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      visit(child, callback);
    }
  }
}

function classList(properties) {
  const className = properties.className ?? properties.class;

  if (Array.isArray(className)) {
    return className;
  }

  if (typeof className === 'string') {
    return className.split(/\s+/u).filter(Boolean);
  }

  return [];
}

export default function rehypeKatexAccessibility() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'span') {
        return;
      }

      node.properties ??= {};

      if (!classList(node.properties).includes('katex-display')) {
        return;
      }

      node.properties.tabindex = '0';
      node.properties.role = 'group';
      node.properties['aria-label'] = 'Scrollable mathematical expression';
    });
  };
}
