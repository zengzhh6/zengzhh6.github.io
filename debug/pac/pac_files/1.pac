function FindProxyForUrl(url, host) {
    if (shExpMatch(url, "*.apple.com*")) {
        return "PROXY 127.0.0.1:65000";
        // fake destination proxy -- will fail
    }
    return "DIRECT";
    // this leads folks out to the Internet for everything else
}