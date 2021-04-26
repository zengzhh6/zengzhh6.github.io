function FindProxyForURL(url, host) {
    // Bypass the proxy for *.apple.com
        if (dnsDomainIs(host, ".apple.com")) {
        return "PROXY http://www.thisisjustafakeurldonotvisit.com";
    }

    // fake proxy, will fail
    return "DIRECT";
}