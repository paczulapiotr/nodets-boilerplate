interface TsModule {
  _resolveFilename(
    request: any,
    parentModule: any,
    isMain: boolean,
    options: any
  ): void;
}

/**
 * @param key alias:path key:value
 */
interface TsAlias {
  [key: string]: string;
}
