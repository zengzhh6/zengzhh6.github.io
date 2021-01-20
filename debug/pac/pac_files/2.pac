function FindProxyForURL(url, host) {
    // Bypass the proxy for *.zhihu.com
        if (dnsDomainIs(host, ".zhihu.com")) {
        return "DIRECT";
    }

    // fake proxy, will fail
    return "PROXY http://127.0.0.1:18080";
    }