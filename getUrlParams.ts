function getUrlParams (urlPath: string, urlPattern: string) {
    let result: Record<string, string> = {};
    const urlPathArray: string[] = urlPath.split('/');
    const urlPatternArray: { type: string; value: string }[] = urlPattern.split('/').map(value => {
        return { type: value.includes(':') ? 'param' : 'static', value: value }
    })
    const minURLPropsLength = urlPathArray.length > urlPattern.length ? urlPattern.length : urlPathArray.length;
    for (let i = 0; i < minURLPropsLength; i++) {
        if (urlPatternArray[i].type === 'param') {
          if (urlPatternArray[i-1].value.includes(urlPathArray[i-1]))
            {
                const paramKey = urlPatternArray[i].value.replace(":", "");
                result[paramKey] = urlPathArray[i];
            }
        }
    }
    return result;
}