function FindProxyForURL(url, host) {
    // Bypass the proxy for *.zhihu.com
        if (dnsDomainIs(host, ".zhihu.com")) {
        return "PROXY http://www.thisisjustafakeurldonotvisit.com";
    }

    // fake proxy, will fail
    return "DIRECT";
}