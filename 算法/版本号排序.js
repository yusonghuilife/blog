/**
 * 逐位比较
 * @param {string[]} versions 版本号数组
 * @returns 排序后的数组
 */
const sortVersion = (versions) => versions.sort((v1, v2) => {
  const v1Lists = v1.split('.');
  const v2Lists = v2.split('.');
  let i = 0;
  while (true) {
    const v1List = v1Lists[i];
    const v2List = v2Lists[i++];
    if (v1List === v2List) continue;
    if (!v1List || !v2List) return v1Lists.length - v2Lists.length;
    return v1List - v2List;
  }
});
