const  decodeJWT = (token)  => {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid JWT token format');
    }

    const decoded = parts.slice(0, 2).map(part => {
        const buffer = Buffer.from(part, 'base64url');
        return JSON.parse(buffer.toString());
    });

    return {
        header: decoded[0],
        payload: decoded[1]
    };
}

export default decodeJWT