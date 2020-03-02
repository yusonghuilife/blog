// DOM节点
// <div>
//  <span>
//    <a></a>
//  </span>
//  <span>
//    <a></a>
//    <a></a>
//  </span>
// </div>

// JSON
// {
//   tag: 'DIV',
//     children:
//   [{
//     tag: 'SPAN',
//     children: [
//       {tag: 'A', children: []}
//     ]
//   },
//     {
//       tag: 'SPAN',
//       children: [
//         {tag: 'A', children: []},
//         {tag: 'A', children: []}
//       ]
//     }]
// }

function DOM2JSON(node) {
  var obj = {};
  obj['tag'] = node.nodeName;
  obj['children'] = [];
  var child = node.children;
  for (var i = 0; i < child.length; i++) {
    obj['children'].push(DOM2JSON(child[i]))
  }
  return obj;
}
