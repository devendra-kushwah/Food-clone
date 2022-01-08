class BaseHelper {
  /**
   *  @param name
   *  @desc  extract name characters
   *  @example My Name
   *  @return MN
   */

  shortName(name) {
    return name.split("").slice(0, 2);
  }
}

// const helper = new BaseHelper();

export default new BaseHelper();
