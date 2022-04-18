function objectLiteral <T>  (before: Record<string, T>, after: Record<string, T>)  {
    const result: Record<string, { old: T; new: T; }> = {};
    const keyList = Object.keys(before).length > Object.keys(after).length ? Object.keys(before) : Object.keys(after);
    keyList.map(value => {
      if (before[value] !== after[value]) {
        result[value] = { old: before[value], new: after[value] }
      }
    })
    return result;
}