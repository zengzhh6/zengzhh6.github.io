function FindProxyForURL(url, host) {
    // Bypass the proxy for *.zhihu.com
        if (dnsDomainIs(host, ".zhihu.com")) {
        return "PROXY www.thisisjustafakeurldonotvisit.com:1000";
    }

    // fake proxy, will fail
    return "DIRECT";
}
