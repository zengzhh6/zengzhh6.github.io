function FindProxyForURL(url, host) {
    // Bypass the proxy for *.zhihu.com
        if (dnsDomainIs(host, ".zhihu.com")) {
            // fake proxy, will fail
            return "PROXY localhost:1080";
    }
    return "DIRECT";
}