
function FindPath(root, expectNumber){
  const temp = []
  const result = []
  find(root, 0);
  return result;

  function find(root, sum){
    if(!root){
      return;
    }
    temp.push(root.value);
    sum += root.value;
    if(!root.left && !root.right && sum === expectNumber){
      result.push(temp.concat());
    }
    if(root.left){
      find(root.left, sum);
    }
    if(root.right){
      find(root.right, sum);
    }
    temp.pop();  // 注意pop的时机，一个find对应一个pop，完美

    return ;
  }

}
