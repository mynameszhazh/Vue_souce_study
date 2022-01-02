function Node (key = 0, left = null, right = null) {
  this.key = key
  this.left = left
  this.right = right
}


/**
 * 得到一个新的树节点
 * @param {any} key 
 * @returns Node
 */
function getNewNode (key) {
  return new Node(key)
}


/**
 * 不起作用的一个函数
 * @param {Node} root 
 * @returns void
 */
function clear(root) {
  if(root == null) return
  clear(root.left)
  clear(root.right)
  // delete root
  return
}
