(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{185:function(t,e,s){"use strict";s.r(e);var i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("table",[t._m(10),s("tbody",[t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("tr",[s("td",[t._v("validity")]),t._m(17),t._m(18),s("td",[t._v("Whether the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Constrained API"),s("OutboundLink")],1),t._v(" should be used to apply error messages.")])]),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39)])]),t._m(40),t._m(41)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field","aria-hidden":"true"}},[this._v("#")]),this._v(" Field")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("VeeValidate maps HTML elements and Vue components that are under validation to instances of "),e("code",[this._v("fields")]),this._v(", while this class not exposed to be used publicly you can find Its API very useful if you are planning to do some lower-level actions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("Any undocumented properties/methods are not intended for public use.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-the-field-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-field-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting the field instance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Getting a field instance is straightforward, you can use the "),e("code",[this._v("Validator.fields.find")]),this._v(" method to get the field instance.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// find the field which has a matching name of 'email'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'email'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// find the field which has a name of email and is in the 'newsletter' scope.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'newsletter'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or use the id to find the field if it is known to you.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'fieldId'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("Careful when using the field API, as it may disrupt the validator operations and may produce unintended results.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" Constructor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),e("th",[this._v("Type")]),e("th",[this._v("Default")]),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("id")]),e("td",[e("code",[this._v("string")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The id of the field (automatically generated).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("el")]),e("td",[e("code",[this._v("HTMLElement")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The element that is the HTML input or the root element of the component being validated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("updated")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("false")])]),e("td",[this._v("Indicates if the field should be re-scanned to update its properties like validation rules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("watchers")]),e("td",[e("code",[this._v("Watcher[]")])]),e("td",[e("code",[this._v("[]")])]),e("td",[this._v("Array of wrappers for the event listeners being used by the field instance.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("events")]),e("td",[e("code",[this._v("string[]")])]),e("td",[e("code",[this._v("[]")])]),e("td",[this._v("List of events that trigger validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("rules")]),e("td",[e("code",[this._v("{ [string]: Object }")])]),e("td",[e("code",[this._v("{}")])]),e("td",[this._v("A map of rules/params being used to validate the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("false")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("aria")]),s("td",[s("code",[t._v("boolean")])]),s("td",[s("code",[t._v("true")])]),s("td",[t._v("If "),s("code",[t._v("aria-required")]),t._v(" and "),s("code",[t._v("aria-invalid")]),t._v(" attributes should be set/updated after validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("vm")]),e("td",[e("code",[this._v("Vue instance")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The context component that is using the directive in its template.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("component")]),e("td",[e("code",[this._v("Vue instance")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The component being validated if it is one.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("ctorConfig")]),e("td",[e("code",[this._v("VeeValidateConfig")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("A scoped config for the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("flags")]),e("td",[e("code",[this._v("{ [string]: boolean }")])]),e("td",[e("code",[this._v("{}")])]),e("td",[this._v("A string/boolean map of the field current flags state.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("alias")]),e("td",[e("code",[this._v("string")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("A readonly prop for alternative name to be used by the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("getter")]),e("td",[e("code",[this._v("() => any")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("A getter function that returns the current field value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("name")]),e("td",[e("code",[this._v("string")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The field name.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("scope")]),e("td",[e("code",[this._v("string")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The field scope.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("targetOf")]),e("td",[e("code",[this._v("string")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("The id of the field targeting this field for validation (confirmed/before/after).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("initial")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("false")])]),e("td",[this._v("If this field should be validated upon creation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("classes")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("false")])]),e("td",[this._v("If flags based classes should be applied on the HTML input.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("classNames")]),e("td",[e("code",[this._v("Object")])]),e("td",[e("code",[this._v("{}")])]),e("td",[this._v("A map containing flag name / class names to be applied based on flags.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("delay")]),e("td",[e("code",[this._v("number")])]),e("td",[e("code",[this._v("0")])]),e("td",[this._v("The amount of delay for this field events triggers.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("listen")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("true")])]),e("td",[this._v("If this field should have listeners.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("model")]),e("td",[e("code",[this._v("{ expression: string, lazy: boolean }")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("Contains info about the model being bound to this field using "),e("code",[this._v("v-model")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("value")]),e("td",[e("code",[this._v("any")])]),e("td",[e("code",[this._v("() => undefined")])]),e("td",[this._v("A readonly version of the "),e("code",[this._v("getter")]),this._v(" prop.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("isRequired")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("true | false")])]),e("td",[this._v("Readonly indicator if the field is required. (has required rule)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("isDisabled")]),e("td",[e("code",[this._v("boolean")])]),e("td",[e("code",[this._v("true | false")])]),e("td",[this._v("Readonly indicator if the field is disabled (skips validation).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("validator")]),e("td",[e("code",[this._v("Validator")])]),e("td",[e("code",[this._v("null")])]),e("td",[this._v("Readonly reference to the validator instance that created this field.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("rejectsFalse")]),s("td",[s("code",[t._v("boolean")])]),s("td",[s("code",[t._v("false")])]),s("td",[t._v("If "),s("code",[t._v("required")]),t._v(" rule should fail when "),s("code",[t._v("false")]),t._v(" is provided as a value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Signature")]),s("th",[t._v("Return Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("matches(options: FieldMatchOptions)")]),s("td",[s("code",[t._v("boolean")])]),s("td",[t._v("Checks if the field matches the specified matching object criteria.")])]),s("tr",[s("td",[t._v("update(options: FieldOptions)")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Updates the field properties and re-adds the listeners and syncs the classes applied.")])]),s("tr",[s("td",[t._v("reset()")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Resets the field flags to their initial state.")])]),s("tr",[s("td",[t._v("setFlags(flags: { [string]: boolean })")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Updates the field flags and also updates the specified field counterparts eg. valid/invalid.")])]),s("tr",[s("td",[t._v("unwatch(tag?: RegExp)")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Removes the listeners that has a matching tag or removes all if none is provided.")])]),s("tr",[s("td",[t._v("updateClasses()")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Syncs the classes being applied on the element with the flags if enabled.")])]),s("tr",[s("td",[t._v("updateAriaAttrs()")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Syncs the aria attributes applied on the element with the flags if enabled.")])]),s("tr",[s("td",[t._v("updateCustomValidity()")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Syncs the constrained API validation message with the first error message for this field.")])]),s("tr",[s("td",[t._v("destroy()")]),s("td",[s("code",[t._v("void")])]),s("td",[t._v("Removes all listeners and dependencies of the field.")])])])])}],!1,null,null,null);e.default=n.exports}}]);