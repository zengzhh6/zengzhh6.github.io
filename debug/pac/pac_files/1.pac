function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
    // fake proxy, will fail
        if (dnsDomainIs(host, ".apple.com")) {
        return "PROXY 127.0.0.2:1111";
    }

    return "DIRECT";
}
