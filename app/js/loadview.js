/*global __dirname, fs, path, remote */
var role = remote.getGlobal("sharedObj").userrole;

console.log("in loadview");
console.log(role);

var sidebar_views = ["Supplier", "Products"];
var sidebar_icons = ["pe-7s-users", "pe-7s-gift"];
console.log(sidebar_views);
console.log(sidebar_icons);

let rawdata = fs.readFileSync(path.resolve(__dirname, "RBAC.json"));
let access = JSON.parse(rawdata);
let views=access[role].sidebar;
console.log(views);
