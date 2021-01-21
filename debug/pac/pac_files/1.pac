function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
        if (dnsDomainIs(host, ".apple.com")) {
        return "PROXY http://127.0.0.1:18080";
    }

    // fake proxy, will fail
    return "DIRECT";
}