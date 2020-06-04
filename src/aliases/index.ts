import BuiltinModule from "module";
import NodePath from "path";

const rootPath = NodePath.dirname(require.main?.filename!);
let modules: TsAlias;

// Guard against poorly mocked module constructors
const Module: TsModule = (module.constructor.length > 1
  ? module.constructor
  : BuiltinModule) as any;

function isPathMatchesAlias(path: string, alias: string) {
  // Matching /^alias(\/|$)/
  if (path.indexOf(alias) === 0) {
    if (path.length === alias.length) return true;
    if (path[alias.length] === "/") return true;
  }

  return false;
}

export default function registerAliases(modules: TsAlias | any) {
  if (modules as TsAlias) {
    modules = modules;
  } else {
    throw "Wrong alias format";
  }

  const fileNameResolver = Module._resolveFilename;

  Module._resolveFilename = function (request, parentModule, isMain, options) {
    const moduleAliases = Object.keys(modules);
    for (var i = moduleAliases.length; i-- > 0; ) {
      const alias = moduleAliases[i];
      if (isPathMatchesAlias(request, alias)) {
        const pathSufix = request.replace(alias, "");
        const aliasPath = modules[alias];
        request = NodePath.join(rootPath, aliasPath, pathSufix);
        break;
      }
    }
    return fileNameResolver(request, parentModule, isMain, options);
  };
}

registerAliases(require("./alias.json"));
