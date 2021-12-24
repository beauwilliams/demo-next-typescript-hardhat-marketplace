export async function signMessage(ethers: any, provider: any, signer: any, address: string, rawMessage: string) {
    let signedMessage: string;
    if (provider.wc) {
        signedMessage = await provider.send(
            'personal_sign',
            [ethers.utils.hexlify(ethers.utils.toUtf8Bytes(rawMessage)), address.toLowerCase()]
        );
    }
    else {
        signedMessage = await signer.signMessage(rawMessage)
    }
    return signedMessage;
}
