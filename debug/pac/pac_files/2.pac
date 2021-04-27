function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
        if (dnsDomainIs(host, ".apple.com")) {
        return "PROXY 127.0.0.1:13010";
        return "PROXY www.asdasdasdasdasd.com:123123";
    }

    // fake proxy, will fail
    return "DIRECT";
}