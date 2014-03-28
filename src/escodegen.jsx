/**
 * escodegen wrapper for JSX
 *
 * @author shibukawa
 * @see https://github.com/shibukawa/escodegen.jsx
 */

import "esprima.jsx";

native class escodegen {
    static function generate(token : EsprimaBlockToken) : string;
} = """require('escodegen')""";
