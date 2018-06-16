(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{184:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"errorbag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errorbag","aria-hidden":"true"}},[t._v("#")]),t._v(" ErrorBag")]),s("p",[t._v("The ErrorBag class is a wrapper around an array - a collection object -, it is standalone and has no dependencies, you can use it in your code for any purpose:")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ErrorBag "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bag "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ErrorBag")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// For example, you may want to add an error related to authentication:")]),t._v("\nbag"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Wrong Credentials'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'auth'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Display it like this:")]),t._v("\nbag"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'email:auth'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The single error object looks like this:")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" error "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  field"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Field name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  msg"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Error message'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rule"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Rule Name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  scope"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Scope Name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  regenerate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'some string'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'uniqueId'")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),s("th",{staticStyle:{"text-align":"center"}},[t._v("Return")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("add(error: ErrorObject)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Adds an error to the error bag, the error object must conform the object signature mentioned above.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("all(scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Array")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Gets all error messages in an array, specifying a scope will retrieve the messages within that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("any(scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("boolean")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Checks if any errors exist, specifying a scope will limit the check to within that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("clear(scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Clears (removes) all errors, specifying a scope will remove errors only associated with that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("collect(field?: string, scope?:string, mapped?: boolean)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Array|Object")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Collects errors associated with a specific field. Not passing the field name will group all errors by field name instead. Specifying a scope will limit the collecting behavior to a specific scope. You can optionally specify if the errors objects should be mapped to error messages or not, providing false will return objects containing the full information about the error.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("count()")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("number")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Returns the number of errors that are currently in the collection.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("first(field: string, scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string|null")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Returns the first error message associated with a specific field or specified by the selector, providing a scope will look for messages within that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("firstById(id: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string|null")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Returns the first error message for a field with the given id.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("firstByRule(field: string, rule: string, scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string|null")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Returns the first error message associated with a specific field and rule, providing a scope will look for messages within that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("has(field: string, scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("boolean")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Checks if there is an error message associated with a specific field or specified by the selector, providing a scope will check for messages within that scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("remove(field: string, scope?: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Removes all errors associated with a specific field, specifying a scope will remove messages only for that field and scope.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("removeById(id: string)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Removes a field which matches the provided id.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("update(id: string, diff: ErrorObject)")]),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void")])]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Updates a specific field's erorr messages data, used internally to keep field errors scope up to date.")])])])])])}],!1,null,null,null);e.default=n.exports}}]);