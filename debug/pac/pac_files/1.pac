function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
        if (dnsDomainIs(host, ".apple.com")) {
        return "DIRECT";
    }

    // fake proxy, will fail
    return "PROXY http://127.0.0.1:18080";
    }