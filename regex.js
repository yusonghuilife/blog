// 匹配 16 进制颜色值
const regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g

// 匹配时间24小时制
const regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;

// yyyy-mm-dd 格式
const regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// <div id="container" class="main"></div> 取出id
const regex = /^id="([^"]*)"&/
