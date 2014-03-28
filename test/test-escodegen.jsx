import "test-case.jsx";
import "escodegen.jsx";
import "esprima.jsx";
import "console.jsx";

class _Test extends TestCase
{
    function test_parse_and_generate() : void
    {
        var src = "console.log('hello world');";
        var ast = esprima.parse(src);
        var result = escodegen.generate(ast);
        this.expect(result).toBe(src);
        console.log("src:", src);
        console.log("result:", result);
    }
}
