const parseEnv = () => {
    let envVar = []
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) envVar.push(`RSS_${key}=${value}`);
    }
    console.log(envVar.join(', '))
};

parseEnv();