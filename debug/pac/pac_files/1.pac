function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
        if (dnsDomainIs(host, ".apple.com")) {
            // fake proxy, will fail
            return "PROXY localhost:1080";
    }
    return "DIRECT";
}